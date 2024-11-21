import React, { useState } from "react";
import Navbar from "./NavItem";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import logo from "../photos/logo.jpg";
import { useRouter } from "next/router";
import { FaRegEdit } from "react-icons/fa";

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
  const [openInput, setopenInput] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="">
        {navbarEnable && (
          <>
            <div className="flex p-4 w-full justify-around items-cente shadow-[4px_0_8px_rgba(0,0,0,0.1)]">
              <div
                className="h-16"
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
                      placeholder="Search..."
                      className="p-2 focus:!outline-none focus:border focus:border-black focus:rounded-lg"
                    />

                    <FiSearch
                      size={24}
                      className="cursor-pointer"
                      onClick={() => {
                        setopenInput(true);
                      }}
                      onMouseEnter={() => {
                        setopenInput(!openInput);
                      }}
                    />
                  </>
                )}
              </div>

              <div className="flex gap-2">
                <Navbar items={NavbarItems} />
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
