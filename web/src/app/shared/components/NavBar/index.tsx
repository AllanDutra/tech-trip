import { ReactNode, useMemo } from "react";
import { IconContext, MapPin, ReadCvLogo, Trophy } from "@phosphor-icons/react";
import { routeConfigs } from "../../configs";
import { StyledContainer, StyledOption } from "./styles";
import { useLocation } from "react-router-dom";

interface IContainerProps {
  children: ReactNode;
}

type TNavBarOptionVariants = "map" | "resume" | "ranking";

interface IOptionProps {
  variant: TNavBarOptionVariants;
}

interface IOptionVariant {
  Icon: ReactNode;
  linkPath: string;
}

function Container({ children }: IContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

function Option({ variant }: IOptionProps) {
  const location = useLocation();

  const { Icon, linkPath } = useMemo((): IOptionVariant => {
    if (variant === "map")
      return {
        Icon: <MapPin />,
        linkPath: routeConfigs.Map,
      };

    if (variant === "resume")
      return {
        Icon: <ReadCvLogo />,
        linkPath: routeConfigs.Resume,
      };

    return {
      Icon: <Trophy />,
      linkPath: routeConfigs.Ranking,
    };
  }, [variant]);

  const selected = useMemo(
    () => location.pathname === linkPath,
    [location, linkPath]
  );

  return (
    <StyledOption className={selected ? "selected" : ""} to={linkPath}>
      <IconContext.Provider
        value={{
          size: 25,
          weight: selected ? "fill" : "regular",
        }}
      >
        {Icon}
        {selected && <span className="point" />}
      </IconContext.Provider>
    </StyledOption>
  );
}

function FullComponent() {
  return (
    <Container>
      <Option variant="map" />
      <Option variant="resume" />
      <Option variant="ranking" />
    </Container>
  );
}

export const NavBar = { Container, Option, FullComponent };
