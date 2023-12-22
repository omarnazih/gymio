import { NavLink } from "react-router-dom";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <NavLink
        to="/child/5"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        home 5
      </NavLink>
    </nav>
  );
}
