"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export const Profile = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <section className="flex items-center justify-center gap-2">
        <div className="rounded-full overflow-hidden">
          <img src={session.user?.image} alt="" width={30} height={30} />
        </div>
        <Button
          variant="secondary"
          onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
        >
          SingOut
        </Button>
      </section>
    );
  }
  return (
    <section>
      <Button onClick={() => signIn()}>login</Button>
    </section>
  );
};
