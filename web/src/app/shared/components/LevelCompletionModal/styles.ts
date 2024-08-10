import styled from "styled-components";

export const StyledContainer = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;

  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.25em;

  background-color: white;
  padding: 1.25em;

  & .close-button {
    height: 1.875em;
    width: 1.875em;
    padding: 0;
  }

  & button:nth-of-type(2) {
    margin-top: auto;
  }
`;

export const StyledMessage = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25em;
  text-align: center;

  /* STARS DIV */
  div {
    display: flex;
    align-items: flex-end;
    gap: 0.625em;

    color: #e1e1e1;

    .yellow {
      color: #ffa425;
    }
  }

  h1 {
    font-size: 1.5625em;
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    color: #545456;
    line-height: 160%;
  }

  span {
    font-size: 1em;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 400;
    line-height: 160%;
    color: #545456;
    white-space: pre-line;
  }
`;

export const StyledDiamondMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5em;

  text-align: center;

  strong {
    font-size: 1em;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 700;
    line-height: 160%;
    color: #545456;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.625em;

    span {
      color: #00c3ff;
      font-family: "Lilita One", sans-serif;
      font-weight: 400;
      font-size: 1.5625em;
      letter-spacing: 2px;
    }
  }
`;
