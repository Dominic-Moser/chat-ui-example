// import Image from "next/image";
import getReponse from "./api/chat/getResponse";
import Chat from "./components/Chat";

export default async function Home() {
  let doit = await getReponse("Hello, I am a human. What are you?");

  return (
    <div className="w-full h-[100vh] text-3xl bg-slate-400 text-center flex items-center justify-center flex-row">
      <div className="">
        /../
        <Chat />
        /../
      </div>
    </div>
  );
}
