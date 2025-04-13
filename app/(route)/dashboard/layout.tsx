// app/dashboard/layout.tsx
import { PropsWithChildren } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <main className="flex flex-1 flex-col p-6">
          <div className="px-4 lg:px-6">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
