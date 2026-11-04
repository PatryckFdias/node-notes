
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND800};
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY100};
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Background = styled.div`
  flex: 1;
  min-width: 0;

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
