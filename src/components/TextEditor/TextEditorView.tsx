import { useTextEditorViewModel } from "@/components/TextEditor/TextEditorViewModel";

type TextEditorViewModelPickedReturnType = Pick<
  ReturnType<typeof useTextEditorViewModel>,
  "onTextEditorChange" | "text"
>;

export type TextEditorViewProps = TextEditorViewModelPickedReturnType;

export function TextEditorView(props: TextEditorViewProps) {
  return (
    <textarea
      className="w-dvw h-dvh focus:outline-none overflow-y-scroll resize-none scroll:bg-red bg-background text-foreground px-[8%] lg:px-[25%] py-12 lg:py-32 text-justify text-[0.9375rem] leading-[1.40625rem] font-normal tracking-[0%] selection:bg-selection-background selection:text-selection-foreground"
      placeholder={"Welcome to ParvaNota!\nEnter or paste your text here..."}
      onChange={props.onTextEditorChange}
      value={props.text}
    />
  );
}
