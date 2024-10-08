import { useMemo } from "react";
import {
  CharacterGroupingChallenge,
  IDraggableCharacterProps,
} from "../../shared/components/CharacterGroupingChallenge";

import YoutubeImage from "../../shared/assets/DragAreasImages/Youtube.svg";
import TabletImage from "../../shared/assets/DragAreasImages/Tablet.svg";
import ComputerImage from "../../shared/assets/DragAreasImages/Computer.svg";
import WhatsappImage from "../../shared/assets/DragAreasImages/Whatsapp.svg";

export function Challenge3Page() {
  const firstCharacterGroup = useMemo(
    (): IDraggableCharacterProps[] => [
      {
        index: 0,
        group: "SOFTWARE",
        image: YoutubeImage,
        description: "youtube",
      },
      {
        index: 1,
        group: "HARDWARE",
        image: TabletImage,
        description: "tablet",
      },
    ],
    []
  );
  const secondCharacterGroup = useMemo(
    (): IDraggableCharacterProps[] => [
      {
        index: 2,
        group: "HARDWARE",
        image: ComputerImage,
        description: "computer",
      },
      {
        index: 3,
        group: "SOFTWARE",
        image: WhatsappImage,
        description: "whatsapp",
      },
    ],
    []
  );

  return (
    <CharacterGroupingChallenge
      currentLevel={3}
      challengeMessage={
        <>
          Arraste os <strong>componentes de computador</strong> para grupo a que
          eles pertencem
        </>
      }
      firstCharacterGroupType="HARDWARE"
      secondCharacterGroupType="SOFTWARE"
      firstCharacterGroup={firstCharacterGroup}
      secondCharacterGroup={secondCharacterGroup}
    />
  );
}
