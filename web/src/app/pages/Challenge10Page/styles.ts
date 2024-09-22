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
  display: none;
  width: 13.711875em;
  height: 18.75em;

  &.mobileVisible {
    @media (max-width: 1024px) {
      width: 6.8125em;
      height: 9.315625em;
      display: block;
    }
  }

  &.desktopVisible {
    @media (min-width: 1024px) {
      display: block;
      scale: 1.5;
      width: 13.711875em;
      height: 18.75em;
    }
  }
`;

export const ResponseArea = styled.div`
  width: 100%;
  margin-bottom: 1.75em;
  @media (min-width: 1024px) {
    margin-bottom: 3.5em;
  }
`;

export const MessageArea = styled.div`
  text-align: center;
  margin-top: 3.75em;
  margin-bottom: 5em;
  display: flex;
  flex-direction: column;
  gap: 2.8125em;
  @media (max-width: 1024px) {
    margin-bottom: 0.8125em;
    margin-top: 0.625em;
    gap: 1.5em;

    div {
      display: grid;
      grid-template-columns: 2fr 1fr;
      /* display: flex;
      flex-direction: row;
      width: calc(100% / 2); */
    }
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
