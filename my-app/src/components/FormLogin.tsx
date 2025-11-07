"use client";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const FormLogin = () => {
  return (
    <Card className="w-full max-w-sm border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="text-center text-3xl mb-2 font-extrabold text-blue-700">
          Faça seu Login
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-8 ">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>{" "}
          </div>
          <a
            href="#"
            className="ml-auto inline-block text-xs underline-offset-4 hover:underline mt-2 hover:text-blue-700 "
          >
            Esqueceu sua senha ?
          </a>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full bg-blue-700 hover:bg-black">
          Login
        </Button>
        <Button
          variant="outline"
          className="w-full hover:bg-black hover:text-white"
          onClick={() => signIn("google")}
        >
          Faça login com o Google
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FormLogin;
