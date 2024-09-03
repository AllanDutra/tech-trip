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
    {id: 1, message: ""},
    {id: 2, message: ""},
    {id: 3, message: ""},
    {id: 4, message: ""},
    {id: 5, message: ""},
    {id: 6, message: ""},
    {id: 7, message: ""},
    {id: 8, message: ""},
    {id: 9, message: ""},
    {id: 10, message: ""},
    {id: 11, message: ""},
    {id: 12, message: ""},
    {id: 13, message: ""},
    {id: 14, message: ""},
    {id: 15, message: ""},
  ]
  const current = 4;

  const article = student.gender == "male" ? "o" : "a";

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
          <Challenge bottom={0} left={50}>
            {challenges[0].id}
          </Challenge>
          <Challenge bottom={0} left={50}>
            {challenges[1].id}
          </Challenge>
        </Map>
      </MapContainer>
      <NavBar.FullComponent />
    </TrackContainer>
  );
}
