"use client";

import { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { UploadButton } from "@/uploadthing.config";

const FormRegister = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
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

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage({
          type: "error",
          text: data.error || "Erro ao registrar usuário.",
        });
      } else {
        await signIn("credentials", {
          redirect: false,
          email: form.email,
          password: form.password,
        });

        router.push("/dashboard");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      setMessage({ type: "error", text: "Erro inesperado no servidor." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-sm border-0 shadow-2xl bg-black">
      <CardHeader>
        <CardTitle className="text-center text-3xl mb-2 font-extrabold text-white">
          Faça seu Registro
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center text-white ">
              <UploadButton
                className="bg-zinc-700 text-center text-xs rounded-full w-[100] h-[100] p-2.5 "
                endpoint="avatarUploader"
                onClientUploadComplete={(res) => {
                  if (res && res[0]) {
                    setForm({ ...form, image: res[0].url });
                  }
                }}
                onUploadError={(error) => {
                  alert(`Erro no upload: ${error.message}`);
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-white">
                Nome
              </Label>
              <Input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Seu nome"
                required
                className="bg-white border-0"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="m@example.com"
                required
                className="bg-white border-0"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password" className="text-white">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                value={form.password}
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

          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-zinc-200 mt-6"
            disabled={loading}
          >
            {loading ? "Registrando..." : "Registrar"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormRegister;
