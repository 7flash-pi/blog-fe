import React from "react";
import SocialLinks from "./SocialLinks";
import { blogs } from "@/common/blogs";
import { useAuthContext } from "@/context/AuthContext";


const Profile = () => {
  const {user}=useAuthContext();
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row lg:flex-row gap-16 items-center lg:items-start justify-around">
        <div className="overflow-hidden rounded-full flex-1 max-w-[500px]">
          <img
            src={user?.userImageLink}
            alt="paruuu"
            className=" object-cover w-full h-full shadow-complex"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 flex-1 sm:items-center lg:items-start">
          <p className="text-5xl text-black">{user?.name}</p>
          <p className="text-2xl text-black">
            {user?.designation.toUpperCase()} 
          </p>
          <p className="text-md text-black">{user?.intro}</p>
        </div>
      </div>

      <section className="flex p-20 justify-center items-center ">
        <SocialLinks />
      </section>
    </div>
  );
};

export default Profile;
