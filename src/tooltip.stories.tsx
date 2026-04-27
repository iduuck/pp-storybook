import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Tooltip, TooltipProvider } from "./tooltip";

const meta = {
  component: Tooltip,
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Tooltip",
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Button variant="secondary">Hover me</Button>,
    content: "This is a tooltip",
  },
};

export const TopPlacement: Story = {
  args: {
    children: <Button variant="secondary">Top</Button>,
    content: "Tooltip on top",
    side: "top",
  },
};

export const BottomPlacement: Story = {
  args: {
    children: <Button variant="secondary">Bottom</Button>,
    content: "Tooltip on bottom",
    side: "bottom",
  },
};

export const LeftPlacement: Story = {
  args: {
    children: <Button variant="secondary">Left</Button>,
    content: "Tooltip on left",
    side: "left",
  },
};

export const RightPlacement: Story = {
  args: {
    children: <Button variant="secondary">Right</Button>,
    content: "Tooltip on right",
    side: "right",
  },
};

export const WithCustomOffset: Story = {
  args: {
    children: <Button variant="secondary">Custom offset</Button>,
    content: "Tooltip with 20px offset",
    sideOffset: 20,
  },
};

export const WithLongContent: Story = {
  args: {
    children: <Button variant="secondary">Long content</Button>,
    content:
      "This is a very long tooltip that demonstrates how the tooltip handles longer text content gracefully",
  },
};

export const WithDelay: Story = {
  decorators: [
    (Story) => (
      <TooltipProvider delay={500}>
        <Story />
      </TooltipProvider>
    ),
  ],
  args: {
    children: <Button variant="secondary">With delay</Button>,
    content: "This tooltip appears after 500ms",
  },
};
