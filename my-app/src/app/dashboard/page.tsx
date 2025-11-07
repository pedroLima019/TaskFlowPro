import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
    return null;
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-4">
        Bem-vindo, {session.user?.name}!
      </h1>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          alt={session.user.name ?? "Profile"}
          width={80}
          height={80}
          className="rounded-full mb-4"
        ></Image>
      )}
      <p className="text-gray-700 mb-6">
        Email: {session.user?.email ?? "sem email"}
      </p>
      <Link
        href="/api/auth/signout"
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        Sair
      </Link>
    </div>
  );
};

export default DashboardPage;
