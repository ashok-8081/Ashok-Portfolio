import { motion } from "framer-motion";

const PrimaryButton = ({ children, href, icon }) => {
  const Component = href ? "a" : "button";

  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
    >
      <Component
        href={href}
        className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-600"
      >
        {children}

        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </Component>
    </motion.div>
  );
};

export default PrimaryButton;