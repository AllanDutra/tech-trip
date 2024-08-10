import styled from "styled-components";

export const StyledDragContainer = styled.div`
  width: 3.75em;
  height: 3.75em;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.9375em;

  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.1);

  background-color: rebeccapurple;
`;

export const StyledDropContainer = styled.div`
  &.hole {
    width: 3.75em;
    height: 3.75em;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.9375em;

    box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.1);
  }

  width: 100%;

  display: flex;
  background-color: red;
`;
