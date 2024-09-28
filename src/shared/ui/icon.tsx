import { icons, LucideProps } from "lucide-react";

interface Props extends LucideProps {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}

const Icon = ({ name, color = "black", size = 24, ...props }: Props) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} {...props} />;
};

export default Icon;
