
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  isolation: isolate;

  min-height: 100vh;
  min-height: 100dvh;

  display: grid;
  place-items: center;

  padding: 24px 16px;

  background-color: #232129;
`;

export const Background = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background:
    radial-gradient(
      circle at 72% 28%,
      rgba(255, 144, 0, 0.22),
      transparent 35%
    ),
    radial-gradient(
      circle at 25% 78%,
      rgba(255, 144, 0, 0.10),
      transparent 40%
    ),
    linear-gradient(
      145deg,
      #232129 0%,
      #312e38 55%,
      #1b1921 100%
    );
`;

export const Form = styled.form`
  position: relative;
  z-index: 1;

  width: min(100%, 420px);
  min-height: 620px;
  padding: 52px 36px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  background: rgba(49, 46, 56, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;

  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY100};
    margin-top: 4px;
  }

  > h2 {
    font-size: 24px;
    margin: 44px 0 24px;
  }

  > a {
    margin-top: auto;
    padding-top: 32px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  @media (max-width: 480px) {
    padding: 40px 20px 30px;
    min-height: 580px;
  }
`;
