import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";
import { Button } from "./button";
import { IconTrashPermanently } from "./icons/trash-permanently";

const TrashIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.00001 2.66667H10M2.66667 4H13.3333M12 4L11.5333 11C11.4706 11.9405 10.6892 12.6667 9.74667 12.6667H6.25333C5.31076 12.6667 4.52943 11.9405 4.46667 11L4 4M6.66667 6.66667V10M9.33333 6.66667V10"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

const meta = {
  parameters: {
    layout: "centered",
  },
  title: "Components/Alert Dialog",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <AlertDialogRoot>
        <AlertDialogTrigger>
          <Button size="sm" variant="secondary">
            Open alert dialog
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <div className="flex w-full flex-col gap-5 p-5">
            <div className="flex flex-col gap-2">
              <AlertDialogTitle>Delete "aessepiforniture.de"?</AlertDialogTitle>
              <AlertDialogDescription>
                You are about to delete "aessepiforniture.de" from the list of
                shops for your organization. Are you sure you want to continue
                deleting this shop?
              </AlertDialogDescription>
            </div>

            <AlertDialogFooter>
              <AlertDialogClose
                render={<Button size="xs" variant="secondary" />}
              >
                Cancel
              </AlertDialogClose>
              <AlertDialogClose
                render={
                  <Button iconStart={<IconTrashPermanently />} size="xs" />
                }
              >
                Remove item
              </AlertDialogClose>
            </AlertDialogFooter>
          </div>
        </AlertDialogContent>
      </AlertDialogRoot>
    );
  },
};
