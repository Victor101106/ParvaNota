import { useWordCounterViewModel } from "@/components/WordCounter/WordCounterViewModel";

type WordCounterViewModelPickedReturnType = Pick<
  ReturnType<typeof useWordCounterViewModel>,
  "amountOfSelectedWords" | "amountOfWords"
>;

export type WordCounterViewProps = WordCounterViewModelPickedReturnType;

export function WordCounterView(props: WordCounterViewProps) {
  return (
    <p
      className={`rounded-[0.25rem] px-3 py-1 transition-colors text-[0.9375rem] leading-[1.40625rem] font-medium tracking-[-4%] select-none ${
        !!props.amountOfSelectedWords
          ? "bg-selection-background text-selection-foreground"
          : "bg-background text-foreground hover:bg-background-hovering"
      }`}
    >
      {!!props.amountOfSelectedWords && (
        <span>{props.amountOfSelectedWords} of </span>
      )}
      {props.amountOfWords} Words
    </p>
  );
}
