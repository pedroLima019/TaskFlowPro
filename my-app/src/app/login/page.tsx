"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import FormLogin from "@/components/FormLogin";

const LoginPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <main className="w-full flex flex-col items-center justify-center h-dvh bg-black p-4">
      <FormLogin />
    </main>
  );
};

export default LoginPage;
