import React, { ReactNode } from "react";

import { Toaster } from "@/components/ui/sooner";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import { LucideHome, LucideUser } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const sidebarNavItems = [
  {
    title: "Home",
    href: "/",
    icon: <LucideHome />,
  },
  {
    title: "Account",
    href: "/account",
    icon: <LucideUser />,
  },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="space-y-6 p-10 pb-16">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 ">
          <aside className="lg:w-1/6">
            <Sidebar items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
      <Footer />
      <Toaster />
    </React.Fragment>
  );
};

export default Layout;
