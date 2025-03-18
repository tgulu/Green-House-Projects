import React from "react";
import { Events, Hero, Music, About } from "../router";
import { HeroVideo } from "../router";

export const Home = () => {
  return (
    <div>
      <HeroVideo />
      <About />
      <Hero />
      <Events />
    </div>
  );
};
