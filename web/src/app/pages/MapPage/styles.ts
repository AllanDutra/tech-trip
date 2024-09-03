import styled from "styled-components";

export const TrackContainer = styled.div`
  font-family: "Lilita One", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgb(192, 240, 225);
`;

export const ProgressContainer = styled.div`
  width: 20%;
`;

export const TrackHeader = styled.div`
  position: fixed;
  top: 0px;
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
  min-height: fit-content;
  z-index: 2;
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

export const MapContainer = styled.div`
  background-color: rgb(192, 240, 225);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Map = styled.div`
  width: 75%;
  max-width: 340px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 8em 0;
`;

export const Challenge = styled.div<{
  bottom: number;
  left: number;
  completed?: boolean;
}>`
  bottom: ${(props) => props.bottom}%;
  left: ${(props) => props.left}%;
  background-color: ${(props) => (props.completed ? "#2BCB9A" : "#fff")};
  color: ${(props) => (props.completed ? "#fff" : "#545456")};;
  border-radius: 1em;
  width: 4em;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  box-shadow: 0 0.3em rgba(0, 0, 0, 0.1);

  span{
    font-size: 2em;
  }
`;

export const LineContainer = styled.div<{
  bottom: number;
  left: number;
}>`
  bottom: ${(props) => props.bottom}%;
  left: ${(props) => props.left}%;
  z-index: 0;
  /* background-color: red; */
  width: fit-content;
  position: relative;
`;
