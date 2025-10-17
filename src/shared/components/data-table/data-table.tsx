import { DataTablePagination } from "./data-table-pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type Table as TableType,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";

interface DataTableProps<TData> {
  columns: ColumnDef<TData, any>[];
  data: TData[];
  renderHeader?: (table: TableType<TData>) => React.ReactNode;
  enableTablePagination?: boolean;
  enableTableFilter?: boolean;
  actions?: boolean;
}

export const DataTable = <TData,>({
  data,
  columns,
  renderHeader,
  enableTablePagination = true,
  enableTableFilter = true,
  actions = true,
}: DataTableProps<TData>) => {
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    state: {
      globalFilter,
    },
  });

  useEffect(() => {
    if (renderHeader) {
      renderHeader(table);
    }
  }, [table, renderHeader]);

  return (
    <div className="w-full h-[800px] flex flex-col gap-4">
      {enableTableFilter && (renderHeader ? renderHeader(table) : null)}
      <div className="flex rounded-md border overflow-hidden">
        <Table>
          <TableHeader className="sticky top-0 z-10 bg-background shadow-md">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="w-auto">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Нет данных
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {enableTablePagination && (
        <div className="flex items-center justify-between">
          <span>
            {table.getFilteredSelectedRowModel().rows.length} из{" "}
            {table.getFilteredRowModel().rows.length} строк выбрано.
          </span>
          <DataTablePagination table={table} />
        </div>
      )}
    </div>
  );
};
