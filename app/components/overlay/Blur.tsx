import React, { useState, useEffect } from "react";

const Blur = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;
    const bottomThreshold = bodyHeight - windowHeight - 25;

    const opacity = scrollY >= bottomThreshold ? 0 : 1;
    setScrollOpacity(opacity);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 h-full w-full p-1 backdrop-blur-[8px] opacity-${scrollOpacity} overlay-mask`}
    />
  );
};

export default Blur;
