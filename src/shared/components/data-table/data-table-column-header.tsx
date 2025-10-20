import type { HeaderContext } from "@tanstack/react-table";
import { ArrowDown, ArrowUp } from "lucide-react";

type DataTableColumnHeader<T> = {
  info: HeaderContext<T, unknown>;
  name: string;
};

export const DataTableColumnHeader = <T,>({
  info,
  name,
}: DataTableColumnHeader<T>) => {
  const sorted = info.column.getIsSorted();

  return (
    <div
      onClick={() =>
        info.column.toggleSorting(info.column.getIsSorted() === "asc")
      }
      className="
        flex items-center gap-1
        cursor-pointer select-none
        font-medium text-sm
        hover:text-sidebar-ring
        transition-colors
      "
    >
      {name}
      {sorted === "asc" && <ArrowUp size={14} />}
      {sorted === "desc" && <ArrowDown size={14} />}
    </div>
  );
};
