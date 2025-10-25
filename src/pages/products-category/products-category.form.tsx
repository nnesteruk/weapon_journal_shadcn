import { ModalTypes, useModalType } from "@/shared/store";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
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
  select: z.string({ error: "Выберите тип продукции из списка" }),
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
    defaultValues:
      modalType === ModalTypes.ADD ? { name: "", select: "" } : defaultValues,
    mode: "onSubmit",
    resolver: zodResolver(productsCategoryFormSchema),
  });

  const handleSubmit = (data: ProductsCategoryForm) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form id={formId} onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="select"
            disabled={modalType === ModalTypes.VIEW}
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem className="flex">
                <FormLabel>Тип продукции</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Тип продукции" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                {form.formState.errors.select && (
                  <FormMessage>
                    {form.formState.errors.select?.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
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
                  <FormMessage>
                    {form.formState.errors.name.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};
