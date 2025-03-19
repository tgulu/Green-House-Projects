import React from "react";

export const VideoCard = ({ cover }) => {
  return (
    <div className="py-1.5 mx-2 flex">
      <div className="relative  flex justify-center items-center ">
        <video
          src={cover}
          className=" h-[550px] sm:h-[600px]  xl:h-[900px]
          object-cover rounded-3xl shadow-2xs shadow-black"
          muted
          loop
          autoPlay
        />
      </div>
    </div>
  );
};

{
  /* {video}  */
}
