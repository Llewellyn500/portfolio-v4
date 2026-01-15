import React from "react";

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <video
        className="h-full w-full object-cover"
        autoPlay={true}
        playsInline={true}
        loop
        muted
        preload="auto"
      >
        <source src="/hero-vid.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 h-full w-full bg-[#8a2be2] opacity-90 mix-blend-hue" />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-bg-dark to-transparent" />
    </div>
  );
};

export default HeroBackground;
