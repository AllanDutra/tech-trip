import styled, { keyframes, css } from "styled-components";

// Defina a animação de shake
const shakeAnimation = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translate3d(-10px, 0, 0);
  }
  20%, 40%, 60%, 80% {
    transform: translate3d(10px, 0, 0);
  }
`;

export const Item = styled.div<{ shaking: boolean | null }>`
  width: 100%;
  padding: 0.5em;
  display: flex;
  justify-content: center;

  ${({ shaking }) =>
    shaking &&
    css`
      animation: ${shakeAnimation} 1s both;
    `}
`;

export const StyledMain = styled.div`
  flex: 1;
  background-color: #f4fcfa;
  min-width: 320px;
  font-family: "Montserrat Alternates", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.625em;

  @media (min-width: 1024px) {
    padding: 0 1.875em 1.875em 1.875em;
  }
`;

export const MessageArea = styled.div`
  text-align: center;
  margin: 3.75em 2em;
`;

export const ButtonArea = styled.div`
  margin: 3.25em 1.9em;
  width: 100%;
`;

export const GridContainer = styled.div`
  margin-top: 1.5em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-gap: 1em; */
  width: 100%;
  max-width: 700px;
  /* background-color: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2em;
  align-items: center;
  margin: 0;
  width: fit-content;
`;

export const FloatingItem = styled.div<{ floating: boolean; index: number }>`
  width: 100%;
  padding: 0.5em;
  display: flex;
  justify-content: center;

  ${({ floating, index }) =>
    floating &&
    css`
      animation: ${slideOutUp} 2s ease-in-out;
      animation-delay: ${index * 0.5}s;
    `}
`;

export const slideOutUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    visibility: hidden;
    transform: translateY(-100%);
  }
`;
