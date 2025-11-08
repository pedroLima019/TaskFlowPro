import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import FormLogin from "@/components/FormLogin";

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <main className="w-full flex flex-col items-center justify-center h-dvh  p-4">
      <FormLogin />
    </main>
  );
};

export default Home;
