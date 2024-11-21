import React from "react";
import paru from "../photos/paru.jpg";
import SocialLinks from "./SocialLinks";

const Profile = () => {
  return (
    <>
      <div className="flex gap-4 justify-evenly items-center flex-col sm:flex-row ">
        <div className="duration-500 ease-in-out flex-1">
          <img
            src={paru.src}
            alt="paruuu"
            className="rounded-[50%] "
          />
        </div>

        <div className="flex flex-col gap-4 flex-1 sm:items-center lg:items-start">
          <p className="text-5xl text-black">Md. Parwez</p>
          <p className="text-2xl text-black  ">
            {" "}
            ADVOCATE ( Patna High court ){" "}
          </p>
        </div>

        <section className="flex flex-col">
          <SocialLinks />
        </section>
      </div>
    </>
  );
};

export default Profile;
