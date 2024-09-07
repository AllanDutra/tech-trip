import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: #bfefe1;
  font-family: "Montserrat Alternates", sans-serif;
  min-width: 320px;
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
  color: #2bcb9a;
`;

export const Content = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const CharacterPicture = styled.div`
  margin: auto;
  width: fit-content;
  border-radius: 1em;
  box-shadow: 0 0.4em rgba(0, 0, 0, 0.1);
`;

export const StyledLabel = styled.div`
  color: #545456;
  font-family: "Lilita One", sans-serif;
  font-weight: 500;
  font-size: 1.4em;
`;

export const IndicatorArea = styled.div`
  display: flex;
  gap: 1em;
`;

export const Indicator = styled.div`
  background-color: #fff;
  max-width: 344px;
  width: 100%;
  padding: 1em;
  border-radius: 1.2em;
  box-shadow: 0 0.4em rgba(0, 0, 0, 0.1);
  font-family: "Zen Maru Gothic", sans-serif;
  font-weight: 600;
`;

export const IndicatorTitle = styled.span`
  color: #545456;
`;

export const IndicatorContent = styled.div<{ color: string }>`
  display: flex;
  color: ${(props) => props.color};
  align-items: center;
  gap: 0.4em;

  span {
    font-size: 1.5em;
    font-weight: bold;
  }
`;

export const List = styled.div`
  background-color: #fff;
  padding: 1em;
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-bottom: 3.5em;
`;

export const Number = styled.div`
  background-color: #2bcb9a;
  border-radius: 1.2em;
  width: 3.5em;
  height: 3.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-family: "Montserrat Alternates", sans-serif;
    color: #fff;
    font-size: 1.7em;
    font-weight: 900;
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  gap: 0.5em;
  width: fit-content;
`;

export const DiamondContainer = styled.div<{ visibility: string }>`
  color: #00c3ff;
  display: flex;
  gap: 0.3em;
  margin-right: 0.8em;
  width: fit-content;
  visibility: ${(props) => props.visibility};
  span {
    font-size: 1.2em;
  }
`;

export const ListItem = styled.div`
  background-color: #dff7f0;
  display: flex;
  align-items: center;
  height: fit-content;
  width: 100%;
  border-radius: 1.2em;
  justify-content: space-between;
`;
