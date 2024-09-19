import styled from "styled-components";

interface IStyledDragContainerProps {
  color: string;
}

interface IStyledDropContainerProps {
  color?: string;
}

export const DEFAULT_SIZE = "7.625em";

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

  &:active {
    opacity: 0.7;
    border: 0.25px solid #dcdcdc;
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
`;
