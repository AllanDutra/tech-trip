import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: #2BCB9A;
  height: 100vh;
  min-height: 100vh;
  background-image: url("src/app/shared/assets/Images/Background.png");
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    align-items: end;
    overflow-y: auto;
  }
`;

export const RegisterContainer = styled.div`
  background-color: #fff;
  border-radius: 2em;
  padding: 2em;
  box-shadow: 0 0.7em 0.2em rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  h1 {
    text-align: left;
  }

  p {
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 400;
    font-size: 1.1em;
    font-style: normal;
    text-align: left;
  }

  @media (min-width: 768px) {
    border-radius: 1em;
    max-width: 50em;
    gap: 1.25em;
  }
`;

export const RegisterHeader = styled.header`
  text-align: center;
  margin-bottom: 1.25em;
`;

export const CharactersContainer = styled.div`
  margin-bottom: 1.25em;
`;

export const Characters = styled.div`
  grid-template-columns: repeat(4, 1fr);
  display: grid;
  gap: 0.625em;
  justify-items: center;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.9375em;

  @media (min-width: 768px) {
    grid-column: 2 / span 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25em;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 500;
  font-family: "Montserrat Alternates", sans-serif;
  width: 100%;
  display: block;
  color: #424243;
`;

export const GenderButtons = styled.div`
  padding: 0.7em 0;
  width: 100%;
  display: block;
`;

export const RegisterFooter = styled.footer`
  margin-top: 1.25em;
  text-align: center;

  @media (min-width: 768px) {
    grid-column: 1 / span 2;
  }
`;
