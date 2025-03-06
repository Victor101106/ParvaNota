import { TextModel } from "@/models/TextModel";
import { WordCounterModel } from "@/models/WordCounterModel";

export type WordCounterViewModelProps = {
  wordCounterModel: WordCounterModel;
  textModel: TextModel;
};

export function useWordCounterViewModel(props: WordCounterViewModelProps) {
  const currentSelectedText = props.textModel.selection;
  const currentText = props.textModel.value;

  return {
    currentSelectedWordCount:
      props.wordCounterModel.calculate(currentSelectedText),
    currentWordCount: props.wordCounterModel.calculate(currentText),
  };
}
