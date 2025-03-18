import { hero1 } from "../assets/data/data";

import React from "react";

export const Info = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-header to-white mt-10"
      style={{ height: "calc(100vh - var(--header-height))" }}
    >
      <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            {hero1.slice(1, 2).map((item, index) => (
              <div className="box relative h-[90vh]  w-full" key={index}>
                <img
                  src={item.cover}
                  alt="Cover Art"
                  class="h-48 w-full object-cover md:h-full md:w-48"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
