import { ReactNode, useState } from "react";
import {
  DEFAULT_SIZE,
  StyledDragContainer,
  StyledDropContainer,
} from "./styles";

interface IDragContainerProps {
  children: ReactNode;

  color: string;
  index: number;
  setActiveDragContainerIndex: React.Dispatch<
    React.SetStateAction<number | null>
  >;
}

function DragContainer({
  children,

  color,
  index,
  setActiveDragContainerIndex,
}: IDragContainerProps) {
  return (
    <StyledDragContainer
      color={color}
      className="drag-container"
      draggable
      onDragStart={() => setActiveDragContainerIndex(index)}
      onDragEnd={() => setActiveDragContainerIndex(null)}
    >
      {children}
    </StyledDragContainer>
  );
}

interface IDropContainerProps {
  children?: ReactNode;

  color?: string;
  onDrop(): void;
}

function DropContainer({ children, color, onDrop }: IDropContainerProps) {
  const [isDropActive, setIsDropActive] = useState(false);

  return (
    <StyledDropContainer
      className={`drop-container ${
        isDropActive ? "show-drop" : !children ? "hide-drop" : ""
      }`}
      color={color}
      onDragEnter={() => setIsDropActive(true)}
      onDragLeave={() => setIsDropActive(false)}
      onDrop={() => {
        onDrop();
        setIsDropActive(false);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      {children}
    </StyledDropContainer>
  );
}

export const DraggableComponents = {
  DragContainer,
  DropContainer,
  DEFAULT_SIZE,
};
