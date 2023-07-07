"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const { status, data } = useSession();
  const handlerLoginClick = () => signIn();
  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };
  const handlerMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <div className="container mx-auto p-4 py-0 h-[93px] flex justify-between items-center">
      <Link href="/" className="flex gap-2">
        <Image height={32} width={32} src="/logoIcon.png" alt="FSW Icon" />
        <h1 className="text-primary text-2xl">NextTrip</h1>
      </Link>
      {status === "unauthenticated" && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={handlerLoginClick}
        >
          Login
        </button>
      )}
      {status === "authenticated" && data.user && (
        <div className="flex items-center gap-3 border-grayLighter border border-solid p-2 px-3 rounded-full relative">
          <AiOutlineMenu
            size={16}
            onClick={handlerMenuClick}
            className="cursor-pointer"
          />
          <Image
            height={35}
            width={35}
            src={data.user.image!}
            alt={data.user.name!}
            className="rounded-full shadow-md"
          />

          {menuIsOpen && (
            <div className=" z-50 absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <button
                className="text-primary text-sm font-semibold"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
