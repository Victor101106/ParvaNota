import { useState } from "react";

export type CollapsibleModel = ReturnType<typeof useCollapsibleModel>;

export function useCollapsibleModel() {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  function toggle() {
    setCollapsed((value) => !value);
  }

  return { toggle, open: collapsed };
}
