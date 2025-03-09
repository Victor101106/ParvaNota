import { useState } from "react";

export type InterfaceModel = ReturnType<typeof useInterfaceModel>;

export function useInterfaceModel() {
  const [visibility, setVisibility] = useState<boolean>(true);

  function hidden() {
    setVisibility(false);
  }

  function show() {
    setVisibility(true);
  }

  return { hidden, show, visible: visibility };
}
