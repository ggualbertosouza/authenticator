"use client";
import { Profile } from "@/components/profile/Profile";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const { setTheme } = useTheme();

  return (
    <section className="flex items-center justify-between">
      <h2 className="text-xl text-primary">LinksTREE</h2>
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-md hover:text-secondary">
            Home
          </Link>
          <Link href="/signin" className="text-md hover:text-secondary">
            REgister
          </Link>
          <Link href="/login" className="text-md hover:text-secondary">
            Login
          </Link>
        </div>
        <Profile />
        <Button onClick={() => setTheme("dark")} variant={"default"}>
          dark mode
        </Button>
      </div>
    </section>
  );
}
