import * as React from "react";

import { cn } from "../lib";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="flex rounded-md border border-input bg-transparent px-3">
        {leftIcon}
        <input
          type={type}
          className={cn("flex h-10 w-full py-2 text-sm outline-0", className)}
          ref={ref}
          {...props}
        />
        {rightIcon}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
