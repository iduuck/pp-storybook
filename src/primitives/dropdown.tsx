import type { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { IconSearch } from "../icons/search";
import { tv } from "../utils/tv";

export type DropdownContentProps = HTMLAttributes<HTMLDivElement>;

const dropdownContentStyles = tv({
  base: "inline-flex w-full min-w-45 flex-col overflow-hidden rounded-r2 bg-g0 shadow-dropdown",
});

export const DropdownContent = ({
  className,
  ...props
}: DropdownContentProps) => {
  return <div className={dropdownContentStyles({ className })} {...props} />;
};

export interface DropdownHeaderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  iconStart?: ReactNode;
  inputClassName?: string;
}

const dropdownHeaderStyles = tv({
  slots: {
    icon: "inline-flex size-4 shrink-0 items-center justify-center text-g500 [&>svg]:size-4 [&>svg]:shrink-0",
    input:
      "w-full min-w-0 bg-transparent text-g950 text-small-medium outline-none placeholder:text-g500",
    root: "inline-flex w-full items-center gap-2 border-g200 border-b px-3 py-2.5",
  },
});

export const DropdownHeader = ({
  className,
  iconStart,
  inputClassName,
  placeholder = "Search columns",
  ...props
}: DropdownHeaderProps) => {
  const { icon, input, root } = dropdownHeaderStyles();

  return (
    <div className={root({ className })}>
      <span className={icon()}>{iconStart ?? <IconSearch />}</span>
      <input
        className={input({ className: inputClassName })}
        placeholder={placeholder}
        type="text"
        {...props}
      />
    </div>
  );
};

export interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {
  endSlot?: ReactNode;
  startSlot?: ReactNode;
}

const dropdownItemStyles = tv({
  slots: {
    label: "min-w-0 flex-1 truncate text-g900 text-small-medium",
    root: [
      "inline-flex h-7 w-full cursor-pointer items-center gap-2 rounded-r1-5 px-2 text-small-medium ring-hairline ring-transparent",
      "hover:bg-g100 hover:ring-g200",
      "data-[highlighted]:bg-g100 data-[highlighted]:ring-g200",
      "data-[selected]:bg-g100 data-[selected]:ring-g200",
    ],
    slot: "inline-flex size-4 shrink-0 items-center justify-center text-g500 [&>svg]:size-4 [&>svg]:shrink-0",
  },
});

export const DropdownItem = ({
  children,
  className,
  endSlot,
  startSlot,
  ...props
}: DropdownItemProps) => {
  const { slot, label, root } = dropdownItemStyles();

  return (
    <div className={root({ className })} {...props}>
      {startSlot ? <span className={slot()}>{startSlot}</span> : null}
      <span className={label()}>{children}</span>
      {endSlot ? <span className={slot()}>{endSlot}</span> : null}
    </div>
  );
};
