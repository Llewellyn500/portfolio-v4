import React from "react";
import BackgroundVideo from "./BackgroundVideo.tsx";

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <BackgroundVideo
        className="h-full w-full object-cover"
        mp4Src="/hero-vid.mp4"
        webmSrc="/hero-vid.webm"
      />
      <div className="absolute inset-0 h-full w-full bg-[#8a2be2] opacity-90 mix-blend-hue" />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-bg-dark to-transparent" />
    </div>
  );
};

export default HeroBackground;
