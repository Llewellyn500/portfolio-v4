"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { BsLink45Deg, BsArrowLeft } from "react-icons/bs";
import { projects } from "../../components/work/projectDetails";
import { motion } from "framer-motion";
import AnimatedTitle from "../../animations/AnimatedTitle";
import AnimatedBody from "../../animations/AnimatedBody";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function ProjectDetailsPage({ params }: Props) {
  // Unwrap params using React.use() for Next.js 15+
  const { id } = React.use(params);
  const parsedId = parseInt(id);
  const project = projects.find((p) => p.id === parsedId);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0E1016] text-white">
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-4xl font-bold">Project Not Found</h1>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#8a2be2] px-6 py-3 font-bold transition-transform hover:scale-105"
          >
            <BsArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2, // Delay start until after title animates
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[#0E1016] pt-20 text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 px-6 py-10 md:px-12 lg:px-24"
      >
        <div className="mx-auto max-w-6xl">
          {/* Back Button */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-lg font-semibold text-[#e4ded7] transition-colors hover:text-[#8a2be2]"
          >
            <BsArrowLeft size={24} /> Back to Projects
          </Link>

          {/* Header */}
          <div className="mb-12 border-b border-white/10 pb-8 backdrop-blur-sm">
            <AnimatedTitle
              text={project.name}
              className="mb-4 text-4xl font-bold text-white md:text-6xl"
              wordSpace="mr-[0.25em]"
              charSpace="-mr-[0.01em]"
            />
            <AnimatedBody
              text={project.description}
              className="text-xl text-[#95979D]"
            />
          </div>

          {/* Links & Tech */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-wrap gap-6"
          >
            {project.available && project.showGithub && project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-md transition-all hover:bg-white/20"
              >
                <SiGithub size={24} />
                <span>View Code</span>
              </Link>
            )}
            {project.available && project.showLink && project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                className="flex items-center gap-2 rounded-full bg-[#8a2be2] px-8 py-4 text-lg font-semibold shadow-lg shadow-[#8a2be2]/30 transition-all hover:bg-[#7a25c7] hover:shadow-[#8a2be2]/50"
              >
                <BsLink45Deg size={28} />
                <span>Live Demo</span>
              </Link>
            )}
          </motion.div>

          {/* Content */}
          <div className="space-y-20">
            {/* More Details (Screenshots + Descriptions) */}
            {project.moreDetails?.map((detail, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col gap-10 md:flex-row md:items-center md:gap-16 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md transition-transform duration-500 hover:scale-[1.02]">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                    <Image
                      src={detail.image}
                      alt={`${project.name} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xl leading-relaxed text-[#e4ded7]/90">
                    {detail.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {(!project.moreDetails || project.moreDetails.length === 0) && (
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-dashed border-white/10 py-16 text-center text-xl text-white/50 backdrop-blur-sm"
              >
                No additional details available for this project yet.
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
