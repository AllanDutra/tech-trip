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

export const StyledChooseContainer = styled(SharedStyles)`
  cursor: copy;

  *:nth-of-type(1) {
    border: 3px solid #f3f3f3;
    transition: all 0.2s;
  }

  &.highlighted {
    *:nth-of-type(1) {
      border: 3px solid #03afed;
    }
  }

  &.choose-disable {
    cursor: not-allowed;
  }
`;

export const StyledTargetContainer = styled(SharedStyles)`
  cursor: not-allowed;
  transition: all 0.2s;

  &.highlighted {
    cursor: cell;

    background-color: #d9f3fd !important;
    animation: ${pulse} 2s infinite ease-in-out;
  }

  &.target-disable {
    display: none;
  }
`;
