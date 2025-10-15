import { Button, Dialog, DialogHeader } from "@/shared/ui";
import { DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { PlusIcon } from "lucide-react";

export const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon />
          Добавить запись
        </Button>
      </DialogTrigger>
      <DialogContent>
        {" "}
        v<DialogHeader>Добавление записи</DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
