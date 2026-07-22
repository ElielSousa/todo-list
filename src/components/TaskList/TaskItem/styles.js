import styled from "styled-components";

const Item = styled.div`
  .item,
  .editingForm {
    display: flex;
    gap: 12px;
    width: 100%;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.colors.checked};
    border-radius: 50px;
    padding: 12px;
    box-shadow:
      0px 2px 0px rgba(0, 0, 0, 0.3),
      0px -2px 0px rgba(0, 0, 0, 0.3) inset;
  }

  .customCheckbox {
    width: 100%;
    margin-top: 2px;
  }

  .customCheckbox input {
    display: none;
  }

  .customCheckbox label {
    width: 100%;
    font-weight: 600;
    cursor: pointer;
    margin-top: 2px;
  }

  .customCheckbox label::before {
    vertical-align: middle;
    content: "";
    width: 16px;
    height: 16px;
    border: 2px solid ${({ theme }) => theme.colors.checked};
    border-radius: 50px;
    display: inline-block;
    margin-bottom: 3px;
    margin-right: 10px;
  }

  .customCheckbox input:checked + label::before {
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' width='13' height='13' viewBox='0 0 640 640'%3E%3Cpath d='M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
  }

  .checked {
    color: ${({ theme }) => theme.colors.checked};
    text-decoration: line-through;
  }

  .item div {
    display: flex;
    gap: 12px;
  }

  .editingForm form {
    width: 100%;
    display: flex;
    gap: 12px;
  }

  .editingForm input {
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    padding: 4px;
    font-size: ${({ theme }) => theme.fontsize.default};
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  .editingForm button:disabled {
    cursor: not-allowed;
    & svg {
      fill: ${({ theme }) => theme.colors.checked};
    }

    &:hover {
      background-color: transparent;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.primary};
    display: flex;
  }

  button {
    padding: 4px;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.colors.primary};
    & svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default Item;
