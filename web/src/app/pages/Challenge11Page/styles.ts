import styled from "styled-components";

export const StyledContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 4vh;

  justify-content: space-between;

  padding: 6vh 2.1vh;
`;

export const StyledParagraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25em;

  .challenge-message {
    text-align: center;
    margin: 0;
    font-size: 1.15em;
  }
`;

export const StyledGraphContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;

  .choose-container img,
  .target-container {
    width: 5em;
    height: 5em;
    border-radius: 1.25em;
    box-shadow: inset 0em 0.5em 0em 0em rgba(0, 0, 0, 0.03);
  }

  .choose-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;

    * {
      user-select: none;
    }

    span {
      position: absolute;
      bottom: -1.25em;

      padding: 0 0.75em;
      color: #545456;
      text-align: center;
      font-family: "Montserrat Alternates", sans-serif;
      font-size: 1em;
      line-height: 160%;
      font-weight: 600;
      background-color: #ffffff;
      border-radius: 0.5em;
    }
  }

  .target-container {
    background-color: #e4ebea;

    .question {
      font-family: "Montserrat Alternates", sans-serif;
      font-weight: 700;
      font-size: 2em;
      line-height: 160%;
      text-align: center;
      opacity: 0.2;
      color: #545456;
    }
  }
`;

export const StyledGraph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;

  > div:nth-of-type(2) {
    display: flex;
    align-items: center;
    gap: 13.625em;
  }
`;

export const StyledSelectableCharactersGroupContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4.375em;
`;
