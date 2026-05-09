import { type ReactNode, useId } from "react";
import { FieldLabel } from "./field-label";
import { Input, type InputProps } from "./input";
import { tv } from "./utils/tv";

export type TextFieldProps = InputProps & {
  caption?: ReactNode;
  hint?: string;
  label: ReactNode;
};

const textField = tv({
  slots: {
    caption: "text-g500 text-micro-medium",
    field: "flex w-full flex-col gap-1.5",
    root: "flex w-[300px] flex-col items-start justify-center gap-2",
  },
  variants: {
    invalid: {
      false: {},
      true: {
        caption: "text-d600",
      },
    },
  },
  defaultVariants: {
    invalid: false,
  },
});

export const TextField = ({
  caption,
  className,
  hint,
  iconEnd,
  iconStart,
  id,
  invalid,
  label,
  ...props
}: TextFieldProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const captionId = caption ? `${inputId}-caption` : undefined;
  const describedBy = [props["aria-describedby"], captionId]
    .filter(Boolean)
    .join(" ");
  const styles = textField({ invalid });

  return (
    <div className={styles.root({ className })}>
      <div className={styles.field()}>
        <FieldLabel hint={hint} htmlFor={inputId}>
          {label}
        </FieldLabel>
        <Input
          {...props}
          aria-describedby={describedBy || undefined}
          iconEnd={iconEnd}
          iconStart={iconStart}
          id={inputId}
          invalid={invalid}
        />
      </div>
      {caption ? (
        <p className={styles.caption()} id={captionId}>
          {caption}
        </p>
      ) : null}
    </div>
  );
};
