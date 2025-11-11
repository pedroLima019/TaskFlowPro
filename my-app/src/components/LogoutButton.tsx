"use client";

import { Loader2, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LogoutButton = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await signOut({ redirect: false });
    router.push("/login");
  };
  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="bg-black p-1.5 flex items-center rounded-full mr-1 hover:bg-red-600 hover:text-white transition-all ease-in-out "
    >
      {loading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <LogOut className="w-[20] h-[20]" />
      )}
    </button>
  );
};

export default LogoutButton;
