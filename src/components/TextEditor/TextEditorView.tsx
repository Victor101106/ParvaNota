import { useTextEditorViewModel } from "@/components/TextEditor/TextEditorViewModel"
import { useTranslations } from "next-intl"

type TextEditorViewModelReturnType = ReturnType<typeof useTextEditorViewModel>;

export type TextEditorViewProps = TextEditorViewModelReturnType;

export function TextEditorView(props: TextEditorViewProps) {
  const translate = useTranslations("TextEditor");

  return (
    <textarea
      className="w-full h-full focus:outline-none overflow-y-scroll resize-none scroll:bg-red bg-background text-foreground px-[8%] lg:px-[25%] lg:py-32 text-justify font-normal tracking-[0%] selection:bg-selection-background selection:text-selection-foreground"
      placeholder={translate("Placeholder")}
      onChange={props.onTextEditorChange}
      onSelect={props.onTextEditorSelect}
      onInput={props.onTextEditorInput}
      onBlur={props.onTextEditorBlur}
      value={props.currentText}
      style={{
        lineHeight: 1.5,
        fontSize: props.currentFontSize,
      }}
    />
  );
}
