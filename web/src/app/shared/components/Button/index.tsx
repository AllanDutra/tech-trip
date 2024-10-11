import { ReactNode, useCallback } from "react";
import { StyledButton } from "./styles";
import { IconContext } from "@phosphor-icons/react";
import { ProgressIcon } from "../ProgressIcon";

type TButtonColor = "green" | "red" | "yellow" | "blue";

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color: TButtonColor;
  text?: string;
  children?: ReactNode;
  isLoading?: boolean;
}

export function Button({
  color,
  text,
  children,
  className,
  isLoading,
  onClick,
  ...rest
}: IButtonProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isLoading) return;

      onClick?.(e);
    },
    [isLoading, onClick]
  );

  return (
    <StyledButton
      onClick={handleClick}
      className={`${color} ${className} ${isLoading ? "loading" : ""}`}
      {...rest}
    >
      <span>
        {isLoading ? (
          <IconContext.Provider
            value={{
              weight: "bold",
              size: 21,
            }}
          >
            <ProgressIcon />
          </IconContext.Provider>
        ) : text ? (
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
