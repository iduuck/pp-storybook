import type { IconProps } from "./types";

export const IconMinus = (props: IconProps) => {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 8 2" {...props}>
      <path
        d="M1 1H7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
    </svg>
  );
};
