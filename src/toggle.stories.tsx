import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Toggle } from "./toggle";
import { FieldLabel } from "./field-label";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {
  args: {
    defaultChecked: false,
  },
};

export const On: Story = {
  args: {
    checked: true,
  },
};

export const DisabledOff: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledOn: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const Playground: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div className="inline-flex items-center gap-2 text-g950 text-small">
        <Toggle
          checked={checked}
          className={
            checked ? "before:inset-ring before:inset-ring-red-500" : undefined
          }
          id="hitbox-visible"
          onCheckedChange={setChecked}
        />
        <FieldLabel htmlFor="hitbox-visible">Hitbox visible?</FieldLabel>
      </div>
    );
  },
};
