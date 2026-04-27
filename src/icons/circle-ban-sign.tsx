import type { IconProps } from "./types";

export const IconCircleBanSign = (props: IconProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 8C14 11.3137 11.3137 14 8 14C6.34315 14 4.84315 13.3284 3.75736 12.2426C2.67157 11.1569 2 9.65685 2 8C2 4.68629 4.68629 2 8 2C9.65685 2 11.1569 2.67157 12.2426 3.75736C13.3284 4.84315 14 6.34315 14 8Z"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="1.33"
      />
      <path
        d="M12 4L4 12"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="1.33"
      />
    </svg>
  );
};
