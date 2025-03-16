import React from "react";
import { Hero } from "../router";
import { HeroVideo } from "../router";
import Posters from "../components/hero/Posters";

export const Home = () => {
  return (
    <div>
      <HeroVideo />
      <Hero />
      <Posters />
    </div>
  );
};
