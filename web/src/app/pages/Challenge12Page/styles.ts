import styled from "styled-components";

export const StyledChallengeContainer = styled.div`
  flex: 1;
  padding: 3vh 2.5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1.5vh;

  @media screen and (max-width: 1060px) {
    padding: 1.25em 0.625em;
    padding-top: 0em;

    .mobile-invisible {
      display: none;
    }
  }

  @media screen and (min-width: 1060px) {
    .desktop-invisible {
      display: none;
    }
  }
`;

export const StyledChallengeContent = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1.5vh;

  .challenge-message {
    font-size: 1.76vh;
  }

  @media screen and (max-width: 1060px) {
    align-items: center;

    .challenge-message {
      font-size: 1em;
      text-align: justify;
      margin: 0;
    }
  }
`;

export const StyledLogicalOperationAboutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.875em;

  @media screen and (max-width: 1060px) {
    flex-direction: column;
    gap: 0.625em;
  }
`;

export const StyledLogicalOperationAbout = styled.div<{ color: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;

  .challenge-message {
    font-size: 1.76vh;
    margin: 0;
    text-align: justify;
  }

  span.title {
    background-color: ${({ color }) => color};
    text-align: center;
    color: white;
    letter-spacing: 2px;
    font-size: 1.86vh;
    font-family: "Lilita One", sans-serif;
    width: 100%;
    padding: 0.75em 0;
    font-weight: 400;
    border-radius: 0.5em;
    box-shadow: inset 0em -0.3125em 0em 0em rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 1060px) {
    flex-direction: column;
    gap: 0.3125em;

    .challenge-message {
      font-size: 0.9em;
    }

    span.title {
      font-size: 1em;
    }
  }
`;

export const StyledChallengeContentWithImage = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25em;

  @media screen and (max-width: 1470px) {
    img {
      width: 30%;
    }
  }

  @media screen and (max-width: 1410px) {
    img {
      width: 25%;
    }
  }

  @media screen and (max-width: 1060px) {
    flex: 1;

    img {
      width: auto;
      max-width: 18.75em;
      max-height: 18.75em;
    }
  }
`;

export const StyledInteractionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1.25em;

  .choose-container {
    width: 100%;
    height: 100%;

    &.highlighted > div {
      filter: brightness(85%);
    }
  }

  > div {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:nth-of-type(2) {
      width: 100%;
      align-items: flex-end;
    }
  }

  @media screen and (max-width: 1410px) {
    > div {
      gap: 2vh;
    }
  }

  @media screen and (max-width: 1060px) {
    .target-container {
      width: 3.5em;
      height: 3.5em;
    }

    flex: 1;

    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;

    > div:nth-of-type(1) {
      flex: 1;
      flex-direction: row;
      width: 100%;
      justify-content: space-evenly;
      padding-bottom: 0.625em;
    }

    > div:nth-of-type(2) {
      gap: 10.6vh !important;
      justify-content: initial;
    }
  }
`;

export const StyledLogicalOperationChoose = styled.div<{ color: string }>`
  flex: 1;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 1.25em;
  box-shadow: inset 0em -0.5em 0em 0em rgba(0, 0, 0, 0.15);

  span {
    color: white;
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 1.625em;
  }

  background-color: ${({ color }) => color};

  @media screen and (max-width: 1060px) {
    border-radius: 0.875em;

    span {
      font-size: 1em;
    }
  }
`;

export const StyledInteractiveMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;

  p {
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 500;
    line-height: 160%;
    font-size: 1em;
    color: #545456;
    text-align: right;
  }

  @media screen and (max-width: 1060px) {
    width: 100%;

    p {
      font-size: 0.875em;
    }

    p:nth-of-type(1) {
      max-width: 40vw;
      text-align: left;
    }

    p:nth-of-type(2) {
      max-width: 35.625vw;
      text-align: right;
      margin-left: auto;
    }
  }
`;

export const StyledButtonGroup = styled.div`
  @media screen and (max-width: 1060px) {
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.625em;

    svg {
      width: 30px;
      height: 30px;
    }

    button {
      height: 3.25em;
    }

    button:disabled {
      background-color: #ebf1f1;

      svg {
        fill: #4242431a;
      }
    }
  }
`;
