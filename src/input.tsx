import type { ComponentProps, ReactNode } from "react";
import { tv, type VariantProps } from "./utils/tv";

export type InputProps = Omit<ComponentProps<"input">, "children"> &
  VariantProps<typeof input> & {
    iconEnd?: ReactNode;
    iconStart?: ReactNode;
  };

const input = tv({
  slots: {
    root: [
      "group relative flex h-7 w-full min-w-0 items-center gap-1.5 overflow-hidden rounded-r1-5 bg-g0 text-g400 shadow-sm transition-[box-shadow,outline-color]",
      "outline outline-transparent ring-3 ring-transparent",
    ],
    control: [
      "px-2 py-1.25 group-has-data-[slot=icon-end]:pr-6.5 group-has-data-[slot=icon-start]:pl-6.5",
      "min-w-0 flex-1 bg-transparent text-g950 text-small-medium outline-none placeholder:text-g500 disabled:cursor-not-allowed",
    ],
    slot: [
      "flex size-4 shrink-0 items-center justify-center [&>svg]:size-4 [&>svg]:shrink-0",
      "absolute top-1/2 -translate-y-1/2",
      "first:left-1.5",
      "last:right-1.5",
    ],
  },
  variants: {
    disabled: {
      false: {},
      true: {
        root: "cursor-not-allowed bg-g100 text-g400",
      },
    },
    invalid: {
      false: {
        root: ["focus-within:outline-b500 focus-within:ring-b100"],
      },
      true: {
        root: ["outline-d500", "focus-within:ring-d100"],
      },
    },
  },
  defaultVariants: {
    disabled: false,
    invalid: false,
  },
});

export const Input = ({
  className,
  disabled,
  iconEnd,
  iconStart,
  invalid,
  ...props
}: InputProps) => {
  const styles = input({ disabled, invalid });

  return (
    <div className={styles.root({ className })}>
      {iconStart ? (
        <span className={styles.slot()} data-slot="icon-start">
          {iconStart}
        </span>
      ) : null}
      <input
        {...props}
        aria-invalid={invalid || props["aria-invalid"] || undefined}
        className={styles.control()}
        disabled={disabled}
      />
      {iconEnd ? (
        <span className={styles.slot()} data-slot="icon-end">
          {iconEnd}
        </span>
      ) : null}
    </div>
  );
};
