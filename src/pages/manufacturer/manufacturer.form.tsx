import type { Manufacturer } from "./columns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared/ui";
import { useForm } from "react-hook-form";

export const ManufacturerForm = () => {
  const form = useForm<Manufacturer>({
    defaultValues: { name: "", country: "" },
    mode: "onSubmit",
  });

  const handleSubmit = (data: Manufacturer) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div>
          <FormField
            control={form.control}
            name="name"
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
                    aria-invalid={!!form.formState.errors.country}
                    {...field}
                  />
                </FormControl>
                {form.formState.errors.country && (
                  <FormMessage>Это поле обязательное!</FormMessage>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
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
                  <FormMessage>Это поле обязательное!</FormMessage>
                )}
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};
