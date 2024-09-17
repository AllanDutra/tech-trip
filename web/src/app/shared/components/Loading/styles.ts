import styled from "styled-components";

export const StyledLoadingContainer = styled.div`
  position: absolute;
  z-index: 9999;

  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  * {
    user-select: none;
  }

  background-color: rgba(0, 0, 0, 0.25);
  opacity: 1;
  pointer-events: all;

  transition: all 0.2s;

  &.invisible {
    background-color: transparent;
    opacity: 0;
    pointer-events: none;
  }
`;
