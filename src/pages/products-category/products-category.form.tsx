import { ModalTypes, useModalType } from "@/shared/store";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const productsCategoryFormSchema = z.object({
  name: z
    .string({ error: "Поле обязательно для заполнения" })
    .min(2, { error: "Минимум 3 символа" })
    .max(250, { error: "Максимум 250 символов" })
    .trim(),
});

type ProductsCategoryForm = z.infer<typeof productsCategoryFormSchema>;
type ProductsCategoryFormProps = {
  defaultValues?: Partial<ProductsCategoryForm>;
  formId?: string;
};

export const ProductsCategoryForm = ({
  defaultValues,
  formId,
}: ProductsCategoryFormProps) => {
  const modalType = useModalType();
  const form = useForm<ProductsCategoryForm>({
    defaultValues: modalType === ModalTypes.ADD ? { name: "" } : defaultValues,
    mode: "onSubmit",
    resolver: zodResolver(productsCategoryFormSchema),
  });

  const handleSubmit = (data: ProductsCategoryForm) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form id={formId} onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="name"
          disabled={modalType === ModalTypes.VIEW}
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Наименование категории</FormLabel>
              <FormControl>
                <Input
                  id="name"
                  type="text"
                  placeholder="Наименование категории"
                  autoFocus
                  aria-invalid={!!form.formState.errors.name}
                  {...field}
                />
              </FormControl>
              {form.formState.errors.name && (
                <FormMessage>{form.formState.errors.name.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
