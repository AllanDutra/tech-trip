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
import { IStudents } from "../../shared/services";
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
          <Challenge completed bottom={10} left={50}>
            1
          </Challenge>
          <LineContainer bottom={15} left={55}>
            <Line1 />
          </LineContainer>

          <Challenge bottom={20} left={70}>
            2
          </Challenge>
        </Map>
      </MapContainer>
      <NavBar.FullComponent />
    </TrackContainer>
  );
}
