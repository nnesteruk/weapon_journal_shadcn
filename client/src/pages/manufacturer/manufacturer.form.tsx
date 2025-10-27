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

const manufacturerFormSchema = z.object({
  name: z
    .string({ error: "Поле обязательно для заполнения" })
    .trim()
    .min(3, { error: "Минимум 3 символа" })
    .max(250, { error: "Максимум 250 символов" }),
  country: z
    .string({ error: "Поле обязательно для заполнения" })
    .trim()
    .min(3, { error: "Минимум 3 символа" })
    .max(250, { error: "Максимум 250 символов" }),
});

type ManufacturerForm = z.infer<typeof manufacturerFormSchema>;
type ManufacturerFormProps = {
  defaultValues?: Partial<ManufacturerForm>;
  formId: string;
};

export const ManufacturerForm = ({
  defaultValues,
  formId,
}: ManufacturerFormProps) => {
  const modalType = useModalType();
  const form = useForm<ManufacturerForm>({
    defaultValues:
      modalType === ModalTypes.ADD ? { name: "", country: "" } : defaultValues,
    mode: "onSubmit",
    resolver: zodResolver(manufacturerFormSchema),
  });

  const handleSubmit = (data: ManufacturerForm) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form id={formId} onSubmit={form.handleSubmit(handleSubmit)}>
        <div>
          <FormField
            control={form.control}
            name="name"
            disabled={modalType === ModalTypes.VIEW}
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Наименование производителя</FormLabel>
                <FormControl>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Наименование производителя"
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
          <FormField
            control={form.control}
            name="country"
            disabled={modalType === ModalTypes.VIEW}
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Страна</FormLabel>
                <FormControl>
                  <Input
                    id="country"
                    type="text"
                    placeholder="Страна"
                    aria-invalid={!!form.formState.errors.country}
                    {...field}
                  />
                </FormControl>
                {form.formState.errors.country && (
                  <FormMessage>
                    {form.formState.errors.country.message}
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
