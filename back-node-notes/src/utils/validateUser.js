
const AppError = require("./AppError");

function validateName(value) {
  if (typeof value !== "string") {
    throw new AppError("Informe um nome válido");
  }

  const name = value.trim();

  if (
    name.length < 2 ||
    name.length > 80 ||
    !/\p{L}/u.test(name)
  ) {
    throw new AppError(
      "O nome deve ter entre 2 e 80 caracteres e conter uma letra"
    );
  }

  return name;
}

function validateEmail(value) {
  if (typeof value !== "string") {
    throw new AppError("Informe um e-mail válido");
  }

  const email = value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    email.length > 254 ||
    !emailPattern.test(email) ||
    email.includes("..")
  ) {
    throw new AppError("Informe um e-mail válido");
  }

  return email;
}

function validatePassword(value) {
  if (typeof value !== "string") {
    throw new AppError("Informe uma senha válida");
  }

  if (Array.from(value).length < 15) {
    throw new AppError(
      "A senha deve conter pelo menos 15 caracteres"
    );
  }

  if (Buffer.byteLength(value, "utf8") > 72) {
    throw new AppError(
      "A senha ultrapassa o limite de 72 bytes"
    );
  }

  return value;
}

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};
