import { useMediaQuery } from "react-responsive";
import {
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
  TitleStage3,
} from "../../styles";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { routeConfigs } from "../../../../shared/configs";
import { Eyes, OpenEyes } from "../../../../shared/assets";
import { useState } from "react";

interface IThirdStepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const ThirdStep = ({ setStep }: IThirdStepProps) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const [subStep, setSubStep] = useState(1);

  const navigate = useNavigate();

  return (
    <StyledMain>
      <ChallengeMessage
        children={
          <>
            Antes de avançar, entenda 2 conceitos importantes:{" "}
            <strong>dado</strong> e <strong>informação</strong>
          </>
        }
      />
      <ExplanationAreas columns={2}>
        <Explanation className={subStep === 1 ? "mobileVisible" : ""}>
          <ImageArea>
            <Eyes />
          </ImageArea>
          <TitleStage3>
            <PersonalData color="#5AA1DF">Oliver</PersonalData>
            <PersonalData color="#E23A68">8</PersonalData>
            <PersonalData color="#DC5C05">Sim</PersonalData>
          </TitleStage3>
          <Message>
            <ChallengeMessage
              children={
                <>
                  <strong>Dado:</strong> é uma peça básica de informação, como
                  um <strong>número</strong> ou uma ou mais{" "}
                  <strong>letras</strong>, que sozinhas não têm muito
                  significado.
                </>
              }
            />
          </Message>
          {isMobile && (
            <ButtonsArea>
              <Button
                onClick={() => setStep(2)}
                children={
                  <>
                    <CaretLeft />
                  </>
                }
                color="green"
              />
              <Button
                onClick={() => setSubStep(2)}
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

        <Explanation className={subStep === 2 ? "mobileVisible" : ""}>
          <ImageArea>
            <OpenEyes />
          </ImageArea>
          <Title>
            Seu nome:
            <PersonalData color="#5AA1DF">Oliver</PersonalData>
          </Title>
          <Title>
            Sua idade:
            <PersonalData color="#E23A68">8 anos</PersonalData>
          </Title>
          <Title>
            Você gosta de brincar?
            <PersonalData color="#DC5C05">Sim</PersonalData>
          </Title>
          <Message>
            <ChallengeMessage
              children={
                <>
                  <strong>Informação:</strong> é o que acontece quando juntamos
                  vários <strong>dados</strong> para entender algo, como saber
                  que seu nome é Oliver, tem 8 anos de idade e que você gosta de
                  brincar.
                </>
              }
            />
          </Message>
          {isMobile && (
            <ButtonsArea>
              <Button
                onClick={() => setSubStep(1)}
                children={
                  <>
                    <CaretLeft />
                  </>
                }
                color="green"
              />
              <Button
                onClick={() => navigate(routeConfigs.Map)}
                children={<>Avançar</>}
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
              setStep(2);
            }}
          />
          <Button
            children={<>Avançar</>}
            color="green"
            onClick={() => navigate(routeConfigs.Map)}
          />
        </ButtonsArea>
      )}
    </StyledMain>
  );
};
