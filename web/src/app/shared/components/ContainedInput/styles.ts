import styled from "styled-components";

export const StyledMainContainer = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3125em;
  color: #424243;
`;

export const StyledLabel = styled.label`
  font-weight: 500;
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.625em;
  padding: 0.625em;
  background-color: #ebf1f1;
  border-radius: 0.375em;

  &:hover,
  &:focus-within {
    transition: all 0.2s;
    -webkit-box-shadow: inset 0px 0px 0px 1px #424243b3;
    -moz-box-shadow: inset 0px 0px 0px 1px #424243b3;
    box-shadow: inset 0px 0px 0px 1px #424243b3;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  flex: 1;
  border: none;
  outline: none;
  font-size: 1em;
  background: none;
  color: #424243;
  padding: 0.3125em;
  font-weight: 600;

  &::placeholder {
    opacity: 50%;
  }
`;
