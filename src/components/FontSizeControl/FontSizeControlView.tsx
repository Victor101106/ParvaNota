import { useFontSizeControlViewModel } from "@/components/FontSizeControl/FontSizeControlViewModel";
import { IconButtonView } from "@/components/IconButton";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";

type FontSizeControlViewModelReturnType = ReturnType<
  typeof useFontSizeControlViewModel
>;

export type FontSizeControlViewProps = FontSizeControlViewModelReturnType;

export function FontSizeControlView(props: FontSizeControlViewProps) {
  return (
    <div className="flex flex-row gap-[0.375rem] items-center">
      <IconButtonView icon={RiSubtractLine} onClick={props.onDecreaseClick} />
      <button
        className="text-[0.9375rem] bg-transparent text-foreground font-medium w-7 text-center"
        onClick={props.onResetClick}
      >
        {props.fontSize}
      </button>
      <IconButtonView icon={RiAddLine} onClick={props.onIncreaseClick} />
    </div>
  );
}
