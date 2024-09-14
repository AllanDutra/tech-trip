import styled from "styled-components";

export const StyledControlButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625em;

  margin-top: auto; // * Posicionar no final do flex *

  button {
    width: 4em;
    height: 4em;
  }
`;

export const StyledGroupedControlButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625em;
`;
