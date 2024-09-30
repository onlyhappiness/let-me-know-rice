import { VariantProps } from "class-variance-authority";
import { cn } from "../lib";
import { buttonVariants } from "./button";
import { Text } from "./text";

interface ChipProps extends VariantProps<typeof buttonVariants> {
  label: string;
  className?: string;
}

const Chip = ({ label, className }: ChipProps) => {
  return (
    <button
      className={cn("border rounded-md px-2.5 h-9 min-w-[60px]", className)}
    >
      <Text variant="body" className="text-[13px] font-normal">
        {label}
      </Text>
    </button>
  );
};

export { Chip };
