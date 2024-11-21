import React from "react";
import paru from "../photos/paru.jpg";
import SocialLinks from "./SocialLinks";

const Profile = () => {
  return (
    <>
     <div className="flex gap-4 justify-evenly items-center flex-col sm:flex-row ">
      <div className="duration-500 ease-in-out  hover:scale-120 flex-1">
        <img
          src={paru.src}
          alt="paruuu"
          className="rounded-[50%] h-[400px]"
        />
      </div>

      <div className="flex flex-col gap-4 flex-1 sm:items-center lg:items-start ">
        <p className="text-5xl text-gray-700">Md. Parwez</p>
        <p className="text-2xl text-gray-500  "> ADVOCATE ( Patna High court ) </p>
      </div>

      <section className="flex flex-col" >
          <SocialLinks />
      </section>
    </div>
    </>
   
  );
};

export default Profile;
