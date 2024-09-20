import LionImage from "../../shared/assets/DragAreasImages/Lion.svg";
import Fish1Image from "../../shared/assets/DragAreasImages/Fish1.svg";
import ElephantImage from "../../shared/assets/DragAreasImages/Elephant.svg";
import Fish2Image from "../../shared/assets/DragAreasImages/Fish2.svg";
import { useMemo } from "react";
import {
  CharacterGroupingChallenge,
  IDraggableCharacterProps,
} from "../../shared/components/CharacterGroupingChallenge";

export function Challenge1Page() {
  const firstCharacterGroup = useMemo(
    (): IDraggableCharacterProps[] => [
      {
        group: "TERRESTRE",
        index: 0,
        image: LionImage,
        description: "lion",
      },
      {
        group: "AQUATICO",
        index: 1,
        image: Fish1Image,
        description: "blue fish",
      },
    ],
    []
  );
  const secondCharacterGroup = useMemo(
    (): IDraggableCharacterProps[] => [
      {
        group: "TERRESTRE",
        index: 2,
        image: ElephantImage,
        description: "elephant",
      },
      {
        group: "AQUATICO",
        index: 3,
        image: Fish2Image,
        description: "orange fish",
      },
    ],
    []
  );

  return (
    <CharacterGroupingChallenge
      currentLevel={1}
      challengeMessage={
        <>
          Arraste os <strong>animais</strong> para o grupo a que eles pertencem
        </>
      }
      firstCharacterGroupType="TERRESTRE"
      secondCharacterGroupType="AQUATICO"
      firstCharacterGroup={firstCharacterGroup}
      secondCharacterGroup={secondCharacterGroup}
    />
  );
}
