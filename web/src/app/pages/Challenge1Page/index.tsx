import { Button, ChallengeMessage } from "../../shared/components";
import LandImage from "../../shared/assets/DropAreasBackgrounds/Land.svg";
import SeaImage from "../../shared/assets/DropAreasBackgrounds/Sea.svg";
import LionImage from "../../shared/assets/DragAreasImages/Lion.svg";
import Fish1Image from "../../shared/assets/DragAreasImages/Fish1.svg";
import ElephantImage from "../../shared/assets/DragAreasImages/Elephant.svg";
import Fish2Image from "../../shared/assets/DragAreasImages/Fish2.svg";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import {
  StyledActivityDragGroup,
  StyledActivityGroup,
  StyledChallengeContainer,
  StyledDropAreaContainer,
  StyledDropAreaContent,
  StyledDroppableRegion,
  StyledMainChallengeContainer,
} from "./styles";
import { DraggableComponents } from "../../shared/components/DraggableComponents";
import { useCallback, useMemo, useState } from "react";

type TCharacterGroup = "TERRESTRE" | "AQUATICO";

interface IDraggableCharacterProps {
  group: TCharacterGroup;
  index: number;
  image: string;
  description: string;
}

interface IDropAreaContainerProps {
  group: TCharacterGroup;
  firstDropArea: IDraggableCharacterProps[];
  secondDropArea: IDraggableCharacterProps[];
  onDrop(): void;
  setActiveDragContainerIndex: React.Dispatch<
    React.SetStateAction<number | null>
  >;
}

interface IDropAreaContainerStyles {
  colors: {
    background: string;
    text: string;
    dropArea: string;
  };
  title: string;
  image: string;
  imageDescription: string;
}

function getCharacterGroupColor(group: TCharacterGroup): string {
  if (group === "TERRESTRE") return "#F2EEEA";

  if (group === "AQUATICO") return "#E6F6FE";

  return "#fff";
}

function draggableCharacterMapper(
  array: IDraggableCharacterProps[],
  setActiveDragContainerIndex: React.Dispatch<
    React.SetStateAction<number | null>
  >
) {
  return (
    <>
      {array.map((character) => (
        <DraggableComponents.DragContainer
          key={character.index}
          color={getCharacterGroupColor(character.group)}
          index={character.index}
          setActiveDragContainerIndex={setActiveDragContainerIndex}
        >
          <img src={character.image} alt={character.description} />
        </DraggableComponents.DragContainer>
      ))}
    </>
  );
}

function DropAreaContainer({
  group,
  firstDropArea,
  secondDropArea,
  onDrop,
  setActiveDragContainerIndex,
}: IDropAreaContainerProps) {
  const styles = useMemo((): IDropAreaContainerStyles => {
    if (group === "TERRESTRE")
      return {
        colors: {
          background: "#F2EEEA",
          text: "#7C4D29",
          dropArea: "#E6DFD7",
        },
        title: "Terrestres",
        image: LandImage,
        imageDescription: "land",
      };

    if (group === "AQUATICO")
      return {
        colors: {
          background: "#E6F6FE",
          text: "#039EF5",
          dropArea: "#CFEEFD",
        },
        title: "Aquáticos",
        image: SeaImage,
        imageDescription: "sea",
      };

    return {} as IDropAreaContainerStyles;
  }, [group]);

  return (
    <StyledDropAreaContainer
      background={styles.colors.background}
      color={styles.colors.text}
    >
      <StyledDropAreaContent>
        <img src={styles.image} alt={styles.imageDescription} />

        <p>{styles.title}</p>

        <StyledDroppableRegion>
          <DraggableComponents.DropContainer
            color={styles.colors.dropArea}
            onDrop={onDrop}
          >
            {draggableCharacterMapper(
              firstDropArea,
              setActiveDragContainerIndex
            )}
          </DraggableComponents.DropContainer>

          <DraggableComponents.DropContainer
            color={styles.colors.dropArea}
            onDrop={onDrop}
          >
            {draggableCharacterMapper(
              secondDropArea,
              setActiveDragContainerIndex
            )}
          </DraggableComponents.DropContainer>
        </StyledDroppableRegion>
      </StyledDropAreaContent>
    </StyledDropAreaContainer>
  );
}

export function Challenge1Page() {
  const [_, setActiveDragContainerIndex] = useState<number | null>(null);

  const [firstCharacterGroup] = useState<IDraggableCharacterProps[]>([
    {
      group: "TERRESTRE",
      index: 0,
      image: LionImage,
      description: "lion",
    },
    {
      group: "AQUATICO",
      index: 1,
      image: Fish1Image,
      description: "blue fish",
    },
  ]);

  const [secondCharacterGroup] = useState<IDraggableCharacterProps[]>([
    {
      group: "TERRESTRE",
      index: 2,
      image: ElephantImage,
      description: "elephant",
    },
    {
      group: "AQUATICO",
      index: 3,
      image: Fish2Image,
      description: "orange fish",
    },
  ]);

  const [firstDropArea] = useState<IDraggableCharacterProps[]>([]);
  const [secondDropArea] = useState<IDraggableCharacterProps[]>([]);
  const [thirdDropArea] = useState<IDraggableCharacterProps[]>([]);
  const [fourthDropArea] = useState<IDraggableCharacterProps[]>([]);

  const handleDropInFirstArea = useCallback(() => {}, []);

  const handleDropInSecondArea = useCallback(() => {}, []);

  return (
    <ChallengePageContainer currentLevel={1}>
      <StyledChallengeContainer>
        <ChallengeMessage>
          Arraste os <strong>animais</strong> para o grupo a que eles pertencem
        </ChallengeMessage>

        <StyledMainChallengeContainer>
          <StyledActivityGroup>
            <StyledActivityDragGroup>
              {draggableCharacterMapper(
                firstCharacterGroup,
                setActiveDragContainerIndex
              )}
            </StyledActivityDragGroup>

            <DropAreaContainer
              group="TERRESTRE"
              firstDropArea={firstDropArea}
              secondDropArea={secondDropArea}
              onDrop={handleDropInFirstArea}
              setActiveDragContainerIndex={setActiveDragContainerIndex}
            />
          </StyledActivityGroup>

          <StyledActivityGroup>
            <StyledActivityDragGroup>
              {draggableCharacterMapper(
                secondCharacterGroup,
                setActiveDragContainerIndex
              )}
            </StyledActivityDragGroup>

            <DropAreaContainer
              group="AQUATICO"
              firstDropArea={thirdDropArea}
              secondDropArea={fourthDropArea}
              onDrop={handleDropInSecondArea}
              setActiveDragContainerIndex={setActiveDragContainerIndex}
            />
          </StyledActivityGroup>
        </StyledMainChallengeContainer>

        <Button color="green" text="VERIFICAR" />
      </StyledChallengeContainer>
    </ChallengePageContainer>
  );
}
