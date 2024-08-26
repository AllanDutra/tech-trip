import styled from "styled-components";

export const StyledMain = styled.div`
  background-image: url('');
`

export const RegisterContainer = styled.div`
  background-color: #fff;
  max-width: 32em;
  margin: 16em auto;
  border-radius: 0.625em;
  padding: 1em;
  box-shadow: 0 0.25px 0.625em rgba(0, 0, 0, 0.1);

  h1 {
    text-align: left;
  }

  p {
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: left;
  }

  @media (min-width: 768px){
    max-width: 50em;
    display: grid;
    /*grid-template-columns: 1fr 1fr;*/
    gap: 1.25em;
  }
`;

export const RegisterHeader = styled.header`
  text-align: center;
  margin-bottom: 1.25em;
`
;

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

export const GenderButtons = styled.div`
  padding: 0.7em 0;
  display: flex;
  justify-content: space-between;
`;

export const RegisterFooter = styled.footer`
  margin-top: 1.25em;
  text-align: center;

  @media (min-width: 768px) {
    grid-column: 1 / span 2;
  }
`;
