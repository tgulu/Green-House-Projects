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
      <section
        className="hero bg-header flex items-center"
        style={{ height: "calc(100vh - var(--header-height))" }}
      >
        <div className="w-full h-auto md:h-[92vh]  flex items-center justify-center">
          <div className="w-[50%] h-[full] md:w-1/2 ">
            <Slider {...setting}>
              {hero1.map((item, index) => (
                <div className="box relative h-[90vh]  w-full" key={index}>
                  <img
                    src={item.cover}
                    alt="cover"
                    className="w-full h-full  object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
