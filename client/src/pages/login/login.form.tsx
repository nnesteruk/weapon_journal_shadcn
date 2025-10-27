import { RoutesPath } from "@/shared/config";
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
import { useNavigate } from "react-router";
import z from "zod";

const loginSchema = z.object({
  login: z
    .string()
    .trim()
    .min(3, { error: "Минимум 3 символа" })
    .max(30, { error: "Максимум 30 символов" }),
  password: z
    .string()
    .trim()
    .min(8, { error: "Минимум 8 символов" })
    .max(30, { error: "Максимум 30 символов" }),
});

type LoginForm = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const form = useForm<LoginForm>({
    defaultValues: { login: "", password: "" },
    mode: "onSubmit",
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();
  const onSubmit = (data: LoginForm) => {
    console.log(data);
    if (data.password === "123456qQ!" && data.login === "admin") {
      localStorage.setItem("token", "isAuth");
      return navigate(RoutesPath.MAIN);
    }
    alert("Неправильный пароль или логин!");
    form.reset();
  };

  return (
    <Form {...form}>
      <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="login"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Логин</FormLabel>
              <FormControl>
                <Input
                  id="login"
                  type="text"
                  placeholder="user123"
                  autoFocus
                  aria-invalid={!!form.formState.errors.login}
                  {...field}
                />
              </FormControl>
              {form.formState.errors.login && (
                <FormMessage>
                  {form.formState.errors.login?.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          rules={{ required: true }}
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  aria-invalid={!!form.formState.errors.password}
                  {...field}
                />
              </FormControl>
              {form.formState.errors.password && (
                <FormMessage>
                  {form.formState.errors.password?.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
