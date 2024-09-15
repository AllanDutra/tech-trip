import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  ChallengeMessage,
  Header,
} from "../../../../shared/components";
import {
  BoxColor,
  ColorName,
  Explanation,
  Message,
  StyledMain,
  Title,
  ButtonsArea,
  ExplanationAreas,
} from "../../styles";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useMediaQuery } from "react-responsive";
import { routeConfigs } from "../../../../shared/configs";

type ColorInfo = {
  name: string;
  rgb: string;
  hsl: string;
  hex: string;
};

const colorInfo: Record<string, ColorInfo> = {
  "#FE0000": {
    name: "vermelha",
    rgb: "rgb(254, 0, 0)",
    hsl: "hsl(0, 100%, 50%)",
    hex: "#FE0000",
  },
  "#EE7326": {
    name: "laranja",
    rgb: "rgb(238, 115, 38)",
    hsl: "hsl(24, 84%, 54%)",
    hex: "#EE7326",
  },
  "#FFFF00": {
    name: "amarela",
    rgb: "rgb(255, 255, 0)",
    hsl: "hsl(60, 100%, 50%)",
    hex: "#FFFF00",
  },
  "#009045": {
    name: "verde",
    rgb: "rgb(0, 144, 69)",
    hsl: "hsl(150, 100%, 28%)",
    hex: "#009045",
  },
  "#3C51A4": {
    name: "azul",
    rgb: "rgb(60, 81, 164)",
    hsl: "hsl(230, 46%, 44%)",
    hex: "#3C51A4",
  },
  "#9743A5": {
    name: "roxa",
    rgb: "rgb(151, 67, 165)",
    hsl: "hsl(290, 42%, 45%)",
    hex: "#9743A5",
  },
  "#FF52D8": {
    name: "rosa",
    rgb: "rgb(255, 82, 216)",
    hsl: "hsl(316, 100%, 66%)",
    hex: "#FF52D8",
  },
  "#534B40": {
    name: "marrom",
    rgb: "rgb(83, 75, 64)",
    hsl: "hsl(36, 13%, 29%)",
    hex: "#534B40",
  },
  "#000000": {
    name: "preta",
    rgb: "rgb(0, 0, 0)",
    hsl: "hsl(0, 0%, 0%)",
    hex: "#000000",
  },
};

const get_color_info = (hex_color: string) => {
  return (
    colorInfo[hex_color] || {
      name: "desconhecida",
      rgb: "rgb(0, 0, 0)",
      hsl: "hsl(0, 0%, 0%)",
      hex: hex_color,
    }
  );
};

export const Challenge7Stage2 = () => {
  const navigate = useNavigate();

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const location = useLocation();
  const { color } = location.state || { color: "#FE0000" };
  const color_details = get_color_info(color);

  return (
    <StyledMain>
      <Header.FullComponent currentLevel={7} totalLevels={15} />
      <ChallengeMessage
        children={
          <>
            Que incrível! Veja como a <strong>cor {color_details.name}</strong>{" "}
            que você escolheu pode ser representada de várias formas!
          </>
        }
      />
      <BoxColor color={color_details.hex}></BoxColor>
      <ExplanationAreas>
        <Explanation>
          <Title>
            Padrão HEX:{" "}
            <ColorName color={color_details.hex}>{color_details.hex}</ColorName>
          </Title>
          <Message>
            <ChallengeMessage
              children={
                <>
                  O padrão HEX, ou hexadecimal, usa seis letras ou números
                  depois do #. Os dois primeiros representam o vermelho, os dois
                  seguintes o verde e os dois últimos o azul. O resultado é a
                  mistura das cores primárias: vermelho, verde e azul.
                </>
              }
            />
          </Message>
          {isMobile && (
            <ButtonsArea>
              <Button
                children={
                  <>
                    <CaretLeft />
                  </>
                }
                color="green"
              />
              <Button
                children={
                  <>
                    <CaretRight />
                  </>
                }
                color="green"
              />
            </ButtonsArea>
          )}
        </Explanation>

        <Explanation>
          <Title>
            Padrão RGB:{" "}
            <ColorName color={color_details.hex}>{color_details.rgb}</ColorName>
          </Title>
          <Message>
            <ChallengeMessage
              children={
                <>
                  O padrão RGB, ou Red, Green, Blue, usa as cores-luz e é usado
                  em todos os dispositivos com tela colorida. Ele usa vermelho
                  (R), verde (G) e azul (B), cada um com valores de 0 a 255.
                </>
              }
            />
          </Message>
          {isMobile && (
            <ButtonsArea>
              <Button
                children={
                  <>
                    <CaretLeft />
                  </>
                }
                color="green"
              />
              <Button
                children={
                  <>
                    <CaretRight />
                  </>
                }
                color="green"
              />
            </ButtonsArea>
          )}
        </Explanation>

        <Explanation>
          <Title>
            Padrão HSL:{" "}
            <ColorName color={color_details.hex}>{color_details.hsl}</ColorName>
          </Title>
          <Message>
            <ChallengeMessage
              children={
                <>
                  O padrão HSL é representado por Hue (tom), Saturation
                  (saturação) e Lightness (luminosidade). O tom é medido em
                  ângulos em graus. A saturação varia de 0% para uma leve sombra
                  da cor até 100% para saturação total. A luminosidade também é
                  expressa em porcentagem.
                </>
              }
            />
          </Message>
          {isMobile && (
            <ButtonsArea>
              <Button
                children={
                  <>
                    <CaretLeft />
                  </>
                }
                color="green"
              />
              <Button
                children={
                  <>
                    <CaretRight />
                  </>
                }
                color="green"
              />
            </ButtonsArea>
          )}
        </Explanation>
      </ExplanationAreas>
      {isDesktop && (
        <ButtonsArea>
          <Button
            children="Avançar"
            color="green"
            onClick={() => {
              navigate(routeConfigs.Map);
            }}
          />
        </ButtonsArea>
      )}
    </StyledMain>
  );
};
