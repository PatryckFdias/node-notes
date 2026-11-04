
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { Container } from "./styles";

export function Input({ icon: Icon, type = "text", ...rest }) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  const inputType =
    isPassword && showPassword ? "text" : type;

  function handleTogglePassword() {
    setShowPassword((previous) => !previous);
  }

  return (
    <Container>
      {Icon && <Icon size={20} aria-hidden="true" />}

      <input {...rest} type={inputType} />

      {isPassword && (
        <button
          type="button"
          onClick={handleTogglePassword}
          aria-label={
            showPassword ? "Ocultar senha" : "Mostrar senha"
          }
        >
          {showPassword ? (
            <FiEyeOff size={20} />
          ) : (
            <FiEye size={20} />
          )}
        </button>
      )}
    </Container>
  );
}
