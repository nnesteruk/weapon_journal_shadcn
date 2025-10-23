import { Modal } from "./modal";
import {
  closeModal,
  ModalTypes,
  useModalType,
  useOpenModal,
} from "@/shared/store";
import { Button } from "@/shared/ui";

type MainModalProps = {
  titleMap: Record<
    (typeof ModalTypes)[keyof typeof ModalTypes],
    string | undefined
  >;
  FormComponent: React.ReactNode;
  formId: string;
  entityName: string;
};

export const MainModal = ({
  titleMap,
  formId,
  FormComponent,
  entityName,
}: MainModalProps) => {
  const modalType = useModalType();
  const open = useOpenModal();

  // const titleMap = {
  //   [ModalTypes.ADD]: `Добавление ${entityName}`,
  //   [ModalTypes.EDIT]: `Редактирование ${entityName}`,
  //   [ModalTypes.VIEW]: `Просмотр ${entityName}`,
  //   [ModalTypes.DELETE]: "",
  // };

  const title = modalType ? titleMap[modalType] : "";

  return (
    <Modal
      open={open && modalType !== ModalTypes.DELETE}
      onOpenChange={closeModal}
    >
      <Modal.Content>
        <Modal.Header title={title} />
        {FormComponent}
        <Modal.Footer>
          <Modal.Close asChild>
            <Button variant="destructive">Отмена</Button>
          </Modal.Close>
          {modalType !== ModalTypes.VIEW && (
            <Button type="submit" form={formId}>
              {modalType === ModalTypes.ADD ? "Добавить " : "Сохранить "}
              {entityName}
            </Button>
          )}
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
