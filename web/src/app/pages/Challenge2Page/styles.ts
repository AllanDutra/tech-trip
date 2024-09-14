import styled from "styled-components";

export const StyledContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  padding: 0.625em;

  @media screen and (min-width: 572px) {
    padding: 0em;
  }
`;

export const StyledChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  padding-bottom: 3.75em;

  @media screen and (max-height: 850px) {
    padding-bottom: 0;
  }
`;
