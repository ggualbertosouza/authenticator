import { schema, schemaProps } from "@/components/Forms/RegisterForm/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useRegister = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
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
  const handleRegister = async (data: schemaProps) => {
    const request = await fetch('/api/auth',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const response = await request.json()
    console.log('USER register form', response)

    if(!request.ok){
      console.log('Erro no registro!')
    }
  };

  return {
    register,
    watch,
    handleSubmit,
    errors,
    isSubmitting,
    handleRegister,
  };
};
