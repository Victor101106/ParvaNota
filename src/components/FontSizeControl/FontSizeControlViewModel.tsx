import { FontModel } from "@/models/FontModel";
import { LocalStorageService } from "@/services/local.storage.service";
import { useEffect } from "react";

export type FontSizeControlViewModelProps = {
  localStorageService: LocalStorageService;
  fontModel: FontModel;
};

export function useFontSizeControlViewModel(
  props: FontSizeControlViewModelProps
) {
  const currentFontSize = props.fontModel.size;

  function onDecreaseClick() {
    props.localStorageService.setFontSize(props.fontModel.decreaseSize());
  }

  function onIncreaseClick() {
    props.localStorageService.setFontSize(props.fontModel.increaseSize());
  }

  function onResetClick() {
    props.localStorageService.setFontSize(props.fontModel.resetSize());
  }

  useEffect(() => {
    props.fontModel.size = props.localStorageService.getFontSize();
  }, [props.localStorageService, props.fontModel]);

  return { onDecreaseClick, onIncreaseClick, onResetClick, currentFontSize };
}
