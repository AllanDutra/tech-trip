import styled from "styled-components";

export const StyledContainer = styled.div`
  flex: 1;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledNoughtsAndCrossesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 8.75em);
  grid-template-rows: repeat(3, 8.75em);
  gap: 1.25em;

  border: 1.25em solid #ebf1f1;
  border-radius: 0.75em;

  position: relative;

  * {
    user-select: none;
  }

  background-color: #424243;

  @media screen and ((max-width: 570px) or (max-height: 760px)) {
    width: 100%;
    height: 46vh;
    gap: 0.625em;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media screen and (max-height: 760px) {
    max-width: 50vh;
  }
`;

export const StyledSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
  border: 1px solid black;
  color: #42424326;
  text-align: center;
  font-family: "Lilita One", sans-serif;
  font-weight: 400;
  font-size: 1.75em;

  &:hover {
    transition: all 0.2s;
    cursor: pointer;
    filter: brightness(85%);
  }

  &.blocked:hover {
    cursor: not-allowed;
    filter: brightness(100%);
  }

  span {
    font-size: 4em;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 500;
    line-height: 160%;

    &.O {
      color: #039ef5;
    }

    &.X {
      color: #e23a68;
    }
  }

  @media screen and (max-width: 680px) {
    font-size: 1.25em;
  }

  @media screen and (max-height: 540px) {
    font-size: 1em;
  }

  @media screen and (max-height: 760px) {
    font-size: 1.8vh;
  }

  @media screen and (max-width: 570px) {
    font-size: 1.8vh;
  }
`;
