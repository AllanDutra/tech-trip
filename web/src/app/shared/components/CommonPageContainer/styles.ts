import styled from "styled-components";

interface IStyledProgressBarProps {
  percentprogress: number;
}

export const StyledProgressInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25em;

  strong {
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-size: 1.25em;
    letter-spacing: 0.5px;
    color: #545456;

    &:nth-of-type(2) {
      text-align: right;
    }
  }

  .progress-bar {
    height: 1em;
    border-radius: 1em;
  }

  .progress-bar-container {
    width: 35vw;
    background-color: #ebf1f1;
  }

  @media screen and (max-width: 1280px) {
    strong {
      display: none;
    }

    .progress-bar {
      height: 2em;
      border-radius: 1.25em;
    }

    .progress-bar-container {
      width: 22vw;
    }
  }
`;

export const StyledProgressBar = styled.div<IStyledProgressBarProps>`
  width: ${({ percentprogress }) => `${percentprogress}%`};
  background-color: #2bcb9a;

  .mobile-progress {
    display: none;
  }

  @media screen and (max-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    .mobile-progress {
      display: flex;
      font-family: "Lilita One", sans-serif;
      font-weight: 400;
      color: white;
      font-size: 1.25em;
    }
  }
`;
