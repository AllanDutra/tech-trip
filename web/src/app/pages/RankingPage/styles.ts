import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: #2bcb9a;
  font-family: "Montserrat Alternates", sans-serif;
  min-width: 320px;
  height: 100vh;
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
  margin: 1em 0;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.div`
  color: #fff;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 700;
  font-size: 1.2em;
  text-align: center;
`;

export const FeaturedSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: end;
`;

export const FeaturedCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: fit-content;
`;

export const Name = styled.span`
  font-weight: 600;
`;

export const Points = styled.span`
  font-size: 0.9em;
`;

export const CharacterFeatured = styled.div`
  display: flex;
  align-items: center;
`;

export const MedalContainer = styled.span`

  position: relative;
  bottom: -15px;
  left: -18px;
`;

export const StudentList = styled.ul`
  width: 100%;
  height: 65%;
  overflow-y: scroll;
  background-color: #fff;
  border-radius: 4em;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  padding: 1em 1em 3.5em 1em;
  color: black;
`;

export const StudentItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const Number = styled.div``;

export const StudentInfo = styled.div`
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em 0.5em;
`;

export const CharacterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
