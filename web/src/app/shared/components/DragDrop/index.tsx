import { ReactNode } from "react";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { StyledDragContainer, StyledDropContainer } from "./styles";

interface IDragComponentProps {
  draggableId: string;
  index: number;
  children: ReactNode;
}

interface IDropComponentProps {
  droppableId: string;
  children?: ReactNode;
}

function DragContainer({ draggableId, index, children }: IDragComponentProps) {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <StyledDragContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </StyledDragContainer>
      )}
    </Draggable>
  );
}

function DropContainer({ droppableId, children }: IDropComponentProps) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <StyledDropContainer
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {children}
          {provided.placeholder}
        </StyledDropContainer>
      )}
    </Droppable>
  );
}

export const DragDrop = { DragContainer, DropContainer };
