import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import { RoutesMeta } from "@/shared/config";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Outlet, useLocation } from "react-router";

export const Layout = () => {
  const { pathname } = useLocation();
  const title = RoutesMeta[pathname as keyof typeof RoutesMeta]?.title;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-hidden">
        <header className="flex h-16 shrink-0 items-center gap-2 bg-sidebar border-2 border-l-0 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 ">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 cursor-pointer" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <h1 className="text-lg font-semibold">
              Система учета сертификации
            </h1>
          </div>
          <button></button>
        </header>
        <main className="flex flex-col gap-4 p-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};
