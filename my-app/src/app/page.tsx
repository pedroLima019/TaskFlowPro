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
    <main className="w-full flex flex-col items-center justify-center h-dvh bg-blue-700 p-4">
      <div className="md:w-[500px] flex justify-center">
        <h1 className="text-white font-bold text-4xl text-center mb-10 md:text-5xl md:leading-14">
          Seja Bem-vindo ao TaskFlow Pro
        </h1>
      </div>
      <FormLogin />
    </main>
  );
};

export default Home;
