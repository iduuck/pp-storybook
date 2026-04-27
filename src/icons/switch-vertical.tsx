import type { IconProps } from "./types";

export const IconSwitchVertical = (props: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="10"
      viewBox="0 0 10 10"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_switch_vertical)">
        <path
          d="M1.45833 3.02082L2.90403 1.57513C3.02607 1.45309 3.22393 1.45309 3.34597 1.57513L4.79167 3.02082M5.20833 6.97916L6.65403 8.42485C6.77607 8.54689 6.97393 8.54689 7.09597 8.42485L8.54167 6.97916M3.125 1.66666L3.125 8.54166M6.875 1.45832L6.875 8.33332"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_switch_vertical">
          <rect height="10" width="10" />
        </clipPath>
      </defs>
    </svg>
  );
};
