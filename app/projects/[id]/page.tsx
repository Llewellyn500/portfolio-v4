import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { BsLink45Deg, BsArrowLeft } from "react-icons/bs";
import { projects } from "../../components/work/projectDetails";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { id } = await params;
  const parsedId = parseInt(id);
  const project = projects.find((p) => p.id === parsedId);

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0E1016] text-white">
        <div className="text-center">
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

  return (
    <div className="min-h-screen animate-fade-in bg-[#0E1016] pt-20 text-white">
      {/* Back Button */}
      <div className="px-6 pb-6 md:px-12 lg:px-24">
        <Link
          href="/#work"
          className="inline-flex animate-fade-in-up items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white opacity-0 backdrop-blur-md transition-all hover:bg-white/20 md:px-6 md:py-3 md:text-base"
          style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
        >
          <BsArrowLeft size={20} /> Back to Projects
        </Link>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          {/* Hero Image */}
          <div
            className="relative mb-10 h-[300px] w-full animate-fade-in-up overflow-hidden rounded-3xl border border-white/10 opacity-0 md:h-[400px] lg:h-[500px]"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1016] via-transparent to-transparent" />
          </div>

          {/* Title Section */}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {project.name}
            </h1>
            <p className="mb-8 max-w-3xl text-lg text-[#95979D] md:text-xl">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.available && project.showGithub && project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="group flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 font-semibold backdrop-blur-md transition-all hover:bg-white/20"
                >
                  <SiGithub
                    size={22}
                    className="transition-transform group-hover:scale-110"
                  />
                  <span>View Code</span>
                </Link>
              )}
              {project.available && project.showLink && project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-[#8a2be2] to-[#6b21a8] px-6 py-3 font-semibold shadow-lg shadow-[#8a2be2]/25 transition-all hover:shadow-[#8a2be2]/40"
                >
                  <BsLink45Deg
                    size={24}
                    className="transition-transform group-hover:rotate-12"
                  />
                  <span>Live Demo</span>
                </Link>
              )}
            </div>
          </div>

          {/* Divider */}
          <div
            className="my-12 h-px animate-scale-in bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          />

          {/* Project Details */}
          <div className="space-y-16">
            {project.moreDetails?.map((detail, index) => (
              <div
                key={index}
                className={`group grid animate-fade-in-up gap-8 opacity-0 md:grid-cols-2 md:items-center md:gap-12`}
                style={{
                  animationDelay: `${0.4 + index * 0.15}s`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Image */}
                <div
                  className={`overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 ${
                    index % 2 !== 0 ? "md:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image
                      src={detail.image}
                      alt={`${project.name} - ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className={index % 2 !== 0 ? "md:order-1" : ""}>
                  <p className="text-lg leading-relaxed text-[#e4ded7]/90 md:text-xl">
                    {detail.description}
                  </p>
                </div>
              </div>
            ))}

            {(!project.moreDetails || project.moreDetails.length === 0) && (
              <div
                className="animate-fade-in-up rounded-2xl border border-dashed border-white/20 py-16 text-center opacity-0"
                style={{
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                }}
              >
                <p className="text-xl text-white/50">
                  No additional details available for this project yet.
                </p>
              </div>
            )}
          </div>

          {/* Navigation Footer */}
          <div
            className="mt-20 flex animate-fade-in-up justify-center opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <Link
              href="/#work"
              className="group flex items-center gap-2 text-lg font-semibold text-[#e4ded7] transition-colors hover:text-[#8a2be2]"
            >
              <BsArrowLeft className="transition-transform group-hover:-translate-x-1" />
              <span>Back to All Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
