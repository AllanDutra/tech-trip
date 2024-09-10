import React from "react";
import { Draggable } from "./styles";

export interface IDraggableProps {
  name: string;
  image: string;
  backgroundColor: string;
}

export const DraggableItem: React.FC<IDraggableProps> = ({ name, image, backgroundColor }) => {
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("animal", name);
  };

  return (
    <Draggable backgroundColor={backgroundColor} draggable onDragStart={onDragStart}>
      <img src={image} alt={name} />
    </Draggable>
  );
};
