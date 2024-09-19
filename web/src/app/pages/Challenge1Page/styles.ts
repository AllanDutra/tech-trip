import styled, { css } from "styled-components";
import { DraggableComponents } from "../../shared/components/DraggableComponents";

interface IStyledDropAreaContainerProps {
  background: string;
  color: string;
}

export const StyledChallengeContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-evenly;

  button {
    max-width: 70%;
  }
`;

export const StyledMainChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 6vh;

  width: 70%;
`;

export const StyledActivityGroup = styled.div`
  width: 100%;
  height: calc((2 * ${DraggableComponents.DEFAULT_SIZE}) + 1em);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledActivityDragGroup = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  * {
    z-index: 1;
  }

  .hide-drop {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
  }

  &.drop-container-visible {
    .hide-drop {
      position: initial;
    }
  }
`;

export const StyledDropAreaContainer = styled.div<IStyledDropAreaContainerProps>`
  position: relative;
  overflow: hidden;

  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 1.25em;

  box-shadow: inset 0em 0.5em 0em 0em rgba(0, 0, 0, 0.03);

  .drop-area-image {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  ${({ background, color }) => css`
    background-color: ${background};
    color: ${color};
  `}

  * {
    user-select: none;
  }
`;

export const StyledDropAreaContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 7%;

  p {
    font-family: "Lilita One", sans-serif;
    font-size: 1.75em;
    text-align: center;
    z-index: 2;
  }
`;

export const StyledDroppableRegion = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;

  gap: 2.5em;
`;
