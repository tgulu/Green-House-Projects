import React from "react";

export const Card = ({ cover, tags }) => {
  return (
    <>
      <div className="relative w-full h-full flex justify-center items-center">
        <img
          src={cover}
          className="w-full h-full object-cover drop-shadow-2xl shadow-black rounded-3xl"
        />
      </div>
      <div className="hidden md:flex  absolute left-14 bottom-[390px] items-center justify-center text-black p-1">
        <h3 className="text-md text-gray-500 font-semibold">
          {tags.toUpperCase()}
        </h3>
      </div>
    </>
  );
};
