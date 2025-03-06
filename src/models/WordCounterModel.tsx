export class WordCounterModel {
  private constructor() {}

  public static create() {
    return new WordCounterModel();
  }

  public calculate(text: string) {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word).length;
  }
}
