import styled, { css } from "styled-components";

const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontsize.default};
  padding: 8px 16px;
  transition: all 0.2s ease-in-out;
  box-shadow:
    0px 2px 0px rgba(0, 0, 0, 0.3),
    0px -2px 0px rgba(0, 0, 0, 0.3) inset;

  &:hover {
    transform: scale(1.1);
  }

  ${(props) =>
    props.$active &&
    css`
      outline: 3px solid white;
      border: 3px solid white;
    `}
`;

export default Button;
