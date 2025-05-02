"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BarChart2,
  LineChart,
  PieChart,
  Table,
  CreditCard,
  Settings,
  HelpCircle,
  ArrowRightLeft,
  Wallet,
  User,
  LogIn,
  UserPlus,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Market Overview",
    href: "/market",
    icon: BarChart2,
  },
  {
    title: "Trading",
    href: "/trading",
    icon: ArrowRightLeft,
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    icon: Wallet,
  },
  {
    title: "Tables",
    href: "/tables",
    icon: Table,
  },
  {
    title: "Billing",
    href: "/billing",
    icon: CreditCard,
  },
  {
    title: "RTL",
    href: "/rtl",
    icon: ChevronRight,
  },
];

const accountPages = [
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Sign In",
    href: "/signin",
    icon: LogIn,
  },
  {
    title: "Sign Up",
    href: "/signup",
    icon: UserPlus,
  },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className={cn(
      "flex h-full flex-col border-r bg-background transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex h-16 items-center justify-between px-4 border-b">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">V</span>
          </div>
          {!isCollapsed && <span className="font-semibold text-lg">Vision</span>}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "h-8 w-8",
            isCollapsed ? "mr-0" : ""
          )}
        >
          <ChevronRight
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              isCollapsed ? "rotate-180" : ""
            )}
          />
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-1 p-2">
          <div className="px-3 py-2">
            {!isCollapsed && (
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Main
              </h2>
            )}
            <div className="space-y-1">
              {sidebarNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground",
                    isCollapsed ? "justify-center px-0" : "justify-start"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {!isCollapsed && <span>{item.title}</span>}
                </Link>
              ))}
            </div>
          </div>

          <div className="px-3 py-2">
            {!isCollapsed && (
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Account Pages
              </h2>
            )}
            <div className="space-y-1">
              {accountPages.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground",
                    isCollapsed ? "justify-center px-0" : "justify-start"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {!isCollapsed && <span>{item.title}</span>}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className={cn(
          "rounded-lg bg-muted",
          isCollapsed ? "p-2 w-8 h-8 flex items-center justify-center" : "p-4"
        )}>
          <div className={cn(
            "flex items-center justify-center",
            isCollapsed ? "mb-0" : "mb-2"
          )}>
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <HelpCircle className="h-4 w-4 text-primary-foreground" />
            </div>
          </div>
          {!isCollapsed && (
            <>
              <h3 className="text-center font-semibold mb-1">Need help?</h3>
              <p className="text-center text-sm text-muted-foreground mb-3">
                Please check our docs
              </p>
              <Button className="w-full" variant="outline">
                DOCUMENTATION
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 