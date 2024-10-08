import styled from "styled-components";

export const StyledContainer = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 2em;

  @media screen and (max-height: 820px) {
    padding: 1.875em;
  }

  @media screen and (max-width: 1100px) {
    padding: 1.875em;
  }

  @media screen and (max-width: 680px) {
    padding: 1.25em;
    padding-top: 0;
  }
`;

export const StyledMessageGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 7.5em;

  .noughts {
    color: #039ef5;
  }

  .crosses {
    color: #e23a68;
  }

  @media screen and (max-width: 1100px) {
    gap: 3.75em;
    font-size: 0.875em;
  }

  @media screen and (max-width: 680px) {
    gap: 1.25em;
    flex-direction: column;

    .challenge-message {
      margin: 0;
    }
  }
`;

export const StyledButtonGroup = styled.div`
  width: 100%;

  max-width: 50vh;

  display: flex;

  @media screen and (max-width: 570px) {
    max-width: none;
  }
`;
