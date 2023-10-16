"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type sessionProps = {
  children: ReactNode;
};

export default function Provider({ children }: sessionProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
