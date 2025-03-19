import React from "react";
import { Events, Hero, Music, About } from "../router";
import { HeroVideo } from "../router";

export const Home = () => {
  return (
    <div>
      {/* About Section */}
      <div className="w-full bg-gradient-to-b from-white to-header">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <About />
        </div>
      </div>

      {/* HeroVideo Section */}
      <div className="w-full bg-gradient-to-b from-darkergrey to-header">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <HeroVideo />
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-white to-header">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <Hero />
        </div>
      </div>

      {/* Events Section */}
      <div className="w-full bg-gradient-to-b from-header to-white">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <Events />
        </div>
      </div>
    </div>
  );
};
