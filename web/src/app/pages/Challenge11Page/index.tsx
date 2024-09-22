import React, { ReactNode, useCallback, useMemo, useState } from "react";
import { Button, ChallengeMessage } from "../../shared/components";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { SelectableComponents } from "../../shared/components/SelectableComponents";
import {
  StyledContainer,
  StyledGraph,
  StyledGraphContainer,
  StyledGraphLine,
  StyledParagraphsContainer,
  StyledSelectableCharacterContainer,
  StyledSelectableCharacterMapperContainer,
  StyledSelectableCharactersGroupContainer,
} from "./styles";
import AnaImage from "../../shared/assets/Characters/character-7.svg";
import PedroImage from "../../shared/assets/Characters/character-3.svg";
import EsterImage from "../../shared/assets/Characters/character-10.svg";
import JoaoImage from "../../shared/assets/Characters/character-8.svg";

import GraphLineActiveImage from "../../shared/assets/ChallengesImages/11/GraphLineActive.svg";
import GraphLineInactiveImage from "../../shared/assets/ChallengesImages/11/GraphLineInactive.svg";

interface ISelectableCharacter {
  index: number;
  name: string;
  image: string;
}

interface ICharacterGroupStateToUpdate {
  state: ISelectableCharacter[];
  setState: React.Dispatch<React.SetStateAction<ISelectableCharacter[]>>;
}

interface ISelectableCharacterProps extends ISelectableCharacter {
  graphLineComponent?: ReactNode;
  chooseDisable?: boolean;
  activeChooseContainerIndex: number | null;
  setActiveChooseContainerIndex: React.Dispatch<
    React.SetStateAction<number | null>
  >;
}

type TGraphLineAngle =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

interface IGraphLineProps {
  active: boolean;
  angle: TGraphLineAngle;
}

interface IGraphLineStyles {
  imageSource: string;
  description: string;
}

function SelectableCharacter({
  graphLineComponent,
  chooseDisable = false,
  name,
  image,
  index,
  activeChooseContainerIndex,
  setActiveChooseContainerIndex,
}: ISelectableCharacterProps) {
  return (
    <StyledSelectableCharacterContainer>
      {graphLineComponent}

      <SelectableComponents.ChooseContainer
        chooseDisable={chooseDisable}
        index={index}
        activeChooseContainerIndex={activeChooseContainerIndex}
        setActiveChooseContainerIndex={setActiveChooseContainerIndex}
      >
        <img src={image} alt={name} />

        <span>{name}</span>
      </SelectableComponents.ChooseContainer>
    </StyledSelectableCharacterContainer>
  );
}

function GraphLine({ active = false, angle }: IGraphLineProps) {
  const styles = useMemo(
    (): IGraphLineStyles =>
      active
        ? {
            imageSource: GraphLineActiveImage,
            description: "active",
          }
        : {
            imageSource: GraphLineInactiveImage,
            description: "inactive",
          },
    [active]
  );

  return (
    <StyledGraphLine className={`graph-line ${angle}`}>
      <img src={styles.imageSource} alt={styles.description} />
    </StyledGraphLine>
  );
}

export function Challenge11Page() {
  const rightTargetCharactersState = useState<ISelectableCharacter[]>([]);

  const bottomTargetCharactersState = useState<ISelectableCharacter[]>([]);

  const firstSelectableCharactersGroupState = useState<ISelectableCharacter[]>([
    {
      index: 2,
      name: "Ester",
      image: EsterImage,
    },
  ]);

  const secondSelectableCharactersGroupState = useState<ISelectableCharacter[]>(
    [
      {
        index: 3,
        name: "João",
        image: JoaoImage,
      },
    ]
  );

  const [activeChooseContainerIndex, setActiveChooseContainerIndex] = useState<
    number | null
  >(null);

  const handleClickOnTarget = useCallback(
    ([targetArray, setTargetArray]: [
      ISelectableCharacter[],
      React.Dispatch<React.SetStateAction<ISelectableCharacter[]>>
    ]) => {
      if (
        activeChooseContainerIndex === null ||
        activeChooseContainerIndex === undefined
      )
        return;

      const isMovingForSameSelectableCharactersGroup =
        targetArray.findIndex((c) => c.index === activeChooseContainerIndex) !==
        -1;

      if (isMovingForSameSelectableCharactersGroup) return;

      const characterGroup = {} as ICharacterGroupStateToUpdate;

      const listsOfSelectableCharactersGroupsStates = [
        firstSelectableCharactersGroupState,
        secondSelectableCharactersGroupState,
        bottomTargetCharactersState,
        rightTargetCharactersState,
      ];

      for (let i = 0; i < listsOfSelectableCharactersGroupsStates.length; i++) {
        const characterGroupState = listsOfSelectableCharactersGroupsStates[i];

        const index = characterGroupState[0].findIndex(
          (c) => c.index === activeChooseContainerIndex
        );

        if (index === -1) continue;

        characterGroup.state = characterGroupState[0];
        characterGroup.setState = characterGroupState[1];

        break;
      }

      // ? Current state with selected character
      const { state, setState } = characterGroup;

      const characterToMove = state.find(
        (c) => c.index === activeChooseContainerIndex
      ) as ISelectableCharacterProps;

      setTargetArray([characterToMove]);

      if (targetArray.length > 0) {
        const characterReplacedInTargetArea = targetArray[0];

        setState((oldValue) => [
          ...oldValue.filter((c) => c.index !== activeChooseContainerIndex),
          characterReplacedInTargetArea,
        ]);
      } else {
        setState((oldValue) =>
          oldValue.filter((c) => c.index !== activeChooseContainerIndex)
        );
      }

      setActiveChooseContainerIndex(null);
    },
    [
      activeChooseContainerIndex,
      firstSelectableCharactersGroupState,
      secondSelectableCharactersGroupState,
      bottomTargetCharactersState,
      rightTargetCharactersState,
    ]
  );

  const selectableCharacterMapper = useCallback(
    (
      selectableCharacterGroupState: [
        ISelectableCharacter[],
        React.Dispatch<React.SetStateAction<ISelectableCharacter[]>>
      ],
      graphLineComponent?: ReactNode
    ): ReactNode => (
      <StyledSelectableCharacterMapperContainer>
        {graphLineComponent}

        <SelectableComponents.TargetContainer
          activeChooseContainerIndex={activeChooseContainerIndex}
          onClick={() => handleClickOnTarget(selectableCharacterGroupState)}
        >
          {selectableCharacterGroupState[0].length === 0 ? (
            <span className="question">?</span>
          ) : (
            selectableCharacterGroupState[0].map((selectableCharacter) => (
              <SelectableCharacter
                key={selectableCharacter.index}
                index={selectableCharacter.index}
                name={selectableCharacter.name}
                image={selectableCharacter.image}
                activeChooseContainerIndex={activeChooseContainerIndex}
                setActiveChooseContainerIndex={setActiveChooseContainerIndex}
              />
            ))
          )}
        </SelectableComponents.TargetContainer>
      </StyledSelectableCharacterMapperContainer>
    ),
    [
      activeChooseContainerIndex,
      handleClickOnTarget,
      setActiveChooseContainerIndex,
    ]
  );

  return (
    <ChallengePageContainer currentLevel={11}>
      <StyledContainer>
        <StyledParagraphsContainer>
          <ChallengeMessage>
            <strong>Grafos</strong> são como mapas de amigos na escola! Imagine
            que cada aluno da sua classe é um <strong>ponto</strong> e cada
            amizade é uma <strong>linha</strong> que conecta dois pontos.
          </ChallengeMessage>

          <ChallengeMessage>
            Ana é amiga de Pedro, Pedro é amigo de João, João é amigo de Ester e
            Ester é amiga de Ana.
          </ChallengeMessage>

          <ChallengeMessage>
            Complete o <strong>grafo</strong> abaixo{" "}
            <strong>movendo os alunos</strong> para seus devidos{" "}
            <strong>pontos</strong>
          </ChallengeMessage>
        </StyledParagraphsContainer>

        <StyledGraphContainer>
          <StyledGraph>
            <div>
              <SelectableCharacter
                chooseDisable
                index={0}
                name="Ana"
                image={AnaImage}
                activeChooseContainerIndex={activeChooseContainerIndex}
                setActiveChooseContainerIndex={setActiveChooseContainerIndex}
                graphLineComponent={
                  <GraphLine
                    angle="bottom-right"
                    active={rightTargetCharactersState[0].length > 0}
                  />
                }
              />
            </div>

            <div>
              <SelectableCharacter
                chooseDisable
                index={1}
                name="Pedro"
                image={PedroImage}
                activeChooseContainerIndex={activeChooseContainerIndex}
                setActiveChooseContainerIndex={setActiveChooseContainerIndex}
                graphLineComponent={<GraphLine angle="top-right" active />}
              />

              {selectableCharacterMapper(
                rightTargetCharactersState,
                <GraphLine
                  angle="bottom-left"
                  active={
                    rightTargetCharactersState[0].length > 0 &&
                    bottomTargetCharactersState[0].length > 0
                  }
                />
              )}
            </div>

            <div>
              {selectableCharacterMapper(
                bottomTargetCharactersState,
                <GraphLine
                  angle="top-left"
                  active={bottomTargetCharactersState[0].length > 0}
                />
              )}
            </div>
          </StyledGraph>

          <StyledSelectableCharactersGroupContainer>
            {selectableCharacterMapper(firstSelectableCharactersGroupState)}

            {selectableCharacterMapper(secondSelectableCharactersGroupState)}
          </StyledSelectableCharactersGroupContainer>
        </StyledGraphContainer>

        <Button color="green" text="Verificar" />
      </StyledContainer>
    </ChallengePageContainer>
  );
}
