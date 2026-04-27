import type { IconProps } from "./types";

export const IconBell = (props: IconProps) => {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 16 16" {...props}>
      <path
        d="M10.6667 11.3333C10.6667 12.8061 9.47277 14 8.00001 14C6.52725 14 5.33334 12.8061 5.33334 11.3333"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.33"
      />
      <path
        d="M13.3333 10.794C13.3333 11.0919 13.0919 11.3333 12.794 11.3333H3.206C2.90813 11.3333 2.66666 11.0919 2.66666 10.794C2.66666 10.7103 2.68615 10.6277 2.7236 10.5528L3.47896 9.04205C3.60274 8.79449 3.67379 8.52393 3.68761 8.2475L3.80024 5.99501C3.91214 3.75707 5.75926 2 7.99999 2C10.2407 2 12.0878 3.75707 12.1997 5.99501L12.3124 8.2475C12.3262 8.52393 12.3972 8.79449 12.521 9.04205L13.2764 10.5528C13.3138 10.6277 13.3333 10.7103 13.3333 10.794Z"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="1.33"
      />
    </svg>
  );
};
