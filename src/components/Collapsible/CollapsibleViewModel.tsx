import { useTextEditorViewModel } from "@/components/TextEditor";
import {
  clipboardService,
  ClipboardService,
} from "@/services/clipboard.service";
import { useState } from "react";

type TextEditorViewModelPickedReturnType = Pick<
  ReturnType<typeof useTextEditorViewModel>,
  "setText" | "text"
>;

export type CollapsibleViewModelProps = {
  clipboardService: ClipboardService;
} & TextEditorViewModelPickedReturnType;

export function useCollapsibleViewModel(props: CollapsibleViewModelProps) {
  const [open, setOpen] = useState<boolean>();

  async function onCopyClick() {
    await props.clipboardService.copy(props.text);
  }

  function onDeleteClick() {
    props.setText("");
  }

  async function onPasteClick() {
    props.setText(await clipboardService.paste());
  }

  function onToggleClick() {
    setOpen(!open);
  }

  return { open, onCopyClick, onDeleteClick, onPasteClick, onToggleClick };
}
