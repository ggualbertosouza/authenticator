"use client";
import { LoginButton } from "@/components/Button/Login";
import { useSession } from "next-auth/react";

export const Profile = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <section className="flex items-center justify-center gap-2">
        <p>{session.user?.name}</p>
        <div className="rounded-full overflow-hidden">
          <img src={session.user?.image} alt="" width={30} height={30} />
        </div>
      </section>
    );
  }
  return (
    <section>
        <button>
            login
        </button>
    </section>
  );
};
