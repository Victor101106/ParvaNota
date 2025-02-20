import { useState } from "react";

export type CollapsibleViewModelProps = void;

export function useCollapsibleViewModel(props: CollapsibleViewModelProps) {
  const [open, setOpen] = useState<boolean>();

  function toggleOpen() {
    setOpen(!open);
  }

  return { open, setOpen, toggleOpen };
}
