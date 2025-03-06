import { FontModel } from "@/models/FontModel";
import { InterfaceModel } from "@/models/InterfaceModel";
import { TextModel } from "@/models/TextModel";
import { ChangeEvent } from "react";

export type TextEditorViewModelProps = {
  interfaceModel: InterfaceModel;
  fontModel: FontModel;
  textModel: TextModel;
};

export function useTextEditorViewModel(props: TextEditorViewModelProps) {
  const currentFontSize = props.fontModel.size;
  const currentText = props.textModel.value;

  function onTextEditorBlur() {
    props.interfaceModel.show();
  }

  function onTextEditorChange(event: ChangeEvent<HTMLTextAreaElement>) {
    props.textModel.value = event.target.value;
  }

  function onTextEditorInput() {
    props.interfaceModel.hidden();
  }

  function onTextEditorSelect() {
    props.textModel.selection = window?.getSelection()?.toString() || String();
  }

  return {
    onTextEditorChange,
    onTextEditorSelect,
    onTextEditorInput,
    onTextEditorBlur,
    currentFontSize,
    currentText,
  };
}
