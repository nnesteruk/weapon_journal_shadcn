import { Modal } from "./modal";
import {
  closeModal,
  ModalTypes,
  useModalType,
  useOpenModal,
} from "@/shared/store";
import { Button } from "@/shared/ui";

type MainModalProps = {
  FormComponent: React.ReactNode;
  entityName: string;
};

export const MainModal = ({ FormComponent, entityName }: MainModalProps) => {
  const modalType = useModalType();
  const open = useOpenModal();

  return (
    <Modal
      open={open && modalType !== ModalTypes.DELETE}
      onOpenChange={closeModal}
    >
      <Modal.Content>
        <Modal.Header></Modal.Header>
        {FormComponent}
        <Modal.Footer>
          <Modal.Close asChild>
            <Button variant="destructive">Отмена</Button>
          </Modal.Close>
          {modalType !== ModalTypes.VIEW && (
            <Button type="submit">
              {modalType === ModalTypes.ADD ? "Добавить " : "Сохранить "}
              {entityName}
            </Button>
          )}
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
