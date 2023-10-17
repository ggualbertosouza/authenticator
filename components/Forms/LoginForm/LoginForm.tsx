"use client";
import SignIn from "@/app/(authentication)/signin/page";
import { GoogleSignInButton } from "@/components/Button/socialSignIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Schema
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4, "Senha incorreta").max(16, "Senha incorreta"),
});

// Typeof schema
type schemaProps = z.infer<typeof schema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<schemaProps>({
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <section>
      <form onSubmit={handleSubmit(() => console.log(watch("email")))}>
        <Label>Email:</Label>
        <Input
          {...register("email")}
          type="email"
          error={errors.email?.message}
        />

        <Label>Password:</Label>
        <Input
          {...register("password")}
          type="password"
          error={errors.password?.message}
        />
        <Button onClick={() => SignIn()}>Login</Button>
      </form>
        <GoogleSignInButton />
    </section>
  );
};
