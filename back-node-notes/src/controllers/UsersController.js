
const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const knex = require("../database/knex");

const {
  validateName,
  validateEmail,
  validatePassword,
} = require("../utils/validateUser");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const validatedName = validateName(name);
    const validatedEmail = validateEmail(email);
    validatePassword(password);

    const checkUserExists = await knex("users")
      .whereRaw("LOWER(email) = LOWER(?)", [validatedEmail])
      .first();

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso");
    }

    const hashedPassword = await hash(password, 10);

    await knex("users").insert({
      name: validatedName,
      email: validatedEmail,
      password: hashedPassword,
    });

    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email, password, old_password } =
      request.body;

    const user_id = request.user.id;

    const user = await knex("users")
      .where({ id: user_id })
      .first();

    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    // Valida apenas quando o nome for alterado
    if (name !== undefined && name !== user.name) {
      user.name = validateName(name);
    }

    // Valida e verifica duplicidade do novo e-mail
    if (email !== undefined && email !== user.email) {
      const validatedEmail = validateEmail(email);

      const userWithUpdatedEmail = await knex("users")
        .whereRaw("LOWER(email) = LOWER(?)", [
          validatedEmail,
        ])
        .andWhereNot("id", user_id)
        .first();

      if (userWithUpdatedEmail) {
        throw new AppError("Este e-mail já está em uso");
      }

      user.email = validatedEmail;
    }

    // Só altera a senha quando uma nova for informada
    if (password !== undefined && password !== "") {
      validatePassword(password);

      if (!old_password) {
        throw new AppError(
          "Informe a senha atual para definir uma nova"
        );
      }

      const checkOldPassword = await compare(
        old_password,
        user.password
      );

      if (!checkOldPassword) {
        throw new AppError("A senha atual não confere");
      }

      user.password = await hash(password, 10);
    }

    await knex("users")
      .where({ id: user_id })
      .update({
        name: user.name,
        email: user.email,
        password: user.password,
        updated_at: knex.fn.now(),
      });

    return response.json();
  }
}

module.exports = UsersController;
