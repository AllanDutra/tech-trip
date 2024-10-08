import { Button, ChallengeMessage } from "..";
import { ChallengePageContainer } from "../ChallengePageContainer";
import {
  StyledActivityChooseGroup,
  StyledActivityGroup,
  StyledChallengeContainer,
  StyledDropAreaContainer,
  StyledDropAreaContent,
  StyledDroppableRegion,
  StyledMainChallengeContainer,
} from "./styles";
import React, { ReactNode, useCallback, useMemo, useState } from "react";

// ? First challenge images:
import LandImage from "../../assets/DropAreasBackgrounds/Land.svg";
import SeaImage from "../../assets/DropAreasBackgrounds/Sea.svg";

// ? Third challenge images:
import CircuitImage from "../../assets/DropAreasBackgrounds/Circuit.png";
import SoftwareImage from "../../assets/DropAreasBackgrounds/Software.png";
import { SelectableComponents } from "../SelectableComponents";
import { Functions, TChooseGroupState } from "../../functions";

type TCharacterGroup = "TERRESTRE" | "AQUATICO" | "HARDWARE" | "SOFTWARE";

export interface ISelectableCharacterProps {
  group: TCharacterGroup;
  index: number;
  image: string;
  description: string;
}

interface IDropAreaContainerProps {
  group: TCharacterGroup;
  firstDropAreaState: TChooseGroupState<ISelectableCharacterProps>;
  secondDropAreaState: TChooseGroupState<ISelectableCharacterProps>;
  activeChooseContainerIndex: number | null;
  onChooseAndTarget(
    targetArrayState: TChooseGroupState<ISelectableCharacterProps>
  ): void;
  setActiveChooseContainerIndex: React.Dispatch<
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

interface ICharacterGroupingChallengeProps {
  currentLevel: number;
  challengeMessage: ReactNode;

  firstCharacterGroupType: TCharacterGroup;
  secondCharacterGroupType: TCharacterGroup;

  firstCharacterGroup: ISelectableCharacterProps[];
  secondCharacterGroup: ISelectableCharacterProps[];
}

function getCharacterGroupColor(group: TCharacterGroup): string {
  if (group === "TERRESTRE") return "#F2EEEA";

  if (group === "AQUATICO") return "#E6F6FE";

  if (group === "HARDWARE") return "#D8F2F1";

  if (group === "SOFTWARE") return "#FCDEDB";

  return "#fff";
}

function getCharacterGroupTargetColor(group: TCharacterGroup): string {
  if (group === "TERRESTRE") return "#E6DFD7";

  if (group === "AQUATICO") return "#CFEEFD";

  if (group === "HARDWARE") return "#BBE8E6";

  if (group === "SOFTWARE") return "#F9BCB6";

  return "#fff";
}

function selectableCharacterMapper(
  arrayState: TChooseGroupState<ISelectableCharacterProps>,
  activeChooseContainerIndex: number | null,
  setActiveChooseContainerIndex: React.Dispatch<
    React.SetStateAction<number | null>
  >,
  onChooseAndTarget: (
    targetArrayState: TChooseGroupState<ISelectableCharacterProps>
  ) => void,
  characterGroup?: TCharacterGroup
) {
  return (
    <SelectableComponents.TargetContainer
      color={
        characterGroup
          ? getCharacterGroupTargetColor(characterGroup)
          : undefined
      }
      activeChooseContainerIndex={activeChooseContainerIndex}
      onClick={() => onChooseAndTarget(arrayState)}
    >
      {arrayState[0].map((character) => (
        <SelectableComponents.ChooseContainer
          key={character.index}
          color={getCharacterGroupColor(character.group)}
          index={character.index}
          activeChooseContainerIndex={activeChooseContainerIndex}
          setActiveChooseContainerIndex={setActiveChooseContainerIndex}
        >
          <img src={character.image} alt={character.description} />
        </SelectableComponents.ChooseContainer>
      ))}
    </SelectableComponents.TargetContainer>
  );
}

function DropAreaContainer({
  group,
  firstDropAreaState,
  secondDropAreaState,
  activeChooseContainerIndex,
  onChooseAndTarget,
  setActiveChooseContainerIndex,
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
          {selectableCharacterMapper(
            firstDropAreaState,
            activeChooseContainerIndex,
            setActiveChooseContainerIndex,
            onChooseAndTarget,
            group
          )}

          {selectableCharacterMapper(
            secondDropAreaState,
            activeChooseContainerIndex,
            setActiveChooseContainerIndex,
            onChooseAndTarget,
            group
          )}
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
  const [activeChooseContainerIndex, setActiveChooseContainerIndex] = useState<
    number | null
  >(null);

  const firstCharacterGroupState = useState<ISelectableCharacterProps[]>([
    firstCharacterGroup[0],
  ]);
  const secondCharacterGroupState = useState<ISelectableCharacterProps[]>([
    firstCharacterGroup[1],
  ]);
  const thirdCharacterGroupState = useState<ISelectableCharacterProps[]>([
    secondCharacterGroup[0],
  ]);
  const fourthCharacterGroupState = useState<ISelectableCharacterProps[]>([
    secondCharacterGroup[1],
  ]);

  const firstDropAreaState = useState<ISelectableCharacterProps[]>([]);
  const secondDropAreaState = useState<ISelectableCharacterProps[]>([]);
  const thirdDropAreaState = useState<ISelectableCharacterProps[]>([]);
  const fourthDropAreaState = useState<ISelectableCharacterProps[]>([]);

  const handleChooseAndTarget = useCallback(
    (targetArrayState: TChooseGroupState<ISelectableCharacterProps>) => {
      Functions.onChooseAndTarget<ISelectableCharacterProps>(
        activeChooseContainerIndex,
        [
          firstCharacterGroupState,
          secondCharacterGroupState,
          thirdCharacterGroupState,
          fourthCharacterGroupState,
          firstDropAreaState,
          secondDropAreaState,
          thirdDropAreaState,
          fourthDropAreaState,
        ],
        targetArrayState[0],
        setActiveChooseContainerIndex,
        targetArrayState[1]
      );
    },
    [
      activeChooseContainerIndex,
      firstCharacterGroupState,
      secondCharacterGroupState,
      thirdCharacterGroupState,
      fourthCharacterGroupState,
      firstDropAreaState,
      secondDropAreaState,
      thirdDropAreaState,
      fourthDropAreaState,
      setActiveChooseContainerIndex,
    ]
  );

  return (
    <ChallengePageContainer currentLevel={currentLevel}>
      <StyledChallengeContainer>
        <ChallengeMessage>{challengeMessage}</ChallengeMessage>

        <StyledMainChallengeContainer>
          <StyledActivityGroup>
            <StyledActivityChooseGroup className="activity-choose-group">
              {selectableCharacterMapper(
                firstCharacterGroupState,
                activeChooseContainerIndex,
                setActiveChooseContainerIndex,
                handleChooseAndTarget
              )}

              {selectableCharacterMapper(
                secondCharacterGroupState,
                activeChooseContainerIndex,
                setActiveChooseContainerIndex,
                handleChooseAndTarget
              )}
            </StyledActivityChooseGroup>

            <DropAreaContainer
              group={firstCharacterGroupType}
              firstDropAreaState={firstDropAreaState}
              secondDropAreaState={secondDropAreaState}
              onChooseAndTarget={handleChooseAndTarget}
              activeChooseContainerIndex={activeChooseContainerIndex}
              setActiveChooseContainerIndex={setActiveChooseContainerIndex}
            />
          </StyledActivityGroup>

          <StyledActivityGroup>
            <StyledActivityChooseGroup className="activity-choose-group">
              {selectableCharacterMapper(
                thirdCharacterGroupState,
                activeChooseContainerIndex,
                setActiveChooseContainerIndex,
                handleChooseAndTarget
              )}

              {selectableCharacterMapper(
                fourthCharacterGroupState,
                activeChooseContainerIndex,
                setActiveChooseContainerIndex,
                handleChooseAndTarget
              )}
            </StyledActivityChooseGroup>

            <DropAreaContainer
              group={secondCharacterGroupType}
              firstDropAreaState={thirdDropAreaState}
              secondDropAreaState={fourthDropAreaState}
              onChooseAndTarget={handleChooseAndTarget}
              activeChooseContainerIndex={activeChooseContainerIndex}
              setActiveChooseContainerIndex={setActiveChooseContainerIndex}
            />
          </StyledActivityGroup>
        </StyledMainChallengeContainer>

        <Button color="green" text="VERIFICAR" />
      </StyledChallengeContainer>
    </ChallengePageContainer>
  );
}
