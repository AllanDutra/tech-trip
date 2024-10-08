import styled from "styled-components";

export const Draggable = styled.div<{ backgroundColor: string }>`
  width: 3.75em;
  height: 3.75em;
  padding: 0.1em;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0 0.3em rgba(0, 0, 0, 0.1);
  border-radius: 1em;

  img {
    object-fit: cover;
  }
`;
