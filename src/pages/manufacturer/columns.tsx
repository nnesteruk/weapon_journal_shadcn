import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
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
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Наименование производителя",
  },
  {
    accessorKey: "name",
    header: "Наименование производителя",
  },
  {
    accessorKey: "name",
    header: "Наименование производителя",
  },
  {
    accessorKey: "name",
    header: "Наименование производителя",
  },
  {
    accessorKey: "name",
    header: "Наименование производителя",
  },
  {
    accessorKey: "name",
    header: "Наименование производителя",
  },
  {
    accessorKey: "country",
    header: "Страна",
  },
  {
    accessorKey: "country",
    header: "Страна",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const manufacturer = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="text-center">
              Действия
            </DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(String(manufacturer.id))
              }
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="flex gap-4">
              <DropdownMenuItem>
                <Eye />
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-blue-brand-muted">
                <SquarePen className="text-blue-brand" />
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <Trash />
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
