import styled from "styled-components";

export const StyledGeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625em;
`;

export const StyledOption = styled.button`
  position: relative;
  width: 100%;
  padding: 0.625em;
  border: none;
  outline: none;
  border-radius: 0.375em;

  line-height: 160%;
  font-family: "Montserrat Alternates", sans-serif;
  color: #424243;
  cursor: pointer;
  overflow: hidden;
  font-size: 1.15em;
  opacity: 0.8;

  & .question-id {
    font-weight: 700;
  }

  & .question-text {
    width: 100%;
    text-align: center;
    font-weight: 600;

    strong {
      font-weight: 800;
    }
  }

  &.small {
    & .question-text {
      font-size: 0.75em;
    }
  }

  &.medium {
    & .question-text {
      font-size: 0.875em;
    }
  }

  &.selected {
    background-color: #2bcb9a;
    color: white;
    opacity: 1;

    & .question-text {
      font-weight: 700;
    }
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

  &.selected::before {
    box-shadow: inset 0 -5px 0 0 rgba(0, 0, 0, 0.1);
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

  & div {
    position: relative;
    z-index: 1; /* Garante que o texto fique acima da camada de escurecimento */

    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.625em;
  }

  &:active {
    transform: scale(0.98); /* Reduz o tamanho do botão */
  }

  &:active::before {
    box-shadow: none; /* Adiciona uma sombra para efeito de profundidade */
  }
`;
