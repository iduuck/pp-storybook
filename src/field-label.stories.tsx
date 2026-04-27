import type { Meta, StoryObj } from "@storybook/react";
import { FieldLabel } from "./field-label";
import { TooltipProvider } from "./tooltip";

const meta = {
  title: "Components/Field Label",
  component: FieldLabel,
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div style={{ width: 300 }}>
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FieldLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const WithHint: Story = {
  args: {
    children: "Label",
    hint: "Helpful context for this field",
  },
};
