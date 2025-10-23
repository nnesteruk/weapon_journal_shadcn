import { columns } from "./columns";
import { ProductsCategoryForm } from "./products-category.form";
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

export const ProductsCategoryPage = () => {
  const open = useOpenModal();
  const modalType = useModalType();
  const selectedItem = useSelectedItem();

  const titleMap = {
    [ModalTypes.ADD]: "Добавление категории",
    [ModalTypes.EDIT]: "Редактирование категории",
    [ModalTypes.VIEW]: "",
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
        formId="products-category-form"
        titleMap={titleMap}
        entityName={"категорию"}
        FormComponent={
          <ProductsCategoryForm
            defaultValues={selectedItem ?? {}}
            formId="products-category-form"
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
