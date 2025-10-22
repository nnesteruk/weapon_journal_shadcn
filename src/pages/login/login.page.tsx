import { LoginForm } from "./login.form";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui";

export const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle>Вход в свой аккаунт</CardTitle>
          <CardDescription>Введите логин и пароль, чтобы войти</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
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
