import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: #f4fcfa;
  min-width: 320px;
  font-family: "Montserrat Alternates", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.125em 0.625em 0.625em 0.625em;
`;

export const MainContainer = styled.main`
  width: 100%;
  margin: 1.875em 1.25em 6.75em 1.25em;
  display: flex;
  gap: 1.25em;
  flex-direction: column;
`;

export const ExplanationAreas = styled.div`
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const Explanation = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.875em 1.25em 2.75em 1.25em;
  gap: 0.625em;
  justify-content: end;
`;

export const Message = styled.div`
  text-align: justify;
`;

export const Title = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 1em;
  color: #424243;
  @media (max-width: 1024px) {
    font-size: 1.3em;
  }
`;

export const ButtonsArea = styled.div`
  width: 100%;
  gap: 1.25em;
  display: flex;
  flex-direction: row;
`;

export const StyledLabel = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 500;
  color: #424243;
  width: 100%;
`;
