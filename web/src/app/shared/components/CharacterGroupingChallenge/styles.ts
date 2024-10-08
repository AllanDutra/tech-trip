import styled, { css } from "styled-components";

const DEFAULT_SIZE = "7.625em";
const RESPONSIVE_SIZE = "5em";

interface IStyledDropAreaContainerProps {
  background: string;
  color: string;
}

export const StyledChallengeContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-evenly;

  button {
    max-width: 70%;
  }

  .target-container {
    width: ${DEFAULT_SIZE};
    height: ${DEFAULT_SIZE};
    overflow: hidden;
  }

  .choose-container {
    flex: 1;
    height: 100%;

    border-radius: 1.875em;

    img {
      flex: 1;
      width: 100%;
      height: 100%;
      padding: 0.9375em;
      box-shadow: inset 0em -0.5em 0em 0em rgba(0, 0, 0, 0.1);
    }
  }

  @media screen and (max-width: 1020px) {
    button {
      max-width: 90%;
    }
  }

  @media screen and (max-width: 660px) {
    padding-bottom: 4.5%;
  }

  @media screen and (max-height: 760px) {
    .challenge-message {
      font-size: 1em;
    }
  }

  @media screen and ((max-width: 790px) or (max-height: 825px)) {
    .target-container {
      width: ${RESPONSIVE_SIZE};
      height: ${RESPONSIVE_SIZE};
      border-radius: 1.25em;
    }

    .choose-container {
      img {
        height: 100%;
        padding: 0.9375em 0;
        box-shadow: inset 0em -0.25em 0em 0em rgba(0, 0, 0, 0.1);
      }
    }
  }

  @media screen and ((max-width: 400px) or (max-height: 670px)) {
    .target-container {
      width: 3.75em;
      height: 3.75em;
    }
  }

  * {
    user-select: none;
  }
`;

export const StyledMainChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 6vh;

  width: 70%;

  @media screen and (max-width: 1020px) {
    width: 90%;
  }

  @media screen and (max-width: 660px) {
    position: relative;

    flex: 1;
    margin-bottom: 4.5%;
    padding-bottom: calc(${RESPONSIVE_SIZE} + 1em);
    gap: 1.25em;

    width: 100%;
  }

  @media screen and (max-height: 620px) {
    gap: 1vh;
  }
`;

export const StyledActivityGroup = styled.div`
  width: 100%;
  height: calc((2 * ${DEFAULT_SIZE}) + 1em);

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 790px) {
    height: calc((2.5 * ${RESPONSIVE_SIZE}) + 1em);
  }

  @media screen and (max-height: 825px) {
    height: 12em;
  }

  @media screen and (max-width: 660px) {
    position: absolute;

    width: 90%;
    height: 100%;

    align-items: flex-start;

    &:nth-of-type(1) {
      .activity-choose-group {
        left: 0;
      }
    }

    &:nth-of-type(2) {
      padding-top: calc(13.5em + 1em);

      .activity-choose-group {
        right: 0;
      }
    }
  }

  @media screen and (max-height: 825px) and (max-width: 660px) {
    &:nth-of-type(2) {
      padding-top: calc(23vh + 1em);
    }
  }

  @media screen and (max-height: 620px) {
    /* &:nth-of-type(2) {
      padding-top: calc(18vh + 1em);
    } */
  }
`;

export const StyledActivityChooseGroup = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  * {
    z-index: 1;
  }

  .hide-drop {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
  }

  @media screen and (max-width: 660px) {
    position: absolute;
    bottom: 0;
    flex-direction: row;

    display: flex;
    justify-content: space-evenly;
  }
`;

export const StyledDropAreaContainer = styled.div<IStyledDropAreaContainerProps>`
  position: relative;
  overflow: hidden;

  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 1.25em;

  box-shadow: inset 0em 0.5em 0em 0em rgba(0, 0, 0, 0.03);

  .drop-area-image {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  ${({ background, color }) => css`
    background-color: ${background};
    color: ${color};
  `}

  * {
    user-select: none;
    white-space: break-spaces;
  }

  @media screen and (max-width: 660px) {
    max-height: 13.5em;
    width: 100%;
  }

  @media screen and (max-height: 825px) {
    max-height: 12em;
  }

  @media screen and (max-height: 825px) and (max-width: 660px) {
    max-height: 23vh;
  }

  @media screen and (max-height: 675px) {
    max-height: 22vh;
  }
`;

export const StyledDropAreaContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 7%;

  p {
    font-family: "Lilita One", sans-serif;
    font-size: 1.75em;
    text-align: center;
    z-index: 2;
  }

  .target-container {
    img {
      box-shadow: none;
    }
  }

  @media screen and (max-width: 1200px) {
    p {
      font-size: 1.5em;
    }
  }

  @media screen and ((max-width: 1100px) or (max-height: 825px)) {
    p {
      font-size: 1.25em;
    }
  }

  @media screen and (max-width: 595px) {
    p {
      font-size: 1.1em;
    }
  }

  @media screen and (max-width: 520px) {
    gap: 1em;
  }
`;

export const StyledDroppableRegion = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;

  gap: 2.5em;

  @media screen and (max-width: 520px) {
    gap: 1em;
  }
`;
