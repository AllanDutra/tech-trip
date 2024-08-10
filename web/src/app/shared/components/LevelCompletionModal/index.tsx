import { ReactNode, useMemo } from "react";
import { Button, Header } from "..";
import { IconContext, SketchLogo, Star } from "@phosphor-icons/react";
import { StyledContainer, StyledDiamondMessage, StyledMessage } from "./styles";

interface IContainerProps {
  children: ReactNode;
}

interface IStarComponentMap {
  index: number;
  starsNumber: number;
}

interface IMessageProps {
  starsNumber: number;
  title: string;
  subtitle: string;
}

function Container({ children }: IContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

function StarComponentMap({ index, starsNumber }: IStarComponentMap) {
  const isPair = useMemo(() => index % 2 === 0, [index]);
  const isYellow = useMemo(() => index < starsNumber, [index, starsNumber]);

  return (
    <Star
      className={`${isPair ? "pair" : ""} ${isYellow ? "yellow" : ""}`}
      size={isPair ? 43 : 70}
    />
  );
}

function Message({ starsNumber, title, subtitle }: IMessageProps) {
  const starsMap = ["", "", ""];

  return (
    <StyledMessage>
      <div>
        <IconContext.Provider value={{ weight: "fill" }}>
          {starsMap.map((_, index) => (
            <StarComponentMap
              key={index}
              index={index}
              starsNumber={starsNumber}
            />
          ))}
        </IconContext.Provider>
      </div>
      <h1>{title}</h1>
      <span>{subtitle}</span>
    </StyledMessage>
  );
}

function OneStar() {
  return (
    <Message
      starsNumber={1}
      title="VOCÊ FOI BEM!"
      subtitle={`Você está no caminho certo!\n Continue praticando!`}
    />
  );
}

function TwoStars() {
  return (
    <Message
      starsNumber={2}
      title="ÓTIMO PROGRESSO!"
      subtitle={`Muito bem! Faltou pouco para a terceira estrela!`}
    />
  );
}

function ThreeStars() {
  return (
    <Message
      starsNumber={3}
      title="UAU! EXCELENTE!"
      subtitle={`Fantástico! Você atingiu a pontuação de três estrelas!`}
    />
  );
}

function ThreeStarsAndDiamondSequence() {
  return (
    <>
      <ThreeStars />

      <StyledDiamondMessage>
        <strong>Você conseguiu uma sequência e ganhou um diamante!</strong>

        <div>
          <SketchLogo size={44} weight="fill" color="#00C3FF" /> <span>+1</span>
        </div>
      </StyledDiamondMessage>
    </>
  );
}

const PERFORMANCE_MAP = {
  1: OneStar,
  2: TwoStars,
  3: ThreeStars,
  4: ThreeStarsAndDiamondSequence,
};

interface IFulLComponentProps {
  performance: keyof typeof PERFORMANCE_MAP;
  onClose?: () => void;
  onContinue?: () => void;
}

function FullComponent({
  performance,
  onClose,
  onContinue,
}: IFulLComponentProps) {
  const PerformanceComponent = useMemo(
    () => PERFORMANCE_MAP[performance] || <></>,
    [performance]
  );

  return (
    <Container>
      <Header.CloseButton onClick={onClose} />

      <PerformanceComponent />

      <Button
        onClick={onContinue}
        color={performance === 4 ? "blue" : "yellow"}
        text="Continuar"
      />
    </Container>
  );
}

export const LevelCompletionModal = { FullComponent };
