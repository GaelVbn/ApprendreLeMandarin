import React from "react";
import { LogOut, Menu } from "lucide-react";
import { useRouter } from "next/navigation";

const Dropdown = ({ isLogged, setIsLogged }: any) => {
  const router = useRouter();
  return (
    <div className="dropdown dropdown-end md:hidden pl-11  ">
      <div tabIndex={0} role="button">
        <Menu />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-[#fcf8f1] border-zinc-500 border-4 rounded-box z-[1] w-52 p-2 shadow mt-5 "
      >
        <li onClick={() => router.push("/profile")}>
          <a>Profile</a>
        </li>
        <hr className="border-2" />
        <li
          className="text-black"
          onClick={() => {
            setIsLogged(false);
            router.push("/");
          }}
        >
          <a>Déconnexion</a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
