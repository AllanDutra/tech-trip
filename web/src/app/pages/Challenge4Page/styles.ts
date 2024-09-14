import styled from "styled-components";

export const StyledContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .challenge-message {
    margin: 0;
  }

  padding: 3.75em 0;

  @media screen and (max-width: 1040px) {
    padding: 3.75em 1.25em;
  }

  @media screen and (max-width: 680px) {
    padding: 0.625em;

    padding-top: 1.25em;
  }
`;

export const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5em;

  strong {
    text-align: center;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 700;
    color: #424243;
    line-height: 160%;
    font-size: 1.625em;
  }

  @media screen and (max-width: 680px) {
    gap: 1.875em;

    strong {
      font-size: 1.125em;
    }
  }
`;

export const StyledButtonGroup = styled.div`
  width: 100%;

  max-width: 50em;

  display: flex;
  flex-direction: column;
  gap: 1.25em;

  @media screen and (max-width: 680px) {
    gap: 0.625em;
  }
`;
