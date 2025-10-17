import { DataTableColumnHeader } from "@/shared/components";
import {
  Button,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui";
import type { ColumnDef } from "@tanstack/react-table";
import { Eye, MoreHorizontal, SquarePen, Trash } from "lucide-react";

export type Manufacturer = {
  id: number;
  name: string;
  country: string;
};

export const columns: ColumnDef<Manufacturer>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllRowsSelected() ||
          (table.getIsSomeRowsSelected() && "indeterminate")
        }
        aria-label="Select all"
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "id",
    header: (info) => <DataTableColumnHeader info={info} name="ID" />,
  },
  {
    accessorKey: "name",
    header: (info) => (
      <DataTableColumnHeader info={info} name="Наименование производителя" />
    ),
  },
  {
    accessorKey: "country",
    header: (info) => <DataTableColumnHeader info={info} name="Страна" />,
  },
  {
    id: "actions",

    cell: ({ row }) => {
      const manufacturer = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 hover:bg-sidebar-accent cursor-pointer"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4 " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="text-center">
              Действия
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Eye />
                <span className="ml-1">Просмотр</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-blue-brand-muted">
                <SquarePen className="text-blue-brand" />
                <span className="ml-1">Редактировать</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <Trash />
                <span className="ml-1">Удалить</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
