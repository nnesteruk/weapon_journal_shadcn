import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Button,
} from "@/shared/ui";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";

type DeleteModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  onConfirm: () => void;
};
export const DeleteModal = ({
  open,
  onClose,
  title,
  onConfirm,
  description,
}: DeleteModalProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title ?? ""}</AlertDialogTitle>
          <AlertDialogDescription>{description ?? ""}</AlertDialogDescription>
        </AlertDialogHeader>
        {/* <p className="text-sm text-muted-foreground">
          Это действие нельзя отменить. Подтвердите удаление.
        </p> */}
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant={"outline"}>Отмена</Button>
          </AlertDialogCancel>
          <Button variant="destructive" onClick={onConfirm}>
            Удалить
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
