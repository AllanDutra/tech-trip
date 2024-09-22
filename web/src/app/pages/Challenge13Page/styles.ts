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
    padding: 0 1.875em 1.875em 1.875em;
  }
`;

export const ImageArea = styled.div`
  /* width: 9.9375em;
  height: 10.20625em; */
  /* background-color: red; */
  scale: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    scale: 1.2;
    width: fit-content;
    height: fit-content;
    /* width: 18.75em;
    height: 19.255em; */
  }
`;

export const ResponseArea = styled.div`
  width: 100%;
  margin-bottom: 1.75em;
  padding-top: 1.25em;
  /* background-color: red; */
  @media (min-width: 1024px) {
    padding-top: 5em;
    margin-bottom: 3.5em;
  }
`;

export const MessageArea = styled.div`
  margin: 3.75em 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin: 1.25em 0;
  }
`;

export const Message = styled.div`
  text-align: center;

  @media (min-width: 1024px) {
    padding: 3.75em 8.75em 3.75em 8.75em;
  }
`;

export const StatementContainer = styled.div`
  display: flex;
  align-items: center;
`;
