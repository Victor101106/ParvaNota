export class ThemeModel {
  private constructor() {}

  public static create() {
    return new ThemeModel();
  }

  public switch(theme?: string): string {
    return theme === "system" ? "light" : theme === "light" ? "dark" : "system";
  }
}
