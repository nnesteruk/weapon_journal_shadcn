import { Modal } from "./modal";
import { useModal } from "@/shared/hooks";
import { Button } from "@/shared/ui";

type DeleteModalProps = {
  title?: string;
  onConfirm: () => void;
};
export const DeleteModal = ({ title, onConfirm }: DeleteModalProps) => {
  const { open, closeModal } = useModal();

  return (
    <Modal open={open} onOpenChange={closeModal}>
      <Modal.Content>
        <Modal.Header title={title ?? "Удалить запись?"} />
        <p className="text-sm text-muted-foreground">
          Это действие нельзя отменить. Подтвердите удаление.
        </p>
        <Modal.Footer>
          <Modal.Close asChild>
            <Button variant={"outline"}>Отмена</Button>
          </Modal.Close>
          <Button variant="destructive" onClick={onConfirm}>
            Удалить
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
