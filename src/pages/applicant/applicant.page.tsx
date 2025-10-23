import { ApplicationForm } from "./application.form";
import { columns } from "./columns";
import {
  DataTable,
  DeleteModal,
  HeaderActions,
  MainModal,
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

  const titleMap = {
    [ModalTypes.ADD]: "Добавление заявителя",
    [ModalTypes.EDIT]: "Редактирование заявителя",
    [ModalTypes.VIEW]: "Просмотр заявителя",
    [ModalTypes.DELETE]: "",
  };

  return (
    <>
      <DataTable
        data={[]}
        columns={columns}
        renderHeader={(table) => <HeaderActions table={table} />}
      />
      <MainModal
        formId="applicant-form"
        titleMap={titleMap}
        entityName={"заявителя"}
        FormComponent={<ApplicationForm defaultValues={selectedItem ?? {}} />}
      />
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
