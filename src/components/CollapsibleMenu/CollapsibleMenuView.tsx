import { useCollapsibleMenuViewModel } from "@/components/CollapsibleMenu/CollapsibleMenuViewModel";
import {
  FontSizeControlView,
  useFontSizeControlViewModel,
} from "@/components/FontSizeControl";
import { IconButtonView } from "@/components/IconButton";
import {
  RiArrowRightSLine,
  RiClipboardLine,
  RiDeleteBin7Line,
  RiFileCopyLine,
} from "@remixicon/react";

type CollapsibleMenuViewModelReturnType = ReturnType<
  typeof useCollapsibleMenuViewModel
>;

type FontSizeControlViewModelReturnType = ReturnType<
  typeof useFontSizeControlViewModel
>;

export type CollapsibleMenuViewProps = CollapsibleMenuViewModelReturnType &
  FontSizeControlViewModelReturnType;

export function CollapsibleMenuView(props: CollapsibleMenuViewProps) {
  return (
    <div
      className={`bg-background-surface flex flex-row gap-[0.6875rem] transition-all rounded-[0.25rem] ${
        props.isOpen && "p-[0.1875rem]"
      }`}
    >
      {props.isOpen && <FontSizeControlView {...props} />}
      {props.isOpen && (
        <div className="flex flex-row">
          <IconButtonView icon={RiFileCopyLine} onClick={props.onCopyClick} />
          <IconButtonView icon={RiClipboardLine} onClick={props.onPasteClick} />
          <IconButtonView
            icon={RiDeleteBin7Line}
            onClick={props.onDeleteClick}
            variant="destructive"
          />
        </div>
      )}
      <button
        className={`aspect-square grid place-items-center hover:bg-background-hovering transition-colors rounded-[0.25rem] ${
          props.isOpen ? "w-[2.375rem] bg-transparent" : "w-11 bg-background"
        }`}
        onClick={props.onToggleClick}
      >
        <RiArrowRightSLine
          className={`w-[1.375rem] aspect-square transition-transform ${
            props.isOpen && "rotate-180"
          }`}
        />
      </button>
    </div>
  );
}
