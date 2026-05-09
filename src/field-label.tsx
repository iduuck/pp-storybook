import type { ComponentProps, ReactNode } from "react";
import { IconCircleInfo } from "./icons/circle-info";
import { Tooltip } from "./tooltip";
import { tv } from "./utils/tv";

export interface FieldLabelProps extends ComponentProps<"label"> {
  hint?: string;
  icon?: ReactNode;
}

const fieldLabelStyles = tv({
  slots: {
    hintTrigger:
      "inline-flex size-3 shrink-0 items-center justify-center text-g500 [&>svg]:size-3 [&>svg]:shrink-0",
    label: "text-g950 text-small-medium",
    root: "flex select-none items-center gap-1 transition-colors",
  },
});

export const FieldLabel = ({
  children,
  className,
  hint,
  icon,
  ...props
}: FieldLabelProps) => {
  const { hintTrigger, label, root } = fieldLabelStyles();

  return (
    <label className={root({ className })} htmlFor={props.htmlFor} {...props}>
      <span className={label()}>{children}</span>
      {hint ? (
        <Tooltip className="flex" content={hint}>
          <span className={hintTrigger()}>{icon ?? <IconCircleInfo />}</span>
        </Tooltip>
      ) : null}
    </label>
  );
};
