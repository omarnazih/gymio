import { LucideDumbbell } from "lucide-react";
// import { MainNav } from "@/components/main-nav";
import { Search } from "@/components/search";
import { ModeToggle } from "@/components/common/mode-toggle";
import { UserNav } from "@/components/user-nav";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex h-16 items-center px-4 border-b">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center space-x-2">
          <LucideDumbbell className="text-black bg-white p-1 rounded-lg h-6 w-6 cursor-pointer" />
          <span>Gymio</span>
        </Link>
        <Search />
      </div>
      {/* <MainNav className="mx-6" /> */}
      <div className="ml-auto flex items-center space-x-4">
        <ModeToggle />
        <UserNav />
      </div>
    </div>
  );
};

export default Navbar;
