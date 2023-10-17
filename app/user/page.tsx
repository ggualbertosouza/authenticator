"use client";

import { ProfileCard } from "@/components/profile/ProfileCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function User() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/");
  }

  return(
    <>
      <ProfileCard />
      
    </>
  )

}
