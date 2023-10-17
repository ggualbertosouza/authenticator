import { z } from "zod";

// Schema
export const schema = z.object({
    email: z.string().email(),
    password: z.string().min(4, "Senha incorreta").max(16, "Senha incorreta"),
  });
  
  // Typeof schema
  export type schemaProps = z.infer<typeof schema>;