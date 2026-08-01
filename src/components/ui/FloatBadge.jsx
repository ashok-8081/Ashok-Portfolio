import { motion } from "framer-motion";

const FloatingBadge = ({ title, subtitle, className = "" }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className={`absolute rounded-2xl border border-white/60 bg-slate-900/80 backdrop-blur-xl shadow-xl px-5 py-4 ${className}`}
    >
      <h3 className="text-2xl font-black text-white">{title}</h3>

      <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
    </motion.div>
  );
};

export default FloatingBadge;
