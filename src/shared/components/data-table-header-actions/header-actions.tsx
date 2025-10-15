import { DataTableSearchInput } from "./search-input";
import { Button } from "@/shared/ui";
import type { Table } from "@tanstack/react-table";
import { PlusIcon } from "lucide-react";

export const HeaderActions = <TData,>({ table }: { table: Table<TData> }) => {
  return (
    <div className="flex justify-between">
      <DataTableSearchInput table={table} />
      <div className="flex gap-2">
        <Button>
          <PlusIcon />
          Добавить запись
        </Button>
        <Button>Экспорт в Excel</Button>
      </div>
    </div>
  );
};
