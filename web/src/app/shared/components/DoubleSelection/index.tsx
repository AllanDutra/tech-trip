import { ReactNode, useMemo } from "react";
import { StyledContainer, StyledSelection } from "./styles";

interface IContainerProps {
  children: ReactNode;
}

type TSelectionVariant = "male" | "female" | "yes" | "no";

interface ISelectionProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: TSelectionVariant;
  title: string;
  selected?: boolean;
}

type TDoubleSelectionVariant = "gender" | "yes-or-no";

interface IFullComponentProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: TDoubleSelectionVariant;
  selected: TSelectionVariant;
}

interface IVariantConfiguration {
  variant: TSelectionVariant;
  title: string;
}

function Container({ children }: IContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

function Selection({ variant, title, selected, ...rest }: ISelectionProps) {
  return (
    <StyledSelection
      className={`${selected ? `selected ${variant}` : ""}`}
      {...rest}
    >
      <span>{title}</span>
    </StyledSelection>
  );
}

function FullComponent({ selected, variant, ...rest }: IFullComponentProps) {
  const variantConfiguration = useMemo((): IVariantConfiguration[] => {
    if (variant === "gender")
      return [
        { variant: "male", title: "Masculino" },
        { variant: "female", title: "Feminino" },
      ];

    return [
      { variant: "yes", title: "Sim" },
      { variant: "no", title: "Não" },
    ];
  }, [variant]);

  return (
    <Container>
      <Selection
        variant={variantConfiguration[0].variant}
        title={variantConfiguration[0].title}
        selected={selected === variantConfiguration[0].variant}
        {...rest}
      />
      <Selection
        variant={variantConfiguration[1].variant}
        title={variantConfiguration[1].title}
        selected={selected === variantConfiguration[1].variant}
        {...rest}
      />
    </Container>
  );
}

export const DoubleSelection = { Container, Selection, FullComponent };
