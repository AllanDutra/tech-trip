import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.625em;

  height: 2.5em;
`;

export const StyledCloseButton = styled.button`
  position: relative;
  width: 2.5em;
  height: 2.5em;

  // icon
  svg {
    width: 1.625em;
    height: 1.625em;
  }

  border: none;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 0.625em; */
  border-radius: 0.8125em;

  background-color: white;
  cursor: pointer;

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
    box-shadow: inset 0 0 0 1px #f3f3f3;
    border-radius: 0.8125em;
  }

  &:hover::before,
  &:focus::before {
    background-color: rgba(
      0,
      0,
      0,
      0.1
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

export const StyledLevelIndicator = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  /* padding: 0.625em 1.25em; */
  padding: 0.5em 0.8125em;

  border-radius: 0.8125em;
  background-color: white;
  gap: 2em;
  box-shadow: inset 0 0 0 1px #f3f3f3;

  .bar {
    flex: 1;
    background-color: #ebf1f1;
    height: 0.5em;
    border-radius: 0.5625em;
    display: flex;
    align-items: flex-start;

    div {
      height: 100%;
      background-color: #2bcb9a;
      border-radius: 0.5625em;
    }
  }

  span {
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-size: 1.3125em;
    text-align: right;
    color: #424243;
  }
`;
