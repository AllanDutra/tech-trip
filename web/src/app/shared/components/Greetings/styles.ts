import styled from "styled-components";

export const StyledGreetings = styled.div`
  color: #424243;

  display: flex;
  align-items: center;
  gap: 1em;

  div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    gap: 0.125em;
  }

  span {
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 500;
    font-size: 0.85em;
  }

  strong {
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-size: 1.625em;
    letter-spacing: 0.0325em;
  }

  @media screen and (max-width: 680px) {
    display: none;
  }
`;
