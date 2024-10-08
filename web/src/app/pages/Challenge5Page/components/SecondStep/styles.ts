import styled, { keyframes } from "styled-components";

// Animação de rotação do regador
const tiltWateringCan = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-45deg); }
`;

// Animação das gotas caindo
const dropWater = keyframes`
  0% { opacity: 0; transform: translateY(-10px); }
  20% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(150px); }
`;

export const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .challenge-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625em;
  }
`;

export const StyledImageGroup = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24vh;

  img {
    user-select: none;
  }

  .plant-watering-can {
    position: absolute;
    left: 6.875em;
    bottom: 43vh;
  }

  .plant-watering-can:hover {
    transition: all 0.2s;
    cursor: pointer;
    filter: brightness(80%);
  }

  .tree-seedling {
    margin-top: auto;
  }

  @media screen and (max-width: 680px) {
    .plant-watering-can {
      width: 35vw;
      height: auto;
      left: 18vw;
    }

    .tree-seedling {
      width: 37.5vw;
      height: auto;
    }
  }

  @media screen and (max-height: 660px) {
    .plant-watering-can {
      width: 26vh;
      height: auto;
      left: 18vw;
    }

    .tree-seedling {
      width: 28vh;
      height: auto;
    }
  }

  .plant-watering-can-animation {
    animation-name: ${tiltWateringCan};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    transition-timing-function: ease-in-out;
  }

  .tree-seedling-animation {
  }
`;

export const StyledWaterDrop = styled.div<{ delay: string }>`
  width: 10px;
  height: 20px;
  background-color: #00bfff;
  position: absolute;
  border-radius: 50% 50% 50% 50% / 70% 70% 100% 100%;

  &::after {
    content: "";
    position: absolute;
    top: 15%;
    left: 50%;
    width: 4px;
    height: 10px;
    background-color: #e0f7ff;
    border-radius: 50% 50% 50% 50% / 70% 70% 100% 100%;
    transform: rotate(45deg) translate(-50%, -50%);
    opacity: 0.5;
  }

  right: 50%;
  bottom: 43vh;

  animation-name: ${dropWater};
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-delay: ${({ delay }) => delay};
  opacity: 1;
`;
