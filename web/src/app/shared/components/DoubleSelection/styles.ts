import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.25em;
`;

export const StyledSelection = styled.button`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6875em;
  border: none;
  outline: none;
  border-radius: 0.375em;
  cursor: pointer;
  overflow: hidden;

  line-height: 160%;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 600;
  font-size: 1em;
  color: #424243;
  text-align: center;
  background-color: #eff4f4;

  &.selected {
    color: white;

    &.male {
      background-color: #039ef5;
    }

    &.female {
      background-color: #f16992;
    }

    &.yes {
      background-color: #2bcb9a;
    }

    &.no {
      background-color: #f0594a;
    }
  }

  &.selected::before {
    box-shadow: inset 0 -5px 0 0 rgba(0, 0, 0, 0.1);
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
