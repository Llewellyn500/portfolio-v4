"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { BsLink45Deg, BsX } from "react-icons/bs";
import { ProjectProps } from "./projectDetails";

type ProjectModalProps = {
  project: ProjectProps | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  // Handle body scroll lock
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

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[100] bg-black/90" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8">
        <div className="relative h-full w-full max-w-5xl overflow-y-auto rounded-2xl bg-[#1a1a1a] p-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#8a2be2]/50 hover:scrollbar-thumb-[#8a2be2]/80 md:p-8 lg:p-10">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="sticky left-full top-0 z-10 mb-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <BsX size={28} />
          </button>

          {/* Hero Image */}
          <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl bg-gray-800">
            <Image
              src={project.imageFull || project.image}
              alt={project.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Title Section */}
          <div className="mb-6">
            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
              {project.name}
            </h2>
            <p className="mb-6 text-lg text-gray-400">{project.description}</p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {project.available && project.showGithub && project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  <SiGithub size={20} />
                  <span>View Code</span>
                </Link>
              )}
              {project.available && project.showLink && project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 rounded-full bg-[#8a2be2] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#7a25c7]"
                >
                  <BsLink45Deg size={22} />
                  <span>Live Demo</span>
                </Link>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-white/10" />

          {/* Project Details */}
          <div className="space-y-8 pb-16">
            {project.moreDetails?.map((detail, index) => (
              <div key={index} className="grid gap-6 md:grid-cols-2 md:gap-8">
                {/* Image */}
                <div className="overflow-hidden rounded-lg bg-gray-800">
                  <div className="relative aspect-video">
                    <Image
                      src={detail.image}
                      alt={`${project.name} - ${index + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex items-center">
                  <p className="text-base leading-relaxed text-gray-300">
                    {detail.description}
                  </p>
                </div>
              </div>
            ))}

            {(!project.moreDetails || project.moreDetails.length === 0) && (
              <div className="rounded-lg border border-dashed border-white/20 py-8 text-center">
                <p className="text-gray-400">
                  No additional details available for this project yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
