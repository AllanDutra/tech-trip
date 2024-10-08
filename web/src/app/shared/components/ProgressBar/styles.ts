import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #ebf1f1;
  border-radius: 3.125em;
  overflow: hidden;
  position: relative;
  height: 2em;
`;

export const Progress = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  background-color: #2bcb9a;
  height: 100%;
  border-radius: 3.125em 0 0 3.125em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 400;
  font-family: "Lilita One", sans-serif;
  font-size: 1.2em;
`;
