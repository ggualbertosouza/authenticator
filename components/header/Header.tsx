"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Header() {
  const { setTheme } = useTheme();

  return (
    <>
      <Button onClick={() => setTheme("light")}>dark mode</Button>
    </>
  );
}
