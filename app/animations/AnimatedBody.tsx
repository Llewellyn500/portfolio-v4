import { useEffect } from "react";
import { useAnimation, motion, type AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedBodyProps = {
  text: string;
  className?: string;
  delay?: number;
  /** See AnimatedTitle — avoids scroll observer for tabbed / clipped card content. */
  playImmediately?: boolean;
};

export default function AnimatedBody({
  text,
  className,
  delay,
  playImmediately = false,
}: AnimatedBodyProps) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
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

  const animateTarget: "visible" | AnimationControls = playImmediately
    ? "visible"
    : ctrls;

  const bodyAnimation = {
    hidden: {
      opacity: 0,
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        delay: delay,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.p
      aria-label={text}
      role="heading"
      className={className}
      ref={ref}
      aria-hidden="true"
      initial="hidden"
      animate={animateTarget}
      variants={bodyAnimation}
    >
      {text}
    </motion.p>
  );
}
