import React from "react";
import { cn } from "@/lib/utils";

type TypographyProps = {
  children: React.ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  title?: boolean;
  subtitle?: boolean;
};

const Typography = (props: TypographyProps) => {
  const { children, h1, h2, h3, title, subtitle } = props;

  const textStyle = cn("", {
    "text-4xl font-bold": h1,
    "text-3xl font-semibold": h2,
    "text-2xl font-medium": h3,
    "text-4xl font-extrabold lg:text-5xl": title,
    "text-sm text-muted-foreground": subtitle,
  });

  return <div className={textStyle}>{children}</div>;
};

export default Typography;
