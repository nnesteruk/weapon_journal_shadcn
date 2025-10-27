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

const productsTypeFormSchema = z.object({
  name: z
    .string({ error: "Поле обязательно для заполнения" })
    .min(2, { error: "Минимум 3 символа" })
    .max(250, { error: "Максимум 250 символов" })
    .trim(),
});

type ProductsTypeForm = z.infer<typeof productsTypeFormSchema>;
type ProductsTypeFormProps = {
  defaultValues?: Partial<ProductsTypeForm>;
  formId?: string;
};

export const ProductsTypeForm = ({
  defaultValues,
  formId,
}: ProductsTypeFormProps) => {
  const modalType = useModalType();
  const form = useForm<ProductsTypeForm>({
    defaultValues: modalType === ModalTypes.ADD ? { name: "" } : defaultValues,
    mode: "onSubmit",
    resolver: zodResolver(productsTypeFormSchema),
  });

  const handleSubmit = (data: ProductsTypeForm) => {
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
              <FormLabel>Вид продукции</FormLabel>
              <FormControl>
                <Input
                  id="name"
                  type="text"
                  placeholder="Вид продукции"
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
