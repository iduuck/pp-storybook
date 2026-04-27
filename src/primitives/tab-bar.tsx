import { motion } from "motion/react";
import type { ComponentProps, ReactNode } from "react";
import { tv } from "../utils/tv";

export interface TabBarProps extends ComponentProps<"div"> {
  children?: ReactNode;
  className?: string;
}

const tabBarStyles = tv({
  base: "flex items-end border-g200 border-b",
});

export function TabBar({ children, className, ...props }: TabBarProps) {
  return (
    <div className={tabBarStyles({ className })} {...props}>
      {children}
    </div>
  );
}

export type TabBarItemState = "inactive" | "active";

export interface TabBarItemProps extends ComponentProps<"button"> {
  children?: ReactNode;
  className?: string;
  state?: TabBarItemState;
}

const tabBarItemStyles = tv({
  base: [
    "group/item relative -mb-px flex h-10 cursor-pointer items-center justify-center px-3",
    "text-small-medium",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-b400 focus-visible:ring-offset-2 focus-visible:ring-offset-g0",
  ],
  variants: {
    state: {
      inactive: "text-g500 hover:text-g700",
      active: "text-g950",
    },
  },
  defaultVariants: {
    state: "inactive",
  },
});

export function TabBarItem({
  children,
  className,
  state = "inactive",
  ...props
}: TabBarItemProps) {
  return (
    <button
      className={tabBarItemStyles({ className, state })}
      type="button"
      {...props}
    >
      <span>{children}</span>
      {state === "active" ? (
        <motion.span
          className="absolute inset-x-1 bottom-0 h-0.5 bg-g950"
          layoutId="tab-indicator"
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        />
      ) : null}
    </button>
  );
}
