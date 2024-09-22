import { ReactNode, useCallback, useMemo, useState } from "react";
import { Button, ChallengeMessage } from "../../shared/components";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import BirthdayImage from "../../shared/assets/ChallengesImages/12/Birthday.png";
import { SelectableComponents } from "../../shared/components/SelectableComponents";
import {
  StyledButtonGroup,
  StyledChallengeContainer,
  StyledChallengeContent,
  StyledChallengeContentWithImage,
  StyledInteractionContainer,
  StyledInteractiveMessage,
  StyledLogicalOperationAbout,
  StyledLogicalOperationAboutContainer,
  StyledLogicalOperationChoose,
} from "./styles";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

type TLogicalOperation = "E" | "NAO" | "OU";

interface ILogicalOperationProps {
  type: TLogicalOperation;
  title: string;
  description: ReactNode;
}

interface ISelectableLogicalOperation {
  index: number;
  type: TLogicalOperation;
}

interface ILogicalOperationChooseProps extends ISelectableLogicalOperation {
  activeChooseContainerIndex: number | null;
  setActiveChooseContainerIndex: React.Dispatch<
    React.SetStateAction<number | null>
  >;
}

interface ILogicalOperationChooseStyle {
  color: string;
  text: string;
}

interface IInteractiveMessageProps {
  firstPhrase: string;
  secondPhrase: string;
  children: ReactNode;
}

function getLogicalOperationColor(type: TLogicalOperation) {
  if (type === "OU") return "#FF8500";

  if (type === "E") return "#7B2CBF";

  if (type === "NAO") return "#D1105A";

  return "";
}

function LogicalOperationAbout({
  type,
  title,
  description,
}: ILogicalOperationProps) {
  const color = useMemo(() => getLogicalOperationColor(type), [type]);

  return (
    <StyledLogicalOperationAbout color={color}>
      <span className="title">{title}</span>

      <ChallengeMessage>{description}</ChallengeMessage>
    </StyledLogicalOperationAbout>
  );
}

function LogicalOperationChoose({
  type,
  index,
  activeChooseContainerIndex,
  setActiveChooseContainerIndex,
}: ILogicalOperationChooseProps) {
  const styles = useMemo((): ILogicalOperationChooseStyle => {
    return {
      text: type !== "NAO" ? type : "NÃO",
      color: getLogicalOperationColor(type),
    };
  }, [type]);

  return (
    <SelectableComponents.ChooseContainer
      index={index}
      activeChooseContainerIndex={activeChooseContainerIndex}
      setActiveChooseContainerIndex={setActiveChooseContainerIndex}
    >
      <StyledLogicalOperationChoose color={styles.color}>
        <span>{styles.text}</span>
      </StyledLogicalOperationChoose>
    </SelectableComponents.ChooseContainer>
  );
}

function InteractiveMessage({
  firstPhrase,
  secondPhrase,
  children,
}: IInteractiveMessageProps) {
  return (
    <StyledInteractiveMessage>
      <p>{firstPhrase}</p>

      {children}

      <p>{secondPhrase}</p>
    </StyledInteractiveMessage>
  );
}

export function Challenge12Page() {
  const [currentMobileStep, setCurrentMobileStep] = useState(1);

  const [activeChooseContainerIndex, setActiveChooseContainerIndex] = useState<
    number | null
  >(null);

  const firstSelectableLogicalOperationGroup = useState<
    ISelectableLogicalOperation[]
  >([
    {
      index: 0,
      type: "OU",
    },
  ]);

  const secondSelectableLogicalOperationGroup = useState<
    ISelectableLogicalOperation[]
  >([
    {
      index: 1,
      type: "E",
    },
  ]);

  const thirdSelectableLogicalOperationGroup = useState<
    ISelectableLogicalOperation[]
  >([
    {
      index: 2,
      type: "NAO",
    },
  ]);

  const firstLogicalOperationTarget = useState<ISelectableLogicalOperation[]>(
    []
  );

  const secondLogicalOperationTarget = useState<ISelectableLogicalOperation[]>(
    []
  );

  const thirdLogicalOperationTarget = useState<ISelectableLogicalOperation[]>(
    []
  );

  const logicalOperationElements = useMemo(
    (): ILogicalOperationProps[] => [
      {
        type: "E",
        title: "CONJUNÇÃO (E)",
        description: (
          <>
            A <strong>conjunção</strong> é uma operação lógica que combina duas
            sentenças e resulta em verdadeiro apenas se{" "}
            <strong>ambas as sentenças forem verdadeiras.</strong>
          </>
        ),
      },
      {
        type: "NAO",
        title: "NEGAÇÃO (NÃO)",
        description: (
          <>
            A <strong>negação</strong> é uma operação lógica que inverte o valor
            de uma sentença.{" "}
            <strong>
              Se a sentença é verdadeira, a negação dela é falsa, e vice-versa.
            </strong>
          </>
        ),
      },
      {
        type: "OU",
        title: "DISJUNÇÃO (OU)",
        description: (
          <>
            A <strong>disjunção</strong> é uma operação lógica que combina duas
            sentenças e resulta em verdadeiro se{" "}
            <strong>pelo menos uma das sentenças for verdadeira.</strong>
          </>
        ),
      },
    ],
    []
  );

  const handleClickOnTarget = useCallback(
    ([targetArray, setTargetArray]: [
      ISelectableLogicalOperation[],
      React.Dispatch<React.SetStateAction<ISelectableLogicalOperation[]>>
    ]) => {},
    []
  );

  const logicalOperationChooseMapper = useCallback(
    (
      logicalOperationChooseState: [
        ISelectableLogicalOperation[],
        React.Dispatch<React.SetStateAction<ISelectableLogicalOperation[]>>
      ]
    ): ReactNode => (
      <SelectableComponents.TargetContainer
        activeChooseContainerIndex={activeChooseContainerIndex}
        onClick={() => handleClickOnTarget(logicalOperationChooseState)}
      >
        {logicalOperationChooseState[0].length === 0 ? (
          <span className="question">?</span>
        ) : (
          logicalOperationChooseState[0].map((logicalOperation) => (
            <LogicalOperationChoose
              key={logicalOperation.index}
              index={logicalOperation.index}
              type={logicalOperation.type}
              activeChooseContainerIndex={activeChooseContainerIndex}
              setActiveChooseContainerIndex={setActiveChooseContainerIndex}
            />
          ))
        )}
      </SelectableComponents.TargetContainer>
    ),
    [
      activeChooseContainerIndex,
      handleClickOnTarget,
      setActiveChooseContainerIndex,
    ]
  );

  const handleAdvanceStep = useCallback(
    () => setCurrentMobileStep((oldValue) => oldValue + 1),
    [setCurrentMobileStep]
  );

  const handleBackStep = useCallback(
    () => setCurrentMobileStep((oldValue) => oldValue - 1),
    [setCurrentMobileStep]
  );

  const handleVerifyChallengeResponse = useCallback(() => {}, []);

  return (
    <ChallengePageContainer currentLevel={12}>
      <StyledChallengeContainer>
        <StyledLogicalOperationAboutContainer
          className={currentMobileStep !== 1 ? "mobile-invisible" : ""}
        >
          {logicalOperationElements.map((logicalOperation, index) => (
            <LogicalOperationAbout
              key={index}
              type={logicalOperation.type}
              title={logicalOperation.title}
              description={logicalOperation.description}
            />
          ))}
        </StyledLogicalOperationAboutContainer>

        <StyledChallengeContent>
          <ChallengeMessage
            className={currentMobileStep !== 2 ? "mobile-invisible" : ""}
          >
            Agora, com base na imagem,{" "}
            <strong>complete os espaços em branco nas frases abaixo</strong>, de
            modo que todas fiquem verdadeiras,{" "}
            <strong>movendo a operação lógica</strong> adequada para que o
            resultado seja sempre verdadeiro.
          </ChallengeMessage>

          <StyledChallengeContentWithImage>
            <img
              className={currentMobileStep !== 2 ? "mobile-invisible" : ""}
              src={BirthdayImage}
              alt="birthday"
            />

            <StyledInteractionContainer
              className={currentMobileStep !== 3 ? "mobile-invisible" : ""}
            >
              <div>
                {logicalOperationChooseMapper(
                  firstSelectableLogicalOperationGroup
                )}

                {logicalOperationChooseMapper(
                  secondSelectableLogicalOperationGroup
                )}

                {logicalOperationChooseMapper(
                  thirdSelectableLogicalOperationGroup
                )}
              </div>

              <div>
                <InteractiveMessage
                  firstPhrase="O menino está comemorando seu aniversário"
                  secondPhrase="está muito feliz."
                >
                  {logicalOperationChooseMapper(firstLogicalOperationTarget)}
                </InteractiveMessage>

                <InteractiveMessage
                  firstPhrase="Existem 3 cores de balão na imagem, mas"
                  secondPhrase="tem nenhum preto."
                >
                  {logicalOperationChooseMapper(secondLogicalOperationTarget)}
                </InteractiveMessage>

                <InteractiveMessage
                  firstPhrase="Na festa de aniversário do menino, há balões"
                  secondPhrase="há presentes."
                >
                  {logicalOperationChooseMapper(thirdLogicalOperationTarget)}
                </InteractiveMessage>
              </div>
            </StyledInteractionContainer>
          </StyledChallengeContentWithImage>
        </StyledChallengeContent>

        <StyledButtonGroup>
          <Button
            className="desktop-invisible"
            color="green"
            disabled={currentMobileStep === 1}
            onClick={handleBackStep}
          >
            <CaretLeft />
          </Button>

          {currentMobileStep === 3 ? (
            <Button
              className="desktop-invisible"
              color="green"
              text="VERIFICAR"
              onClick={handleVerifyChallengeResponse}
            />
          ) : (
            <Button
              className="desktop-invisible"
              color="green"
              onClick={handleAdvanceStep}
            >
              <CaretRight />
            </Button>
          )}

          <Button
            className="mobile-invisible"
            color="green"
            text="VERIFICAR"
            onClick={handleVerifyChallengeResponse}
          />
        </StyledButtonGroup>
      </StyledChallengeContainer>
    </ChallengePageContainer>
  );
}
