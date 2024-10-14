import { useMemo } from "react";
import { StyledRankingPodium } from "./styles";

type TPodiumPosition = 1 | 2 | 3;

interface IPodiumStyles {
  bgColor: string;
  height: string;
}

interface IRankingPodiumProps {
  position: TPodiumPosition;
}

function getPodiumStyles(position: TPodiumPosition): IPodiumStyles {
  if (position === 1) return { bgColor: "#FFC700", height: "15vh" };

  if (position === 2) return { bgColor: "#9E919D", height: "10vh" };

  if (position === 3) return { bgColor: "#CD7F32", height: "5vh" };

  return { bgColor: "", height: "0vh" };
}

export function RankingPodium({ position }: IRankingPodiumProps) {
  const podiumStyles = useMemo(() => getPodiumStyles(position), [position]);

  return (
    <StyledRankingPodium
      style={{
        backgroundColor: podiumStyles.bgColor,
        height: podiumStyles.height,
      }}
    >
      <strong>{position || "?"}</strong>
    </StyledRankingPodium>
  );
}
