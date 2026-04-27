import type { ReactNode } from "react";

export type ScreenreadableProps<Children extends ReactNode = ReactNode> =
  | { children: Children; "aria-label"?: string }
  | { "aria-label": string; children?: Children };
