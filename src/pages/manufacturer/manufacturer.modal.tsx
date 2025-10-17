import type { Manufacturer } from "./columns";
import { ManufacturerForm } from "./manufacturer.form";
import { Modal, type ModalType } from "@/shared/components";
import { useModal } from "@/shared/hooks";
import { Button } from "@/shared/ui";

export const ManufacturerModal = ({
  type,
  item,
}: {
  type: ModalType;
  item?: Manufacturer;
}) => {
  const { open, modalType, selectedItem, closeModal } = useModal();
  return (
    <Modal open={modalType !== null && open} onOpenChange={closeModal}>
      <Modal.Content>
        <Modal.Header
          title={`${modalType === "add" ? "Добавление" : modalType === "edit" ? "Редактирование" : "Просмотр"} производителя`}
        />
        <ManufacturerForm defaultValues={selectedItem ?? {}} />
        <Modal.Footer>
          <Modal.Close asChild>
            <Button variant="destructive">Отмена</Button>
          </Modal.Close>
          <Button type="submit">
            {type === "add"
              ? "Добавить "
              : type === "edit"
                ? "Сохранить "
                : "Просмотр "}
            производителя
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
