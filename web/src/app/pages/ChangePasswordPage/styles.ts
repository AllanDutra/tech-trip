import styled from "styled-components";

export const StyledMain = styled.div`
  height: 100vh;
  min-height: 500px;
  background-color: #2bcb9a;
  font-family: "Montserrat Alternates", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 1280px) {
    height: calc(100vh - 74.19px);
    background-color: #dff7f0;
    padding: 1.25em;
  }
`;

export const SettingsHeader = styled.div`
  background-color: #fff;
  border-bottom-left-radius: 2.2em;
  border-bottom-right-radius: 2.2em;
  display: flex;
  justify-content: space-between;
  padding: 1.5em;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const StyledDesktopHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.875em;

  h2 {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-size: 1.5625em;
    text-align: center;
    color: #545456;
  }

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const SettingsHeaderColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ActionHeader = styled.div`
  cursor: pointer;
`;

export const StyledLabel = styled.div`
  width: 100%;
  display: block;
  color: #424243;
`;

export const StyledLabelBold = styled.div`
  font-weight: 600;
  width: 100%;
  display: block;
  color: #424243;
`;

export const ContainerInformation = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 3em;
  border-top-left-radius: 3em;
  padding: 1.25em;

  @media screen and (min-width: 1280px) {
    border-radius: 0.625em;
    flex: 1;
    justify-content: space-between;
  }
`;

export const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.5em;
  padding: 1.25em 0;
  padding-bottom: 78.88px;

  @media screen and (max-width: 1280px) {
    flex: 1;
  }

  @media screen and (min-width: 1280px) {
    max-width: 80%;
  }
`;

export const LabelForm = styled.label`
  font-weight: 500;
  color: #545456b3;
  font-size: 1.17em;
`;

export const GenderButtons = styled.div`
  padding: 0.7em 0;
  width: 100%;
`;

export const PreferenceSection = styled.div`
  display: flex;
  margin: 2.2em 0;
  width: 100%;
  justify-content: center;
  gap: 1.5em;
`;

export const CharacterPickerContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.13);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.5em;
  padding: 1em;
`;

export const Characters = styled.div`
  flex-basis: 20%;
  /* background-color: rgba(0, 0, 0, 0.13); */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    flex-basis: 15%;
  }
`;
export const ButtonChangePassword = styled.div`
  background-color: rgba(0, 0, 0, 0.13);
  border-radius: 0.7em;
  padding: 0.7em;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;
