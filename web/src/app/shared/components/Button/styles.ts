import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.0625em;
  border: none;
  outline: none;
  border-radius: 0.5em;

  line-height: normal;
  font-family: "Lilita One", sans-serif;
  letter-spacing: 0.07875em;
  color: white;
  font-size: 1.125em;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;

  &.green {
    background-color: #2bcb9a;
  }

  &.red {
    background-color: #f0594a;
  }

  &.yellow {
    background-color: #ffa425;
  }

  &.blue {
    background-color: #00c3ff;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: inherit; /* Usa a mesma cor de fundo do botão */
    z-index: 0; /* Fica atrás do conteúdo do botão */
    transition: background-color 0.2s; /* Transição suave */
    box-shadow: inset 0 -5px 0 0 rgba(0, 0, 0, 0.1);
  }

  &:hover::before,
  &:focus::before {
    background-color: rgba(
      0,
      0,
      0,
      0.15
    ); /* Aplica uma camada de escurecimento */
  }

  & span {
    position: relative;
    z-index: 1; /* Garante que o texto fique acima da camada de escurecimento */
  }

  &:active {
    transform: scale(0.98); /* Reduz o tamanho do botão */
  }

  &:active::before {
    box-shadow: none; /* Adiciona uma sombra para efeito de profundidade */
  }
`;
