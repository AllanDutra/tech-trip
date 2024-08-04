import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: calc(100% - 1.25em);
  left: 0;
  bottom: 0;
  margin: 0 0.625em;
  margin-bottom: 0.625em;

  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25%;
  padding: 0.625em 0;
  border-radius: 2.5em;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0.5px solid #f3f3f3;
    border-radius: 2.5em;
    box-sizing: border-box;
    pointer-events: none; /* Evita que a borda interfira nas interações do usuário */
  }
`;

export const StyledOption = styled(Link)`
  color: #252526;

  outline: none;
  width: 3.125em;
  height: 3.125em;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  & span.point {
    display: none;
  }

  &.selected {
    flex-direction: column;
    gap: 0.125em;
    color: #2bcb9a;

    & span.point {
      display: initial;
      width: 0.5em;
      height: 0.5em;
      border-radius: 50%;
      background-color: #2bcb9a;
    }
  }

  &:hover,
  &:focus {
    transition: all 0.5s;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
