"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import { Menu } from "lucide-react";
import { linksNavigation } from "./LinksNavigation";
import { User } from "next-auth";

interface NavbarProps {
  user: User;
}

const Navbar = ({ user }: NavbarProps) => {
  return (
    <nav className="p-4 items-center flex justify-between shadow-lg rounded-xl  lg:hidden bg-black">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="bg-white hover:bg-zinc-800  w-8 h-8"
          >
            <Menu className="text-black " />
          </Button>
        </SheetTrigger>
        <SheetContent
          className=" bg-black text-white w-full flex items-start border-0 shadow-xl"
          side="left"
        >
          <SheetHeader>
            <div className="flex flex-col justify-between items-baseline">
              <SheetTitle>
                <Image
                  src="/logo.png"
                  alt="Logo TaskFlow"
                  width={35}
                  height={35}
                  className="h-8 w-8 rounded-full"
                ></Image>
              </SheetTitle>
            </div>
          </SheetHeader>
          <div className="flex w-full p-2 items-center ">
            <nav className="flex flex-col w-full justify-center">
              {linksNavigation.map((links) => {
                const IconComponent = links.icon;
                return (
                  <Link
                    key={links.href}
                    href={links.href}
                    className="flex items-center mb-5 hover:bg-white hover:text-black p-2 rounded-xl transition-all ease-in-out duration-300 t"
                  >
                    <IconComponent className="mr-3 h-5 w-5" />
                    {links.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center w-full justify-between mb-4 bg-white p-2 rounded-2xl">
              <div className="flex items-center ">
                {user?.image && (
                  <Image
                    src={user?.image}
                    alt={user?.name ?? "Profile"}
                    width={35}
                    height={35}
                    className="rounded-full "
                  />
                )}
                <p className="ml-2 text-xs text-black font-bold">
                  {user?.name}
                </p>
              </div>

              <LogoutButton />
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex items-center">
        <Image
          src="/TaskFlow.png"
          alt="Logo"
          width={40}
          height={40}
          className="mr-2  rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
