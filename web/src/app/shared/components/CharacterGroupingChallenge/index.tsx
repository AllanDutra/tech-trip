import { Button, ChallengeMessage } from "..";
import { ChallengePageContainer } from "../ChallengePageContainer";
import {
  StyledActivityDragGroup,
  StyledActivityGroup,
  StyledChallengeContainer,
  StyledDropAreaContainer,
  StyledDropAreaContent,
  StyledDroppableRegion,
  StyledMainChallengeContainer,
} from "./styles";
import { DraggableComponents } from "../DraggableComponents";
import React, { ReactNode, useCallback, useMemo, useState } from "react";

// ? First challenge images:
import LandImage from "../../assets/DropAreasBackgrounds/Land.svg";
import SeaImage from "../../assets/DropAreasBackgrounds/Sea.svg";

// ? Third challenge images:
import CircuitImage from "../../assets/DropAreasBackgrounds/Circuit.png";
import SoftwareImage from "../../assets/DropAreasBackgrounds/Software.png";

type TCharacterGroup = "TERRESTRE" | "AQUATICO" | "HARDWARE" | "SOFTWARE";

interface ICharacterGroupStateToUpdate {
  state: IDraggableCharacterProps[];
  setState: React.Dispatch<React.SetStateAction<IDraggableCharacterProps[]>>;
}

export interface IDraggableCharacterProps {
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

interface ICharacterGroupingChallengeProps {
  currentLevel: number;
  challengeMessage: ReactNode;

  firstCharacterGroupType: TCharacterGroup;
  secondCharacterGroupType: TCharacterGroup;

  firstCharacterGroup: IDraggableCharacterProps[];
  secondCharacterGroup: IDraggableCharacterProps[];
}

function getCharacterGroupColor(group: TCharacterGroup): string {
  if (group === "TERRESTRE") return "#F2EEEA";

  if (group === "AQUATICO") return "#E6F6FE";

  if (group === "HARDWARE") return "#D8F2F1";

  if (group === "SOFTWARE") return "#FCDEDB";

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

    if (group === "HARDWARE")
      return {
        colors: {
          background: "#D8F2F1",
          text: "#4B9F98",
          dropArea: "#BBE8E6",
        },
        title: `Físicos\n(Hardwares)`,
        image: CircuitImage,
        imageDescription: "circuit",
      };

    if (group === "SOFTWARE")
      return {
        colors: {
          background: "#FCDEDB",
          text: "#C8695F",
          dropArea: "#F9BCB6",
        },
        title: `Aplicativos\n(Softwares)`,
        image: SoftwareImage,
        imageDescription: "software",
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

export function CharacterGroupingChallenge({
  currentLevel,
  challengeMessage,

  firstCharacterGroupType,
  secondCharacterGroupType,

  firstCharacterGroup,
  secondCharacterGroup,
}: ICharacterGroupingChallengeProps) {
  const [activeDragContainerIndex, setActiveDragContainerIndex] = useState<
    number | null
  >(null);

  const firstCharacterGroupState = useState<IDraggableCharacterProps[]>([
    ...firstCharacterGroup,
  ]);
  const secondCharacterGroupState = useState<IDraggableCharacterProps[]>([
    ...secondCharacterGroup,
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
    <ChallengePageContainer currentLevel={currentLevel}>
      <StyledChallengeContainer>
        <ChallengeMessage>{challengeMessage}</ChallengeMessage>

        <StyledMainChallengeContainer>
          <StyledActivityGroup>
            <StyledActivityDragGroup
              className={`activity-drag-group ${
                firstCharacterGroupState[0].length < 2
                  ? "drop-container-visible"
                  : ""
              }`}
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
              group={firstCharacterGroupType}
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
              className={`activity-drag-group ${
                secondCharacterGroupState[0].length < 2
                  ? "drop-container-visible"
                  : ""
              }`}
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
              group={secondCharacterGroupType}
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
