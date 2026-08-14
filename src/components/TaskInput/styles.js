import styled from "styled-components";

const Form = styled.form`
  display: flex;
  gap: 16px;

  input {
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    padding: 8px;
    font-size: ${({ theme }) => theme.fontsize.default};
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  button {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50px;
    padding: 8px;
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow:
      0px 2px 0px rgba(0, 0, 0, 0.3),
      0px -2px 0px rgba(0, 0, 0, 0.3) inset,
      0px 1px 0px rgba(130, 130, 130, 0.5) inset;

    &:hover {
      transform: scale(1.1);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.colors.checked};
      transform: none;
      box-shadow:
        0px 2px 0px rgba(0, 0, 0, 0.3),
        0px -2px 0px rgba(0, 0, 0, 0.3) inset,
        0px 1px 0px rgba(170, 170, 170, 0.7) inset;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;

export default Form;
