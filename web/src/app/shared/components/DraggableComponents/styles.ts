import styled from "styled-components";

interface IStyledDragContainerProps {
  color: string;
}

interface IStyledDropContainerProps {
  color?: string;
}

export const DEFAULT_SIZE = "7.625em";
export const RESPONSIVE_SIZE = "5em";

export const StyledDragContainer = styled.div<IStyledDragContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${DEFAULT_SIZE};
  height: ${DEFAULT_SIZE};
  border-radius: 1.875em;

  background-color: ${({ color }) => color};

  padding: 1em 0.5em;

  img {
    width: 100%;
    max-height: 100%;
    user-select: none;
    pointer-events: none;
  }

  box-shadow: inset 0em -0.5em 0em 0em rgba(0, 0, 0, 0.1);

  cursor: grab;
  user-select: none;
  touch-action: none;

  &:active {
    opacity: 0.7;
    border: 0.25px solid #dcdcdc;
  }

  @media screen and ((max-width: 790px) or (max-height: 825px)) {
    width: ${RESPONSIVE_SIZE};
    height: ${RESPONSIVE_SIZE};
    border-radius: 1.25em;

    box-shadow: inset 0em -0.25em 0em 0em rgba(0, 0, 0, 0.1);
  }

  @media screen and ((max-width: 400px) or (max-height: 670px)) {
    width: 3.75em;
    height: 3.75em;
    border-radius: 0.9375em;
  }
`;

export const StyledDropContainer = styled.div<IStyledDropContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${DEFAULT_SIZE};
  height: ${DEFAULT_SIZE};
  border-radius: 1.875em;

  background-color: ${({ color }) => color || "transparent"};

  box-shadow: inset 0em 0.5em 0em 0em rgba(0, 0, 0, 0.03);

  .drag-container {
    box-shadow: none;
  }

  &.show-drop {
    columns: #dcdcdc;
    border: 1px dashed #dcdcdc;
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }

  &.hide-drop {
    opacity: 0;
  }

  @media screen and ((max-width: 790px) or (max-height: 825px)) {
    width: ${RESPONSIVE_SIZE};
    height: ${RESPONSIVE_SIZE};
    border-radius: 1.25em;

    box-shadow: inset 0em 0.25em 0em 0em rgba(0, 0, 0, 0.1);
  }

  @media screen and ((max-width: 400px) or (max-height: 670px)) {
    width: 3.75em;
    height: 3.75em;
    border-radius: 0.9375em;
  }
`;
