import styled from "styled-components";

export const StyledChallengeMessage = styled.span`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 1.375em;
  line-height: 160%;
  text-align: center;
  font-weight: 500;
  color: #424243;
  margin: 1.25em;

  strong {
    font-weight: 700;
  }

  @media screen and (max-width: 680px) {
    font-size: 1.25em;

    margin-top: 0em;
  }
`;
