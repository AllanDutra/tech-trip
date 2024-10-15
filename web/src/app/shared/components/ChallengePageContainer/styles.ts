import styled from "styled-components";

export const StyledPageContainer = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  overflow: hidden;

  @media screen and (max-width: 680px) {
    &.common-page {
      .greetings {
        display: flex !important;

        .character-container {
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    &.common-page {
      background-color: rgb(192, 240, 225);

      header {
        background-color: white;
        border-bottom-left-radius: 2.5em;
        border-bottom-right-radius: 2.5em;

        position: relative;
      }
      .greetings {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
      }

      .gear-icon-container {
        padding-right: 6vw;
      }
    }

    &.ranking-common-page {
      background-color: #2bcb9a;
    }
  }

  @media screen and (min-width: 1281px) {
    .gear-icon-container {
      display: none;
    }
  }
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

export const StyledMain = styled.main`
  position: relative;
`;
