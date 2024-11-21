import React from "react";
import { useRouter } from "next/router";

type Props = {
  items: { title: string; icon?: React.JSX.Element; url?: string }[];
};

const Navbar = ({ items }: Props) => {
  const router = useRouter();

  return (
    <>
      {items.map((item, index) => (
        <div
          className="flex p-3 gap-2 justify-center items-center font-bold "
          key={index}
          onClick={() => {
            router?.push(item.url || "/");
          }}
        >
          {item.icon && <div>{item.icon}</div>}
          <p className="text-lg ">{item.title}</p>
        </div>
      ))}
    </>
  );
};

export default Navbar;
