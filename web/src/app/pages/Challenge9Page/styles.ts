import styled from "styled-components";

export const StyledMain = styled.div`
  flex: 1;
  background-color: #f4fcfa;
  min-width: 320px;
  font-family: "Montserrat Alternates", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.625em;

  @media (min-width: 1024px) {
    padding: 0 1em 0 1em;
  }
`;

export const ImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17.5em;
  height: 8.125em;
  align-self: center;
  margin-top: 3.75em;
  margin-bottom: 7.5em;
  @media (min-width: 1024px) {
    width: 18.5em;
    height: 10.5625em;
    margin-bottom: 7.5em;
  }
`;

export const ImageRobbot = styled.div`
  width: 16.563125em;
  height: 17.6925em;
  margin: 2.8825em 1.6875em 8.175625em 1.6875em;

  @media (min-width: 1024px) {
    width: 24.165em;
    height: 25.8125em;
    margin: 8.9375em 21.6875em 9em 21.6875em;
  }
`;

export const ResponseArea = styled.div`
  width: 100%;
  margin-bottom: 1.75em;
  @media (min-width: 1024px) {
    margin-bottom: 3.5em;
  }
`;

export const Message = styled.div`
  text-align: center;
  width: 100%;
  @media (min-width: 1024px) {
    padding: 3.75em 8.75em 3.75em 8.75em;
  }
`;

export const ButtonsArea = styled.div`
  width: 100%;
  padding-top: 3.125em;
`;
