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
import React, { useCallback, useMemo, useState } from "react";

type TCharacterGroup = "TERRESTRE" | "AQUATICO";

interface ICharacterGroupStateToUpdate {
  state: IDraggableCharacterProps[];
  setState: React.Dispatch<React.SetStateAction<IDraggableCharacterProps[]>>;
}

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
  onDrop(
    isDropAreaContainer: boolean,
    dropAreaElements: IDraggableCharacterProps[],
    setDropAreaElements: React.Dispatch<
      React.SetStateAction<IDraggableCharacterProps[]>
    >
  ): void;
  setActiveDragContainerIndex: React.Dispatch<
    React.SetStateAction<number | null>
  >;
  setFirstDropArea: React.Dispatch<
    React.SetStateAction<IDraggableCharacterProps[]>
  >;
  setSecondDropArea: React.Dispatch<
    React.SetStateAction<IDraggableCharacterProps[]>
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
  setFirstDropArea,
  setSecondDropArea,
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
        <img
          className="drop-area-image"
          src={styles.image}
          alt={styles.imageDescription}
        />

        <p>{styles.title}</p>

        <StyledDroppableRegion>
          <DraggableComponents.DropContainer
            color={styles.colors.dropArea}
            onDrop={() => onDrop(true, firstDropArea, setFirstDropArea)}
          >
            {draggableCharacterMapper(
              firstDropArea,
              setActiveDragContainerIndex
            )}
          </DraggableComponents.DropContainer>

          <DraggableComponents.DropContainer
            color={styles.colors.dropArea}
            onDrop={() => onDrop(true, secondDropArea, setSecondDropArea)}
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
  const [activeDragContainerIndex, setActiveDragContainerIndex] = useState<
    number | null
  >(null);

  const firstCharacterGroupState = useState<IDraggableCharacterProps[]>([
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
  const secondCharacterGroupState = useState<IDraggableCharacterProps[]>([
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

  const firstDropAreaState = useState<IDraggableCharacterProps[]>([]);
  const secondDropAreaState = useState<IDraggableCharacterProps[]>([]);
  const thirdDropAreaState = useState<IDraggableCharacterProps[]>([]);
  const fourthDropAreaState = useState<IDraggableCharacterProps[]>([]);

  const handleDrop = useCallback(
    (
      isDropAreaContainer: boolean,
      dropAreaElements: IDraggableCharacterProps[],
      setDropAreaElements: React.Dispatch<
        React.SetStateAction<IDraggableCharacterProps[]>
      >
    ) => {
      if (
        activeDragContainerIndex === null ||
        activeDragContainerIndex === undefined
      )
        return;

      const characterGroup = {} as ICharacterGroupStateToUpdate;

      const listsOfCharacterGroupsStates = [
        firstCharacterGroupState,
        secondCharacterGroupState,
        firstDropAreaState,
        secondDropAreaState,
        thirdDropAreaState,
        fourthDropAreaState,
      ];

      for (let i = 0; i < listsOfCharacterGroupsStates.length; i++) {
        const characterGroupState = listsOfCharacterGroupsStates[i];

        const index = characterGroupState[0].findIndex(
          (c) => c.index === activeDragContainerIndex
        );

        if (index === -1) continue;

        characterGroup.state = characterGroupState[0];
        characterGroup.setState = characterGroupState[1];

        break;
      }

      const { state, setState } = characterGroup;

      const characterToMove = state.find(
        (c) => c.index === activeDragContainerIndex
      ) as IDraggableCharacterProps;

      const arrayIndexOfMovedCharacter = state.findIndex(
        (c) => c.index === activeDragContainerIndex
      );

      if (isDropAreaContainer) {
        if (dropAreaElements.length > 0) {
          const characterReplacedInDropArea = dropAreaElements[0];
          setDropAreaElements((oldValue) =>
            oldValue.splice(0, 1, characterToMove)
          );
          setState((oldValue) =>
            oldValue.splice(
              arrayIndexOfMovedCharacter,
              1,
              characterReplacedInDropArea
            )
          );
        } else {
          setDropAreaElements([characterToMove]);
          setState((oldValue) =>
            oldValue.filter((c) => c.index !== activeDragContainerIndex)
          );
        }
      } else {
        if (dropAreaElements.length === 2) return;

        setDropAreaElements((oldValue) => [characterToMove, ...oldValue]);

        setState((oldValue) =>
          oldValue.filter((c) => c.index !== activeDragContainerIndex)
        );
      }
    },
    [
      activeDragContainerIndex,
      firstCharacterGroupState,
      secondCharacterGroupState,
      firstDropAreaState,
      secondDropAreaState,
      thirdDropAreaState,
      fourthDropAreaState,
    ]
  );

  return (
    <ChallengePageContainer currentLevel={1}>
      <StyledChallengeContainer>
        <ChallengeMessage>
          Arraste os <strong>animais</strong> para o grupo a que eles pertencem
        </ChallengeMessage>

        <StyledMainChallengeContainer>
          <StyledActivityGroup>
            <StyledActivityDragGroup
              className={
                firstCharacterGroupState[0].length < 2
                  ? "drop-container-visible"
                  : ""
              }
            >
              <DraggableComponents.DropContainer
                onDrop={() =>
                  handleDrop(
                    false,
                    firstCharacterGroupState[0],
                    firstCharacterGroupState[1]
                  )
                }
              />
              {draggableCharacterMapper(
                firstCharacterGroupState[0],
                setActiveDragContainerIndex
              )}
            </StyledActivityDragGroup>

            <DropAreaContainer
              group="TERRESTRE"
              firstDropArea={firstDropAreaState[0]}
              secondDropArea={secondDropAreaState[0]}
              onDrop={handleDrop}
              setActiveDragContainerIndex={setActiveDragContainerIndex}
              setFirstDropArea={firstDropAreaState[1]}
              setSecondDropArea={secondDropAreaState[1]}
            />
          </StyledActivityGroup>

          <StyledActivityGroup>
            <StyledActivityDragGroup
              className={
                secondCharacterGroupState[0].length < 2
                  ? "drop-container-visible"
                  : ""
              }
            >
              <DraggableComponents.DropContainer
                onDrop={() =>
                  handleDrop(
                    false,
                    secondCharacterGroupState[0],
                    secondCharacterGroupState[1]
                  )
                }
              />

              {draggableCharacterMapper(
                secondCharacterGroupState[0],
                setActiveDragContainerIndex
              )}
            </StyledActivityDragGroup>

            <DropAreaContainer
              group="AQUATICO"
              firstDropArea={thirdDropAreaState[0]}
              secondDropArea={fourthDropAreaState[0]}
              onDrop={handleDrop}
              setActiveDragContainerIndex={setActiveDragContainerIndex}
              setFirstDropArea={thirdDropAreaState[1]}
              setSecondDropArea={fourthDropAreaState[1]}
            />
          </StyledActivityGroup>
        </StyledMainChallengeContainer>

        <Button color="green" text="VERIFICAR" />
      </StyledChallengeContainer>
    </ChallengePageContainer>
  );
}
