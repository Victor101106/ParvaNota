import { Dispatch, SetStateAction, useState } from "react";

export const DEFAULT_FONT_SIZE = 15;

export class FontModel {
  private constructor(
    private readonly setFontSize: Dispatch<SetStateAction<number>>,
    private readonly fontSize: number
  ) {}

  public static create() {
    const [fontSize, setFontSize] = useState<number>(DEFAULT_FONT_SIZE);

    return new FontModel(setFontSize, fontSize);
  }

  public decreaseSize(): number {
    const decreased = Math.max(1, this.size - 1);

    this.setFontSize(decreased);

    return decreased;
  }

  public increaseSize(): number {
    const increased = Math.min(this.size + 1, 100);

    this.setFontSize(increased);

    return increased;
  }

  public resetSize(): number {
    const reseted = DEFAULT_FONT_SIZE;

    this.setFontSize(reseted);

    return reseted;
  }

  public set size(value: number) {
    this.setFontSize(value);
  }

  public get size(): number {
    return this.fontSize;
  }
}
