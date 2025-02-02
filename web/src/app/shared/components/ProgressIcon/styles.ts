import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledRotatingDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 0.8s linear infinite;
`;
