
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) =>
    theme.COLORS.BACKGROUND900};

  color: ${({ theme }) => theme.COLORS.GRAY300};

  margin-bottom: 8px;
  border-radius: 10px;

  > svg {
    margin-left: 16px;
    flex-shrink: 0;
  }

  > input {
    flex: 1;
    min-width: 0;
    height: 56px;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY300};
    }
  }

  > button {
    height: 56px;
    padding: 0 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.GRAY300};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) =>
        theme.COLORS.ORANGE};
      outline-offset: -4px;
      border-radius: 10px;
    }
  }
`;
