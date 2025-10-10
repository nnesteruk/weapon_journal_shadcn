import {
  AudioWaveform,
  Boxes,
  ChartBarStacked,
  CircleSmall,
  Command,
  Factory,
  FileBox,
  FileUser,
  GalleryVerticalEnd,
  SquareTerminal,
  Type,
  Users,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/shared/components/nav-main";
import { NavUser } from "@/shared/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
} from "@/shared/ui/sidebar";
import { RoutesPath } from "../config";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Главная таблица",
      url: RoutesPath.MAIN,
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Продукция",
      url: RoutesPath.PRODUCT,
      icon: Boxes,
      isActive: true,
    },
    {
      title: "Модели",
      url: RoutesPath.MODEL,
      icon: FileBox,
      isActive: true,
    },
    {
      title: "Заявители",
      url: RoutesPath.APPLICANT,
      icon: FileUser,
      isActive: true,
    },
    {
      title: "Изготовители",
      url: RoutesPath.MANUFACTURER,
      icon: Factory,
      isActive: true,
    },
    {
      title: "Калибры",
      url: RoutesPath.CALIBER,
      icon: CircleSmall,
      isActive: true,
    },
    {
      title: "Категории",
      url: RoutesPath.PRODUCTS_CATEGORY,
      icon: ChartBarStacked,
      isActive: true,
    },
    {
      title: "Виды продукции",
      url: RoutesPath.PRODUCTS_TYPE,
      icon: Type,
      isActive: true,
    },
    {
      title: "Исполнители",
      url: RoutesPath.PERFORMER,
      icon: Users,
      isActive: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <span className="truncate font-medium">Com</span>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
