import { Input } from "@/shared/ui/input";
import type { Table } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export const DataTableSearchInput = <TData,>({
  table,
}: {
  table: Table<TData>;
}) => {
  const [value, setValue] = useState(table.getState().globalFilter ?? "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(value);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="relative max-w-xs">
      <Search
        className="absolute left-2 top-2.5 text-muted-foreground"
        size={16}
      />
      <Input
        value={table.getState().globalFilter ?? ""}
        onChange={(e) => table.setGlobalFilter(String(e.target.value))}
        placeholder="Поиск..."
        className="pl-8"
      />
    </div>
  );
};
