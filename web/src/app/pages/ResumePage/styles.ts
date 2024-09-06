import styled from "styled-components";

export const StyledMain = styled.div`
  height: 100vh;
  background-color: #bfefe1;
  font-family: "Montserrat Alternates", sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2.5em;
  box-sizing: border-box;
  align-items: center;
  background: #fff;
  border-bottom-left-radius: 3em;
  border-bottom-right-radius: 3em;
  width: 100%;
  padding: 1em;
`;

export const ProgressContainer = styled.div`
  width: 20%;
  max-width: 110px;
`;

export const Greetings = styled.div`
  color: #545456;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 500;

  span {
    font-family: "Lilita One", sans-serif;
    font-weight: 600;
    font-size: 2em;
  }
`;

export const ActionHeader = styled.div`
  cursor: pointer;
  color: var(--main-color);
`;

export const StyledLabel = styled.div`
  color: #545456;
  font-family: "Lilita One", sans-serif;
  font-weight: 600;
`;

export const Indicator = styled.div`
  background-color: #fff;

  span {
    font-family: "Zen Maru Gothic", sans-serif;
  }
`;

export const IndicatorContent = styled.div<{color: string;}>`
  display: flex;
  color: ${(props) => props.color};
  align-items: center;
  gap: 0.2em;
`;

export const List = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
