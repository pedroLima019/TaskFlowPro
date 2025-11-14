import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "./Navbar";
import SidebarNav from "./SidebarNav";

const LayoutNavigation = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const user = {
    name: session.user?.name ?? "Usuário",
    email: session.user?.email ?? "",
    image: session.user?.image ?? "",
  };

  return (
    <>
      <div className="lg:hidden">
        <Navbar user={user.name} />
      </div>

      <div className="hidden lg:flex">
        <SidebarNav user={user.name} />
      </div>
    </>
  );
};

export default LayoutNavigation;
