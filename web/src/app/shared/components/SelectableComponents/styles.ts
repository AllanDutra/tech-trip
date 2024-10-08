import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1); 
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const SharedStyles = styled.div`
  user-select: none;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledChooseContainer = styled(SharedStyles)<{ color?: string }>`
  cursor: copy;

  img {
    width: 5em;
    height: 5em;
    border-radius: 1.25em;
    box-shadow: inset 0em 0.5em 0em 0em rgba(0, 0, 0, 0.03);
  }

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  z-index: 2;

  * {
    user-select: none;
  }

  img {
    background-color: ${({ color }) => color || "white"};
  }

  &.choose-disable {
    cursor: not-allowed;
  }
`;

export const StyledTargetContainer = styled(SharedStyles)<{ color?: string }>`
  cursor: not-allowed;
  transition: all 0.2s;

  width: 5em;
  height: 5em;
  border-radius: 1.25em;
  box-shadow: inset 0em 0.5em 0em 0em rgba(0, 0, 0, 0.03);

  background-color: ${({ color }) => color || "#e4ebea"};

  .question {
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 700;
    font-size: 2em;
    line-height: 160%;
    text-align: center;
    opacity: 0.2;
    color: #545456;
  }

  &.highlighted {
    cursor: cell;

    animation: ${pulse} 2s infinite ease-in-out;
  }

  &.target-disable {
    display: none;
  }
`;
