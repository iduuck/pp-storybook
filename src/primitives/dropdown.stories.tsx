import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../checkbox";
import { IconBell } from "../icons/bell";
import { IconSettings } from "../icons/settings";
import { CountryFlag } from "./country-flag";
import { DropdownContent, DropdownHeader, DropdownItem } from "./dropdown";

const meta = {
  title: "Primitives/Dropdown",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <DropdownContent className="w-45">
        <DropdownHeader />
        <div className="flex flex-col gap-0.5 p-1">
          <DropdownItem startSlot={<IconBell />}>Alerts</DropdownItem>
          <DropdownItem startSlot={<IconSettings />}>Settings</DropdownItem>
          <DropdownItem
            endSlot={<Checkbox defaultChecked />}
            startSlot={<CountryFlag country="GER" />}
          >
            Blacklist
          </DropdownItem>
          <DropdownItem
            endSlot={<Checkbox />}
            startSlot={<CountryFlag country="FRA" />}
          >
            Marketplace
          </DropdownItem>
        </div>
      </DropdownContent>
    );
  },
};
