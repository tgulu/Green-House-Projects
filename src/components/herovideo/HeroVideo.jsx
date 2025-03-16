import React from "react";
import { hero2, heroVideo1 } from "../assets/data/data";

export const HeroVideo = () => {
  return (
    <section
      className="hero-video mt-10 bg-blue-950 flex justify-items-center"
      style={{ height: "calc(100vh - var(--header-height))" }}
    >
      <div className="w-[50%] h-[50%] flex items-start justify-center p-0">
        {hero2.map((item, index) => (
          <div
            className="relative w-full h-full flex justify-center items-center"
            key={index}
          >
            <img src={item.cover} className="w-full h-full object-cover" />
            <div className="text absolute top-0 left-0 text-white p-5"></div>
          </div>
        ))}
      </div>

      <div className="w-full h-full flex items-center justify-center p-0">
        {heroVideo1.map((item, index) => (
          <div
            className="relative w-full h-full flex justify-center items-center"
            key={index}
          >
            <video
              src={item.cover}
              className="w-full h-full object-fit"
              muted
            />
            <div className="text absolute top-0 left-0 text-white p-5">
              <h3 className="text-xl pl-7 font-bold hidden md:block">
                {item.name}
              </h3>
              <span>{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
