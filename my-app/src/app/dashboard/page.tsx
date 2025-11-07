import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <main className="w-full">
      <nav className=" p-4 bg-black shadow-xl">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Menu className="text-black " />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-black text-white w-full" side="left">
            <SheetHeader>
              <div className="flex justify-between items-center">
                <div>
                  <SheetTitle className="text-white">Menu</SheetTitle>
                  <SheetDescription className="text-white">
                    Bem-vindo {session.user?.name}
                  </SheetDescription>
                </div>
              </div>
            </SheetHeader>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center mb-4">
                {session.user?.image && (
                  <Image
                    src={session.user?.image}
                    alt={session.user?.name ?? "Profile"}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                )}
                <p className="ml-2 text-sm text-white">{session.user?.name}</p>
              </div>

              <Link
                href="/api/auth/signout"
                className="w-full flex items-center justify-center bg-white text-black font-bold p-1 rounded-lg hover:bg-zinc-600 hover:text-white transition-all ease-in-out"
              >
                Sair
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </main>
  );
};

export default DashboardPage;
