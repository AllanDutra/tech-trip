import styled, { css } from "styled-components";

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
`;

export const StyledMainChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 6vh;

  width: 70%;
`;

export const StyledActivityGroup = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledActivityDragGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

export const StyledDropAreaContainer = styled.div<IStyledDropAreaContainerProps>`
  position: relative;
  overflow: hidden;
  margin-left: 7%;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 1.25em;

  box-shadow: inset 0em 0.5em 0em 0em rgba(0, 0, 0, 0.03);

  img {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  ${({ background, color }) => css`
    background-color: ${background};
    color: ${color};
  `}
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
`;

export const StyledDroppableRegion = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;

  gap: 2.5em;
`;
