import { RoutesPath } from "@/shared/config";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

type LoginForm = {
  login: string;
  password: string;
};

export const Login = () => {
  const form = useForm<LoginForm>({
    defaultValues: { login: "", password: "" },
    mode: "onSubmit",
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
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle>Вход в свой аккаунт</CardTitle>
          <CardDescription>Введите логин и пароль, чтобы войти</CardDescription>
        </CardHeader>
        <CardContent>
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
                      <FormMessage>Это поле обязательное!</FormMessage>
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
                      <FormMessage>Это поле обязательное!</FormMessage>
                    )}
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            form="login-form"
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 cursor-pointer"
          >
            Войти
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
