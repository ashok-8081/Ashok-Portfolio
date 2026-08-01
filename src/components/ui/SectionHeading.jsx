import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <p className="text-blue-600 font-semibold uppercase tracking-[0.25em]">
        {subtitle}
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
