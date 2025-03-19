import React from "react";
import { hero2, heroVideo1 } from "../assets/data/data";
import { Card } from "../common/Card.jsx";
import { VideoCard } from "../common/VideoCard.jsx";

export const HeroVideo = () => {
  return (
    <section
      // {left photo}
      className="hero-video  mt-10 flex justify-center items-center flex-wrap sm:flex-nowrap"
      style={{ height: "calc(100vh - var(--header-height))" }}
    >
      <div className="w-[40%] justify-center ml-2.5 hidden lg:flex">
        {hero2.slice(0, 1).map((item, index) => (
          <div className="box card hero " key={index}>
            <Card cover={item.cover} tags={item.tags} />
          </div>
        ))}
      </div>

      {/* {video}  */}
      <div className="py-3 flex items-center rounded-3xl justify-center">
        {heroVideo1.map((item, index) => (
          <div key={index}>
            <VideoCard cover={item.cover} />
          </div>
        ))}
      </div>

      {/* {right photo} */}
      <div className="w-[40%] justify-center mr-2.5 hidden lg:flex">
        {hero2.slice(1, 2).map(
          (
            item,
            index // Display the first image on the left
          ) => (
            <div className="box card hero " key={index}>
              <Card
                cover={item.cover}
                tags={item.tags}
                linkText={item.linkText}
                linkUrl={item.linkUrl}
                tagsSuffix={item.tagsSuffix}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};
