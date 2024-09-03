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
  ChallengeContainer,
} from "./styles";
import {
  NavBar,
  ProgressBar,
  Line1,
  Line2,
  Line3,
} from "../../shared/components";
import { IChallenges, IStudents } from "../../shared/services";
import { GearSix } from "@phosphor-icons/react";
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
  const renderChallenge = (
    id: number,
    bottom: number,
    left: number,
    lineComponent: JSX.Element | null,
    lineOffsets: { bottomOffset: number; leftOffset: number } | null = null
  ) => {
    const lineBottom = lineOffsets ? bottom + lineOffsets.bottomOffset : 0;
    const lineLeft = lineOffsets ? left + lineOffsets.leftOffset : 0;

    return (
      <>
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
        <Map>
          {renderChallenge(1, 20, 45, <Line1 />, {
            bottomOffset: -40,
            leftOffset: 14,
          })}
          {renderChallenge(2, -26, 76, <Line2 />, {
            bottomOffset: -13,
            leftOffset: -71,
          })}
          {renderChallenge(3, -46, -4, <Line3 />, {
            bottomOffset: -32,
            leftOffset: 9,
          })}


          {renderChallenge(4, -116, 45, <Line1 />, {
            bottomOffset: -40,
            leftOffset: 14,
          })}
          {renderChallenge(5, -156, 76, <Line2 />, {
            bottomOffset: -13,
            leftOffset: -71,
          })}
          {renderChallenge(6, -176, -4, <Line3 />, {
            bottomOffset: -32,
            leftOffset: 9,
          })}
          {/* <Challenge bottom={20} left={45} completed>
            <span>{challenges[0].id}</span>
          </Challenge>
          <LineContainer bottom={-20} left={59}>
            <Line1 />
          </LineContainer>

          <Challenge bottom={-26} left={76} completed>
            <span>{challenges[1].id}</span>
          </Challenge>
          <LineContainer bottom={-39} left={5}>
            <Line2 />
          </LineContainer>

          <Challenge bottom={-46} left={-4} completed>
            <span>{challenges[2].id}</span>
          </Challenge>
          <LineContainer bottom={-78} left={5}>
            <Line3 />
          </LineContainer> */}
        </Map>
      </MapContainer>
      <NavBar.FullComponent />
    </TrackContainer>
  );
}
