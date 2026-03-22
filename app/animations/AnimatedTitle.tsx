import { useEffect } from "react";
import { useAnimation, motion, type AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedTitleProps = {
  text: string;
  className: string;
  wordSpace: string;
  charSpace: string;
  delay?: number;
  /**
   * When true, skip scroll intersection (unreliable inside overflow-hidden cards / tab swaps)
   * and play the reveal as soon as the component mounts.
   */
  playImmediately?: boolean;
};

export default function AnimatedTitle({
  text,
  className,
  wordSpace,
  charSpace,
  playImmediately = false,
}: AnimatedTitleProps) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    skip: playImmediately,
  });

  useEffect(() => {
    if (playImmediately) return;
    if (inView) {
      void ctrls.start("visible");
    } else {
      void ctrls.start("hidden");
    }
  }, [ctrls, inView, playImmediately]);

  // Imperative ctrls.start("visible") can run before motion nodes subscribe; use a
  // declarative target for cards (playImmediately) so the reveal always runs on mount.
  const animateTarget: "visible" | AnimationControls = playImmediately
    ? "visible"
    : ctrls;

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <h2 aria-label={text} className={className} ref={ref}>
      {text.split(" ").map((word, index) => {
        return (
          <motion.span
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={animateTarget}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
            className={`inline-block whitespace-nowrap ${wordSpace}`}
          >
            {word.split("").map((character, index) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                  className={`inline-block ${charSpace}`}
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </h2>
  );
}
