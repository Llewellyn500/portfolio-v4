"use client";

import React, { useEffect, useRef, useState } from "react";

type BackgroundVideoProps = {
  className?: string;
  mp4Src: string;
  webmSrc: string;
};

const prefersMp4 = (): boolean => {
  const userAgent = navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);

  return isIOS || isSafari;
};

const supportsWebmAv1 = (): boolean => {
  const video = document.createElement("video");

  return video.canPlayType('video/webm; codecs="av01.0.08M.08"') !== "";
};

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  className = "",
  mp4Src,
  webmSrc,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useMp4First, setUseMp4First] = useState(true);

  useEffect(() => {
    setUseMp4First(prefersMp4() || !supportsWebmAv1());
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.load();

    const playPromise = video.play();

    playPromise.catch(() => {});
  }, [useMp4First]);

  const sources = useMp4First
    ? [
        { src: mp4Src, type: "video/mp4" },
        { src: webmSrc, type: "video/webm" },
      ]
    : [
        { src: webmSrc, type: 'video/webm; codecs="av01.0.08M.08"' },
        { src: mp4Src, type: "video/mp4" },
      ];

  return (
    <video
      ref={videoRef}
      key={useMp4First ? "mp4" : "webm"}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    >
      {sources.map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}
    </video>
  );
};

export default BackgroundVideo;
