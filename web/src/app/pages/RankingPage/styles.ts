import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: #2bcb9a;
  font-family: "Montserrat Alternates", sans-serif;
  min-width: 320px;
  height: calc(100vh - 74.19px);

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    background-color: #dff7f0;
    padding: 1.25em;
    gap: 0.9375em;
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

export const Featured = styled.div`
  /* margin: 1em 0; */
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    background-color: white;
    border-radius: 0.625em;
    padding-top: 1.25em;
    gap: 1.25em;
    margin-top: 0;
  }
`;

export const StyledLabel = styled.div`
  color: #fff;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 700;
  font-size: 1.2em;
  text-align: center;

  @media screen and (min-width: 1280px) {
    color: #545456;
    text-transform: uppercase;
    font-size: 1.5625em;
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    text-align: center;
  }
`;

export const FeaturedSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: end;

  @media screen and (min-width: 1280px) {
    justify-content: space-around;
  }
`;

export const FeaturedCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: fit-content;

  @media screen and (min-width: 1280px) {
    color: black;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: auto;
  }
`;

export const Name = styled.span`
  font-weight: 600;
  margin-top: 3px;
`;

export const Points = styled.span`
  font-size: 0.9em;
  margin-top: 2px;
`;

export const CharacterFeatured = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media screen and (min-width: 1280px) {
    justify-content: center;
  }
`;

export const MedalContainer = styled.span`
  position: absolute;
  bottom: -0.25em;
  left: 2em;
  width: 1.5625em;
  height: 1.5625em;
`;

export const StudentList = styled.ul`
  width: 100%;
  flex: 1;
  overflow: auto;
  /* overflow-y: scroll; */
  background-color: #fff;
  border-radius: 4em;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  padding: 1em 1em 3.5em 1em;
  color: black;

  @media screen and (min-width: 1280px) {
    border-radius: 0.625em;
  }
`;

export const StudentItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.625em;

  font-family: "Montserrat Alternates", sans-serif;
  font-size: 1em;
  font-weight: 500;
  color: #545456;
`;

export const Number = styled.div``;

export const StudentInfo = styled.div`
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: 0.625em;
`;

export const CharacterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625em;

  .character-container {
    width: 2.5em;
    height: 2.5em;
    border: 1px solid #f3f3f3;

    border-radius: 0.875em;
    overflow: hidden;

    img {
      /* width: 2.5em;
      height: 2.5em; */
      border-radius: 0.875em;
    }
  }
`;

export const StyledTotalScore = styled.span`
  font-size: 0.875em;
  text-align: right;
`;
