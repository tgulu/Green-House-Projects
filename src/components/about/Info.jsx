import { about } from "../assets/data/data";
import React from "react";
import { Header } from "../header/Header";

export const Info = () => {
  return (
    <section
      className="about-section  h-[900px] md:h-full flex justify-center items-center flex-wrap sm:flex-nowrap mt-14 md:mt-20 xl:mt-0"
      // style={{ height: "calc(100vh - var(--header-height))" }}
    >
      <Header />
      <div className="w-full flex justify-center items-center overflow-hidden xl:mt-0 mt-5  ">
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="w-[80%] md:w-1/2 h-full relative mx-auto ">
            {about.map((item, index) => (
              <div className="box relative w-full h-full  " key={index}>
                <img
                  src={item.cover}
                  alt="Cover Art"
                  className="w-[100%] h-[80%] lg:w-[70%] ml-0 md:ml-32 shadow-2xl shadow-black object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-5  md:mt-0 p-8 w-[full] xl:w-[35%] xl:mr-60  md:w-[60%] h-full flex flex-col justify-center ">
            <div className="text-sm sm:text-xs lg:text-xl xl:text-8xl font-semibold tracking-wide text-indigo-500 uppercase">
              Green House Projects
            </div>

            <p className=" mt-2 text-gray-500 text-sm sm:text-xs lg:text-xl xl:text-2xl">
              Greenhouse Projects is a platform dedicated to nurturing
              Brighton’s vibrant music scene, providing a space for R&B singers,
              rappers, DJs, and other talented young musicians to grow and
              connect. Started by Cash Green, the project's mission is to
              connect the Brighton scene with the rest of the world.
            </p>

            <p className="mt-1  hidden lg:block text-gray-500 text-sm  sm:text-xslg:text-xl xl:text-2xl">
              Our events, including GREENHOUSE JAM, bring together artists and
              audiences in a space designed for expression, experimentation, and
              community. At the heart of Greenhouse Projects is a commitment to
              supporting grassroots artistry. Through curated live sessions,
              collaborations, and networking opportunities, we aim to uplift
              Brighton’s next generation of music innovators. Whether you’re
              performing, producing, or just here to vibe, Greenhouse Projects
              is where new sounds take root and flourish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
