import { InterfaceModel } from "@/models/InterfaceModel";

export type InterfaceViewModelProps = {
  interfaceModel: InterfaceModel;
};

export function useInterfaceViewModel(props: InterfaceViewModelProps) {
  function onMouseOver() {
    props.interfaceModel.show();
  }

  function onTouchMove() {
    props.interfaceModel.show();
  }

  function onClick() {
    props.interfaceModel.show();
  }

  return { onClick, onMouseOver, onTouchMove };
}
