import { useDataTablePagination } from "./use-data-table-pagination.hook";
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";
import type { Table } from "@tanstack/react-table";
import {
  ArrowLeft,
  ArrowLeftToLine,
  ArrowRight,
  ArrowRightToLine,
} from "lucide-react";

export const DataTablePagination = <TData,>({
  table,
}: {
  table: Table<TData>;
}) => {
  const { currentPage, pages } = useDataTablePagination({ table });

  return (
    <div className="flex items-center justify-end space-x-2">
      <span>Показывать по:</span>
      <Select
        value={String(table.getState().pagination.pageSize)}
        onValueChange={(e) => table.setPageSize(Number(e))}
      >
        <SelectTrigger className="cursor-pointer">
          <SelectValue placeholder="10" />
        </SelectTrigger>
        <SelectContent className="min-w-full">
          {[10, 20, 30, 40, 50, 100].map((pageSize) => (
            <SelectItem
              key={pageSize}
              value={pageSize.toString()}
              className="cursor-pointer"
            >
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        variant="outline"
        size="sm"
        className="cursor-pointer"
        onClick={() => table.firstPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <ArrowLeftToLine />
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="cursor-pointer"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <ArrowLeft />
      </Button>
      {pages.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "default" : "outline"}
          size="sm"
          onClick={() => table.setPageIndex(Number(page) - 1)}
          className="w-8 cursor-pointer"
          disabled={page === "..."}
        >
          {page}
        </Button>
      ))}
      <Button
        variant="outline"
        size="sm"
        className="cursor-pointer"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <ArrowRight />
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="cursor-pointer"
        onClick={() => table.lastPage()}
        disabled={!table.getCanNextPage()}
      >
        <ArrowRightToLine />
      </Button>
    </div>
  );
};
