"use client";
import React from "react";
import logo from "../../public/logo.png";
import profileIcon from "../../public/profileIcon.png";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Dropdown from "./navbar/Dropdown";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();
  return (
    <nav
      aria-label="Navigation principale"
      className="flex w-full h-16 md:h-20 bg-[#fcf8f1] shadow-md items-center"
      style={{ position: "fixed", zIndex: 10 }}
    >
      <div className="flex mx-4 md:mx-8 w-full md:justify-between justify-center items-center">
        {/* Logo ou élément de gauche */}
        <div
          className="hidden md:block flex-none rounded-full py-2 px-4 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src={logo}
            width={80}
            height={80}
            alt="logo"
            className="w-auto h-auto"
          />
        </div>

        {/* Titre */}
        <div>
          <h1 className="text-center md:text-3xl text-xl font-bold">
            Apprendre le Mandarin
          </h1>
        </div>

        {/* Boutons d'icônes */}
        {isLogged ? (
          <div className="flex space-x-4 flex-none">
            <button
              aria-label="Profil"
              className="focus:outline-none hidden md:block"
              onClick={() => router.push("/profile")}
            >
              <Image
                src={profileIcon}
                width={50}
                height={40}
                alt="profil"
                style={{ width: "auto", height: "auto" }}
              />
            </button>
            <button
              aria-label="Se déconnecter"
              className="focus:outline-none hidden md:block"
              onClick={() => setIsLogged(false)}
            >
              <LogOut
                className="w-7 h-40 text-[#699dd8]"
                onClick={() => router.push("/")}
              />
            </button>
            <Dropdown isLogged={isLogged} setIsLogged={setIsLogged} />
          </div>
        ) : (
          <div
            className="hidden md:block flex-none"
            onClick={() => router.push("/inscription/login")}
          >
            <button
              aria-label="S'inscrire"
              className="text-white font-semibold py-2 px-4 rounded-3xl shadow-md bg-[#699dd8] focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setIsLogged(true)}
            >
              Connection
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
