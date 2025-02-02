import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 10vh; */
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  /* height: 101vh; */
  height: 100vh;
  background-color: #2bcb9a;
  background-image: url("src/app/shared/assets/Images/Background.png");

  @media (max-width: 512px) {
    align-items: end;
  }

  @media (max-height: 618px) {
    align-items: center;
    min-height: 700px;
    overflow: scroll;
  }
`;

export const LoginForm = styled.form`
  background-color: #fff;
  border-radius: 2em;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 2.5em 1.5em;
  box-shadow: 0 0.7em 0.2em rgba(0, 0, 0, 0.1);
  max-width: 32em;

  @media (min-width: 512px) {
    border-radius: 1em;
    padding: 4em 3em;
  }
`;

export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-bottom: 2em;
`;

export const SubTitle = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 400;
  font-size: 1.1em;
  font-style: normal;
  text-align: left;
`;

export const LoginMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6em;
  padding-bottom: 4em;
`;

export const LoginFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
