import { useMediaQuery } from "react-responsive";
import {
  Header,
  ChallengeMessage,
  Button,
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
import { useNavigate } from "react-router-dom";
import { routeConfigs } from "../../../../shared/configs";
import { useState } from "react";

export const Challenge8Stage2 = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const [step, setStep] = useState(1); 

  const navigate = useNavigate();

  return (
    <StyledMain>
      <Header.FullComponent currentLevel={8} totalLevels={15} />
      <ChallengeMessage
        children={
          <>
            Agora, veja como cada <strong>tipo de dado</strong> é representado:
          </>
        }
      />
      <ExplanationAreas columns={3}>
        <Explanation className={step == 1 ? "mobileVisible" : ""}>
          <ImageArea>
            <TextAa />
          </ImageArea>
          <Title> 
            Seu nome: <PersonalData color="#5AA1DF"> Oliver </PersonalData>
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
              <Button onClick={() => {navigate(routeConfigs.Challenge8)}}
                children={
                  <>
                    <CaretLeft />
                  </>
                }
                color="green"
              />
              <Button onClick={() => {setStep(2)}}
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

        <Explanation className={step == 2 ? "mobileVisible" : ""}>
          <ImageArea>
            <ListNumbers />
          </ImageArea>
          <Title>
            Sua idade: <PersonalData color="#E23A68"> 8 anos</PersonalData>
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
              <Button onClick={() => {setStep(1)}}
                children={
                  <>
                    <CaretLeft />
                  </>
                }
                color="green"
              />
              <Button onClick={() => {setStep(3)}}
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

        <Explanation className={step == 3 ? "mobileVisible" : ""}>
          <ImageArea>
            <DribbleLogo />
          </ImageArea>
          <Title>
            Você gosta de brincar:{" "}
            <PersonalData color="#DC5C05">Sim</PersonalData>
          </Title>
          <Message>
            <ChallengeMessage
              children={
                <>
                  A informação de que você gosta de brincar é guardada como um
                  número especial, chamado de <strong>bit</strong>. O{" "}
                  <strong>bit</strong> pode ser 0 ou 1. Se for 0, significa
                  'não' e se for 1, significa 'sim'. Como você gosta de brincar,
                  guardamos a informação com o número 1!
                </>
              }
            />
          </Message>
          {isMobile && (
            <ButtonsArea>
              <Button onClick={() => {setStep(2)}}
                children={
                  <>
                    <CaretLeft />
                  </>
                }
                color="green"
              />
              <Button onClick={() => {navigate(routeConfigs.Challenge8_3)}}
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
              navigate(routeConfigs.Challenge8);
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
              navigate(routeConfigs.Challenge8_3);
            }}
          />
        </ButtonsArea>
      )}
    </StyledMain>
  );
};
