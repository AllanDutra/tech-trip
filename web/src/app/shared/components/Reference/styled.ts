import styled from "styled-components";

export const LinkArea = styled.div<{ backgroundColor: string }>`
  font-family: "Montserrat Alternates", sans-serif;
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  padding: 1em;
`;
