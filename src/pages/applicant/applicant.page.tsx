import { columns } from "./columns";
import {
  DataTable,
  DeleteModal,
  HeaderActions,
  Modal,
} from "@/shared/components";
import {
  ModalTypes,
  closeModal,
  useModalType,
  useOpenModal,
  useSelectedItem,
} from "@/shared/store";

export const ApplicantPage = () => {
  const open = useOpenModal();
  const modalType = useModalType();
  const selectedItem = useSelectedItem();

  return (
    <>
      <DataTable
        data={[]}
        columns={columns}
        renderHeader={(table) => <HeaderActions table={table} />}
      />
      <Modal></Modal>
      <DeleteModal
        open={modalType === ModalTypes.DELETE && open}
        title="Вы точно уверены?"
        description="Это действие нельзя отменить. Подтвердите удаление."
        onClose={closeModal}
        onConfirm={() => console.log("Удаляем:", selectedItem)}
      />
    </>
  );
};
