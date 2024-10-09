import {
  TrackContainer,
  TrackHeader,
  Greetings,
  ProgressContainer,
  ActionHeader,
  Map,
  Challenge,
  LineContainer,
  MapContainer,
  MapPinContainer,
  ChallengeContainer,
  StarsContainer,
} from "./styles";
import {
  NavBar,
  ProgressBar,
  Line1,
  Line1Unfilled,
  Line2,
  Line2Unfilled,
  Line3,
  Line3Unfilled,
} from "../../shared/components";
import { GearSix, MapPin } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { routeConfigs } from "../../shared/configs";
import React from "react";
import { Star } from "@phosphor-icons/react/dist/ssr";
import { IChallenge } from "../../shared/services/TechTripApi/ChallengesController";
import { IStudentClaims } from "../../shared/services/TechTripApi/StudentsController";

export function MapPage() {
  const student: IStudentClaims = {
    id: 0,
    name: "",
    email: "",
    user: "",
    birth: "",
    gender: "",
    character_Id: 0,
    preference_Sound: false,
    preference_Vibration: false,
  };

  const challenges: IChallenge[] = [
    {
      challenge_Id: 1,
      number: 1,
      current: false,
      score_Stars: 1,
      score_Diamonds: 0,
    },
    {
      challenge_Id: 2,
      number: 2,
      current: false,
      score_Stars: 2,
      score_Diamonds: 0,
    },
    {
      challenge_Id: 3,
      number: 3,
      current: false,
      score_Stars: 3,
      score_Diamonds: 0,
    },
    {
      challenge_Id: 4,
      number: 4,
      current: true,
      score_Stars: 2,
      score_Diamonds: 0,
    },
    {
      challenge_Id: 5,
      number: 5,
      current: false,
      score_Stars: 0,
      score_Diamonds: 0,
    },
    {
      challenge_Id: 6,
      number: 6,
      current: false,
      score_Stars: 0,
      score_Diamonds: 0,
    },
    {
      challenge_Id: 7,
      number: 7,
      current: false,
      score_Stars: 0,
      score_Diamonds: 0,
    },
    {
      challenge_Id: 8,
      number: 8,
      current: false,
      score_Stars: 0,
      score_Diamonds: 0,
    },
    {
      challenge_Id: 9,
      number: 9,
      current: false,
      score_Stars: 0,
      score_Diamonds: 0,
    },
    {
      challenge_Id: 10,
      number: 10,
      current: false,
      score_Stars: 0,
      score_Diamonds: 0,
    },
    {
      challenge_Id: 11,
      number: 11,
      current: false,
      score_Stars: 0,
      score_Diamonds: 0,
    },
    {
      challenge_Id: 12,
      number: 12,
      current: false,
      score_Stars: 0,
      score_Diamonds: 0,
    },
    {
      challenge_Id: 13,
      number: 13,
      current: false,
      score_Stars: 0,
      score_Diamonds: 0,
    },
    {
      challenge_Id: 14,
      number: 14,
      current: false,
      score_Stars: 0,
      score_Diamonds: 0,
    },
    {
      challenge_Id: 15,
      number: 15,
      current: false,
      score_Stars: 0,
      score_Diamonds: 0,
    },
  ];

  const current = 4;
  const loading = false;
  const progress = 75;

  const navigate = useNavigate();

  /*const [student, setStudent] = useState<IStudents | null>(null);
  const [challenges, setChallenges] = useState<IChallengesStudent[]>([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);*/

  /*useEffect(() => {
    const token = sessionStorage.getItem("authToken");

    if (token) {
      StudentsService.getSettings(token).then((response) => {
        if (response instanceof Error) {
          redirectToLogin(response.message);
        } else {
          setStudent(response);
        }
      });

      ChallengesStudentService.getChallengesByStudent(token).then((response) => {
        if (response instanceof Error) {
          redirectToLogin(response.message);
        } else {
          setChallenges(response);

          const currentChallenge = response.find(
            (challenge) => challenge.current
          );
          if (currentChallenge) {
            setCurrent(currentChallenge.challenge_id);
          }

          const completedChallenges = response.filter(
            (challenge) => challenge.current || challenge.challenge_id < current
          ).length;
          const totalChallenges = response.length;
          const progressPercentage =
            (completedChallenges / totalChallenges) * 100;
          setProgress(progressPercentage);

          setLoading(false);
        }
      });
    } else {
      redirectToLogin("Por favor, realize login novamente");
    }
  }, [navigate]);*/

  const article = student?.gender === "male" ? "o" : "a";

  const generateBottomValues = (numChallenges: number) => {
    const baseValues = [20, -26, -46];
    const increment = -137;

    const bottomValues = [];

    for (let i = 0; i < numChallenges; i++) {
      const baseIndex = i % 3;
      const offset = Math.floor(i / 3) * increment;
      bottomValues.push(baseValues[baseIndex] + offset);
    }

    return bottomValues;
  };

  const renderChallenges = () => {
    const numChallenges = challenges.length;
    const bottomValues = generateBottomValues(numChallenges);
    const leftValues = [45, 76, -4];
    const lines = [Line1, Line2, Line3];
    const linesUnfilled = [Line1Unfilled, Line2Unfilled, Line3Unfilled];
    const lineOffsets = [
      { bottomOffset: -40, leftOffset: 14 },
      { bottomOffset: -13, leftOffset: -71 },
      { bottomOffset: -32, leftOffset: 9 },
    ];

    return challenges.map((challenge, index) => {
      const bottom = bottomValues[index % bottomValues.length];
      const left = leftValues[index % leftValues.length];
      const LineComponent =
        challenge.challenge_Id < current
          ? lines[index % lines.length]
          : linesUnfilled[index % linesUnfilled.length];

      const offsets = lineOffsets[index % lineOffsets.length];

      return (
        <React.Fragment key={challenge.challenge_Id}>
          {renderChallenge(
            challenge.challenge_Id,
            bottom,
            left,
            <LineComponent />,
            offsets,
            challenge.challenge_Id === current,
            numChallenges,
            challenge.score_Stars
          )}
        </React.Fragment>
      );
    });
  };

  const renderChallenge = (
    id: number,
    bottom: number,
    left: number,
    lineComponent: JSX.Element | null,
    lineOffsets: { bottomOffset: number; leftOffset: number } | null = null,
    isCurrent: boolean,
    numChallenges: number,
    stars: number
  ) => {
    const lineBottom = lineOffsets ? bottom + lineOffsets.bottomOffset : 0;
    const lineLeft = lineOffsets ? left + lineOffsets.leftOffset : 0;

    return (
      <>
        <ChallengeContainer bottom={bottom} left={left}>
          {isCurrent && (
            <MapPinContainer>
              <MapPin size={36} color="#2BCB9A" weight="duotone" />
            </MapPinContainer>
          )}

          <Challenge completed={id < current}>
            <span>{id}</span>
          </Challenge>
          {id < current && (
            <StarsContainer>
              {[...Array(3)].map((_, index) => (
                <Star
                  key={index}
                  size={index == 1 ? 28 : 22}
                  color={index < stars ? "#FFA425" : "#99B9B7"}
                  weight="fill"
                />
              ))}
            </StarsContainer>
          )}
        </ChallengeContainer>
        {id != numChallenges && lineComponent && (
          <LineContainer bottom={lineBottom} left={lineLeft}>
            {lineComponent}
          </LineContainer>
        )}
      </>
    );
  };

  return (
    <TrackContainer>
      <TrackHeader>
        <ProgressContainer>
          <ProgressBar progress={loading ? 0 : progress} />
        </ProgressContainer>
        <Greetings>
          {`Olá, Pequen${article}`}
          <span>{student?.name.toLocaleUpperCase()}!</span>
        </Greetings>
        <ActionHeader
          onClick={() => {
            navigate(routeConfigs.Settings);
          }}
        >
          <GearSix weight="fill" size={32} />
        </ActionHeader>
      </TrackHeader>
      <MapContainer>
        <Map>{renderChallenges()}</Map>
      </MapContainer>
      <NavBar.FullComponent />
    </TrackContainer>
  );
}