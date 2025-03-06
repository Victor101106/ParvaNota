import { Dispatch, SetStateAction, useState } from "react";

export class InterfaceModel {
  private constructor(
    private readonly setVisibility: Dispatch<SetStateAction<boolean>>,
    private readonly visibility: boolean
  ) {}

  public static create() {
    const [visibility, setVisibility] = useState<boolean>(true);

    return new InterfaceModel(setVisibility, visibility);
  }

  public hidden() {
    this.setVisibility(false);
  }

  public show() {
    this.setVisibility(true);
  }

  public get visible(): boolean {
    return this.visibility;
  }
}
