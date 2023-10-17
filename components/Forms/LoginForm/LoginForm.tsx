"use client";

// Hookes | components
import { useLogin } from "@/components/Forms/LoginForm/useLogin";
import { GoogleSignInButton } from "@/components/Button/socialSignIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const LoginForm = () => {
  const { errors, handleLogin, handleSubmit, register } = useLogin();
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Glad you`re back!</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(() => handleLogin())}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email:</Label>
              <Input
                {...register("email")}
                type="email"
                error={errors.email?.message}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password:</Label>
              <Input
                {...register("password")}
                type="password"
                error={errors.password?.message}
              />
            </div>
            <Button onClick={() => handleLogin()}>Login</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <p className="text-center">Or</p>
        <div className="flex gap-2 items-center">
          <GoogleSignInButton />
        </div>
      </CardFooter>
    </Card>
  );
};
