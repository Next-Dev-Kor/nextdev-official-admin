import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <ChartAreaInteractive />
      </SidebarInset>
    </SidebarProvider>
  );
}
