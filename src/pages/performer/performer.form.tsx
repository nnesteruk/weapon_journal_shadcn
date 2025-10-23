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

const performerFormSchema = z.object({
  name: z
    .string({ error: "Поле обязательно для заполнения" })
    .min(2, { error: "Минимум 3 символа" })
    .max(250, { error: "Максимум 250 символов" })
    .trim(),
});

type PerformerForm = z.infer<typeof performerFormSchema>;
type PerformerFormProps = {
  defaultValues?: Partial<PerformerForm>;
  formId?: string;
};

export const PerformerForm = ({
  defaultValues,
  formId,
}: PerformerFormProps) => {
  const modalType = useModalType();
  const form = useForm<PerformerForm>({
    defaultValues: modalType === ModalTypes.ADD ? { name: "" } : defaultValues,
    mode: "onSubmit",
    resolver: zodResolver(performerFormSchema),
  });

  const handleSubmit = (data: PerformerForm) => {
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
              <FormLabel>ФИО исполнителя</FormLabel>
              <FormControl>
                <Input
                  id="name"
                  type="text"
                  placeholder="ФИО исполнителя"
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
