"use client";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import DesignGalleryModal from "./DesignGalleryModal";
import { designs, projects, ProjectProps } from "./projectDetails";
import React, { useState } from "react";

type WorkTab = "projects" | "designs";

const ProjectGrid = () => {
  const [workTab, setWorkTab] = useState<WorkTab>("projects");
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [galleryDesign, setGalleryDesign] = useState<ProjectProps | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleOpenModal = (project: ProjectProps) => {
    setIsGalleryOpen(false);
    setGalleryDesign(null);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleOpenDesignGallery = (design: ProjectProps) => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setGalleryDesign(design);
    setIsGalleryOpen(true);
  };

  const handleCloseDesignGallery = () => {
    setIsGalleryOpen(false);
    setTimeout(() => setGalleryDesign(null), 300);
  };

  const switchTab = (tab: WorkTab) => {
    setWorkTab(tab);
    setIsModalOpen(false);
    setIsGalleryOpen(false);
    setSelectedProject(null);
    setGalleryDesign(null);
  };

  const tabClass = (tab: WorkTab) =>
    `border-b-2 pb-2 text-[14px] font-semibold transition-colors sm:text-[16px] md:text-[18px] ${
      workTab === tab
        ? "border-[#e4ded7] text-[#e4ded7]"
        : "border-transparent text-[#95979D] hover:text-[#e4ded7]/80"
    }`;

  return (
    <>
      <div className="mb-10 flex w-[90%] max-w-[1200px] flex-col gap-6 text-[#e4ded7] md:mb-16 lg:mb-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <h4 className="text-[16px] md:text-[20px] lg:text-[34px]">
            {workTab === "projects"
              ? "Check out some of my work!"
              : "Selected design and visual work."}
          </h4>
          <div
            className="flex gap-8 border-b border-white/10 sm:shrink-0"
            role="tablist"
            aria-label="Work categories"
          >
            <button
              type="button"
              role="tab"
              aria-selected={workTab === "projects"}
              className={tabClass("projects")}
              onClick={() => switchTab("projects")}
              data-blobity-magnetic="false"
            >
              Projects
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={workTab === "designs"}
              className={tabClass("designs")}
              onClick={() => switchTab("designs")}
              data-blobity-magnetic="false"
            >
              Designs
            </button>
          </div>
        </div>
      </div>

      <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-x-6 gap-y-10 lg:max-w-[1200px] lg:grid-cols-1">
        {workTab === "projects"
          ? projects.map((project: ProjectProps) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                techNames={project.techNames}
                techLinks={project.techLinks}
                github={project.github}
                demo={project.demo}
                image={project.image}
                imageFull={project.imageFull}
                available={project.available}
                showGithub={project.showGithub}
                showLink={project.showLink}
                moreDetails={project.moreDetails}
                onShowDetails={() => handleOpenModal(project)}
              />
            ))
          : designs.map((design: ProjectProps) => (
              <ProjectCard
                key={`design-${design.id}`}
                id={design.id}
                variant="design"
                name={design.name}
                description={design.description}
                date={design.date}
                technologies={design.technologies}
                techNames={design.techNames}
                techLinks={design.techLinks}
                github={design.github}
                demo={design.demo}
                image={design.image}
                available={design.available}
                showGithub={design.showGithub}
                showLink={design.showLink}
                onViewDesign={() => handleOpenDesignGallery(design)}
              />
            ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <DesignGalleryModal
        design={galleryDesign}
        isOpen={isGalleryOpen}
        onClose={handleCloseDesignGallery}
      />
    </>
  );
};

export default ProjectGrid;
