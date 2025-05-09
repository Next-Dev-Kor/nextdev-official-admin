"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  LayoutDashboardIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "nextDev",
    email: "nextdev@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Team",
      href: "/dashboard/team",
      icon: UsersIcon,
    },
    {
      title: "Waiting",
      href: "/dashboard/waiting",
      icon: ClipboardListIcon,
    },
    {
      title: "Recruit",
      href: "/dashboard/recruit",
      icon: FileCodeIcon,
    },
  ],
  navClouds: [
    {
      title: "Recruit",
      icon: FileCodeIcon,
      href: "/dashboard/recruit/list",
      items: [
        { title: "Create", href: "/dashboard/recruit/create" },
        { title: "List", href: "/dashboard/recruit/list" },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      href: "/settings",
      icon: SettingsIcon,
    },
    {
      title: "Search",
      href: "/search",
      icon: SearchIcon,
    },
  ],
  documents: [
    {
      name: "Data",
      href: "/docs/library",
      icon: DatabaseIcon,
    },
    {
      name: "Reports",
      href: "/docs/reports",
      icon: ClipboardListIcon,
    },
  ],
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                <span className="text-base font-semibold">Next Dev</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {data.navMain.map((item) => {
            const isActive = pathname === item.href;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={
                    isActive
                      ? "bg-muted text-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>

        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
