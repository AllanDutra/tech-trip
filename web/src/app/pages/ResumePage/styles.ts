import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: #bfefe1;
  font-family: "Montserrat Alternates", sans-serif;
  min-width: 320px;

  @media screen and (min-width: 1280px) {
    overflow: hidden;
  }
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

  gap: 1.25em;

  @media screen and (min-width: 1280px) {
    height: 100%;
  }
`;

export const CharacterPicture = styled.div`
  margin: auto;
  width: fit-content;
  border-radius: 1em;
  box-shadow: 0 0.4em rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 680px) {
    display: none;
  }
`;

export const StyledTotalScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625em;

  .desktop {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2em 1.25em;

    background-color: white;
    border-radius: 0.625em;

    .mobile {
      display: none;
    }

    .desktop {
      display: flex;
    }

    strong.desktop {
      font-size: 1.5625em;
      font-family: "Lilita One", sans-serif;
      font-weight: 400;
      letter-spacing: 0.5px;
    }

    .indicator {
      box-shadow: none;
      width: auto;
    }

    .label {
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-size: 1.5625em;
    }
  }
`;

export const StyledResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625em;

  @media screen and (min-width: 1280px) {
    background-color: white;
    border-radius: 0.625em;
    padding: 1.25em;
    gap: 1.25em;
    height: 79%;
    overflow: auto;

    .label {
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-size: 1.5625em;
    }

    .list {
      flex: 1;
      padding: 0;
      margin: 0;
    }
  }
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
  /* max-width: 344px; */
  width: 100%;
  box-shadow: 0 0.4em rgba(0, 0, 0, 0.1);
  font-family: "Zen Maru Gothic", sans-serif;
  font-weight: 600;

  padding: 0.625em 1em;
  border-radius: 1.25em;

  display: flex;
  flex-direction: column;

  gap: 0.5em;

  svg {
    width: 2em;
    height: 2em;
  }
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
    font-family: "Lilita One", sans-serif;
    font-size: 1.5em;
    font-weight: 400;
  }

  padding-left: 0.3125em;
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
  border-radius: 0.8125em;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.3125em;
    font-family: "Montserrat Alternates", sans-serif;
    color: #fff;
    font-weight: 900;
  }

  width: 2.75em;
  height: 2.75em;

  span {
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  gap: 0.5em;
  width: fit-content;

  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const DiamondContainer = styled.div<{ visibility: string }>`
  color: #00c3ff;
  display: flex;
  gap: 0.3em;
  margin-right: 0.8em;
  width: fit-content;
  visibility: ${(props) => props.visibility};

  span {
    font-family: "Lilita One", sans-serif;
    font-size: 1em;
    font-weight: 400;
    text-align: right;
  }
`;

export const ListItem = styled.div`
  background-color: #dff7f0;
  display: flex;
  align-items: center;
  height: fit-content;
  width: 100%;
  border-radius: 0.8125em;
  justify-content: space-between;
  position: relative;
  height: 2.75em;
`;
