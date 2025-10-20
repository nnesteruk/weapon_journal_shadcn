import type { Manufacturer } from "./columns";
import { ManufacturerForm } from "./manufacturer.form";
import { Modal } from "@/shared/components";
import { ModalTypes, useModal, useSelectedItem } from "@/shared/store";
import { Button } from "@/shared/ui";

export const ManufacturerModal = ({ item }: { item?: Manufacturer }) => {
  const modalType = useModal((state) => state.modalType);
  const open = useModal((state) => state.open);
  const closeModal = useModal((state) => state.closeModal);
  const selectedItem = useSelectedItem((state) => state.selectedItem);

  const getTitle = () => {
    switch (modalType) {
      case ModalTypes.ADD:
        return "Добавление производителя";
      case ModalTypes.EDIT:
        return "Редактирование производителя";
      case ModalTypes.VIEW:
        return "Просмотр производителя";
      default:
        return "";
    }
  };

  return (
    <Modal
      open={modalType !== (ModalTypes.DELETE || null) && open}
      onOpenChange={closeModal}
    >
      <Modal.Content>
        <Modal.Header title={getTitle()} />
        <ManufacturerForm defaultValues={selectedItem ?? {}} />
        <Modal.Footer>
          <Modal.Close asChild>
            <Button variant="destructive">Отмена</Button>
          </Modal.Close>
          <Button type="submit" disabled={modalType === ModalTypes.VIEW}>
            {modalType === ModalTypes.ADD
              ? "Добавить "
              : modalType === ModalTypes.EDIT
                ? "Сохранить "
                : "Просмотр "}
            производителя
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
