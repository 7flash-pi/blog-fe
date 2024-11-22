import React, { useRef, useState } from "react";
import Navbar from "./NavItem";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import logo from "../photos/logo.jpg";
import { useRouter } from "next/router";
import { FaRegEdit } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

type Props = {
  navbarEnable?: boolean;
  padding?: boolean;
  children?: React.ReactNode;
  isSearchEnabled?: boolean;
};

const AppWrapper = ({
  navbarEnable,
  padding,
  children,
  isSearchEnabled,
}: Props) => {
  const [openMenu, setopenMenu] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef?.current?.focus();
    }
  };
  return (
    <>
      <div className="">
        {navbarEnable && (
          <>
            <div className="flex p-4 w-full justify-around item-center shadow-[4px_0_8px_rgba(0,0,0,0.1)]">
              <div
                className="h-16 flex justify-center items-center"
                onClick={() => {
                  router.push("/");
                }}
              >
                <Image src={logo} alt="logo" width={150} />
              </div>
              <div
                className={`flex gap-2 py-2 px-3 justify-around items-center  rounded-lg p-1  transition-all duration-500 ease-in-out hover:scale-110 `}
              >
                {isSearchEnabled && (
                  <>
                    <input
                      ref={inputRef}
                      placeholder="Search..."
                      className="p-2 focus:!outline-none  rounded-lg focus:border focus:border-black focus:rounded-lg"
                    />

                    <FiSearch size={24} className="cursor-pointer"  onClick={handleSearchClick}/>
                  </>
                )}
              </div>

              <div className="hidden lg:block lg:flex lg:gap-2">
                <Navbar items={NavbarItems} />
              </div>
              <div className="block flex items-center justify-center lg:hidden">
                <RxHamburgerMenu
                  size={30}
                  onClick={() => {
                    setopenMenu(true);
                  }}
                />
              </div>
              <div
                className={`fixed bottom-0 left-0 w-full h-full bg-white text-black p-4 transition-transform transform ${
                  openMenu ? "translate-x-0" : "-translate-x-full"
                } lg:hidden`}
              >
                {/* Navbar Items */}
                <div className="flex flex-col ">
                  <IoMdClose
                    size={24}
                    onClick={() => {
                      setopenMenu(false);
                    }}
                  />
                  <Navbar items={NavbarItems} />
                </div>
              </div>
            </div>
          </>
        )}

        <section className={` md:p-0  ${padding ? "lg:px-24" : "lg:p-0"}`}>
          {children}
        </section>
      </div>
    </>
  );
};

export default AppWrapper;

const NavbarItems = [
  {
    title: "Profile",
    icon: <CgProfile size={28} />,
    url: "/profile",
  },
  {
    title: "Write",
    icon: <FaRegEdit size={28} />,
    url: "/write-blog",
  },
];
