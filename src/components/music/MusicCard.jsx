import React, { useEffect } from "react";

const SoundCloudWidget = ({ playlistUrl }) => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://w.soundcloud.com/player/api.js";
      script.async = true;
      script.onload = () => initializeWidget();
      document.body.appendChild(script);
    };

    const initializeWidget = () => {
      const iframe = document.getElementById("soundcloud-player");
      const widget = window.SC.Widget(iframe);

      widget.bind(window.SC.Widget.Events.READY, () => {
        console.log("Player is ready");
      });

      widget.bind(window.SC.Widget.Events.PLAY, () => {
        console.log("Track is playing");
      });

      widget.bind(window.SC.Widget.Events.PAUSE, () => {
        console.log("Track is paused");
      });
    };

    if (!window.SC) {
      loadScript();
    } else {
      initializeWidget();
    }
  }, [playlistUrl]);

  return (
    <section className="soundcloud flex flex-col justify-center items-center mt-[7vh]">
      <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-600 mb-6">
        Artists Who Have Featured in a Green House Project Session
      </h2>
      <div className="w-full lg:w-3/4 mx-auto">
        <iframe
          id="soundcloud-player"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
            playlistUrl
          )}&color=%23ff5500&auto_play=false`}
          className="w-full h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96"
        ></iframe>
      </div>
    </section>
  );
};

export const MusicCard = () => {
  const playlistUrl =
    "https://soundcloud.com/avcgulu/sets/green-house-fav-tracks"; // Replace with the actual playlist URL

  return (
    <div>
      <SoundCloudWidget playlistUrl={playlistUrl} />
    </div>
  );
};
