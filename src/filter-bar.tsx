"use client";

import type { ReactNode } from "react";
import { tv } from "./utils/tv";

export interface FilterBarProps {
  children?: ReactNode;
  className?: string;
}

const filterBar = tv({
  base: [
    "flex h-6 items-center gap-0 overflow-clip rounded-r1-5",
    "border-1 border-b400 border-dashed",
    "bg-b50",
  ],
});

export function FilterBar({ children, className }: FilterBarProps) {
  return <div className={filterBar({ className })}>{children}</div>;
}

export interface FilterBarSeparatorProps {
  className?: string;
}

const filterBarSeparator = tv({
  base: "h-6 w-px bg-b300",
});

export function FilterBarSeparator({ className }: FilterBarSeparatorProps) {
  return <div className={filterBarSeparator({ className })} />;
}

export interface FilterBarItemProps {
  children?: ReactNode;
  className?: string;
  iconEnd?: ReactNode;
  iconStart?: ReactNode;
  onClick?: () => void;
}

const filterBarItem = tv({
  slots: {
    base: [
      "flex h-6 cursor-pointer items-center gap-0.5 px-1.5",
      "text-b600 text-mini-medium",
      "transition-colors hover:bg-b100/50",
    ],
    icon: "flex h-3.5 w-3.5 items-center justify-center [&_svg]:h-3.5 [&_svg]:w-3.5",
  },
});

export function FilterBarItem({
  children,
  className,
  iconEnd,
  iconStart,
  onClick,
}: FilterBarItemProps) {
  const styles = filterBarItem();

  return (
    <button
      className={styles.base({ className })}
      onClick={onClick}
      type="button"
    >
      {iconStart ? <span className={styles.icon()}>{iconStart}</span> : null}
      <span className="px-0.5">{children}</span>
      {iconEnd ? <span className={styles.icon()}>{iconEnd}</span> : null}
    </button>
  );
}
