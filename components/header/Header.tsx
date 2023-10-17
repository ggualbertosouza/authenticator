"use client";
import ThemeButton from "@/components/Button/themeButton";
import { Profile } from "@/components/profile/Profile";
import { ProfileButton } from "@/components/profile/ProfileButton";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: status } = useSession();

  return (
    <section className="flex items-center justify-between w-full">
      <h2 className="text-xl text-primary">LinksTREE</h2>
      <div className="flex items-center gap-3">
       {status && <Link href="/" className="text-md hover:text-secondary">
          Home
        </Link>}
        <ProfileButton />
        <Profile />
        <ThemeButton />
      </div>
    </section>
  );
}
