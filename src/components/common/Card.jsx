import React from "react";

export const Card = ({ cover, tags }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center p-4">
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={cover}
          className="w-full h-full object-cover shadow-2xl shadow-black rounded-3xl"
        />
      </div>
      <div className="hidden md:flex absolute top-[420px] xl:top-[790px] items-center justify-center text-black p-1">
        <h3 className="text-md text-gray-500 font-semibold  bg-opacity-50 rounded-md p-2">
          {tags.toUpperCase()}
        </h3>
      </div>
    </div>
  );
};
