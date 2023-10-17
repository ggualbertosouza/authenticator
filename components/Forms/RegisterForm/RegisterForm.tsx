"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRegister } from "@/components/Forms/RegisterForm/useRegister";

export const RegisterForm = () => {
  const { errors, register, handleSubmit, handleRegister } = useRegister();
  return (
    <>
      <form onSubmit={handleSubmit(handleRegister)}>
        <Label>Usuário:</Label>
        <Input
          {...register("username")}
          type="text"
          error={errors.username?.message}
        />

        <Label>Email:</Label>
        <Input
          {...register("email")}
          type="text"
          error={errors.email?.message}
        />

        <Label>Senha:</Label>
        <Input
          {...register("password")}
          type="password"
          error={errors.password?.message}
        />
        <Button onClick={() => handleRegister} type="submit">
          Registrar
        </Button>
      </form>
    </>
  );
};
