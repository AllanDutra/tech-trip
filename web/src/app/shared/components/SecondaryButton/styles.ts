import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.0625em;
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 0.5em;

  line-height: normal;
  font-family: "Montserrat Alternates", sans-serif;
  color: #545456;
  font-weight: 600;
  font-size: 1.125em;
  cursor: pointer;
  overflow: hidden;

  &:hover,
  &:focus {
    transition: background-color 0.2s;
    background-color: rgba(
      0,
      0,
      0,
      0.15
    ); /* Aplica uma camada de escurecimento */
  }

  &:active {
    transform: scale(0.98); /* Reduz o tamanho do botão */
  }
`;
