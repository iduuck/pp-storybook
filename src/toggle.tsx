import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import { tv } from "./utils/tv";

export type ToggleProps = Omit<SwitchPrimitive.Root.Props, "className"> & {
  hitbox?: number;
  className?: string;
};

const toggleStyles = tv({
  slots: {
    root: [
      "group/toggle relative inset-ring-hairline inline-flex h-3.5 w-[22px] shrink-0 cursor-pointer items-center rounded-full p-0.5 outline-none transition-colors",
      "focus-visible:inset-ring-2 focus-visible:inset-ring-b400 focus-visible:inset-ring-offset-2 focus-visible:inset-ring-offset-g0",
      "data-[checked]:inset-ring-black-swap/15 data-[unchecked]:inset-ring-black-swap/8 data-[checked]:bg-b500 data-[unchecked]:bg-g200",
      // We are adding a `:before` for hitbox.
      "before:absolute before:-inset-(--toggle-hitbox)",
    ],
    thumb: [
      "pointer-events-none",
      "inline-flex size-2.5 shrink-0 rounded-full bg-g0000 ring-hairline transition-[background-color,color,translate] duration-90",
      "ring-black/15 data-checked:translate-x-2",
    ],
  },

  variants: {
    disabled: {
      false: {
        root: "hover:data-checked:bg-b600 hover:data-unchecked:bg-300",
      },
      true: {
        root: ["cursor-not-allowed opacity-50"],
      },
    },
  },

  defaultVariants: { disabled: false },
});

export const Toggle = ({ hitbox = 6, className, ...props }: ToggleProps) => {
  const { root, thumb } = toggleStyles({ disabled: props.disabled });

  return (
    <SwitchPrimitive.Root
      className={root({ className })}
      {...props}
      // @ts-expect-error: typescript can't handle css variables
      style={{ ...props.style, "--toggle-hitbox": `${hitbox}px` }}
    >
      <SwitchPrimitive.Thumb className={thumb()} />
    </SwitchPrimitive.Root>
  );
};
