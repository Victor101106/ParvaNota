import { IconButtonView } from "@/components/IconButton";
import { useThemeSwitchViewModel } from "@/components/ThemeSwitch/ThemeSwitchViewModel";
import {
  RiComputerLine,
  RiMoonLine,
  RiQuestionLine,
  RiSunLine,
} from "@remixicon/react";

type ThemeSwitchViewModelReturnType = ReturnType<
  typeof useThemeSwitchViewModel
>;

export type ThemeSwitchViewProps = ThemeSwitchViewModelReturnType;

export function ThemeSwitchView(props: ThemeSwitchViewProps) {
  return (
    <IconButtonView
      icon={
        props.theme === "system"
          ? RiComputerLine
          : props.theme === "light"
          ? RiSunLine
          : props.theme === "dark"
          ? RiMoonLine
          : RiQuestionLine
      }
      onClick={props.onSwitchClick}
    />
  );
}
