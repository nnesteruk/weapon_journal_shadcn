import { DataTableSearchInput } from "./search-input";
import type { ModalType } from "@/shared/components";
import { Button } from "@/shared/ui";
import type { Table } from "@tanstack/react-table";
import { PlusIcon } from "lucide-react";

export const HeaderActions = <TData,>({
  table,
  onAdd,
}: {
  table: Table<TData>;
  onAdd?: (type: ModalType) => void;
}) => {
  const handleOpen = () => {
    if (typeof onAdd === "function") {
      return onAdd("add");
    }
  };

  return (
    <div className="flex justify-between">
      <DataTableSearchInput table={table} />
      <div className="flex gap-2">
        <Button onClick={handleOpen}>
          <PlusIcon />
          Добавить запись
        </Button>
        <Button>Экспорт в Excel</Button>
      </div>
    </div>
  );
};
