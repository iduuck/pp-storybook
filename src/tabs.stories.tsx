import type { Meta, StoryObj } from "@storybook/react";
import { Tab, Tabs, TabsList, TabsPanel } from "./tabs";

const meta = {
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Tabs",
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <Tab value="tab1">Overview</Tab>
        <Tab value="tab2">Analytics</Tab>
        <Tab value="tab3">Settings</Tab>
      </TabsList>
      <TabsPanel value="tab1">
        <div className="p-4 text-g950">Overview content goes here</div>
      </TabsPanel>
      <TabsPanel value="tab2">
        <div className="p-4 text-g950">Analytics content goes here</div>
      </TabsPanel>
      <TabsPanel value="tab3">
        <div className="p-4 text-g950">Settings content goes here</div>
      </TabsPanel>
    </Tabs>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <Tabs defaultValue="tab2">
      <TabsList>
        <Tab value="tab1">Overview</Tab>
        <Tab data-active value="tab2">
          Analytics
        </Tab>
        <Tab value="tab3">Settings</Tab>
      </TabsList>
      <TabsPanel value="tab1">
        <div className="p-4 text-g950">Overview content</div>
      </TabsPanel>
      <TabsPanel value="tab2">
        <div className="p-4 text-g950">Analytics content (default)</div>
      </TabsPanel>
      <TabsPanel value="tab3">
        <div className="p-4 text-g950">Settings content</div>
      </TabsPanel>
    </Tabs>
  ),
};

export const ManyTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <Tab value="tab1">Overview</Tab>
        <Tab value="tab2">Analytics</Tab>
        <Tab value="tab3">Reports</Tab>
        <Tab value="tab4">Users</Tab>
        <Tab value="tab5">Settings</Tab>
        <Tab value="tab6">Help</Tab>
      </TabsList>
      <TabsPanel value="tab1">
        <div className="p-4 text-g950">Overview content</div>
      </TabsPanel>
      <TabsPanel value="tab2">
        <div className="p-4 text-g950">Analytics content</div>
      </TabsPanel>
      <TabsPanel value="tab3">
        <div className="p-4 text-g950">Reports content</div>
      </TabsPanel>
      <TabsPanel value="tab4">
        <div className="p-4 text-g950">Users content</div>
      </TabsPanel>
      <TabsPanel value="tab5">
        <div className="p-4 text-g950">Settings content</div>
      </TabsPanel>
      <TabsPanel value="tab6">
        <div className="p-4 text-g950">Help content</div>
      </TabsPanel>
    </Tabs>
  ),
};

// Component exports for documentation
