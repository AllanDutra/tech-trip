import styled from "styled-components";

export const StyledRankingPodium = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3125em 1.875em;
  border-radius: 0.625em 0.625em 0 0;
  min-width: 5em;
  margin-top: 0.625em;

  strong {
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 900;
    color: white;
    font-size: 2.1875em;
    text-align: center;
  }

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;
