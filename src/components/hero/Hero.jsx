import React from "react";
import { hero1 } from "../assets/data/data";

export const Hero = () => {
  console.log(hero1);
  return (
    <>
      <section className="hero">
        <div className="w-full h-auto md:h-[92vh] md:flex md:justify-between">
          <div className="w-full h-full md:w-1/2">
            {hero1.map((item, index) => (
              <div className="box relative h-[92vh] sm:mt-7 w-full" key={index}>
                <img
                  src={item.cover}
                  alt="cover"
                  className="w-full  h-full object-contain"
                />
                <div className="text absolute top-0 left-0 text-black p-5">
                  <h3 className="text-xl pl-7 font-bold">{item.name}</h3>
                  <span>{item.tag}</span>
                </div>
                <div className="overlay icon absolute top-1/2 lef-[40%] text-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
