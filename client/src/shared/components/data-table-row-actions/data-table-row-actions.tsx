import { ModalTypes, openModal, setSelectedItem } from "@/shared/store";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui";
import { Eye, MoreHorizontal, SquarePen, Trash } from "lucide-react";

type DataTableRowActionsProps<TData> = {
  row: TData | null;
  isView?: boolean;
  isEdit?: boolean;
  isDelete?: boolean;
};
export const DataTableRowActions = <TData,>({
  row,
  isView = true,
  isEdit = true,
  isDelete = true,
}: DataTableRowActionsProps<TData>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 w-8 p-0 hover:bg-sidebar-accent cursor-pointer"
        >
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4 " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-center">Действия</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {isView && (
            <DropdownMenuItem
              onClick={() => {
                (openModal(ModalTypes.VIEW), setSelectedItem(row));
              }}
            >
              <Eye />
              <span className="ml-1">Просмотр</span>
            </DropdownMenuItem>
          )}
          {isEdit && (
            <DropdownMenuItem
              className="focus:bg-blue-brand-muted"
              onClick={() => {
                (openModal(ModalTypes.EDIT), setSelectedItem(row));
              }}
            >
              <SquarePen className="text-blue-brand" />
              <span className="ml-1">Редактировать</span>
            </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          {isDelete && (
            <DropdownMenuItem
              variant="destructive"
              onClick={() => {
                (openModal(ModalTypes.DELETE), setSelectedItem(row));
              }}
            >
              <Trash />
              <span className="ml-1">Удалить</span>
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
