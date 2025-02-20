import { useTextEditorViewModel } from "@/components/TextEditor/TextEditorViewModel";

type TextEditorViewModelPickedReturnType = Pick<
  ReturnType<typeof useTextEditorViewModel>,
  "onTextEditorChange" | "onTextEditorSelect" | "fontSize" | "text"
>;

export type TextEditorViewProps = TextEditorViewModelPickedReturnType;

export function TextEditorView(props: TextEditorViewProps) {
  return (
    <textarea
      className="w-full h-full focus:outline-none transition-colors overflow-y-scroll resize-none scroll:bg-red bg-background text-foreground px-[8%] lg:px-[25%] lg:py-32 text-justify font-normal tracking-[0%] selection:bg-selection-background selection:text-selection-foreground"
      placeholder={"Welcome to ParvaNota!\nEnter or paste your text here..."}
      onChange={props.onTextEditorChange}
      onSelect={props.onTextEditorSelect}
      value={props.text}
      style={{
        lineHeight: 1.5,
        fontSize: props.fontSize,
      }}
    />
  );
}
