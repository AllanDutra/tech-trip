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
  &.officeObjects {
    /* background-color: red; */
    scale: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 1024px) {
      scale: 1.5;
      width: fit-content;
      height: fit-content;
    }
  }

  &.computerComponents {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15.625em;
    height: 11.875em;
    @media (min-width: 1024px) {
      width: 25.374375em;
      height: 19.25em;
    }
  }

  &.folder {
    width: 19.25em;
    height: 19.25em;
    margin: 2.75em 0;
    
    @media (max-width: 1024px) {
      width: 11.6875em;
      height: 11.6875em;
      margin: 1.25em 0;
    }
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
