import type { ButtonHTMLAttributes, ReactNode } from "react";
import { IconPlus } from "./icons/plus";
import { tv, VariantProps } from "./utils/tv";

export type IconButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> &
  VariantProps<typeof iconButtonStyles> & {
    icon: ReactNode;
  };

const iconButtonStyles = tv({
  base: "inline-flex cursor-pointer items-center justify-center p-0 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-g0 disabled:cursor-not-allowed",
  variants: {
    size: {
      micro: "h-5 w-5 rounded-r1 [&>svg]:size-3.5",
      sm: "h-7 w-7 rounded-r2 [&>svg]:size-4",
      xs: "h-6 w-6 rounded-r1-5 [&>svg]:size-3.5",
    },
    variant: {
      ghost:
        "bg-transparent text-g500 shadow-none focus-visible:ring-g300 enabled:active:bg-g100 enabled:hover:bg-g50 disabled:text-g400",
      primary:
        "bg-b500 text-g0000 ring-b600 ring-hairline focus-visible:ring-b400 enabled:active:bg-b700 enabled:active:ring-b800 enabled:hover:bg-b600 disabled:bg-g200 disabled:text-g400 disabled:ring-g200",
      secondary: [
        "bg-g0 text-g950 ring-g200 ring-hairline",
        "dark:bg-g200 dark:ring-black-swap/15",
        "focus-visible:ring-g300",
      ],
    },
    disabled: {
      true: "bg-g200 text-g400 ring-g200",
      false: "",
    },
  },
  compoundVariants: [
    {
      disabled: false,
      variant: "secondary",
      className:
        "hover:bg-g100 active:bg-g100 active:ring-g300 dark:hover:bg-g300/50",
    },
  ],
  defaultVariants: {
    size: "xs",
    variant: "primary",
    disabled: false,
  },
});

export const IconButton = ({
  className,
  icon,
  size = "micro",
  type,
  variant = "ghost",
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={iconButtonStyles({
        className,
        size,
        disabled: props.disabled,
        variant,
      })}
      type={type ?? "button"}
      {...props}
    >
      {icon}
    </button>
  );
};
