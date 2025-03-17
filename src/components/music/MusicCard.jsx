import React, { useEffect } from "react";

const SoundCloudWidget = () => {
  useEffect(() => {
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
  }, []);
};

export const MusicCard = () => {
  return <></>;
};
