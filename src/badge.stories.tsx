import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const PlusIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 3V13M3 8H13"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.3333 4.66669L4.66663 11.3334M4.66663 4.66669L11.3333 11.3334"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
);

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Samsung",
  },
};

export const WithStartIcon: Story = {
  args: {
    children: "Samsung",
    iconStart: <PlusIcon />,
  },
};

export const WithEndIcon: Story = {
  args: {
    children: "Samsung",
    iconEnd: <CloseIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: "Samsung",
    iconEnd: <CloseIcon />,
    iconStart: <PlusIcon />,
  },
};
