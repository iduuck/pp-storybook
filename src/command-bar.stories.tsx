import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  CommandBar,
  CommandBarEmpty,
  CommandBarFooter,
  CommandBarFooterItem,
  CommandBarGroup,
  CommandBarItem,
  CommandBarList,
  CommandBarSearch,
} from "./command-bar";
import { IconCircleBanSign } from "./icons/circle-ban-sign";
import { IconHistory } from "./icons/history";
import { IconRadar } from "./icons/radar";
import { IconSearch } from "./icons/search";
import { IconSwitchVertical } from "./icons/switch-vertical";
import { TabBar, TabBarItem } from "./primitives/tab-bar";

const meta = {
  component: CommandBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/CommandBar",
} satisfies Meta<typeof CommandBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => {
    const [selected, setSelected] = useState<string>();

    const [activeTab, setActiveTab] = useState("label");

    return (
      <div className="flex flex-col gap-4">
        <CommandBar>
          <CommandBarSearch placeholder="Search for items..." />
          <TabBar className="px-3">
            <TabBarItem
              onClick={() => setActiveTab("label")}
              state={activeTab === "label" ? "active" : "inactive"}
            >
              Label
            </TabBarItem>
            <TabBarItem
              onClick={() => setActiveTab("supplier")}
              state={activeTab === "supplier" ? "active" : "inactive"}
            >
              Supplier first
            </TabBarItem>
            <TabBarItem
              onClick={() => setActiveTab("identifier")}
              state={activeTab === "identifier" ? "active" : "inactive"}
            >
              Identifier first
            </TabBarItem>
          </TabBar>
          <CommandBarList>
            <CommandBarEmpty
              description="There aren't any results for that query. Try using different keywords."
              icon={<IconSearch />}
            />
            <CommandBarGroup label="Recents">
              <CommandBarItem
                description="Product"
                icon={<IconHistory />}
                onSelect={() => setSelected("villeroy")}
                suffix="Just now"
                value="villeroy"
              >
                Villeroy & Boch - Udine Set
              </CommandBarItem>
              <CommandBarItem
                description="Product"
                icon={<IconRadar />}
                onSelect={() => setSelected("eglo")}
                suffix="12m ago"
                value="eglo"
              >
                EGLO LED Tischlampe
              </CommandBarItem>
              <CommandBarItem
                description="A2A Search"
                icon={<IconCircleBanSign />}
                onSelect={() => setSelected("amazon")}
                suffix="2h ago"
                value="amazon"
              >
                Scan: Amazon DE to Amazon FR
              </CommandBarItem>
            </CommandBarGroup>
            <CommandBarGroup label="Tools & Apps">
              <CommandBarItem
                description="Product"
                icon={<IconHistory />}
                onSelect={() => setSelected("tool1")}
                suffix="Just now"
                value="tool1"
              >
                Product Research Tool
              </CommandBarItem>
              <CommandBarItem
                description="Analytics"
                icon={<IconHistory />}
                onSelect={() => setSelected("analytics")}
                suffix="12m ago"
                value="analytics"
              >
                Market Analytics
              </CommandBarItem>
            </CommandBarGroup>
          </CommandBarList>
          <CommandBarFooter>
            <CommandBarFooterItem icon={<IconSwitchVertical />}>
              Select
            </CommandBarFooterItem>
            <CommandBarFooterItem icon="⌘↵">
              Open in new tab
            </CommandBarFooterItem>
          </CommandBarFooter>
        </CommandBar>
        {selected ? (
          <div className="rounded-r2 bg-g100 px-4 py-2 text-center text-g700 text-small-medium">
            Selected: {selected}
          </div>
        ) : null}
      </div>
    );
  },
};
