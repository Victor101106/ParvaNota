export class LocalStorageService {
  private constructor() {}

  public static create(): LocalStorageService {
    return new LocalStorageService();
  }

  public setFontSize(value: number) {
    window?.localStorage.setItem("font-size", value.toString());
  }

  public getFontSize(): number {
    return Number(window?.localStorage.getItem("font-size") || 15);
  }
}
