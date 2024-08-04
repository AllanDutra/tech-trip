import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;

  line-height: normal;
  font-family: "Lilita One", sans-serif;
  letter-spacing: 0.07875em;
  color: #656667;
  font-size: 1.125em;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;

  &.active {
    color: white;
    background-color: #2bcb9a;
  }

  &.active::before {
    box-shadow: inset 0 -2.5px 0 0 rgba(0, 0, 0, 0.1);
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
