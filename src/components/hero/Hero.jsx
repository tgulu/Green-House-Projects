import React from "react";
import { hero1 } from "../assets/data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <section className="hero">
        <div className="w-full h-auto md:h-[92vh] md:flex md:justify-between">
          <div className="w-full h-full md:w-1/2">
            {
              <Slider {...setting}>
                {hero1.map((item, index) => (
                  <div
                    className="box relative h-[92vh] sm:mt-7 w-full"
                    key={index}
                  >
                    <img
                      src={item.cover}
                      alt="cover"
                      className="w-full  h-full object-cover"
                    />
                    <div className="text absolute top-0 left-0 text-black p-5">
                      <h3 className="text-xl pl-7 font-bold">{item.name}</h3>
                      <span>{item.tag}</span>
                    </div>
                    <div className="overlay icon absolute top-1/2 lef-[40%] text-white"></div>
                  </div>
                ))}
              </Slider>
            }
          </div>
        </div>
      </section>
    </>
  );
};
