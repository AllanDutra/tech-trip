import { useMediaQuery } from "react-responsive";
import {
  ChallengeMessage,
  Button,
  TSelectionVariant,
} from "../../../../shared/components";
import {
  StyledMain,
  ButtonsArea,
  Explanation,
  ExplanationAreas,
  Title,
  Message,
  PersonalData,
  ImageArea,
} from "../../styles";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { TextAa } from "../../../../shared/assets/ChallengesImages/8/TextAa";
import { DribbleLogo, ListNumbers } from "../../../../shared/assets";
import { useState } from "react";

interface ISecondStepProps {
  play: TSelectionVariant;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  age: string;
}
export const SecondStep = ({ play, setStep, name, age }: ISecondStepProps) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const [subStep, setSubStep] = useState(1);
  const choiceDescription =
    play == "yes"
      ? "Como você gosta de brincar, guardamos a informação com o número 1!"
      : "Como você não gosta de brincar, guardamos a informação com o número 0!";
  const choice = play == "yes" ? "Sim" : "Não";

  return (
    <StyledMain>
      <ChallengeMessage
        children={
          <>
            Agora, veja como cada <strong>tipo de dado</strong> é representado:
          </>
        }
      />
      <ExplanationAreas columns={3}>
        <Explanation className={subStep == 1 ? "mobileVisible" : ""}>
          <ImageArea>
            <TextAa />
          </ImageArea>
          <Title>
            Seu nome: <PersonalData color="#5AA1DF"> {name} </PersonalData>
          </Title>
          <Message>
            <ChallengeMessage
              children={
                <>
                  Seu nome é guardado como uma sequência de{" "}
                  <strong>letras</strong> ou <strong>caracteres</strong>. Cada
                  letra tem um código que o computador entende.
                </>
              }
            />
          </Message>
          {isMobile && (
            <ButtonsArea>
              <Button
                onClick={() => {
                  setStep(1);
                }}
                children={
                  <>
                    <CaretLeft />
                  </>
                }
                color="green"
              />
              <Button
                onClick={() => {
                  setSubStep(2);
                }}
                children={
                  <>
                    <CaretRight />
                  </>
                }
                color="green"
              />
            </ButtonsArea>
          )}
        </Explanation>

        <Explanation className={subStep == 2 ? "mobileVisible" : ""}>
          <ImageArea>
            <ListNumbers />
          </ImageArea>
          <Title>
            Sua idade: <PersonalData color="#E23A68"> {age} anos</PersonalData>
          </Title>
          <Message>
            <ChallengeMessage
              children={
                <>
                  Sua idade é armazenada como um <strong>número inteiro</strong>
                  , ou seja, sem vírgula.
                </>
              }
            />
          </Message>
          {isMobile && (
            <ButtonsArea>
              <Button
                onClick={() => {
                  setSubStep(1);
                }}
                children={
                  <>
                    <CaretLeft />
                  </>
                }
                color="green"
              />
              <Button
                onClick={() => {
                  setSubStep(3);
                }}
                children={
                  <>
                    <CaretRight />
                  </>
                }
                color="green"
              />
            </ButtonsArea>
          )}
        </Explanation>

        <Explanation className={subStep == 3 ? "mobileVisible" : ""}>
          <ImageArea>
            <DribbleLogo />
          </ImageArea>
          <Title>
            Você gosta de brincar:{" "}
            <PersonalData color="#DC5C05">{choice}</PersonalData>
          </Title>
          <Message>
            <ChallengeMessage
              children={
                <>
                  A informação de que você gosta ou não de brincar é guardada como um
                  número especial, chamado de <strong>bit</strong>. O{" "}
                  <strong>bit</strong> pode ser 0 ou 1. Se for 0, significa
                  'não' e se for 1, significa 'sim'. {choiceDescription}
                </>
              }
            />
          </Message>
          {isMobile && (
            <ButtonsArea>
              <Button
                onClick={() => {
                  setSubStep(2);
                }}
                children={
                  <>
                    <CaretLeft />
                  </>
                }
                color="green"
              />
              <Button
                onClick={() => {
                  setStep(3);
                }}
                children={
                  <>
                    <CaretRight />
                  </>
                }
                color="green"
              />
            </ButtonsArea>
          )}
        </Explanation>
      </ExplanationAreas>
      {isDesktop && (
        <ButtonsArea>
          <Button
            children={
              <>
                <CaretLeft />
              </>
            }
            color="green"
            onClick={() => {
              setStep(1);
            }}
          />
          <Button
            children={
              <>
                <CaretRight />
              </>
            }
            color="green"
            onClick={() => {
              setStep(3);
            }}
          />
        </ButtonsArea>
      )}
    </StyledMain>
  );
};
