import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export const twMergeConfig = {
  classGroups: {
    "border-w": ["border-hairline"],
    "border-w-x": ["border-x-hairline"],
    "border-w-y": ["border-y-hairline"],
    "border-w-t": ["border-t-hairline"],
    "border-w-b": ["border-b-hairline"],
    "border-w-r": ["border-r-hairline"],
    "border-w-l": ["border-l-hairline"],
    "ring-w": ["ring-hairline"],
    "inset-ring-w": ["inset-ring-hairline"],

    "font-size": [
      "text-title-regular-semibold",
      "text-title-small-semibold",
      "text-title-small",
      "text-title-mini-semibold",
      "text-title-mini",
      "text-micro-medium",
      "text-mini",
      "text-mini-medium",
      "text-small",
      "text-paragraph-small",
      "text-small-medium",
      "text-paragraph-regular",
      "text-regular-medium",
    ],
  },
};

const twMerge = extendTailwindMerge({
  extend: twMergeConfig,
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}
