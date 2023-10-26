"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRegister } from "@/components/Forms/RegisterForm/useRegister";
import {Loader2} from 'lucide-react'

export const RegisterForm = () => {
  const { errors, register, handleSubmit, handleRegister, isSubmitting } = useRegister();
  return (
    <>
      <form onSubmit={handleSubmit(handleRegister)}>
        <Label>Usuário:</Label>
        <Input
          {...register("username")}
          type="text"
          disabled={isSubmitting}
          error={errors.username?.message}
        />

        <Label>Email:</Label>
        <Input
          {...register("email")}
          type="text"
          disabled={isSubmitting}
          error={errors.email?.message}
        />

        <Label>Senha:</Label>
        <Input
          {...register("password")}
          type="password"
          disabled={isSubmitting}
          error={errors.password?.message}
        />
        <Button variant={isSubmitting ? 'ghost' : 'default'} onClick={() => handleRegister} disabled={isSubmitting} type="submit">
          {isSubmitting && <span className="animate-spin mr-1"><Loader2 /></span>}
          Registrar
        </Button>
      </form>
    </>
  );
};
