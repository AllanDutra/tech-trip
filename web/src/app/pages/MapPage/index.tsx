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
import { IChallenges, IStudents } from "../../shared/services";
import { GearSix, MapPin } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { routeConfigs } from "../../shared/configs";

export function MapPage() {
  const navigate = useNavigate();
  const student: IStudents = {
    id: 0,
    name: "Oliver",
    email: "",
    user: "",
    password: "",
    birth: "",
    gender: "male",
    character_id: 0,
  };

  const challenges: Array<IChallenges> = [
    { id: 1, message: "" },
    { id: 2, message: "" },
    { id: 3, message: "" },
    { id: 4, message: "" },
    { id: 5, message: "" },
    { id: 6, message: "" },
    { id: 7, message: "" },
    { id: 8, message: "" },
    { id: 9, message: "" },
    { id: 10, message: "" },
    { id: 11, message: "" },
    { id: 12, message: "" },
    { id: 13, message: "" },
    { id: 14, message: "" },
    { id: 15, message: "" },
  ];
  const current = 4;

  const article = student.gender == "male" ? "o" : "a";

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
        challenge.id < current
          ? lines[index % lines.length]
          : linesUnfilled[index % linesUnfilled.length];

      const offsets = lineOffsets[index % lineOffsets.length];

      return renderChallenge(
        challenge.id,
        bottom,
        left,
        <LineComponent />,
        offsets,
        challenge.id === current
      );
    });
  };

  const renderChallenge = (
    id: number,
    bottom: number,
    left: number,
    lineComponent: JSX.Element | null,
    lineOffsets: { bottomOffset: number; leftOffset: number } | null = null,
    isCurrent: boolean
  ) => {
    const lineBottom = lineOffsets ? bottom + lineOffsets.bottomOffset : 0;
    const lineLeft = lineOffsets ? left + lineOffsets.leftOffset : 0;
  
    return (
      <>
        {isCurrent && (
          <MapPinContainer>
            <MapPin size={30} color="#2BCB9A" weight="duotone" />
          </MapPinContainer>
        )}
        <Challenge bottom={bottom} left={left} completed={id < current}>
          <span>{id}</span>
        </Challenge>
        {lineComponent && (
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
          <ProgressBar progress={75} />
        </ProgressContainer>
        <Greetings>
          {`Olá, Pequen${article}`}
          <span>{student.name.toLocaleUpperCase()}!</span>
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
