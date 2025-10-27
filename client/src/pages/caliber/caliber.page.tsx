import { CaliberForm } from "./caliber.form";
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

export const CaliberPage = () => {
  const open = useOpenModal();
  const modalType = useModalType();
  const selectedItem = useSelectedItem();

  const titleMap = {
    [ModalTypes.ADD]: "Добавление калибра",
    [ModalTypes.EDIT]: "Редактирование калибра",
    [ModalTypes.VIEW]: "Просмотр калибра",
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
        formId="caliber-form"
        titleMap={titleMap}
        entityName={"калибр"}
        FormComponent={
          <CaliberForm
            defaultValues={selectedItem ?? {}}
            formId="caliber-form"
          />
        }
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
