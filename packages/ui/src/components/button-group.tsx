"use client";

import * as React from "react";
import { cn } from "../utils";
import { Button, type ButtonProps } from "./button";

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex",
        orientation === "horizontal"
          ? "[&>button:first-child]:rounded-r-none [&>button:last-child]:rounded-l-none [&>button:not(:first-child):not(:last-child)]:rounded-none [&>button:not(:first-child)]:-ml-px"
          : "flex-col [&>button:first-child]:rounded-b-none [&>button:last-child]:rounded-t-none [&>button:not(:first-child):not(:last-child)]:rounded-none [&>button:not(:first-child)]:-mt-px",
        className
      )}
      {...props}
    />
  )
);
ButtonGroup.displayName = "ButtonGroup";

const ButtonGroupItem = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <Button
      ref={ref}
      className={cn("focus:z-10", className)}
      {...props}
    />
  )
);
ButtonGroupItem.displayName = "ButtonGroupItem";

export { ButtonGroup, ButtonGroupItem };
