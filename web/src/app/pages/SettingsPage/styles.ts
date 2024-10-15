import styled from "styled-components";

export const SettingsContainer = styled.div`
  height: 100vh;
  background-color: #2bcb9a;
  font-family: "Montserrat Alternates", sans-serif;

  @media screen and (min-width: 1280px) {
    height: calc(100vh - 74.19px);
    background-color: #dff7f0;
    padding: 1.25em;

    display: flex;
    flex-direction: column;
    gap: 1.25em;
  }
`;

export const SettingsHeader = styled.div`
  background-color: #fff;
  border-bottom-left-radius: 2.2em;
  border-bottom-right-radius: 2.2em;
  display: flex;
  justify-content: space-between;
  padding: 1.5em;
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

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  //gap: 0.8em;
  align-items: center;
  justify-content: center;
  margin: 2em 0;

  @media screen and (min-width: 1280px) {
    background-color: white;
    border-radius: 0.625em;
    margin: 0 !important;
    padding: 0.875em 1.25em 1.875em 1.25em;
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

export const CharacterContainer = styled.div`
  box-shadow: 0 0.4em rgba(0, 0, 0, 0.1);
  border-radius: 1.1em;
  margin-bottom: 0.8em;

  @media screen and (min-width: 1280px) {
    margin-bottom: 1.25em;
  }
`;

export const Name = styled.div`
  color: #fff;
  font-family: "Lilita One", sans-serif;
  font-size: 1.3em;
  margin-bottom: 0.8em;

  @media screen and (min-width: 1280px) {
    color: #545456;
    margin-bottom: 1.25em;
  }
`;

export const ButtonChangeImage = styled.div<{ isopen: boolean }>`
  background-color: rgba(0, 0, 0, 0.13);
  border-radius: ${(props) => (props.isopen ? "0.7em 0.7em 0 0" : "0.7em")};
  padding: 0.7em;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;

  &:hover {
    filter: brightness(90%);
    transition: all 0.2s;
  }

  @media screen and (min-width: 1280px) {
    background-color: #25ad83;
    margin-bottom: 0;
  }
`;

export const ContainerInformation = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.3em;
  border-top-right-radius: 3em;
  border-top-left-radius: 3em;

  @media screen and (min-width: 1280px) {
    border-radius: 0.625em;
    flex: 1;
    justify-content: space-between;
  }
`;

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.625em;

  @media screen and (min-width: 1280px) {
    width: 100%;
    gap: 1.625em;
    flex-direction: row;
  }
`;

export const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625em;

  @media screen and (min-width: 1280px) {
    width: 100%;
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

  @media screen and (min-width: 1280px) {
    background-color: #25ad83;
    padding: 0.625em;
    flex-wrap: nowrap;
  }
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

export const StyledButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625em;

  div {
    display: flex;
    align-items: center;
    gap: 0.625em;
    margin: 0;
  }

  @media screen and (max-width: 1280px) {
    flex-direction: column;
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

  &:hover {
    filter: brightness(90%);
    transition: all 0.2s;
  }

  @media screen and (min-width: 1280px) {
    background-color: #25ad83;
    margin-bottom: 0;
  }
`;
