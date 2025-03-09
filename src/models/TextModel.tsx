import { useState } from "react";

export type TextModel = ReturnType<typeof useTextModel>;

export function useTextModel() {
  const [selectedText, setSelectedText] = useState<string>("");
  const [text, setText] = useState<string>("");

  return {
    set selection(value: string) {
      setSelectedText(value);
    },

    get selection(): string {
      return selectedText;
    },

    set value(value: string) {
      setText(value);
    },

    get value(): string {
      return text;
    },
  };
}
