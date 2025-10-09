import { RoutesPath } from "@/shared/config";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@/shared/ui";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

type LoginForm = {
  login: string;
  password: string;
};

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<LoginForm>({
    defaultValues: { login: "", password: "" },
    mode: "onSubmit",
  });

  const navigate = useNavigate();

  const onSubmit = (data: LoginForm) => {
    console.log(data);
    if (data.password === "123456qQ!") {
      localStorage.setItem("token", "isAuth");
      return navigate(RoutesPath.MAIN);
    }
    alert("Неправильный пароль");
    resetField("password");
  };

  return (
    // <Box className="flex justify-center items-center h-screen">
    //   <Card
    //     sx={{
    //       width: 300,
    //       border: "2px solid #0000007f",
    //       borderRadius: 5,
    //       padding: 4,
    //     }}
    //   >
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <Box
    //         sx={{
    //           display: "flex",
    //           flexDirection: "column",
    //           gap: 2,
    //         }}
    //       >
    //         <Typography variant="h4" className="text-center">
    //           Вход
    //         </Typography>
    //         <FormControl>
    //           <FormLabel>Логин</FormLabel>
    //           <Controller
    //             name="login"
    //             control={control}
    //             rules={{ required: true }}
    //             render={({ field }) => (
    //               <TextField
    //                 id="login"
    //                 variant="outlined"
    //                 type="text"
    //                 // sx={{ borderColor: "red" }}
    //                 placeholder="Логин"
    //                 autoFocus
    //                 error={!!errors.login}
    //                 color={errors.login ? "error" : "primary"}
    //                 {...field}
    //               />
    //             )}
    //           />
    //           {errors.login && (
    //             <p className="text-red-600 text-center">
    //               Это поле обязательное!
    //             </p>
    //           )}
    //         </FormControl>
    //         <FormControl>
    //           <FormLabel>Пароль</FormLabel>
    //           <Controller
    //             name="password"
    //             control={control}
    //             rules={{ required: true }}
    //             render={({ field }) => (
    //               <TextField
    //                 id="password"
    //                 variant="outlined"
    //                 type="password"
    //                 // sx={{ borderColor: "red" }}
    //                 placeholder="••••••••"
    //                 autoFocus
    //                 error={!!errors.password}
    //                 color={errors.password ? "error" : "primary"}
    //                 {...field}
    //               />
    //             )}
    //           />
    //           {errors.password && (
    //             <p className="text-red-600 text-center">
    //               Это поле обязательное!
    //             </p>
    //           )}
    //         </FormControl>
    //         <Button variant="contained" type="submit">
    //           Войти
    //         </Button>
    //       </Box>
    //     </form>
    //   </Card>
    // </Box>
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle>Вход в свой аккаунт</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="login">Логин</Label>
                <Controller
                  name="login"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      id="login"
                      type="text"
                      placeholder="user123"
                      autoFocus
                      {...field}
                    />
                  )}
                />
                {errors.login && (
                  <p className="text-red-600 text-center">
                    Это поле обязательное!
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Пароль</Label>
                </div>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      {...field}
                    />
                  )}
                />
                {errors.login && (
                  <p className="text-red-600 text-center">
                    Это поле обязательное!
                  </p>
                )}
              </div>
            </div>
          </form>
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
