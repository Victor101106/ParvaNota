import { Dispatch, SetStateAction, useState } from "react";

export class CollapsibleModel {
  private constructor(
    private readonly setCollapsed: Dispatch<SetStateAction<boolean>>,
    private readonly collapsed: boolean
  ) {}

  public static create() {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    return new CollapsibleModel(setCollapsed, collapsed);
  }

  public toggle() {
    this.setCollapsed((value) => !value);
  }

  public get open(): boolean {
    return !this.collapsed;
  }
}
