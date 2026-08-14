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
    0px -2px 0px rgba(0, 0, 0, 0.3) inset,
    0px 1px 0px rgba(130, 130, 130, 0.5) inset;

  &:hover {
    transform: scale(1.1);
  }

  ${(props) =>
    props.$active &&
    css`
      box-shadow:
        0px 1px 0px rgba(0, 0, 0, 0.3) inset,
        0px -1px 0px rgba(130, 130, 130, 0.5) inset;

      cursor: default;

      &:hover {
        transform: none;
      }
    `}
`;

export default Button;
