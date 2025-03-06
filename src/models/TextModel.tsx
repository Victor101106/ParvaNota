import { Dispatch, SetStateAction, useState } from "react";

export class TextModel {
  private constructor(
    private readonly setSelectedText: Dispatch<SetStateAction<string>>,
    private readonly selectedText: string,
    private readonly setText: Dispatch<SetStateAction<string>>,
    private readonly text: string
  ) {}

  public static create() {
    const [selectedText, setSelectedText] = useState<string>("");
    const [text, setText] = useState<string>("");

    return new TextModel(setSelectedText, selectedText, setText, text);
  }

  public set selection(value: string) {
    this.setSelectedText(value);
  }

  public get selection(): string {
    return this.selectedText;
  }

  public set value(value: string) {
    this.setText(value);
  }

  public get value(): string {
    return this.text;
  }
}
