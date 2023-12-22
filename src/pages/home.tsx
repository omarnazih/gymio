import { Button } from "@/components/ui/button";

import { ModeToggle } from "@/components/common/mode-toggle";
import React from "react";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { Search } from "@/components/search";

function HomePage() {
  return (
    <React.Fragment>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </div>

      {/* <Button>Click me</Button> */}
    </React.Fragment>
  );
}

export default HomePage;
