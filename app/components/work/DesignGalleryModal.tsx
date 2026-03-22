"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";
import { ProjectProps } from "./projectDetails";

type DesignGalleryModalProps = {
  design: ProjectProps | null;
  isOpen: boolean;
  onClose: () => void;
};

function designSlides(design: ProjectProps): string[] {
  const extra = design.designGallery?.filter(Boolean) ?? [];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const src of [design.image, ...extra]) {
    if (src && !seen.has(src)) {
      seen.add(src);
      out.push(src);
    }
  }
  return out;
}

export default function DesignGalleryModal({
  design,
  isOpen,
  onClose,
}: DesignGalleryModalProps) {
  const [index, setIndex] = useState(0);

  const slides = useMemo(
    () => (design ? designSlides(design) : []),
    [design],
  );

  useEffect(() => {
    setIndex(0);
  }, [design?.id, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOpen || slides.length <= 1) return;
      if (e.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + slides.length) % slides.length);
      }
      if (e.key === "ArrowRight") {
        setIndex((i) => (i + 1) % slides.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, slides.length]);

  if (!isOpen || !design || slides.length === 0) return null;

  const current = slides[index];

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-black/90"
        onClick={onClose}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClose();
        }}
        aria-label="Close modal"
      />

      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8">
        <div className="relative h-full w-full max-w-5xl overflow-y-auto rounded-2xl bg-[#1a1a1a] p-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#8a2be2]/50 hover:scrollbar-thumb-[#8a2be2]/80 md:p-8 lg:p-10">
          <button
            type="button"
            onClick={onClose}
            className="sticky left-full top-0 z-10 mb-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
            data-blobity-magnetic="false"
            data-no-blobity
          >
            <BsX size={28} />
          </button>

          <div className="relative mb-6 w-full overflow-hidden rounded-xl bg-gray-800">
            <div className="relative h-[75vh] max-h-[800px] min-h-[280px] w-full sm:min-h-[320px]">
              <Image
                key={current}
                src={current}
                alt={`${design.name} — ${index + 1} of ${slides.length}`}
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 896px"
                unoptimized
              />
              {slides.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIndex((i) => (i - 1 + slides.length) % slides.length);
                    }}
                    className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white ring-1 ring-white/20 transition hover:bg-[#8a2be2]/90 md:left-3 md:p-3"
                    aria-label="Previous"
                    data-blobity-magnetic="false"
                    data-no-blobity
                  >
                    <BsChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIndex((i) => (i + 1) % slides.length);
                    }}
                    className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white ring-1 ring-white/20 transition hover:bg-[#8a2be2]/90 md:right-3 md:p-3"
                    aria-label="Next"
                    data-blobity-magnetic="false"
                    data-no-blobity
                  >
                    <BsChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </>
              ) : null}
            </div>
          </div>

          {slides.length > 1 ? (
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Slide ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all md:h-2.5 ${
                    i === index
                      ? "w-8 bg-[#8a2be2]"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  data-blobity-magnetic="false"
                  data-no-blobity
                />
              ))}
              <span className="ml-2 text-sm text-gray-500">
                {index + 1} / {slides.length}
              </span>
            </div>
          ) : null}

          <div className="mb-6">
            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
              {design.name}
            </h2>
            {design.date ? (
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-gray-500">
                {design.date}
              </p>
            ) : null}
            <p className="text-lg leading-relaxed text-gray-400">
              {design.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
