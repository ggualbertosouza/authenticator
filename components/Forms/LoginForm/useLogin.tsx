import { schema, schemaProps } from "@/components/Forms/RegisterForm/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<schemaProps>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const data = watch("username");

  const handleLogin = () => {
    signIn("credentials", { callbackUrl: "http://localhost:3000" });
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    handleLogin,
  };
};
