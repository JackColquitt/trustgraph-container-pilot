
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Box, Ship, Wrench, Database } from "lucide-react";

type NavItem = {
  name: string;
  path: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: Database,
  },
  {
    name: "Build",
    path: "/build",
    icon: Box,
  },
  {
    name: "Ship",
    path: "/ship",
    icon: Ship,
  },
  {
    name: "Manage",
    path: "/manage",
    icon: Wrench,
  },
  {
    name: "Monitoring",
    path: "/monitoring",
    icon: Database,
  },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground shrink-0 border-r hidden md:block">
      <nav className="flex flex-col h-full p-4">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-trustteal-500"></div>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
