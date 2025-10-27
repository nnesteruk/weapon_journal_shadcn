import { ProductsCategoryForm } from "../products-category/products-category.form";
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

export const ProductsTypePage = () => {
  const open = useOpenModal();
  const modalType = useModalType();
  const selectedItem = useSelectedItem();

  const titleMap = {
    [ModalTypes.ADD]: "Добавление вида продукции",
    [ModalTypes.EDIT]: "Редактирование вида продукции",
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
        formId="products-type-form"
        titleMap={titleMap}
        entityName={"вид продукции"}
        FormComponent={
          <ProductsCategoryForm
            defaultValues={selectedItem ?? {}}
            formId="products-type-form"
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
