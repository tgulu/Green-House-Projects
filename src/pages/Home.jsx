import React from "react";
import { Events, Posters, Music, About, Footer } from "../router";
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

      {/* Poster Section */}
      <div className="w-full bg-gradient-to-b from-white to-header">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <Posters />
        </div>
      </div>

      {/* Events Section */}
      <div className="w-full bg-gradient-to-b from-white to-header">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <Events />
        </div>
      </div>
      {/* Footer Section */}
      <div className="w-full bg-header">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};
