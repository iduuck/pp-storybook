import type { ReactNode } from "react";
import { tv, type VariantProps } from "./utils/tv";
import type { ScreenreadableProps } from "./utils/types";

export type PillProps = ScreenreadableProps &
  Omit<VariantProps<typeof pill>, "iconOnly"> & {
    className?: string;
    icon?: ReactNode;
  };

const pill = tv({
  base: [
    "inline-flex items-center justify-center border",
    "h-4 min-w-4 rounded-r1 transition-colors",
    "font-semibold text-[8px] uppercase tracking-[0.5px]",
    "[&_svg]:size-2.5",
  ],
  variants: {
    iconOnly: {
      true: "p-0",
      false: "px-0.5",
    },
    style: {
      filled: ["border-g200 bg-g0 text-g600", "[&_svg]:text-g500"],
      outlined: ["border-g300 border-dashed text-g600", "[&_svg]:text-g400"],
    },
  },
  defaultVariants: {
    style: "filled",
  },
});

export function Pill({
  children,
  className,
  icon,
  style = "filled",
}: PillProps) {
  const styles = pill({ iconOnly: !children, className, style });

  return (
    <span className={styles}>
      {icon}
      {children ? <span className="px-0.5">{children}</span> : null}
    </span>
  );
}
