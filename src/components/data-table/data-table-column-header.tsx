import type { HeaderContext } from "@tanstack/react-table";
import { ArrowDown, ArrowUp } from "lucide-react";
import type { T } from "node_modules/react-router/dist/development/context-DSyS5mLj.d.mts";

type DataTableColumnHeader<T> = {
  info: HeaderContext<T, unknown>;
  name: string;
};

export const DataTableColumnHeader = ({
  info,
  name,
}: DataTableColumnHeader<T>) => {
  const sorted = info.column.getIsSorted();
  const handleSortClick = (e: React.PointerEvent) => {
    e.preventDefault();
    return info.column.toggleSorting(info.column.getIsSorted() === "asc");
  };

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
