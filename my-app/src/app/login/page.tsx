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
    <main className="w-full flex flex-col items-center justify-center h-dvh bg-blue-700 p-4">
      <div className="md:w-[500px] flex justify-center">
        <h1 className="text-white font-bold text-4xl text-center mb-10 md:text-5xl md:leading-14">
          Seja Bem-vindo ao TaskFlow Pro
        </h1>
      </div>
      <FormLogin />
    </main>
  );
};

export default LoginPage;
