import React from "react";
import { hero1, hero2, heroVideoEvents } from "../assets/data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const Hero = () => {
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
        className="absolute top-[50%] left-0 text-black cursor-pointer"
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
        className="absolute top-[50%] right-0 z-10 text-black cursor-pointer"
      >
        <MdKeyboardArrowRight size={50} />
      </div>
    );
  }

  return (
    <>
      <section className="hero">
        <div className="w-full h-auto md:h-[92vh] flex md:flex justify-center items-center ">
          <div className="w-full h-full md:w-1/2  ">
            <Slider {...setting}>
              {hero1.map((item, index) => (
                <div
                  className="box relative h-[92vh] sm:mt-7 w-full"
                  key={index}
                >
                  <img
                    src={item.cover}
                    alt="cover"
                    className="w-full  h-full object-contain"
                  />
                  <div className="text absolute top-0 left-0 text-black p-5">
                    {/* <h3 className="text-xl pl-7 font-bold">{item.name}</h3> */}
                    <span>{item.tag}</span>
                  </div>
                  <div className="overlay icon absolute top-1/2 lef-[40%] text-white"></div>
                </div>
              ))}
            </Slider>
          </div>
          {/* {Grid section} */}
          {/* <div className="w-full h-full md:w-1/2 grid grid-cols-2  sm:grid-cols-1">
            {hero2.map((item, index) => (
              <div className="box relative" key={index}>
                <img
                  src={item.cover}
                  alt="cover"
                  className="w-full  h-full object-contain"
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
