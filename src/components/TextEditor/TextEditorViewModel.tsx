import { useFontSizeControlViewModel } from "@/components/FontSizeControl";
import { ChangeEvent, useState } from "react";

type FontSizeControlViewModelPickedReturnType = Pick<
  ReturnType<typeof useFontSizeControlViewModel>,
  "fontSize"
>;

export type TextEditorViewModelProps = FontSizeControlViewModelPickedReturnType;

export function useTextEditorViewModel(props: TextEditorViewModelProps) {
  const [selectedText, setSelectedText] = useState<string>("");
  const [text, setText] = useState<string>("");

  function onTextEditorChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  function onTextEditorSelect() {
    setSelectedText(window?.getSelection()?.toString() || String());
  }

  return {
    fontSize: props.fontSize,
    onTextEditorChange,
    onTextEditorSelect,
    setSelectedText,
    selectedText,
    setText,
    text,
  };
}
