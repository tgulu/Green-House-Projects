import React from "react";
import { hero1, heroVideoEvents } from "../assets/data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { MusicCard } from "../music/MusicCard";

export const HeroEvents = () => {
  return (
    <>
      <section className="hero">
        {/* Title */}
        <div className="w-full text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-600">
            Past Green Room Event
          </h2>
        </div>
        <div className="w-full  flex items-center justify-center h-auto lg:h-full">
          <div className="w-10/12 lg:m-0 h-10/12 lg:h-full">
            {heroVideoEvents.map((item, index) => (
              <div
                className=" relative lg:h-[92vh] w-full flex justify-center items-center"
                key={index}
              >
                <video
                  src={item.cover}
                  className="w-full  object-fill"
                  controls
                />
                <div className="text absolute top-10 left-0 text-white  ">
                  <h3 className="text-xl pl-7 font-bold hidden md:block">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <MusicCard />
      </section>
    </>
  );
};
