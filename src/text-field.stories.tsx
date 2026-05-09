import type { Meta, StoryObj } from "@storybook/react";
import { IconSearch } from "./icons/search";
import { TextField } from "./text-field";
import { TooltipProvider } from "./tooltip";

const meta = {
  argTypes: {
    disabled: {
      control: "boolean",
    },
    invalid: {
      control: "boolean",
    },
  },
  component: TextField,
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
  title: "Components/Text Field",
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    caption: "Caption Text",
    hint: "Helpful context for this field",
    iconStart: <IconSearch />,
    iconEnd: <IconSearch />,
    invalid: false,
    label: "Label",
    placeholder: "Search for ASIN, EAN or brand",
  },
};

export const WithoutIcons: Story = {
  args: {
    caption: "Caption Text",
    hint: "Helpful context for this field",
    invalid: false,
    label: "Label",
    placeholder: "Search for ASIN, EAN or brand",
  },
};

export const WithoutHint: Story = {
  args: {
    caption: "Caption Text",
    invalid: false,
    label: "Label",
    placeholder: "Search for ASIN, EAN or brand",
  },
};
