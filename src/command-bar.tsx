"use client";

import { Command } from "cmdk";
import type { ComponentProps, InputHTMLAttributes, ReactNode } from "react";
import { Pill } from "./pill";
import { tv } from "./utils/tv";

// Search component
export interface CommandBarSearchProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "className" | "type" | "value"
  > {
  className?: string;
  icon?: ReactNode;
}

const commandBarSearch = tv({
  slots: {
    base: [
      "flex h-12 w-full items-center gap-3 px-4",
      "border-g200 border-b-hairline",
      "bg-g0",
    ],
    icon: "flex h-4 w-4 items-center justify-center text-g400 [&_svg]:h-4 [&_svg]:w-4",
    input: [
      "flex-1 bg-transparent outline-none",
      "text-g950 text-small-medium placeholder:text-g400",
    ],
  },
});

export function CommandBarSearch({
  className,
  icon,
  placeholder = "Search...",
  ...props
}: CommandBarSearchProps) {
  const styles = commandBarSearch();

  return (
    <div className={styles.base({ className })}>
      {icon ? <span className={styles.icon()}>{icon}</span> : null}
      <Command.Input
        className={styles.input()}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

// Item component with cmdk integration
export interface CommandBarItemProps {
  children: ReactNode;
  className?: string;
  description?: string;
  icon?: ReactNode;
  onSelect?: () => void;
  shortcut?: ReactNode;
  suffix?: ReactNode;
  value?: string;
}

const commandBarItem = tv({
  slots: {
    base: [
      "flex h-8 w-full cursor-pointer items-center gap-2 px-2",
      "rounded-r1 transition-colors duration-100",
      "data-[selected=true]:bg-g100",
    ],
    content: "flex min-w-0 flex-1 items-center gap-2",
    description: "truncate text-g400 text-small",
    icon: "flex h-4 w-4 shrink-0 items-center justify-center text-g400 [&_svg]:h-4 [&_svg]:w-4",
    shortcut: "shrink-0 text-g400 text-mini",
    suffix: "shrink-0 text-g400 text-mini",
    title: "truncate text-g950 text-small-medium",
  },
});

export function CommandBarItem({
  children,
  className,
  description,
  icon,
  onSelect,
  shortcut,
  suffix,
  value,
}: CommandBarItemProps) {
  const styles = commandBarItem();

  return (
    <Command.Item
      className={styles.base({ className })}
      onSelect={onSelect}
      value={value}
    >
      {icon ? <span className={styles.icon()}>{icon}</span> : null}
      <div className={styles.content()}>
        <span className={styles.title()}>{children}</span>
        {description ? (
          <span className={styles.description()}>{description}</span>
        ) : null}
      </div>
      {suffix ? <span className={styles.suffix()}>{suffix}</span> : null}
      {shortcut ? <span className={styles.shortcut()}>{shortcut}</span> : null}
    </Command.Item>
  );
}

// Group component with cmdk integration
export interface CommandBarGroupProps {
  children: ReactNode;
  className?: string;
  label: string;
}

const commandBarGroup = tv({
  slots: {
    base: "flex flex-col border-g200 border-b-hairline p-2 pt-3 last:border-b-0",
    label: ["px-2 py-1 text-g400 text-micro-medium uppercase tracking-wide"],
    list: "flex flex-col gap-0.5",
  },
});

export function CommandBarGroup({
  children,
  className,
  label,
}: CommandBarGroupProps) {
  const styles = commandBarGroup();

  return (
    <Command.Group className={styles.base({ className })}>
      <div className={styles.label()}>{label}</div>
      <div className={styles.list()}>{children}</div>
    </Command.Group>
  );
}

// Empty component with cmdk integration
export interface CommandBarEmptyProps {
  className?: string;
  description?: string;
  icon?: ReactNode;
  title?: string;
}

const commandBarEmpty = tv({
  slots: {
    base: "flex flex-col items-center justify-center gap-4 py-12",
    description: [
      "max-w-[240px] text-center text-g400 text-small",
      "[font-feature-settings:'ss03','lnum','tnum']",
    ],
    icon: "inset-ring-g200 inset-ring-hairline flex h-9 w-9 items-center justify-center rounded-r2 bg-g100 text-g500 [&_svg]:size-5",
    title: [
      "text-g700 text-small-medium",
      "[font-feature-settings:'ss03','lnum','tnum']",
    ],
  },
});

export function CommandBarEmpty({
  className,
  description,
  icon,
  title = "No items found",
}: CommandBarEmptyProps) {
  const styles = commandBarEmpty();

  return (
    <Command.Empty>
      <div className={styles.base({ className })}>
        {icon ? <div className={styles.icon()}>{icon}</div> : null}
        <div className="flex flex-col items-center gap-1.5 text-center">
          {title ? <div className={styles.title()}>{title}</div> : null}
          {description ? (
            <div className={styles.description()}>{description}</div>
          ) : null}
        </div>
      </div>
    </Command.Empty>
  );
}

// Footer components (primitives)
export interface CommandBarFooterItemProps {
  children: string;
  className?: string;
  icon?: ReactNode;
}

const commandBarFooterItem = tv({
  base: ["flex items-center gap-1.5", "text-g400 text-mini"],
});

export function CommandBarFooterItem({
  children,
  className,
  icon,
}: CommandBarFooterItemProps) {
  return (
    <div className={commandBarFooterItem({ className })}>
      {typeof icon === "string" ? (
        <Pill style="filled">{icon}</Pill>
      ) : (
        <Pill aria-label={children} icon={icon} style="filled" />
      )}
      {children}
    </div>
  );
}

export interface CommandBarFooterProps {
  children: ReactNode;
  className?: string;
}

const commandBarFooter = tv({
  base: [
    "flex h-9 items-center gap-4 border-g200 border-t-hairline px-4",
    "bg-g50",
  ],
});

export function CommandBarFooter({
  children,
  className,
}: CommandBarFooterProps) {
  return <div className={commandBarFooter({ className })}>{children}</div>;
}

// Root CommandBar component
export type CommandBarProps = ComponentProps<typeof Command> & {
  children: ReactNode;
  className?: string;
};

const commandBar = tv({
  slots: {
    base: [
      "flex w-[550px] flex-col overflow-hidden rounded-r2 bg-g0 transition-colors",
      "shadow-lg",
    ],
  },
});

export function CommandBar(props: CommandBarProps) {
  const styles = commandBar();

  return (
    <Command
      {...props}
      className={styles.base({ className: props.className })}
    />
  );
}

const commandBarList = tv({
  slots: {
    base: ["h-(--cmdk-list-height) max-h-120 min-h-50"],
  },
});

export type CommandBarListProps = ComponentProps<typeof Command.List> & {
  children: ReactNode;
  className?: string;
};

export function CommandBarList(props: CommandBarListProps) {
  const styles = commandBarList();

  return (
    <Command.List
      {...props}
      className={styles.base({ className: props.className })}
    />
  );
}
