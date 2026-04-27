import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { IconCheck } from "./icons/check";
import { IconMinus } from "./icons/minus";
import { tv } from "./utils/tv";

export type CheckboxProps = CheckboxPrimitive.Root.Props;

const checkboxStyles = tv({
  slots: {
    control:
      "inline-flex size-3 items-center justify-center rounded-r1 border border-g300 bg-transparent text-white transition-colors",
    indicator:
      "inline-flex size-full items-center justify-center [&_[data-slot=check]]:hidden data-[checked]:[&_[data-slot=check]]:inline-flex data-[indeterminate]:[&_[data-slot=check]]:hidden [&_[data-slot=minus]]:hidden data-[indeterminate]:[&_[data-slot=minus]]:inline-flex data-[checked]:[&_[data-slot=minus]]:hidden",
    icon: "size-2",
    root: "relative inline-flex size-4 cursor-pointer items-center justify-center rounded-r1 outline-none focus-visible:ring-2 focus-visible:ring-b400 focus-visible:ring-offset-2 focus-visible:ring-offset-g0 disabled:cursor-not-allowed disabled:opacity-50",
  },
});

export const Checkbox = ({ className, ...props }: CheckboxProps) => {
  const { control, indicator, icon, root } = checkboxStyles();

  return (
    <CheckboxPrimitive.Root
      className={root({
        className:
          "[&[data-checked]_[data-slot=control]]:border-b500 [&[data-checked]_[data-slot=control]]:bg-b500 [&[data-indeterminate]_[data-slot=control]]:border-b500 [&[data-indeterminate]_[data-slot=control]]:bg-b500 [&[data-unchecked]:hover_[data-slot=control]]:border-g300 [&[data-unchecked]:hover_[data-slot=control]]:bg-g200",
      })}
      {...props}
    >
      <span className={control()} data-slot="control">
        <CheckboxPrimitive.Indicator className={indicator()}>
          <span className={icon()} data-slot="check">
            <IconCheck />
          </span>
          <span className={icon()} data-slot="minus">
            <IconMinus />
          </span>
        </CheckboxPrimitive.Indicator>
      </span>
    </CheckboxPrimitive.Root>
  );
};
