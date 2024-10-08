import styled from "styled-components";

export const StyledContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 3.75em 1.875em;

  .challenge-message {
    margin: 0;
  }

  img {
    height: 42vh;
  }

  @media screen and (max-width: 680px) {
    padding: 0.625em;
    padding-top: 1.25em;
  }
`;
