"use client";

import Image from "next/image";
import background from "../../public/background.jpg";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col w-full h-screen">
      <div className="flex w-full h-screen  ">
        <Image
          alt="background"
          src={background}
          placeholder="blur"
          quality={100}
          className="object-cover"
          style={{ width: "100vw", height: "100vh" }}
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center pb-56 gap-10">
          <h1 className="text-9xl font-bold text-zinc-800 ">辛苦了</h1>
          <h1 className="text-5xl font-bold text-zinc-800  text-center">
            Apprend Le Mandarin
          </h1>
          <button
            className="text-white text-center text-2xl font-semibold py-4 px-8 rounded-3xl shadow-md bg-[#699dd8] focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => {
              router.push("/inscription/register");
            }}
          >
            Inscrit toi !
          </button>
        </div>
      </div>
    </main>
  );
}
