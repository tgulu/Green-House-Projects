import React from "react";
import { Events, PostersSection, Music, About, Footer } from "../router";
import { InvitationSection } from "../router";

export const Home = () => {
  return (
    <div>
      {/* About Section */}
      <div className="w-full bg-gradient-to-b from-white to-header">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <About />
        </div>
      </div>

      {/* Invitation Section */}
      <div className="w-full bg-gradient-to-b from-darkergrey to-header">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <InvitationSection />
        </div>
      </div>

      {/* Poster Section */}
      <div className="w-full bg-gradient-to-b from-white to-header">
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <PostersSection />
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
