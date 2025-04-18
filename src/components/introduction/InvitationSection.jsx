import React from "react";
import { artistImg, tikTokVideo } from "../assets/data/data.js";
import { ImageCard } from "../common/ImageCard.jsx";
import { VideoCard } from "../common/VideoCard.jsx";

export const InvitationSection = () => {
  return (
    <section
      // {left photo}
      className="hero-video flex justify-center items-center flex-wrap sm:flex-nowrap"
      style={{ height: "calc(100vh - var(--header-height))" }}
    >
      <div className="w-[40%] justify-center ml-2.5 hidden lg:flex">
        {artistImg.slice(0, 1).map((item, index) => (
          <div
            className="box card hero transition-transform duration-1000 ease-in-out"
            key={index}
          >
            <ImageCard cover={item.cover} tags={item.tags} />
          </div>
        ))}
      </div>

      {/* {video}  */}
      <div className="py-3 flex items-center rounded-3xl justify-center mb-2">
        {tikTokVideo.map((item, index) => (
          <div key={index}>
            <VideoCard cover={item.cover} />
          </div>
        ))}
      </div>

      {/* {right photo} */}
      <div className="w-[38%] 2xl:w-[40%] justify-center mr-2.5 hidden lg:flex">
        {artistImg.slice(1, 2).map((item, index) => (
          <div
            className="box card hero transition-transform duration-1000 ease-in-out"
            key={index}
          >
            {/* add link to users instagram */}
            <ImageCard
              cover={item.cover}
              tags={item.tags}
              linkText={item.linkText}
              linkUrl={item.linkUrl}
              tagsSuffix={item.tagsSuffix}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
