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
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.3);

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
      0px -2px 0px rgba(0, 0, 0, 0.3) inset;
  }

  button:hover {
    transform: scale(1.05);
    opacity: 70%;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;

export default Form;
