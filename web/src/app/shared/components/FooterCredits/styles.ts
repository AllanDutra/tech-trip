import styled from "styled-components";

export const StyledFooterCredits = styled.footer`
  z-index: 998;
  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;

  font-size: 0.8em;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;

  width: 100%;
  padding: 0 1em;

  background-color: rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  @media screen and (max-width: 1200px) {
    position: initial;
    background-color: white;

    margin-top: 1em;
    min-height: 14em;

    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    gap: 0.5em;

    padding: 1em;

    div {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5em;
    }
  }
`;
