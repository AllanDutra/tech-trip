import { DraggableItem, DropArea, Header } from "../../shared/components";
import {
  DraggableItems,
  MainContainer,
  StyledLabel,
  StyledMain,
} from "./styles";

export function Challenge1Page() {
  return (
    <StyledMain>
      <Header.FullComponent currentLevel={1} totalLevels={15} />
      <StyledLabel>
        Arraste os <span>animais</span> para o grupo ao qual eles pertencem
      </StyledLabel>
      <MainContainer>
        <DropArea
          color={"#7C4D29"}
          boxColor={"#E6DFD7"}
          group={"Terrestres"}
          backgroundColor={"#F2EEEA"}
          onDropAnimal={() => {}}
          backgroundImage="/src/app/shared/assets/DropAreasBackgrounds/Land.svg"
          boxShadowContainer={"#eae7e3"}
          boxShadowBox={"#DFD8D0"}
        />

        <DropArea
          group={"Aquáticos"}
          color={"#039EF5"}
          boxColor={"#CFEEFD"}
          backgroundColor={"#E6F6FE"}
          onDropAnimal={() => {}}
          backgroundImage="/src/app/shared/assets/DropAreasBackgrounds/Sea.svg"
          boxShadowContainer={"#DFEEF6"}
          boxShadowBox={"#C9E7F5"}
        />

        <DraggableItems>
          <DraggableItem
            backgroundColor={"#F2EEEA"}
            name={"T"}
            image={"/src/app/shared/assets/DragAreasImages/Lion.svg"}
          />
          <DraggableItem
            backgroundColor={"#E6F6FE"}
            name={"A"}
            image={"/src/app/shared/assets/DragAreasImages/Fish1.svg"}
          />
          <DraggableItem
            backgroundColor={"#F2EEEA"}
            name={"T"}
            image={"/src/app/shared/assets/DragAreasImages/Elephant.svg"}
          />
          <DraggableItem
            backgroundColor={"#E6F6FE"}
            name={"A"}
            image={"/src/app/shared/assets/DragAreasImages/Fish2.svg"}
          />{" "}
        </DraggableItems>
      </MainContainer>
    </StyledMain>
  );
}
