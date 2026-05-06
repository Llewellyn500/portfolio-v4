import React from "react";
import BackgroundVideo from "./BackgroundVideo.tsx";

const ContactBackground: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <BackgroundVideo
        className="h-full w-full object-cover"
        mp4Src="/contact-vid.mp4"
        webmSrc="/contact-vid.webm"
      />
      <div className="absolute inset-0 h-full w-full bg-[#8a2be2] opacity-90 mix-blend-hue" />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-bg-dark to-transparent" />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-bg-dark to-transparent" />
    </div>
  );
};

export default ContactBackground;
