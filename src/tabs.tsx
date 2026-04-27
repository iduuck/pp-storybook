"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { TabBar, TabBarItem } from "./primitives/tab-bar";
import { tv } from "./utils/tv";

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      className={className}
      data-orientation={orientation}
      data-slot="tabs"
      orientation={orientation}
      {...props}
    />
  );
}

const tabsListStyles = tv({
  base: "flex",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface TabsListProps
  extends Omit<TabsPrimitive.List.Props, "className"> {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

function TabsList({
  className,
  orientation = "horizontal",
  render,
  ...props
}: TabsListProps) {
  const listClassName = tabsListStyles({ orientation, className });

  return (
    <TabsPrimitive.List
      className={listClassName}
      data-orientation={orientation}
      {...props}
      data-slot="tabs-list"
      render={render ?? <TabBar />}
    />
  );
}

function Tab({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      className={className}
      {...props}
      data-slot="tabs-trigger"
      render={(props, state) => (
        <TabBarItem state={state.active ? "active" : "inactive"} {...props} />
      )}
    />
  );
}

function TabsPanel({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      className={className}
      data-slot="tabs-panel"
      {...props}
    />
  );
}

export { Tab, Tabs, TabsList, TabsPanel };
