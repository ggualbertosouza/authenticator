"use client";

import { Links } from "@/components/links/Links";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function User() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/");
  }

  return(
      <Card>
        <CardHeader>
        <ProfileCard />
        <CardDescription>Adicione as suas mídias sociais aqui!</CardDescription>
        </CardHeader>
        <CardContent >
        <Links />
        </CardContent>
        <CardFooter>

        </CardFooter>
      </Card>
  )

}
