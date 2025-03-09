export type ThemeModel = ReturnType<typeof useThemeModel>;

export function useThemeModel() {
  return {
    switch(theme?: string): string {
      return theme === "system"
        ? "light"
        : theme === "light"
        ? "dark"
        : "system";
    },
  };
}
