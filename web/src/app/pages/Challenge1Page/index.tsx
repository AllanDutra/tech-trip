import { DraggableItem, DropArea, Header } from "../../shared/components";
import {
  DraggableItems,
  MainContainer,
  StyledLabel,
  StyledMain,
} from "./styles";
import LandImage from "../../shared/assets/DropAreasBackgrounds/Land.svg";
import SeaImage from "../../shared/assets/DropAreasBackgrounds/Sea.svg";
import LionImage from "../../shared/assets/DragAreasImages/Lion.svg";
import Fish1Image from "../../shared/assets/DragAreasImages/Fish1.svg";
import ElephantImage from "../../shared/assets/DragAreasImages/Elephant.svg";
import Fish2Image from "../../shared/assets/DragAreasImages/Fish2.svg";

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
          backgroundImage={LandImage}
          boxShadowContainer={"#eae7e3"}
          boxShadowBox={"#DFD8D0"}
        />

        <DropArea
          group={"Aquáticos"}
          color={"#039EF5"}
          boxColor={"#CFEEFD"}
          backgroundColor={"#E6F6FE"}
          onDropAnimal={() => {}}
          backgroundImage={SeaImage}
          boxShadowContainer={"#DFEEF6"}
          boxShadowBox={"#C9E7F5"}
        />

        <DraggableItems>
          <DraggableItem
            backgroundColor={"#F2EEEA"}
            name={"T"}
            image={LionImage}
          />
          <DraggableItem
            backgroundColor={"#E6F6FE"}
            name={"A"}
            image={Fish1Image}
          />
          <DraggableItem
            backgroundColor={"#F2EEEA"}
            name={"T"}
            image={ElephantImage}
          />
          <DraggableItem
            backgroundColor={"#E6F6FE"}
            name={"A"}
            image={Fish2Image}
          />{" "}
        </DraggableItems>
      </MainContainer>
    </StyledMain>
  );
}
