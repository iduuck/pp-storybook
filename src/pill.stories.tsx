import type { Meta, StoryObj } from "@storybook/react";
import { IconPlus } from "./icons/plus";
import { IconSwitchVertical } from "./icons/switch-vertical";
import { Pill } from "./pill";

const meta = {
  component: Pill,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Pill",
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "",
  },
  render: () => (
    <div className="flex items-center gap-2">
      <Pill aria-label="Select" icon={<IconSwitchVertical />} style="filled" />
      <Pill icon={<IconSwitchVertical />} style="filled">
        Select
      </Pill>
      <Pill aria-label="Open" icon={<IconPlus />} style="outlined" />
      <Pill icon={<IconPlus />} style="outlined">
        Open
      </Pill>
    </div>
  ),
};
