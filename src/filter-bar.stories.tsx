import type { Meta, StoryObj } from "@storybook/react";
import { FilterBar, FilterBarItem, FilterBarSeparator } from "./filter-bar";

const meta = {
  component: FilterBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/FilterBar",
} satisfies Meta<typeof FilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Clock icon for filter items
const ClockIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="14"
    viewBox="0 0 14 14"
    width="14"
  >
    <path
      d="M7 3.5V7L9.5 8.5M12.5 7C12.5 10.0376 10.0376 12.5 7 12.5C3.96243 12.5 1.5 10.0376 1.5 7C1.5 3.96243 3.96243 1.5 7 1.5C10.0376 1.5 12.5 3.96243 12.5 7Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Chevron down icon
const ChevronDownIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="14"
    viewBox="0 0 14 14"
    width="14"
  >
    <path
      d="M3.5 5.5L7 9L10.5 5.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => (
    <FilterBar>
      <FilterBarItem iconStart={<ClockIcon />}>Label</FilterBarItem>
      <FilterBarSeparator />
      <FilterBarItem iconEnd={<ChevronDownIcon />}>Label</FilterBarItem>
      <FilterBarSeparator />
      <FilterBarItem>90%</FilterBarItem>
    </FilterBar>
  ),
};

export const SingleItem: Story = {
  args: {
    children: null,
  },
  render: () => (
    <FilterBar>
      <FilterBarItem iconStart={<ClockIcon />}>History</FilterBarItem>
    </FilterBar>
  ),
};

export const WithDropdown: Story = {
  args: {
    children: null,
  },
  render: () => (
    <FilterBar>
      <FilterBarItem iconEnd={<ChevronDownIcon />}>Status</FilterBarItem>
      <FilterBarSeparator />
      <FilterBarItem iconEnd={<ChevronDownIcon />}>Priority</FilterBarItem>
      <FilterBarSeparator />
      <FilterBarItem iconEnd={<ChevronDownIcon />}>Assignee</FilterBarItem>
    </FilterBar>
  ),
};

export const MixedItems: Story = {
  args: {
    children: null,
  },
  render: () => (
    <FilterBar>
      <FilterBarItem iconStart={<ClockIcon />}>Recent</FilterBarItem>
      <FilterBarSeparator />
      <FilterBarItem iconEnd={<ChevronDownIcon />}>Filter</FilterBarItem>
      <FilterBarSeparator />
      <FilterBarItem>12 results</FilterBarItem>
    </FilterBar>
  ),
};

export const ManyItems: Story = {
  args: {
    children: null,
  },
  render: () => (
    <FilterBar>
      <FilterBarItem iconStart={<ClockIcon />}>Today</FilterBarItem>
      <FilterBarSeparator />
      <FilterBarItem iconEnd={<ChevronDownIcon />}>Type</FilterBarItem>
      <FilterBarSeparator />
      <FilterBarItem iconEnd={<ChevronDownIcon />}>Status</FilterBarItem>
      <FilterBarSeparator />
      <FilterBarItem iconEnd={<ChevronDownIcon />}>Priority</FilterBarItem>
      <FilterBarSeparator />
      <FilterBarItem>24 items</FilterBarItem>
    </FilterBar>
  ),
};
