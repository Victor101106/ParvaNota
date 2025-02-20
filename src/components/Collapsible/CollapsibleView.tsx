import { useCollapsibleViewModel } from "@/components/Collapsible/CollapsibleViewModel";
import { IconButtonView } from "@/components/IconButton";
import { RiArrowRightSLine, RiDeleteBin7Line } from "@remixicon/react";

type CollapsibleViewModelReturnType = ReturnType<
  typeof useCollapsibleViewModel
>;

export type CollapsibleViewProps = CollapsibleViewModelReturnType;

export function CollapsibleView(props: CollapsibleViewProps) {
  return (
    <div
      className={`bg-background-surface flex flex-row gap-[0.6875rem] transition-all ${
        props.open && "p-[0.1875rem]"
      }`}
    >
      {props.open && (
        <div className="flex flex-row">
          <IconButtonView
            icon={RiDeleteBin7Line}
            onClick={props.onDeleteClick}
            variant="destructive"
          />
        </div>
      )}
      <button
        className={`aspect-square grid place-items-center hover:bg-background-hovering transition-colors rounded-[0.25rem] ${
          props.open ? "w-[2.375rem] bg-transparent" : "w-11 bg-background"
        }`}
        onClick={props.onToggleClick}
      >
        <RiArrowRightSLine
          className={`w-[1.375rem] aspect-square transition-transform ${
            props.open && "rotate-180"
          }`}
        />
      </button>
    </div>
  );
}
