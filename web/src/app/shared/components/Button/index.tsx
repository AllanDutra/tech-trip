import { ReactNode } from "react";
import { StyledButton } from "./styles";
import { IconContext } from "@phosphor-icons/react";

type TButtonColor = "green" | "red" | "yellow" | "blue";

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color: TButtonColor;
  text?: string;
  children?: ReactNode;
}

export function Button({
  color,
  text,
  children,
  className,
  ...rest
}: IButtonProps) {
  return (
    <StyledButton className={`${color} ${className}`} {...rest}>
      <span>
        {text ? (
          text
        ) : (
          <IconContext.Provider
            value={{
              weight: "fill",
              size: 21,
            }}
          >
            {children}
          </IconContext.Provider>
        )}
      </span>
    </StyledButton>
  );
}
