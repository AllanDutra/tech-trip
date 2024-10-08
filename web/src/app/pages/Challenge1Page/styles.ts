import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: #fff;
  min-width: 320px;
  font-family: "Montserrat Alternates", sans-serif;
  display: flex;
  flex-direction: column;
  padding: 1.125em 0.625em 0.625em 0.625em;
`;

export const StyledLabel = styled.div`
  margin-top: 0.625em;
  margin-bottom: 1.125em;
  text-align: center;
  span {
    font-weight: bold;
  }
`;

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25em;
`;

export const DroppableItems = styled.div`
  
`;

export const DraggableItems = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.625em;
`;
