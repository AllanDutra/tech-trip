import styled from "styled-components";

export const StyledMainContainer = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3125em;
`;

export const StyledLabel = styled.label`
  font-weight: 500;
  color: #545456b3;
  font-size: 1.17em;
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.625em;
  padding: 0 1.25em 0.625em 0;
  border-bottom: 1px solid #f3f3f3;

  &:hover,
  &:focus-within {
    transition: all 0.2s;
    border-bottom: 1px solid #424243b3;
  }
`;

export const StyledIconButton = styled.button`
  border-radius: 50%;
  padding: 0.3125em;
  border: none;
  outline: none;
  background-color: transparent;

  &:hover,
  &:focus {
    transition: all 0.2s;
    background-color: #5454561a;
  }
`;

export const StyledInput = styled.input`
  font-weight: 500;
  color: #545456;
  font-size: 1.17em;

  width: 100%;
  flex: 1;
  border: none;
  outline: none;
  background: none;
  padding: 0.3125em;

  &::placeholder {
    opacity: 50%;
  }
`;
