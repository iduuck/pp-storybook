import type { ButtonHTMLAttributes, ReactNode } from "react";
import { tv } from "./utils/tv";

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive";
type ButtonSize = "xs" | "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  iconEnd?: ReactNode;
  iconStart?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const buttonStyles = tv({
  base: "inline-flex cursor-pointer items-center justify-center gap-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-g0 disabled:cursor-not-allowed",
  variants: {
    size: {
      xs: "h-6 rounded-r1-5 px-1.5 text-mini-medium [&_[data-slot=icon]]:size-3.5",
      sm: "h-7 rounded-r2 px-2 text-small-medium [&_[data-slot=icon]]:size-4",
      md: "h-8 rounded-r2 px-2 text-small-medium [&_[data-slot=icon]]:size-4",
      lg: "h-9 rounded-r2 px-2.5 text-small-medium [&_[data-slot=icon]]:size-4",
    },
    variant: {
      destructive:
        "bg-d500 text-white focus-visible:ring-d400 enabled:active:bg-d700 enabled:hover:bg-d600 disabled:bg-g200 disabled:text-g400",
      ghost:
        "bg-transparent text-g950 focus-visible:ring-g300 enabled:active:bg-g100 enabled:hover:bg-g50 disabled:text-g400",
      primary:
        "bg-b500 text-white focus-visible:ring-b400 enabled:active:bg-b700 enabled:hover:bg-b600 disabled:bg-g200 disabled:text-g400",
      secondary: [
        "bg-g0 text-g950 shadow-button ring-g200 ring-hairline focus-visible:ring-g300 enabled:active:bg-g50 enabled:active:ring-g300 enabled:hover:bg-g50 enabled:hover:ring-g200 disabled:bg-g200 disabled:text-g400 disabled:ring-g200",
        "dark:bg-g200 dark:shadow-none dark:ring-black-swap/15",
        "dark:active:bg-g300! dark:active:ring-black-swap/15! dark:hover:bg-g200! dark:hover:ring-black-swap/20!",
      ],
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  iconStart,
  iconEnd,
  className,
  disabled,
  type,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonStyles({
        className,
        size,
        variant,
      })}
      disabled={disabled}
      type={type ?? "button"}
      {...props}
    >
      {iconStart ? (
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center"
          data-slot="icon"
        >
          {iconStart}
        </span>
      ) : null}
      <span className="px-0.5">{children}</span>
      {iconEnd ? (
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center"
          data-slot="icon"
        >
          {iconEnd}
        </span>
      ) : null}
    </button>
  );
};
