import { schema, schemaProps } from "@/components/Forms/RegisterForm/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useRegister = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaProps>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const userData = watch("email");

  // Função responsável por mandar os dados de cadastro par ao back end
  const handleRegister = () => {
    alert(userData)
  };

  return {
    register,
    watch,
    handleSubmit,
    errors,
    handleRegister,
  };
};
