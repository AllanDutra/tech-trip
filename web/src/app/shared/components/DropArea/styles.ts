import styled from "styled-components";

export const DropZone = styled.div<{
  isOver: boolean;
  backgroundColor: string;
  backgroundImage?: string;
  boxShadowContainer: string;
}>`
  width: 100%;
  height: 20vh;
  min-height: 8em;
  background-color: ${({ isOver, backgroundColor }) =>
    isOver ? "rgba(0, 0, 0, 0.1)" : backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
  transition: background-color 0.3s ease;
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : "none"};
  background-position: bottom;
  background-size: contain 6.25em;
  background-repeat: repeat-x;
  border-radius: 0.625em;
  box-shadow: 0 -0.3em ${(props) => props.boxShadowContainer};
`;

export const GroupTitle = styled.h2<{ color: string }>`
  /* font-size: 0.875em; */
  font-family: "Lilita One", sans-serif;
  font-weight: lighter;
  color: ${(props) => props.color};
`;

export const DropBox = styled.div<{ boxColor: string; boxShadowBox: string }>`
  background-color: ${(props) => props.boxColor};
  box-shadow: 0 -0.3em ${(props) => props.boxShadowBox};
  border-radius: 0.9em;
  width: 3.75em;
  height: 3.75em;
`;
