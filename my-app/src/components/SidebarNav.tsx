"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { User } from "next-auth";
import { Menu, X } from "lucide-react";
import { linksNavigation } from "./LinksNavigation";
import LogoutButton from "./LogoutButton";

interface SidebarProps {
  user: User;
}

const SidebarNav = ({ user }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.aside
      animate={{ width: isOpen ? 300 : 80 }}
      className="h-screen bg-black text-white  flex-col justify-between shadow-2xl overflow-hidden hidden lg:flex "
    >
      <div>
        <div
          className={`flex items-center ${
            isOpen ? "justify-between px-4" : "justify-center"
          } py-4`}
        >
          {isOpen && (
            <div className="flex items-center gap-2">
              <Image
                src="/TaskFlow.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl font-bold"
              >
                TaskFlow
              </motion.span>
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-zinc-400 "
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav className="mt-6 flex flex-col gap-2 p-2 ">
          {linksNavigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center ${
                isOpen ? "justify-start px-4" : "justify-center"
              } py-3 rounded-xl hover:bg-white hover:text-black transition-all duration-200`}
            >
              <item.icon size={22} />
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="ml-4 text-sm font-medium"
                >
                  {item.label}
                </motion.span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 w-full">
        <div
          className={`mb-6 flex items-center  w-full p-2 bg-white rounded-full ${
            isOpen ? "gap-1 px-2" : "justify-center"
          }`}
        >
          <Image
            src={user?.image ?? "/default-avatar.png"}
            alt="Usuário"
            width={45}
            height={45}
            className="rounded-full   border-zinc-700"
          />
          {isOpen && (
            <div className="flex w-full justify-between items-center">
              <p className="text-sm font-bold text-black ml-2">{user?.name}</p>
              <LogoutButton />
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  );
};

export default SidebarNav;
