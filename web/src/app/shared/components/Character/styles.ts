import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  border-radius: 0.9375em;
  background-color: white;
  overflow: hidden;
  cursor: pointer;

  &.withShadow {
    box-shadow: 0px 4px 0px 0px #0000001a;
  }

  &.gray {
    filter: grayscale(100%);
    opacity: 50%;
  }
`;
