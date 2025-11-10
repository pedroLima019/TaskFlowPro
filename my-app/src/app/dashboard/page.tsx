import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SidebarNav from "@/components/SidebarNav";
import Navbar from "@/components/Navbar";

const Dashboard = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex min-h-screen bg-zinc-50">
      {/* Sidebar — só aparece em telas grandes */}
      <aside className="hidden lg:flex">
        <SidebarNav user={session?.user} />
      </aside>

      <div className="container mx-auto p-4">
        <header className="lg:hidden sticky top-0 z-50 bg-white">
          <Navbar user={session?.user} />
        </header>

        {/* Área de conteúdo */}
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Dashboard;
