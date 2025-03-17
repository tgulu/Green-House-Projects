import React from "react";
import { hero2, heroVideo1 } from "../assets/data/data";

export const HeroVideo = () => {
  return (
    <section
      // {left photo}
      className="hero-video mt-10 flex justify-center items-center flex-nowrap"
      style={{ height: "calc(100vh - var(--header-height))" }}
    >
      <div className="w-[40%] justify-center mr-2.5 hidden lg:flex">
        {hero2.slice(0, 1).map(
          (
            item,
            index // Display the first image on the left
          ) => (
            <div
              className="relative w-full h-full flex ml-3.5   justify-center items-center"
              key={index}
            >
              <img
                src={item.cover}
                className="w-full h-full object-cover drop-shadow-2xl shadow-black rounded-3xl"
              />
              <div className="hidden md:flex  absolute left-14 bottom-[390px]   items-center justify-center  text-black p-1">
                <h3 className="">{item.tags.toUpperCase()}</h3>
              </div>
            </div>
          )
        )}
      </div>

      {/* {video}  */}
      <div className="w-full lg:w-[35%] h-full py-3 flex items-center justify-center">
        {heroVideo1.map((item, index) => (
          <div
            className="relative w-full h-full flex justify-center items-center"
            key={index}
          >
            <video
              src={item.cover}
              className="w-full h-full object-fit rounded-3xl"
              muted
              //   loop
              //   autoPlay
            />
          </div>
        ))}
      </div>

      {/* {right photo} */}
      <div className="w-[40%] justify-center ml-2.5 hidden lg:flex">
        {hero2.slice(1, 2).map(
          (
            item,
            index // Display the first image on the left
          ) => (
            <div
              className="relative w-full h-full flex mr-3.5 justify-center items-center"
              key={index}
            >
              <img
                src={item.cover}
                className="w-[100%] object-cover lg:object-contain rounded-3xl lg:rounded-4xl drop-shadow-2xl shadow-orange-700"
              />
              <div className="hidden md:flex absolute left-14 bottom-[390px]  items-center justify-center text-black p-1">
                <h3>{item.tags.toUpperCase()}</h3>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
