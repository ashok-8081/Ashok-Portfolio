import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
      className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-blue-500"
    />
  );
};

export default ScrollProgress;