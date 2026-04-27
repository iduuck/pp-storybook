import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "./utils/cn";

export interface TooltipProps {
  children: ReactNode;
  className?: string;
  content: ReactNode;
  contentProps?: ComponentPropsWithoutRef<typeof TooltipPrimitive.Popup>;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
}

export function Tooltip({
  children,
  content,
  side = "top",
  sideOffset = 8,
  className,
  contentProps,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger className={className}>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Positioner side={side} sideOffset={sideOffset}>
          <TooltipPrimitive.Popup
            className={cn(
              "wrap-break-word z-50 max-w-56 origin-[--transform-origin] rounded-r1-5 bg-g0 px-2 py-1.5 text-g950 text-mini-medium shadow-sm transition-[transform,scale,opacity] duration-150 ease-out data-ending-style:scale-95 data-starting-style:scale-95 data-ending-style:opacity-0 data-starting-style:opacity-0 data-instant:transition-none",
              contentProps?.className
            )}
            {...contentProps}
          >
            {content}
          </TooltipPrimitive.Popup>
        </TooltipPrimitive.Positioner>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}

export interface TooltipProviderProps {
  children: ReactNode;
  delay?: number;
}

export function TooltipProvider({ children, delay = 0 }: TooltipProviderProps) {
  const providerProps = {
    delay,
  };

  return (
    <TooltipPrimitive.Provider {...providerProps}>
      {children}
    </TooltipPrimitive.Provider>
  );
}
