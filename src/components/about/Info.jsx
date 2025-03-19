import { about } from "../assets/data/data";
import React from "react";

export const Info = () => {
  return (
    <section className="about-section h-screen flex justify-center items-center flex-wrap sm:flex-nowrap mt-14 md:mt-20 xl:mt-0">
      <div className="w-full flex justify-center items-center overflow-hidden xl:mt-0 mt-1 absolute sm:relative top-14 sm:top-0">
        <div className="flex flex-col md:flex-row w-full h-full">
          {/* Container for the responsive image section */}
          <div className="w-full md:w-1/2 h-full relative mx-auto flex justify-center items-center">
            {about.map((item, index) => (
              <div
                className="box relative w-full h-full flex justify-center items-center"
                key={index}
              >
                {/* Responsive image scaling for various screen sizes */}
                <img
                  src={item.cover}
                  alt="Cover Art"
                  className="w-[58%] h-auto sm:w-[70%] md:w-[90%] lg:w-[75%] xl:w-[95%] 2xl:w-[70%] shadow-2xl shadow-black object-cover"
                />
              </div>
            ))}
          </div>

          {/* Text content container with enhanced padding and larger font sizes for readability */}
          <div className="mt-2 md:mt-0 xl:p-12 p-6 w-full 2xl:w-[60%] 2xl:mr-60 mr-0 sm:w-[85%] h-full flex flex-col justify-center">
            <div className="text-xl lg:text-2xl xl:text-4xl font-bold tracking-wide text-indigo-500 uppercase text-center">
              Green House Projects
            </div>

            <p className="mt-2 text-gray-600 text-base lg:text-xl xl:text-4xl">
              Greenhouse Projects is a platform dedicated to nurturing
              Brighton’s vibrant music scene, providing a space for R&B singers,
              rappers, DJs, and other talented young musicians to grow and
              connect. Started by Cash Green, the project's mission is to
              connect the Brighton scene with the rest of the world.
            </p>

            <p className="mt-4 text-gray-600 text-base lg:text-xl xl:text-4xl">
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
