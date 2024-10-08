import styled from "styled-components";

export const StyledContainer = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15%;

  .challenge-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625em;
  }

  padding: 3.75em 0;

  @media screen and (max-height: 790px) {
    padding: 1.25em;

    gap: 7.5%;
  }

  @media screen and (max-width: 680px) {
    gap: 7.5%;
  }
`;

export const StyledSeedsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5em;

  img {
    width: 10em;
    height: 10em;
  }

  img:hover {
    transition: all 0.2s;
    cursor: pointer;
    filter: brightness(80%);
  }

  div {
    display: flex;
    align-items: center;
    gap: 5em;
  }

  @media screen and (max-height: 790px) {
    gap: 2.5em;
  }

  @media screen and (max-width: 680px) {
    gap: 2.5em;
  }

  @media screen and (max-height: 670px) {
    img {
      width: 20vh;
      height: 20vh;
    }
  }

  @media screen and (max-width: 680px) {
    img {
      width: 20vw;
      height: 20vw;
    }
  }
`;
