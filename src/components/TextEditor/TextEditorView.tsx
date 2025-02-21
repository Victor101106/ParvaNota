import { useTextEditorViewModel } from "@/components/TextEditor/TextEditorViewModel";
import { useTranslations } from "next-intl";

type TextEditorViewModelPickedReturnType = Pick<
  ReturnType<typeof useTextEditorViewModel>,
  | "onTextEditorChange"
  | "onTextEditorSelect"
  | "onTextEditorInput"
  | "onTextEditorBlur"
  | "fontSize"
  | "text"
>;

export type TextEditorViewProps = TextEditorViewModelPickedReturnType;

export function TextEditorView(props: TextEditorViewProps) {
  const translate = useTranslations("TextEditor");

  return (
    <textarea
      className="w-full h-full focus:outline-none transition-colors overflow-y-scroll resize-none scroll:bg-red bg-background text-foreground px-[8%] lg:px-[25%] lg:py-32 text-justify font-normal tracking-[0%] selection:bg-selection-background selection:text-selection-foreground"
      placeholder={translate("Placeholder")}
      onChange={props.onTextEditorChange}
      onSelect={props.onTextEditorSelect}
      onInput={props.onTextEditorInput}
      onBlur={props.onTextEditorBlur}
      value={props.text}
      style={{
        lineHeight: 1.5,
        fontSize: props.fontSize,
      }}
    />
  );
}
