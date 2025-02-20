import { useTextEditorViewModel } from "@/components/TextEditor";
import { useState } from "react";

type TextEditorViewModelPickedReturnType = Pick<
  ReturnType<typeof useTextEditorViewModel>,
  "setText"
>;

export type CollapsibleViewModelProps = TextEditorViewModelPickedReturnType;

export function useCollapsibleViewModel(props: CollapsibleViewModelProps) {
  const [open, setOpen] = useState<boolean>();

  function onToggleClick() {
    setOpen(!open);
  }

  function onDeleteClick() {
    props.setText("");
  }

  return { open, onDeleteClick, onToggleClick };
}
