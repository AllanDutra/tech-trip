import styled from "styled-components";

export const SettingsContainer = styled.div`
  height: 100vh;
  background-color: #2bcb9a;
  font-family: "Montserrat Alternates", sans-serif;
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
`;

export const CharacterContainer = styled.div`
  box-shadow: 0 0.4em rgba(0, 0, 0, 0.1);
  border-radius: 1.1em;
  margin-bottom: 0.8em;
`;

export const Name = styled.div`
  color: #fff;
  font-family: "Lilita One", sans-serif;
  font-size: 1.3em;
  margin-bottom: 0.8em;
`;

export const ButtonChangeImage = styled.div<{ isOpen: boolean }>`
  background-color: rgba(0, 0, 0, 0.13);
  border-radius: ${(props) => (props.isOpen ? '0.7em 0.7em 0 0' : '0.7em')};
  padding: 0.7em;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
`;

export const ContainerInformation = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.3em;
  border-top-right-radius: 3em;
  border-top-left-radius: 3em;
  gap: 0.8em;
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
  flex-basis: 30%;
`;

export const ConfirmButton = styled.div``;
