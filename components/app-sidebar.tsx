"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  HelpCircleIcon,
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
  ],
  navClouds: [
    {
      title: "Capture",
      icon: CameraIcon,
      isActive: true,
      href: "#",
      items: [
        { title: "Active Proposals", href: "#" },
        { title: "Archived", href: "#" },
      ],
    },
    {
      title: "Proposal",
      icon: FileTextIcon,
      href: "#",
      items: [
        { title: "Active Proposals", href: "#" },
        { title: "Archived", href: "#" },
      ],
    },
    {
      title: "Prompts",
      icon: FileCodeIcon,
      href: "#",
      items: [
        { title: "Active Proposals", href: "#" },
        { title: "Archived", href: "#" },
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
      title: "Get Help",
      href: "/help",
      icon: HelpCircleIcon,
    },
    {
      title: "Search",
      href: "/search",
      icon: SearchIcon,
    },
  ],
  documents: [
    {
      name: "Data Library",
      href: "/docs/library",
      icon: DatabaseIcon,
    },
    {
      name: "Reports",
      href: "/docs/reports",
      icon: ClipboardListIcon,
    },
    {
      name: "Word Assistant",
      href: "/docs/word-assistant",
      icon: FileIcon,
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
