import { useDebounce } from "@/shared/hooks";
import { Input } from "@/shared/ui";
import type { Table } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { useState } from "react";

export const DataTableSearchInput = <TData,>({
  table,
}: {
  table: Table<TData>;
}) => {
  const [value, setValue] = useState(table.getState().globalFilter ?? "");

  useDebounce(() => table.setGlobalFilter(value), 1000);

  return (
    <div className="relative max-w-xs w-full">
      <Search
        className="absolute left-2 top-2.5 text-muted-foreground"
        size={16}
      />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Поиск..."
        className="pl-8"
      />
    </div>
  );
};
