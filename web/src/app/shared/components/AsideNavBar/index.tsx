import { appConfigs } from "../../configs/App";
import {
  GearSix,
  IconContext,
  MapPin,
  ReadCvLogo,
  Trophy,
} from "@phosphor-icons/react";
import { ReactNode, useMemo } from "react";
import { routeConfigs } from "../../configs";
import { StyledAsideNavBarContainer, StyledLinkComponent } from "./styles";
import { Title } from "../Title";
import { useLocation } from "react-router-dom";

interface ILinkComponentProps {
  Icon: ReactNode;
  title: string;
  to: string;
}

function LinkComponent({ Icon, title, to }: ILinkComponentProps) {
  const location = useLocation();

  const selected = useMemo(() => location.pathname === to, [location, to]);

  return (
    <StyledLinkComponent className={selected ? "selected" : ""} to={to}>
      <IconContext.Provider
        value={{
          size: "25px",
          weight: "fill",
        }}
      >
        {Icon}
      </IconContext.Provider>

      <span>{title}</span>
    </StyledLinkComponent>
  );
}

export function AsideNavBar() {
  return (
    <StyledAsideNavBarContainer>
      <div>
        <Title value={appConfigs.NAME} />

        <LinkComponent
          to={routeConfigs.Map}
          Icon={<MapPin />}
          title="TRILHA DE DESAFIOS"
        />

        <LinkComponent
          to={routeConfigs.Resume}
          Icon={<ReadCvLogo />}
          title="MEU DESEMPENHO"
        />

        <LinkComponent
          to={routeConfigs.Ranking}
          Icon={<Trophy />}
          title="ALUNO DESTAQUE"
        />
      </div>

      <div>
        <LinkComponent
          to={routeConfigs.Settings}
          Icon={<GearSix />}
          title="CONFIGURAÇÕES"
        />
      </div>
    </StyledAsideNavBarContainer>
  );
}
