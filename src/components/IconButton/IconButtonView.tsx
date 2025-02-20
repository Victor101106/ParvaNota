import { ElementType, HtmlHTMLAttributes } from "react";

export type IconButtonViewProps = {
  icon: ElementType;
} & HtmlHTMLAttributes<HTMLButtonElement>;

export function IconButtonView({ icon: Icon, ...props }: IconButtonViewProps) {
  return (
    <button
      className="grid place-items-center w-[2.375rem] aspect-square rounded-[0.25rem] transition-colors bg-transparent opacity-50 hover:opacity-100 hover:bg-background-surface"
      {...props}
    >
      <Icon className="text-foreground fill-foreground w-[1.125rem] aspect-square" />
    </button>
  );
}
