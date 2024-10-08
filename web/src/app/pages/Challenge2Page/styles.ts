import styled from "styled-components";

export const StyledChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  padding-bottom: 3.75em;

  @media screen and (max-height: 850px) {
    padding-bottom: 0;
  }

  @media screen and (max-width: 572px) {
    padding: 0.625em;
  }
`;
