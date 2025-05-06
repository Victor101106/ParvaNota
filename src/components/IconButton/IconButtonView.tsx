import { RemixiconComponentType } from "@remixicon/react"
import { HtmlHTMLAttributes } from "react"

export type IconButtonViewProps = {
  variant?: "default" | "destructive";
  icon: RemixiconComponentType;
} & HtmlHTMLAttributes<HTMLButtonElement>;

export function IconButtonView({ icon: Icon, ...props }: IconButtonViewProps) {
  return (
    <button
      className={`grid place-items-center w-[2.375rem] aspect-square rounded-[0.25rem] bg-transparent hover:bg-background-hovering ${
        props.variant !== "destructive" && "opacity-50 hover:opacity-100"
      }`}
      {...props}
    >
      <Icon
        className={`${
          props.variant === "destructive"
            ? "fill-[#FF3939] dark:fill-[#FF6B6B]"
            : "fill-foreground"
        } w-[1.125rem] aspect-square`}
      />
    </button>
  );
}
