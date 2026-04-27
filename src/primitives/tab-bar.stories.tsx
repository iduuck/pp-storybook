import type { Meta, StoryObj } from "@storybook/react";
import { TabBar, TabBarItem, type TabBarItemState } from "./tab-bar";

const meta = {
  component: TabBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Primitives/TabBar",
} satisfies Meta<typeof TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

interface TabItem {
  id: string;
  label: string;
  state: TabBarItemState;
}

const TabBarTemplate = ({ items }: { items: TabItem[] }) => (
  <TabBar>
    {items.map((item) => (
      <TabBarItem key={item.id} state={item.state}>
        {item.label}
      </TabBarItem>
    ))}
  </TabBar>
);

export const Default: Story = {
  render: () => (
    <TabBarTemplate
      items={[
        { id: "1", label: "Label", state: "active" },
        { id: "2", label: "Supplier first", state: "inactive" },
        { id: "3", label: "Identifier first", state: "inactive" },
      ]}
    />
  ),
};

export const SingleItem: Story = {
  render: () => (
    <TabBar>
      <TabBarItem state="active">Single Tab</TabBarItem>
    </TabBar>
  ),
};

export const ManyItems: Story = {
  render: () => (
    <TabBarTemplate
      items={[
        { id: "d1", label: "Overview", state: "active" },
        { id: "d2", label: "Analytics", state: "inactive" },
        { id: "d3", label: "Reports", state: "inactive" },
        { id: "d4", label: "Settings", state: "inactive" },
        { id: "d5", label: "Help", state: "inactive" },
      ]}
    />
  ),
};
