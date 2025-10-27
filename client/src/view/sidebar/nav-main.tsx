import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui/sidebar";
import { type LucideIcon } from "lucide-react";
import { NavLink } from "react-router";

type NavMainItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
};

export function NavMain({ items }: { items: NavMainItem[] }) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <NavLink to={item.url} className="flex items-center gap-2">
              {({ isActive }) => (
                <SidebarMenuButton
                  tooltip={item.title}
                  className={`flex items-center gap-2 cursor-pointer ${
                    isActive && "bg-sidebar-accent"
                  }`}
                >
                  {item.icon && <item.icon size={20} />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              )}
            </NavLink>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
