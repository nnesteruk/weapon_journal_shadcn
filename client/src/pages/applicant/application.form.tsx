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

const applicationFormSchema = z.object({
  name: z
    .string({ error: "Поле обязательно для заполнения" })
    .min(3, { error: "Минимум 3 символа" })
    .max(250, { error: "Максимум 250 символов" })
    .trim(),
});

type ApplicationForm = z.infer<typeof applicationFormSchema>;
type ApplicationFormProps = {
  defaultValues?: Partial<ApplicationForm>;
  formId?: string;
};

export const ApplicationForm = ({
  defaultValues,
  formId,
}: ApplicationFormProps) => {
  const modalType = useModalType();
  const form = useForm<ApplicationForm>({
    defaultValues: modalType === ModalTypes.ADD ? { name: "" } : defaultValues,
    mode: "onSubmit",
    resolver: zodResolver(applicationFormSchema),
  });

  const handleSubmit = (data: ApplicationForm) => {
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
              <FormLabel>ФИО заявителя</FormLabel>
              <FormControl>
                <Input
                  id="name"
                  type="text"
                  placeholder="ФИО заявителя"
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
