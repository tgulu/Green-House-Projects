import React from "react";
import { hero2, heroVideo1 } from "../assets/data/data";

export const HeroVideo = () => {
  return (
    <section
      // {left photo}
      className="hero-video mt-10  flex justify-evenly items-center felx-wrap "
      style={{ height: "calc(100vh - var(--header-height))" }}
    >
      <div className="w-[45%] h-[60%] justify-center p-0 hidden lg:flex">
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
                className="w-full h-full object-contain rounded-md"
              />
            </div>
          )
        )}
      </div>

      {/* {video}  */}
      <div className="w-full lg:w-1/2 h-full p-2 flex items-center justify-center p-0">
        {heroVideo1.map((item, index) => (
          <div
            className="relative w-full h-full flex justify-center items-center"
            key={index}
          >
            <video
              src={item.cover}
              className="w-full h-full object-fit "
              muted
              loop
              autoPlay
            />
          </div>
        ))}
      </div>

      {/* {right photo} */}
      <div className="w-[45%] h-[60%] justify-center p-0 hidden lg:flex">
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
                className="w-full h-full object-contain rounded-md"
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};
