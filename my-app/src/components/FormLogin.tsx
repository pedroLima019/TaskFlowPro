"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Image from "next/image";

const FormLogin = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    if (res?.error) {
      setMessage({ type: "error", text: "Email ou senha inválidos." });
    } else {
      setMessage({ type: "success", text: "Login realizado com sucesso!" });
      router.push("/dashboard"); // redireciona ao dashboard
    }

    setLoading(false);
  };

  return (
    <Card className="w-full max-w-sm border-0 shadow-2xl bg-black">
      <CardHeader>
        <CardTitle className="text-center text-3xl mb-2 font-extrabold text-white">
          Faça seu Login
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <div className="grid gap-3">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email ?? ""}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="m@example.com"
                required
                className="bg-white border-0"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password" className="text-white">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                value={form.password ?? ""}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="Digite sua senha"
                required
                className="bg-white border-0"
              />
            </div>
          </div>

          {message && (
            <p
              className={`mt-4 text-center text-sm ${
                message.type === "error" ? "text-red-400" : "text-green-400"
              }`}
            >
              {message.text}
            </p>
          )}

          <div className="flex items-center justify-between py-1.5">
            <a
              href="#"
              className=" text-xs underline-offset-4 hover:underline hover:text-blue-500 mt-2 text-white font-extralight"
            >
              Esqueceu sua senha?
            </a>
            <a
              href="/register"
              className=" text-xs underline-offset-4 hover:underline hover:text-blue-500 mt-2 text-white font-extralight"
            >
              Não possui uma conta ?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-zinc-200 mt-2 mb-2.5"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
          <Button
            className="w-full bg-white text-black hover:bg-zinc-200 flex items-center justify-center "
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            <Image src="/Google.png" alt="Logo google" width={20} height={20} />
            Entrar com o Google
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormLogin;
