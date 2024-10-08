import { useNavigate } from "react-router-dom";
import {
  Button,
  ChallengeMessage,
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
import { routeConfigs } from "../../../../shared/configs";
import { useState } from "react";

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

type NavigationButtonsProps = {
  className: string;
  subStep: number;
  handlePrevSubStep: () => void;
  handleNextSubStep: () => void;
};

const NavigationButtons = ({
  className,
  subStep,
  handlePrevSubStep,
  handleNextSubStep,
}: NavigationButtonsProps) => {
  const navigate = useNavigate();

  return (
    <ButtonsArea className={className}>
      <Button color="green" onClick={handlePrevSubStep}>
        <CaretLeft />
      </Button>
      {subStep < 3 ? (
        <Button color="green" onClick={handleNextSubStep}>
          <CaretRight />
        </Button>
      ) : (
        <Button color="green" onClick={() => navigate(routeConfigs.Map)}>
          Avançar
        </Button>
      )}
    </ButtonsArea>
  );
};

export function SecondStep({ selectedColor, setStep }) {
  const navigate = useNavigate();
  const color_details = get_color_info(selectedColor);
  console.log(color_details, selectedColor);

  const [subStep, setSubStep] = useState(1);

  const handleNextSubStep = () => {
    setSubStep((prev) => (prev < 3 ? prev + 1 : 3));
  };

  const handlePrevSubStep = () => {
    setSubStep((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <StyledMain>
      <ChallengeMessage>
        {`Que incrível! Veja como a cor ${color_details.name} que você escolheu pode ser representada de várias formas!`}
      </ChallengeMessage>
      <BoxColor color={color_details.hex}></BoxColor>

      <ExplanationAreas>
        <Explanation className={subStep === 1 ? "mobileVisible" : ""}>
          <Title>
            Padrão HEX:{" "}
            <ColorName color={color_details.hex}>{color_details.hex}</ColorName>
          </Title>
          <Message>
            O padrão HEX, ou hexadecimal, usa seis letras ou números após o #.
            Os dois primeiros representam o vermelho, os dois seguintes o verde
            e os últimos o azul.
          </Message>

          <NavigationButtons
            className={subStep === 1 ? "mobileVisible" : ""}
            subStep={subStep}
            handlePrevSubStep={handlePrevSubStep}
            handleNextSubStep={handleNextSubStep}
          />
        </Explanation>

        <Explanation className={subStep === 2 ? "mobileVisible" : ""}>
          <Title>
            Padrão RGB:{" "}
            <ColorName color={color_details.hex}>{color_details.rgb}</ColorName>
          </Title>
          <Message>
            O padrão RGB, ou Red, Green, Blue, usa as cores-luz e é utilizado em
            dispositivos com tela colorida. Cada cor (vermelho, verde e azul)
            varia de 0 a 255.
          </Message>
          <NavigationButtons
            className={subStep === 2 ? "mobileVisible" : ""}
            subStep={subStep}
            handlePrevSubStep={handlePrevSubStep}
            handleNextSubStep={handleNextSubStep}
          />
        </Explanation>
        <Explanation className={subStep === 3 ? "mobileVisible" : ""}>
          <Title>
            Padrão HSL:{" "}
            <ColorName color={color_details.hex}>{color_details.hsl}</ColorName>
          </Title>
          <Message>
            O padrão HSL usa Hue (tom), Saturation (saturação) e Lightness
            (luminosidade). O tom é expresso em graus, enquanto a saturação e a
            luminosidade são expressas em porcentagens.
          </Message>
          <NavigationButtons
            className={subStep === 3 ? "mobileVisible" : ""}
            subStep={subStep}
            handlePrevSubStep={handlePrevSubStep}
            handleNextSubStep={handleNextSubStep}
          />
        </Explanation>
      </ExplanationAreas>
      
        <ButtonsArea className="visible">
          <Button color="green" onClick={() => navigate(routeConfigs.Map)}>
            Avançar
          </Button>
        </ButtonsArea>

    </StyledMain>
  );
}
