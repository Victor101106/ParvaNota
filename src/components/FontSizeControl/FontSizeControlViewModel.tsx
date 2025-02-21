import { LocalStorageService } from "@/services/local.storage.service";
import { useEffect, useState } from "react";

export type FontSizeControlViewModelProps = {
  localStorageService: LocalStorageService;
};

export function useFontSizeControlViewModel(
  props: FontSizeControlViewModelProps
) {
  const [fontSize, setFontSize] = useState<number>(15);

  function onDecreaseClick() {
    const decreasedFontSize = Math.max(0, fontSize - 1);

    props.localStorageService.setFontSize(decreasedFontSize);
    setFontSize(decreasedFontSize);
  }

  function onIncreaseClick() {
    const increasedFontSize = Math.min(fontSize + 1, 100);

    props.localStorageService.setFontSize(increasedFontSize);
    setFontSize(increasedFontSize);
  }

  function onResetClick() {
    props.localStorageService.setFontSize(15);
    setFontSize(15);
  }

  useEffect(() => {
    setFontSize(props.localStorageService.getFontSize());
  }, [props.localStorageService]);

  return { onDecreaseClick, onIncreaseClick, onResetClick, fontSize };
}
