import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      header: "text-[28px] font-bold",
      title: "text-[23px] font-bold",
      headline: "text-[20px] font-semibold",
      body: "text-[15px] font-medium",
      caution: "text-[13px] font-medium",
      description: "text-[11px] font-medium",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface TextProps extends VariantProps<typeof textVariants> {
  className?: string;
  children: React.ReactNode;
}

const Text = ({ className, children, variant }: TextProps) => {
  return (
    <span className={cn(textVariants({ variant, className }))}>{children}</span>
  );
};

export { Text };
