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
  display: flex;
  flex-direction: column;
  gap: 1.25em;
`;

export const BoxesContainer = styled.div`
  /* margin-top: 4.375em; */
  margin-top: 3.5em;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 300px;
  gap: 1.5em;
  justify-content: center;

  @media (min-width: 1024px) {
    gap: 1.9em;
    max-width: 500px;
  }
`;

export const BoxColor = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 1em;
  width: 4.125em;
  height: 4.125em;
  box-shadow: 0 0.1em rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (min-width: 1024px) {
    width: 8.25em;
    height: 8.25em;
    border-radius: 2em;
    box-shadow: 0 0.3em rgba(0, 0, 0, 0.1);
  }
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

export const ColorName = styled.span<{ color: string }>`
  color: ${(props) => props.color};
`;

export const ButtonsArea = styled.div`
  width: 100%;
  gap: 0.625em;
  margin-top: 1.375em;
  display: flex;
  flex-direction: row;
`;
