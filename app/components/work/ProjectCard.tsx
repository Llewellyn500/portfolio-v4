import { ProjectProps } from "./projectDetails.js";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../../animations/AnimatedTitle.tsx";
import AnimatedBody from "../../animations/AnimatedBody.tsx";
import { motion } from "framer-motion";
import Container from "../container/Container.tsx";
import React from "react";
import { SiGithub } from "react-icons/si";
import { BsLink45Deg } from "react-icons/bs";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  techNames,
  techLinks,
  github,
  demo,
  image,
  available,
  showGithub = true, // Default to true if not explicitly provided
  showLink = true, // Default to true if not explicitly provided
  moreDetails,
  onShowDetails,
  variant = "project",
  date,
  onViewDesign,
}: ProjectProps & {
  showGithub?: boolean;
  showLink?: boolean;
  onShowDetails?: () => void;
  onViewDesign?: () => void;
  variant?: "project" | "design";
}) => {
  const isDesign = variant === "design";
  const imageOnRight = id % 2 === 0;
  const useRightText = !imageOnRight;

  const projectImageClass =
    "absolute -bottom-2 z-[1] w-[85%] sm:w-[95%] md:w-[75%] lg:max-w-[64%] " +
    (imageOnRight ? "right-0" : "left-0");

  const designImageWrapperClass =
    "relative z-[1] mt-8 h-[320px] w-full overflow-hidden rounded-[32px] sm:h-[360px] md:absolute md:bottom-0 md:mt-0 md:h-auto md:w-[48%] md:max-w-[500px] lg:max-w-[520px] " +
    "md:top-14 lg:top-16 " +
    (imageOnRight
      ? "md:right-0 md:rounded-bl-none md:rounded-br-none md:rounded-tl-[72px] md:rounded-tr-none"
      : "md:left-0 md:rounded-bl-none md:rounded-br-none md:rounded-tl-none md:rounded-tr-[72px]");

  const designTextPositionClass = useRightText
    ? "md:right-0 md:top-14 md:mr-6 lg:top-20 lg:mr-8"
    : "md:left-8 md:top-14 lg:left-10 lg:top-20";

  void moreDetails;

  return (
    <motion.div
      className={`relative z-10 w-full items-stretch justify-center bg-cover bg-center bg-no-repeat py-0 sm:w-[100%] md:w-[100%] ${
        isDesign
          ? "h-[720px] sm:h-[780px] md:h-[490px] lg:h-[510px]"
          : "h-[600px] sm:h-[700px] md:h-[650px] lg:h-[650px]"
      }`}
      initial="initial"
      animate="animate"
    >
      <Container
        width="100%"
        height="100%"
        borderRadius={25}
        color="rgba(255, 255, 255, 0.1)"
        blur={false}
        grain={true}
        top="0px"
        left="0px"
        angle={0}
      >
        {isDesign ? (
          <>
            <div
              className={`relative z-20 w-full px-6 pt-14 text-white sm:px-8 sm:pt-16 md:absolute md:px-0 ${designTextPositionClass} md:max-w-[48%] lg:max-w-[420px]`}
            >
              <AnimatedTitle
                key={`${variant}-${id}-${name}`}
                playImmediately
                text={name}
                className="max-w-full break-words pr-2 text-[32px] leading-none text-white sm:text-[38px] md:text-[44px] md:leading-none lg:text-[48px] lg:leading-none"
                wordSpace={"mr-[0.25em]"}
                charSpace={"-mr-[0.01em]"}
              />
              <AnimatedBody
                key={`${variant}-${id}-body`}
                playImmediately
                text={description}
                className="mt-4 max-w-full pr-2 text-[15px] font-semibold leading-relaxed text-[#95979D] sm:text-[16px]"
              />

              {date ? (
                <p className="mt-3 max-w-full text-[13px] font-medium uppercase tracking-[0.12em] text-[#95979D]/70 sm:text-[14px]">
                  {date}
                </p>
              ) : null}

              {onViewDesign ? (
                <button
                  type="button"
                  onClick={onViewDesign}
                  className="group mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8a2be2] to-[#6b21a8] px-6 py-3 text-[15px] font-bold text-white shadow-lg shadow-[#8a2be2]/30 transition-all hover:scale-105 hover:shadow-[#8a2be2]/50 sm:mt-6"
                  data-blobity-magnetic="false"
                >
                  <span className="text-white">View full design</span>
                  <svg
                    className="h-4 w-4 text-white transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ) : null}
            </div>

            <div className={designImageWrapperClass}>
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 48vw, 520px"
                priority={true}
              />
            </div>
          </>
        ) : (
          <>
            <Image
              src={image}
              alt={name}
              width={500}
              height={500}
              className={projectImageClass}
              priority={true}
            />

            <div
              className={`absolute top-0 text-[#0E1016] ${
                imageOnRight ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
              } mt-6 flex items-center justify-center gap-4 lg:mt-10`}
            >
              {available && showGithub && github && (
                <Link
                  href={github}
                  target="_blank"
                  aria-label="Open GitHub Repository"
                  className="w-[60px] rounded-full bg-white p-5 text-[20px] md:w-[65px] md:text-[24px] lg:w-[70px] lg:text-[28px]"
                  data-blobity
                  data-blobity-radius="35"
                  data-blobity-offset-x="4"
                  data-blobity-offset-y="4"
                  data-blobity-magnetic="false"
                >
                  <SiGithub />
                </Link>
              )}
              {available && showLink && demo && (
                <Link
                  href={demo}
                  target="_blank"
                  aria-label="Open Live Demo"
                  className="w-[60px] rounded-full bg-white p-5 text-[20px] md:w-[65px] md:text-[24px] lg:w-[70px] lg:text-[28px]"
                  data-blobity
                  data-blobity-radius="35"
                  data-blobity-offset-x="4"
                  data-blobity-offset-y="4"
                  data-blobity-magnetic="false"
                >
                  <BsLink45Deg />
                </Link>
              )}
            </div>

            <div
              className={`absolute z-10 mb-10 text-white md:mb-16 lg:mb-14 ${
                useRightText
                  ? "right-0 top-24 ml-10 mr-0 sm:top-32 md:right-0 md:ml-0 lg:right-0 lg:top-60 lg:mr-4"
                  : "left-10 top-24 ml-0 sm:top-32 md:mr-12 lg:top-52 lg:ml-4"
              }`}
            >
              <AnimatedTitle
                key={`${variant}-${id}-${name}`}
                playImmediately
                text={name}
                className="max-w-[90%] break-words text-[35px] leading-none text-white sm:text-[40px] md:text-[44px] md:leading-none lg:max-w-[500px] lg:text-[48px] lg:leading-none"
                wordSpace={"mr-[0.25em]"}
                charSpace={"-mr-[0.01em]"}
              />
              <AnimatedBody
                key={`${variant}-${id}-body`}
                playImmediately
                text={description}
                className="mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D]"
              />

              {technologies.length > 0 ? (
                <div className="mb-4 mt-4 grid grid-cols-5 gap-5 sm:mb-6 sm:mt-6">
                  {technologies.map((IconComponent, idx) => (
                    <div key={idx} className={"relative"}>
                      {!techLinks[idx] ? (
                        <span
                          className="inline-flex w-[20px] text-[20px] text-[#95979D] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                          title={techNames[idx]}
                          aria-label={techNames[idx]}
                          role="img"
                        >
                          <IconComponent />
                        </span>
                      ) : (
                        <Link
                          href={techLinks[idx]}
                          target="_blank"
                          aria-label={`Learn more about ${techNames[idx]}`}
                          className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                          title={techLinks[idx]}
                          data-blobity-tooltip={techNames[idx]}
                          data-blobity-magnetic="false"
                        >
                          <IconComponent />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              ) : null}

              {available && (
                <button
                  onClick={onShowDetails}
                  className="group mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8a2be2] to-[#6b21a8] px-6 py-3 text-[15px] font-bold text-white shadow-lg shadow-[#8a2be2]/30 transition-all hover:scale-105 hover:shadow-[#8a2be2]/50 sm:mt-6"
                  data-blobity-magnetic="false"
                >
                  <span>Show more details</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}
            </div>
          </>
        )}
      </Container>
    </motion.div>
  );
};

export default ProjectCard;
