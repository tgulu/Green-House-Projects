import React from "react";
import { hero2, heroVideo1 } from "../assets/data/data";

export const HeroVideo = () => {
  return (
    <section
      // {left photo}
      className="hero-video mt-10 flex justify-center items-center flex-nowrap"
      style={{ height: "calc(100vh - var(--header-height))" }}
    >
      <div className="w-[45%] h-[60%] justify-center mr-3.5 hidden lg:flex">
        {hero2.slice(0, 1).map(
          (
            item,
            index // Display the first image on the left
          ) => (
            <div
              className="relative w-full h-full flex ml-3.5  justify-center items-center"
              key={index}
            >
              <img
                src={item.cover}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="text absolute inset-0 flex items-center justify-center  text-white p-5">
                <h3 className="text-black">{item.tags}</h3>
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
              loop
              autoPlay
            />
          </div>
        ))}
      </div>

      {/* {right photo} */}
      <div className="w-[45%] h-[60%] justify-center ml-3.5 hidden lg:flex">
        {hero2.slice(1, 2).map(
          (
            item,
            index // Display the first image on the left
          ) => (
            <div
              className="relative w-full h-full flex mr-3.5  justify-center items-center"
              key={index}
            >
              <img
                src={item.cover}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="text absolute top-90 left-30 text-white p-5">
                <h3 className="text-black">{item.tags}</h3>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
