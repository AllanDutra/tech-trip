import React, { useCallback, useEffect, useState } from "react";
import {
  Magician,
  Processor,
  RamMemory,
  SoundCard,
  VideoCard,
} from "../../../../shared/assets";
import { Button, ChallengeMessage } from "../../../../shared/components";
import {
  ButtonArea,
  Column,
  GridContainer,
  MessageArea,
  StyledMain,
  FloatingItem,
} from "../../styles";
import { useChallengeCorrection } from "../../../../shared/hooks/useChallengeCorrection";

const createFloatingItem = (
  index: number,
  Component: React.FC,
  isFloatingEnabled: boolean = true
) => {
  return (
    <FloatingItem index={index} floating={isFloatingEnabled}>
      <Component />
    </FloatingItem>
  );
};

export const SecondStep = () => {
  const [animate, setAnimate] = useState(true);
  const { checkChallengeCorrection } = useChallengeCorrection();

  const handleVerify = useCallback(async () => {
    await checkChallengeCorrection({
      challenge_Id: 14,
      steps: 2,
      studentResponse: "",
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate((prev) => !prev);
    }, 4500);

    return () => clearTimeout(timer);
  }, [animate]);

  return (
    <StyledMain>
      <MessageArea>
        <ChallengeMessage>
          O <strong>Mago Sys</strong> está aqui para administrar e gerenciar os
          componentes, como faz um sistema operacional!
        </ChallengeMessage>
      </MessageArea>

      <GridContainer>
        <Column>{createFloatingItem(4, SoundCard, animate)}</Column>
        <Column>
          {createFloatingItem(1, RamMemory, animate)}
          {createFloatingItem(0, Magician, false)}
          {createFloatingItem(3, VideoCard, animate)}
        </Column>
        <Column>{createFloatingItem(2, Processor, animate)}</Column>
      </GridContainer>

      <ButtonArea>
        <Button
          color="green"
          text="Avançar"
          onClick={(event) => {
            event.preventDefault();
            handleVerify();
          }}
        />
      </ButtonArea>
    </StyledMain>
  );
};
