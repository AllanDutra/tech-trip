import React, { useState } from "react";
import { DropBox, DropZone, GroupTitle } from "./styles";

interface IDropAreaProps {
  group: string;
  backgroundColor: string;
  color: string;
  boxColor: string;
  boxShadowContainer: string;
  boxShadowBox: string;
  backgroundImage?: string;
  onDropAnimal: (animal: string) => void;
}

export const DropArea: React.FC<IDropAreaProps> = ({
  group,
  backgroundColor,
  color,
  boxColor,
  backgroundImage,
  onDropAnimal,
  boxShadowContainer,
  boxShadowBox,
}) => {
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const animal = e.dataTransfer.getData("animal");
    onDropAnimal(animal);
    setIsOver(false);
  };

  return (
    <DropZone
      isOver={isOver}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      boxShadowContainer={boxShadowContainer}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <GroupTitle color={color}>{group}</GroupTitle>
      <DropBox boxColor={boxColor} boxShadowBox={boxShadowBox}></DropBox>
      <DropBox boxColor={boxColor} boxShadowBox={boxShadowBox}></DropBox>
    </DropZone>
  );
};
