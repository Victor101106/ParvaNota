import { useTextEditorViewModel } from "@/components/TextEditor";

type TextEditorViewModelPickedReturnType = Pick<
  ReturnType<typeof useTextEditorViewModel>,
  "selectedText" | "text"
>;

export type WordCounterViewModelProps = TextEditorViewModelPickedReturnType;

export function useWordCounterViewModel(props: WordCounterViewModelProps) {
  function calculateAmountOfWords(text: string) {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word).length;
  }

  return {
    amountOfSelectedWords: calculateAmountOfWords(props.selectedText),
    amountOfWords: calculateAmountOfWords(props.text),
  };
}
