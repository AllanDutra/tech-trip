import styled from "styled-components";

export const StyledMazeContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  * {
    user-select: none;
  }
`;

export const StyledMaze = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 14vw);
  grid-template-rows: repeat(6, 14vw);

  @media screen and (min-width: 572px) {
    grid-template-columns: repeat(6, 4.375em);
    grid-template-rows: repeat(6, 4.375em);
  }
`;

export const StyledMatrizSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &.top {
    border-top: 0.4375em solid #d9dade;
  }

  &.right {
    border-right: 0.4375em solid #d9dade;
  }

  &.bottom {
    border-bottom: 0.4375em solid #d9dade;
  }

  &.left {
    border-left: 0.4375em solid #d9dade;
  }

  &.shoeSquare {
    position: relative;
    overflow: visible;

    img.shoe {
      position: absolute;
      left: 2.1875em;
      top: 2.1875em;
    }
  }
`;
