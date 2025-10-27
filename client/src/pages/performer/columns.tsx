import {
  DataTableColumnHeader,
  DataTableRowActions,
} from "@/shared/components";
import { Checkbox } from "@/shared/ui";
import type { ColumnDef } from "@tanstack/react-table";

type Performer = {
  id: number;
  name: string;
};

export const columns: ColumnDef<Performer>[] = [
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
      <DataTableColumnHeader info={info} name="ФИО исполнителя" />
    ),
  },
  {
    id: "actions",

    cell: ({ row }) => {
      const performer = row.original;

      return <DataTableRowActions row={performer} />;
    },
  },
];
