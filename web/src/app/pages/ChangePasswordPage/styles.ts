import styled from "styled-components";

export const StyledMain = styled.div`
  height: 100vh;
  min-height: 500px;
  background-color: #2bcb9a;
  font-family: "Montserrat Alternates", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const ContainerInformation = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em;
  border-top-right-radius: 3em;
  border-top-left-radius: 3em;
  gap: 1em;
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