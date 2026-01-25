"use client";

import * as React from "react";

import { cn } from "../utils";

interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative flex items-center", className)}
      {...props}
    />
  )
);
InputGroup.displayName = "InputGroup";

interface InputGroupAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "left" | "right";
}

const InputGroupAddon = React.forwardRef<HTMLDivElement, InputGroupAddonProps>(
  ({ className, position = "left", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 flex items-center justify-center text-muted-foreground",
        position === "left" ? "left-3" : "right-3",
        className
      )}
      {...props}
    />
  )
);
InputGroupAddon.displayName = "InputGroupAddon";

interface InputGroupInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasLeftAddon?: boolean;
  hasRightAddon?: boolean;
}

const InputGroupInput = React.forwardRef<HTMLInputElement, InputGroupInputProps>(
  ({ className, hasLeftAddon, hasRightAddon, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        hasLeftAddon && "pl-9",
        hasRightAddon && "pr-9",
        className
      )}
      {...props}
    />
  )
);
InputGroupInput.displayName = "InputGroupInput";

export { InputGroup, InputGroupAddon, InputGroupInput };
