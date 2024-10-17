import React, { useState } from "react";
import {
  Processor,
  RamMemory,
  SoundCard,
  Storm,
  VideoCard,
} from "../../../../shared/assets";
import { Button, ChallengeMessage } from "../../../../shared/components";
import {
  ButtonArea,
  Column,
  GridContainer,
  Item,
  MessageArea,
  StyledMain,
} from "../../styles";

interface IFirstStepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const createItem = (
  shaking: boolean,
  Component: React.FC,
  isShakingEnabled: boolean = true
) => {
  return (
    <Item shaking={isShakingEnabled ? shaking : false}>
      <Component />
    </Item>
  );
};

export const FirstStep = ({ setStep }: IFirstStepProps) => {
  const [shaking, setIsShaking] = useState(true);

  const handleShake = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      setStep(2);
    }, 1000);
  };

  return (
    <StyledMain>
      <MessageArea>
        <ChallengeMessage>
          Os componentes do computador estão agitados! Clique no botão para
          chamar o <strong>Mago Sys.</strong>
        </ChallengeMessage>
      </MessageArea>

      <GridContainer>
        <Column>{createItem(shaking, SoundCard)}</Column>
        <Column>
          {createItem(shaking, RamMemory)}
          {createItem(shaking, Storm, false)}
          {createItem(shaking, VideoCard)}
        </Column>
        <Column>{createItem(shaking, Processor)}</Column>
      </GridContainer>

      <ButtonArea>
        <Button
          color="green"
          text="Chamar Mago Sys"
          onClick={(event) => {
            event.preventDefault();
            // handleShake();
          }}
        />
      </ButtonArea>
    </StyledMain>
  );
};
