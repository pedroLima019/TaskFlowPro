import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "./LogoutButton";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <nav className=" flex items-center justify-between p-3  shadow-xl">
      <div className="flex items-center">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="mr-2  "
        />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="bg-black hover:bg-zinc-800">
            <Menu className="text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent className=" bg-white text-black w-full flex items-start border-0 shadow-xl">
          <SheetHeader>
            <div className="flex flex-col justify-between items-baseline">
              <SheetTitle>
                <Image
                  src="/Logo.png"
                  alt="Logo TaskFlow"
                  width={40}
                  height={40}
                ></Image>
              </SheetTitle>
            </div>
          </SheetHeader>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center w-full justify-between mb-4 bg-black p-2 rounded-2xl">
              <div className="flex items-center">
                {session.user?.image && (
                  <Image
                    src={session.user?.image}
                    alt={session.user?.name ?? "Profile"}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                )}
                <p className="ml-4 text-sm text-white font-medium">
                  {session.user?.name}
                </p>
              </div>

              <LogoutButton />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
