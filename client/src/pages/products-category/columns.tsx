import {
  DataTableColumnHeader,
  DataTableRowActions,
} from "@/shared/components";
import { Checkbox } from "@/shared/ui";
import type { ColumnDef } from "@tanstack/react-table";

type ProductsCategory = {
  id: number;
  name: string;
};

export const columns: ColumnDef<ProductsCategory>[] = [
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
    header: (info) => <DataTableColumnHeader info={info} name="Категория" />,
  },
  {
    accessorKey: "productType",
    header: (info) => (
      <DataTableColumnHeader info={info} name="Вид продукции" />
    ),
  },
  {
    id: "actions",

    cell: ({ row }) => {
      const category = row.original;

      return <DataTableRowActions row={category} />;
    },
  },
];
