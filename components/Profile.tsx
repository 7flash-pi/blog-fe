import React from "react";
import paru from "../photos/paru.jpg";

const Profile = () => {
  return (
    <>
     <div className="flex flex justify-evenly items-center ">
      <div className="duration-500 ease-in-out  hover:scale-120 flex-1">
        <img
          src={paru.src}
          alt="paruuu"
          className="rounded-[50%] h-[400px]  "
        />
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <p className="text-5xl text-gray-700">Md. Parwez Raza</p>
        <p className="text-2xl text-gray-500"> ALL INDIA RANK 1 | UPSC 2025</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus inventore esse eaque molestiae autem. Unde hic ullam dolorum, explicabo tempora reiciendis accusantium. Molestiae impedit optio error, eum doloremque eligendi nobis cumque itaque doloribus recusandae odio dolorem iusto ullam distinctio dolore mollitia dolorum alias fuga! Animi molestiae ipsa nostrum fuga ducimus.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem hic, alias voluptates eaque eos inventore perferendis voluptas quaerat aliquid.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, delectus.
        </p>
      </div>
    </div>
    </>
   
  );
};

export default Profile;
