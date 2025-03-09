export type WordCounterModel = ReturnType<typeof useWordCounterModel>;

export function useWordCounterModel() {
  return {
    calculate(text: string) {
      return text
        .trim()
        .split(/\s+/)
        .filter((word) => word).length;
    },
  };
}
