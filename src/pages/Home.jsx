import React from "react";
import { Events, Hero } from "../router";
import { HeroVideo } from "../router";
import Posters from "../components/hero/Posters";

export const Home = () => {
  return (
    <div>
      <HeroVideo />
      <Hero />
      <Events />
    </div>
  );
};
