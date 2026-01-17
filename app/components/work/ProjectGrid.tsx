"use client";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, ProjectProps } from "./projectDetails";
import React, { useState } from "react";

const ProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: ProjectProps) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing project to allow exit animation
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16 lg:mb-20">
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[34px] ${"text-[#e4ded7]"}`}
        >
          Check out some of my work!
        </h4>
      </div>

      <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-x-6 gap-y-10 lg:max-w-[1200px] lg:grid-cols-1">
        {projects.map((project: ProjectProps) => (
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
            available={project.available}
            showGithub={project.showGithub}
            showLink={project.showLink}
            moreDetails={project.moreDetails}
            onShowDetails={() => handleOpenModal(project)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ProjectGrid;
