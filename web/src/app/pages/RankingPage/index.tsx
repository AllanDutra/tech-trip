import { CrownSimple } from "@phosphor-icons/react";
import { Character, NavBar } from "../../shared/components";
import {
  StyledLabel,
  StyledMain,
  FeaturedSection,
  FeaturedCard,
  StudentList,
  StudentItem,
  Number,
  StudentInfo,
  CharacterContainer,
  Featured,
  Name,
  Points,
  MedalContainer,
  CharacterFeatured,
  StyledTotalScore,
} from "./styles";
import { CommonPageContainer } from "../../shared/components/CommonPageContainer";
import { useEffect, useMemo, useState } from "react";
import { IRankingScore } from "../../shared/services/TechTripApi/ScoresController";
import { useLoading } from "../../shared/hooks/useLoading";
import { TechTripApiService } from "../../shared/services";
import { Functions } from "../../shared/functions";
import { RankingPodium } from "./components/RankingPodium";
import Medal2st from "../../shared/assets/Images/medal-2st.svg";
import Medal3st from "../../shared/assets/Images/medal-3st.svg";

const DEFAULT_RANKING_SCORE: IRankingScore = {
  id: 0,
  name: "",
  character_Id: 0,
  totalStars: 0,
  totalDiamonds: 0,
  totalScore: 0,
  rank: 0,
};

export const RankingPage = () => {
  const { setIsGlobalLoadingActive } = useLoading();

  const [studentsRanking, setStudentsRanking] = useState<IRankingScore[]>([]);

  const studentAt1st = useMemo(
    (): IRankingScore => studentsRanking[0] || DEFAULT_RANKING_SCORE,
    [studentsRanking]
  );

  const studentAt2st = useMemo(
    (): IRankingScore => studentsRanking[1] || DEFAULT_RANKING_SCORE,
    [studentsRanking]
  );

  const studentAt3st = useMemo(
    (): IRankingScore => studentsRanking[2] || DEFAULT_RANKING_SCORE,
    [studentsRanking]
  );

  const studentsRankingWithoutPodium = useMemo(
    () => studentsRanking.slice(3),
    [studentsRanking]
  );

  useEffect(() => {
    (async () => {
      try {
        setIsGlobalLoadingActive(true);

        const studentsRankingData =
          await TechTripApiService.ScoresController.getRanking();

        setStudentsRanking([...studentsRankingData]);
      } finally {
        setIsGlobalLoadingActive(false);
      }
    })();
  }, []);

  return (
    <CommonPageContainer className="ranking-common-page">
      <StyledMain>
        <Featured>
          <StyledLabel>Aluno Destaque</StyledLabel>
          <FeaturedSection>
            <FeaturedCard>
              <CharacterFeatured>
                <Character.FullComponent number={studentAt2st.character_Id} />
                <MedalContainer>
                  <img src={Medal2st} alt="2st" />
                </MedalContainer>
              </CharacterFeatured>
              <Name>{Functions.getFirstName(studentAt2st.name)}</Name>
              <Points>{studentAt2st.totalScore} pts</Points>
              <RankingPodium position={2} />
            </FeaturedCard>

            <FeaturedCard className="first">
              <CrownSimple weight="fill" size={24} color="#FFD700" />
              <Character.FullComponent
                size="medium"
                number={studentAt1st.character_Id}
              />
              <Name>{Functions.getFirstName(studentAt1st.name)}</Name>
              <Points>{studentAt1st.totalScore} pts</Points>
              <RankingPodium position={1} />
            </FeaturedCard>

            <FeaturedCard>
              <CharacterFeatured>
                <Character.FullComponent number={studentAt3st.character_Id} />
                <MedalContainer>
                  <img src={Medal3st} alt="3st" />
                </MedalContainer>
              </CharacterFeatured>
              <Name>{Functions.getFirstName(studentAt3st.name)}</Name>
              <Points>{studentAt3st.totalScore} pts</Points>
              <RankingPodium position={3} />
            </FeaturedCard>
          </FeaturedSection>
        </Featured>

        <StudentList>
          {studentsRankingWithoutPodium.map((student, index) => (
            <StudentItem key={student.id}>
              <Number>{index + 4}</Number>
              <StudentInfo>
                <CharacterContainer>
                  <Character.FullComponent
                    size="small"
                    number={student.character_Id}
                  />
                  {Functions.getFirstName(student.name)}
                </CharacterContainer>
                <StyledTotalScore>{student.totalScore} pts</StyledTotalScore>
              </StudentInfo>
            </StudentItem>
          ))}
        </StudentList>

        <NavBar.FullComponent />
      </StyledMain>
    </CommonPageContainer>
  );
};
