import { z } from "zod";

//Schema
export const schema = z.object({
    username: z
      .string()
      .min(3, { message: "Seu usuário precisa ter no mínimo 4 caracter." })
      .max(16, { message: "Seu usuário pode ter no máximo 16 caracteres." }),
    email: z.string().email().min(1, { message: "Email inválido" }),
    password: z
      .string()
      .min(8, { message: "Sua senha precisa ter no mínimo 8 caracteres." })
      .max(16, { message: "Sua senha pode ter no máximo 16 caracteres." }),
  });
  
  export type schemaProps = z.infer<typeof schema>;
