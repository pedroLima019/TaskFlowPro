import SidebarNav from "@/components/SidebarNav";
import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex">
      <SidebarNav user={session?.user} />

      <div className="container mx-auto p-3">
        <Navbar user={session?.user} />
        <main className="container mx-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
