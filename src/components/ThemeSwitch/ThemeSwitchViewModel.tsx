import { ThemeModel } from "@/models/ThemeModel";
import { useTheme } from "next-themes";

export type ThemeSwitchViewModelProps = {
  themeModel: ThemeModel;
};

export function useThemeSwitchViewModel(props: ThemeSwitchViewModelProps) {
  const { theme: currentTheme, setTheme } = useTheme();

  function onSwitchClick() {
    setTheme(props.themeModel.switch(currentTheme));
  }

  return { currentTheme, onSwitchClick };
}
