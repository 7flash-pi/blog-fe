"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoginModal from "./LoginModal";
import { useAuthContext } from "@/context/AuthContext";
import { IoMdLogIn } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";

type Props = {
  items: { title: string; icon?: React.JSX.Element; url?: string }[];
  setopenMenu: (isopen: boolean) => void;
};

const Navbar = ({ items, setopenMenu }: Props) => {
  const router = useRouter();
  const {  logout } = useAuthContext();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const handleNavClick = (item: {
    title: string;
    icon?: React.JSX.Element;
    url?: string;
  }) => {
    if (item?.url && item?.title !== "Login") {
      router.push(item?.url);
    }
    if (item.title === "Login") {
      setIsLoginModalOpen(true);
      setopenMenu(false);
    }
    if( item.title === 'Logout'){
      logout();
    }
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

 

  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex p-3 gap-2 justify-center items-center font-bold cursor-pointer"
          onClick={() => handleNavClick(item)}
        >
          {item.icon && <div>{item.icon}</div>}
          <p className="text-lg">{item.title}</p>
        </div>
      ))}

      <LoginModal isOpen={isLoginModalOpen} setisOpen={setIsLoginModalOpen} />
    </>
  );
};

export default Navbar;
