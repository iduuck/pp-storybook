import type { HTMLAttributes, ReactNode } from "react";
import { tv } from "./utils/tv";

type BadgeVariant = "default";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  iconEnd?: ReactNode;
  iconStart?: ReactNode;
  variant?: BadgeVariant;
}

const badgeStyles = tv({
  slots: {
    base: "inline-flex items-center justify-center gap-0 rounded-r1-5 border px-1 py-0.5",
    icon: "inline-flex size-4 items-center justify-center text-g500 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-current",
    label:
      "px-1 text-g800 text-small [font-feature-settings:'ss03','lnum','tnum']",
  },
  variants: {
    variant: {
      default: {
        base: "border-g200 bg-g100",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Badge = ({
  children,
  className,
  iconEnd,
  iconStart,
  variant = "default",
  ...props
}: BadgeProps) => {
  const { base, icon, label } = badgeStyles({ variant });

  return (
    <div className={base({ className })} {...props}>
      {iconStart ? <span className={icon()}>{iconStart}</span> : null}
      <span className={label()}>{children}</span>
      {iconEnd ? <span className={icon()}>{iconEnd}</span> : null}
    </div>
  );
};
