import React from "react";
import { heroVideo1 } from "../assets/data/data";

export const HeroVideo = () => {
  return (
    <section
      className="hero-video mt-0"
      style={{ height: "calc(100vh - var(--header-height))" }}
    >
      <div className="w-full h-full flex items-center justify-center p-0">
        {heroVideo1.map((item, index) => (
          <div
            className="relative w-full h-full flex justify-center items-center"
            key={index}
          >
            <video
              src={item.cover}
              className="w-full h-full object-fit"
              loop
              autoPlay
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
