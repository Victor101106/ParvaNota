import { useCollapsibleViewModel } from "@/components/Collapsible/CollapsibleViewModel";
import { RiArrowRightSLine } from "@remixicon/react";

type CollapsibleViewModelPickedReturnType = Pick<
  ReturnType<typeof useCollapsibleViewModel>,
  "open" | "toggleOpen"
>;

export type CollapsibleViewProps = CollapsibleViewModelPickedReturnType;

export function CollapsibleView(props: CollapsibleViewProps) {
  return (
    <div
      className={`bg-background-surface flex flex-row gap-[0.6875rem] transition-all ${
        props.open && "p-[0.1875rem]"
      }`}
    >
      <button
        className={`aspect-square grid place-items-center hover:bg-background-hovering transition-colors rounded-[0.25rem] ${
          props.open ? "w-[2.375rem] bg-transparent" : "w-11 bg-background"
        }`}
        onClick={props.toggleOpen}
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
