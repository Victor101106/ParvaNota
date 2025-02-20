import { ChangeEvent, useState } from "react";

export function useTextEditorViewModel() {
  const [text, setText] = useState<string>("");

  function onTextEditorChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  return { onTextEditorChange, setText, text };
}
