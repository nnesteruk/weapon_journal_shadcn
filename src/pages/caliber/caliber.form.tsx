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

const caliberFormSchema = z.object({
  name: z
    .string({ error: "Поле обязательно для заполнения" })
    .min(2, { error: "Минимум 3 символа" })
    .max(100, { error: "Максимум 100 символов" })
    .trim(),
});

type CaliberForm = z.infer<typeof caliberFormSchema>;
type CaliberFormProps = {
  defaultValues?: Partial<CaliberForm>;
  formId?: string;
};

export const CaliberForm = ({ defaultValues, formId }: CaliberFormProps) => {
  const modalType = useModalType();
  const form = useForm<CaliberForm>({
    defaultValues: modalType === ModalTypes.ADD ? { name: "" } : defaultValues,
    mode: "onSubmit",
    resolver: zodResolver(caliberFormSchema),
  });

  const handleSubmit = (data: CaliberForm) => {
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
              <FormLabel>Наименование калибра</FormLabel>
              <FormControl>
                <Input
                  id="name"
                  type="text"
                  placeholder="Калибр"
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
