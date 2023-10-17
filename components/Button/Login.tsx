import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
  <>
    <button onClick={() => signIn('credentials', {callbackUrl: 'http://localhost:3000/'})} >
      Login
    </button>
  </>;
};
