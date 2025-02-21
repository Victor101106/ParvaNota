import { useFontSizeControlViewModel } from "@/components/FontSizeControl";
import { ChangeEvent, useState } from "react";

type FontSizeControlViewModelPickedReturnType = Pick<
  ReturnType<typeof useFontSizeControlViewModel>,
  "fontSize"
>;

export type TextEditorViewModelProps = {
  disableInterface: () => void;
  enableInterface: () => void;
} & FontSizeControlViewModelPickedReturnType;

export function useTextEditorViewModel(props: TextEditorViewModelProps) {
  const [selectedText, setSelectedText] = useState<string>("");
  const [text, setText] = useState<string>("");

  function onTextEditorBlur() {
    props.enableInterface();
  }

  function onTextEditorChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  function onTextEditorInput() {
    props.disableInterface();
  }

  function onTextEditorSelect() {
    setSelectedText(window?.getSelection()?.toString() || String());
  }

  return {
    fontSize: props.fontSize,
    onTextEditorChange,
    onTextEditorSelect,
    onTextEditorInput,
    onTextEditorBlur,
    setSelectedText,
    selectedText,
    setText,
    text,
  };
}
