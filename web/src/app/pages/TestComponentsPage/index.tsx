import { CaretUp, UserCircle } from "@phosphor-icons/react";
import {
  Button,
  ChallengeMessage,
  ChallengeResponse,
  Character,
  ContainedInput,
  DoubleSelection,
  DragDrop,
  Header,
  LevelCompletionModal,
  NavBar,
  PreferenceButton,
  SecondaryButton,
  Title,
  UnderlinedInput,
} from "../../shared/components";
import { StyledMain } from "./styles";
import { useCallback } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";

export function TestComponentsPage() {
  const handleOnDragEnd = useCallback((result: DropResult) => {
    if (!result.destination) return;

    console.log(result);
  }, []);

  return (
    <StyledMain>
      <h2>Contained Input</h2>

      <ContainedInput.FullComponent
        label="Nome"
        Icon={UserCircle}
        placeholder="Digite seu nome aqui..."
      />

      <h2>Underlined Input</h2>

      <UnderlinedInput.FullComponent
        label="Nome"
        Icon={UserCircle}
        placeholder="Digite seu nome aqui..."
        value="Oliver da Silva Pereira"
      />

      <h2>Character</h2>

      <Character.FullComponent size="medium" number={1} />

      <h2>Button</h2>

      <Button color="green" text="Registrar" />
      <Button color="green">
        <CaretUp />
      </Button>
      <Button color="red" text="Falsa" />
      <Button color="yellow" text="Continuar" />
      <Button color="blue" text="Continuar" />

      <h2>Double Selection</h2>

      <DoubleSelection.FullComponent variant="gender" selected="female" />
      <DoubleSelection.FullComponent variant="gender" selected="male" />
      <DoubleSelection.FullComponent variant="yes-or-no" selected="no" />
      <DoubleSelection.FullComponent variant="yes-or-no" selected="yes" />

      <h2>Secondary Button</h2>

      <SecondaryButton title="Já tenho uma conta" />
      <SecondaryButton title="Primeiro acesso" />

      <h2>Preference Button</h2>

      <PreferenceButton variant="sound" active />
      <PreferenceButton variant="vibration" />

      <NavBar.FullComponent />

      <h2>Title</h2>

      <Title value="TECH KIDs" />

      <h2>Header</h2>

      <Header.FullComponent currentLevel={6} totalLevels={15} />

      <h2>Challenge Message</h2>

      <ChallengeMessage>
        Arraste os <strong>animais</strong> para o grupo a que eles pertencem
      </ChallengeMessage>

      <h2>Response Option for Challenge</h2>

      <h3>Small</h3>

      <ChallengeResponse.FullComponent
        size="small"
        options={[
          {
            content: (
              <>
                <strong>Computador:</strong> Escrever e imprimir convites em
                papel.
              </>
            ),
            selected: false,
          },
          {
            content: (
              <>
                <strong>Celular:</strong> Enviar mensagens de texto ou um
                e-mail.
              </>
            ),
            selected: true,
          },
          {
            content: (
              <>
                <strong>Tablet:</strong> Fazer um vídeo convite e enviar para os
                amigos.
              </>
            ),
            selected: false,
          },
        ]}
      />

      <h3>Medium</h3>

      <ChallengeResponse.FullComponent
        options={[
          {
            text: "Impressora ou roteador",
          },
          {
            text: "Fones de ouvido ou alto-falantes",
            selected: true,
          },
          {
            text: "Microfone ou teclado",
          },
        ]}
      />

      <h3>Large</h3>

      <ChallengeResponse.FullComponent
        size="large"
        options={[
          {
            text: "0100 1111 0100 0001",
          },
          {
            text: "0110 1001 0100 0001",
          },
          {
            text: "0100 1111 0110 1001",
            selected: true,
          },
        ]}
      />

      {/* <h2>Level Completion Modal</h2>

      <LevelCompletionModal.FullComponent performance={4} /> */}

      <h2>Drag and Drop</h2>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <DragDrop.DropContainer droppableId="droppable">
          <DragDrop.DragContainer draggableId="b" index={1}>
            <p>teste2</p>
          </DragDrop.DragContainer>
        </DragDrop.DropContainer>

        <DragDrop.DropContainer droppableId="droppable">
          <DragDrop.DragContainer draggableId="a" index={0}>
            <p>teste</p>
          </DragDrop.DragContainer>
        </DragDrop.DropContainer>
      </DragDropContext>
    </StyledMain>
  );
}
