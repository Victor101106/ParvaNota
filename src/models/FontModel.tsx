import { useState } from "react";

export const DEFAULT_FONT_SIZE = 15;

export type FontModel = ReturnType<typeof useFontModel>;

export function useFontModel() {
  const [fontSize, setFontSize] = useState<number>(DEFAULT_FONT_SIZE);

  function updateFontSize(value: number): number {
    setFontSize(value);
    return value;
  }

  return {
    decreaseSize(): number {
      return updateFontSize(Math.max(1, fontSize - 1));
    },

    increaseSize(): number {
      return updateFontSize(Math.min(fontSize + 1, 100));
    },

    resetSize(): number {
      return updateFontSize(DEFAULT_FONT_SIZE);
    },

    set size(value: number) {
      setFontSize(value);
    },

    get size(): number {
      return fontSize;
    },
  };
}
