import { useTheme } from "next-themes";

export function useThemeSwitchViewModel() {
  const { theme, setTheme } = useTheme();

  function onSwitchClick() {
    setTheme(
      theme === "system" ? "light" : theme === "light" ? "dark" : "system"
    );
  }

  return { theme, onSwitchClick };
}
