import { postData } from "@/api-fetchers/client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";

const defaultAuthContext: any = {
  user: null,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext(defaultAuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggegIn] = useState(false);

  const login = (userDetails: any) => {
    setUser(userDetails);
    setIsLoggegIn(true);
    localStorage.setItem("user", JSON.stringify(userDetails));
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
  };

  const logout = () => {
    setUser(null);
    setIsLoggegIn(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

      if (storedUser && JSON.parse(storedIsLoggedIn || "false")) {
        setUser(JSON.parse(storedUser));
        setIsLoggegIn(true);
      } else {
        setUser(null);
        setIsLoggegIn(false);
      }
    }
  }, []);

  const navbarItems = React.useMemo(() => {
    const items = [
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

    if (isLoggedIn && user) {
      items.push({
        title: "Logout",
        icon: <IoMdLogOut size={28} />,
        url: "#",
      });
    } else {
      items.push({
        title: "Login",
        icon: <IoMdLogIn size={28} />,
        url: "#",
      });
    }

    return items;
  }, [isLoggedIn, user]);

  const value = {
    user,
    login,
    logout,
    setUser,
    isLoggedIn,
    setIsLoggegIn,
    navbarItems,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};

export default AuthContextProvider;
