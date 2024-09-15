import styled from "styled-components";

export const StyledPageContainer = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  overflow: hidden;
`;

export const StyledSubPageContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  main {
    flex: 1;

    display: flex;
    flex-direction: column;
    overflow: auto;
  }
`;

export const StyledHeader = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.625em 1.25em;

  border-bottom: 1px solid #f3f3f3;

  @media screen and (max-width: 680px) {
    border-bottom: none;

    padding: 1.25em 0.625em;
  }
`;
