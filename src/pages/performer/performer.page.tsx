import { columns } from "./columns";
import { PerformerForm } from "./performer.form";
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

export const PerformerPage = () => {
  const open = useOpenModal();
  const modalType = useModalType();
  const selectedItem = useSelectedItem();

  const titleMap = {
    [ModalTypes.ADD]: "Добавление исполнителя",
    [ModalTypes.EDIT]: "Редактирование исполнителя",
    [ModalTypes.VIEW]: "Просмотр исполнителя",
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
        formId="performer-form"
        titleMap={titleMap}
        entityName={"исполнителя"}
        FormComponent={
          <PerformerForm
            defaultValues={selectedItem ?? {}}
            formId="performer-form"
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
