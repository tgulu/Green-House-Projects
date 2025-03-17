import React from "react";
import { hero1, heroVideoEvents } from "../assets/data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const HeroEvents = () => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-[35%] left-0 text-black cursor-pointer"
      >
        <MdKeyboardArrowLeft size={50} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-[35%] right-0 z-10 text-black cursor-pointer"
      >
        <MdKeyboardArrowRight size={50} />
      </div>
    );
  }

  return (
    <>
      <section
        className="hero mt-[7vh] xl:mt-0 bg-gradient-to-b from-white to-header "
        style={{ height: "calc(100vh - var(--header-height))" }}
      >
        <div className="w-full h-full flex items-center justify-center   ">
          <div className="w-10/12 lg:m-0 h-12/12 ">
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

          {/* {Image Grid section} */}
          {/* <div className="w-full h-full md:w-1/2 grid grid-cols-2 sm:grid-cols-1">
            {hero2.map((item, index) => (
              <div className="box relative" key={index}>
                <img
                  src={item.cover}
                  alt="cover"
                  className="w-full h-full object-contain"
                />
                <div className="text absolute top-0 left-0 text-black p-5">
                  <h3 className="text-xl pl-7 font-bold">{item.name}</h3>
                  <span className="text-gray-400">{item.tag}</span>
                </div>
                <div className="overlay icon absolute top-1/2 lef-[40%] text-white"></div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};
