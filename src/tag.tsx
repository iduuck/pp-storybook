import type { HTMLAttributes, ReactNode } from "react";
import { tv } from "./utils/tv";

type TagVariant = "neutral" | "accent";

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: TagVariant;
}

const tagStyles = tv({
  slots: {
    base: "inline-flex h-4 min-w-4 items-center justify-center rounded-r1 border px-0.75",
    label: "text-center text-micro-medium tabular-nums",
  },
  variants: {
    variant: {
      accent: {
        base: "border-b300 bg-b50",
        label: "text-b500",
      },
      neutral: {
        base: "border-g300 bg-g50",
        label: "text-g600",
      },
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
});

export const Tag = ({
  children,
  className,
  variant = "neutral",
  ...props
}: TagProps) => {
  const { base, label } = tagStyles({ variant });

  return (
    <div className={base({ className })} {...props}>
      <span className={label()}>{children}</span>
    </div>
  );
};
