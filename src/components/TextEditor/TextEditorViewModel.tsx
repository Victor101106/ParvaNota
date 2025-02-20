import { ChangeEvent, useState } from "react";

export function useTextEditorViewModel() {
  const [selectedText, setSelectedText] = useState<string>("");
  const [text, setText] = useState<string>("");

  function onTextEditorChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  function onTextEditorSelect() {
    setSelectedText(window?.getSelection()?.toString() || String());
  }

  return {
    onTextEditorChange,
    onTextEditorSelect,
    setSelectedText,
    selectedText,
    setText,
    text,
  };
}
