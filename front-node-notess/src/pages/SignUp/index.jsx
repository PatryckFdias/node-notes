
import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Background } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  async function handleSignUp() {
    if (isSubmitting) return;

    const validatedName = name.trim();
    const validatedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validatedName || !validatedEmail || !password) {
      return alert("Preencha todos os campos");
    }

    if (
      validatedName.length < 2 ||
      validatedName.length > 80 ||
      !/\p{L}/u.test(validatedName)
    ) {
      return alert("Informe um nome válido");
    }

    if (
      validatedEmail.length > 254 ||
      !emailPattern.test(validatedEmail) ||
      validatedEmail.includes("..")
    ) {
      return alert("Informe um e-mail válido");
    }

    if (Array.from(password).length < 15) {
      return alert("A senha deve ter pelo menos 15 caracteres");
    }

    if (new TextEncoder().encode(password).length > 72) {
      return alert("A senha ultrapassa o limite permitido");
    }

    setIsSubmitting(true);

    try {
      await api.post("/users", {
        name: validatedName,
        email: validatedEmail,
        password,
      });

      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Não foi possível cadastrar o usuário"
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Container>
      <Background />

      <Form>
        <h1>Notes</h1>
        <p>
          Aplicação para salvar e gerenciar seus links úteis
        </p>

        <h2>Crie sua conta</h2>

        <Input
          type="text"
          placeholder="Nome"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="Email"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Senha (mínimo 15 caracteres)"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          title={isSubmitting ? "Cadastrando..." : "Cadastrar"}
          onClick={handleSignUp}
        />

        <Link to="/">Voltar para login</Link>
      </Form>
    </Container>
  );
}
