export class LocalStorageService {
  setFontSize(value: number) {
    window?.localStorage.setItem("font-size", value.toString());
  }

  getFontSize(): number {
    return Number(window?.localStorage.getItem("font-size") || 15);
  }
}

export const localStorageService = new LocalStorageService();
