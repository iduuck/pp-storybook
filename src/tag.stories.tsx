import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    children: "6",
    variant: "neutral",
  },
};

export const Accent: Story = {
  args: {
    children: "6",
    variant: "accent",
  },
};
