import {
  DataTableColumnHeader,
  DataTableRowActions,
} from "@/shared/components";
import { Checkbox } from "@/shared/ui";
import type { ColumnDef } from "@tanstack/react-table";

type Manufacturer = {
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

      return <DataTableRowActions row={manufacturer} />;
    },
  },
];
