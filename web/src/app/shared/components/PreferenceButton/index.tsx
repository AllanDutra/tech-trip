import { IconContext, MusicNoteSimple, Vibrate } from "@phosphor-icons/react";
import { useMemo } from "react";
import { StyledButton } from "./styled";

type TPreferenceButtonVariant = "sound" | "vibration";

interface IPreferenceButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: TPreferenceButtonVariant;
  active?: boolean;
}

export function PreferenceButton({
  variant,
  active,
  ...rest
}: IPreferenceButtonProps) {
  const Icon = useMemo(() => {
    if (variant === "sound") return <MusicNoteSimple weight="fill" />;

    return <Vibrate weight="bold" />;
  }, [variant]);

  return (
    <StyledButton className={active ? "active" : ""} {...rest}>
      <span>
        <IconContext.Provider value={{ size: "1.4em" }}>
          {Icon}
        </IconContext.Provider>
      </span>
    </StyledButton>
  );
}
