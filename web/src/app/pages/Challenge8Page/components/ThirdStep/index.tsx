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
  TitleStage3,
} from "../../styles";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { routeConfigs } from "../../../../shared/configs";
import { Eyes, OpenEyes } from "../../../../shared/assets";
import { useCallback, useState } from "react";
import { useChallengeCorrection } from "../../../../shared/hooks/useChallengeCorrection";

interface IThirdStepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  age: string;
  play: TSelectionVariant;
}

export const ThirdStep = ({ setStep, name, age, play }: IThirdStepProps) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const [subStep, setSubStep] = useState(1);

  const navigate = useNavigate();
  const likeToPlay = play == "yes" ? "" : "não";
  const yesOrNot = play == "yes" ? "sim" : "não";

  const { checkChallengeCorrection } = useChallengeCorrection();

  const handleVerify = useCallback(async () => {
    await checkChallengeCorrection({
      challenge_Id: 8,
      steps: 6,
      studentResponse: "",
    });
  }, [checkChallengeCorrection]);

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
            <PersonalData color="#5AA1DF">{name}</PersonalData>
            <PersonalData color="#E23A68">{age}</PersonalData>
            <PersonalData color="#DC5C05">{yesOrNot}</PersonalData>
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
            <PersonalData color="#5AA1DF">{name}</PersonalData>
          </Title>
          <Title>
            Sua idade:
            <PersonalData color="#E23A68">{age} anos</PersonalData>
          </Title>
          <Title>
            Você gosta de brincar?
            <PersonalData color="#DC5C05">{yesOrNot}</PersonalData>
          </Title>
          <Message>
            <ChallengeMessage
              children={
                <>
                  <strong>Informação:</strong> é o que acontece quando juntamos
                  vários <strong>dados</strong> para entender algo, como saber
                  que seu nome é {name}, tem {age} anos de idade e que você {likeToPlay} gosta de
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
                onClick={() => handleVerify()}
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
            onClick={() => handleVerify()}
          />
        </ButtonsArea>
      )}
    </StyledMain>
  );
};
