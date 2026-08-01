import { motion } from "framer-motion";
import { portfolio } from "../../data/portfolioData";

const TechStack = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#020617] py-28"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-20 top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-blue-400 font-semibold uppercase tracking-[0.3em]">
            Tech Stack
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-8">
            I build scalable full-stack applications using modern technologies,
            clean architecture, and best development practices.
          </p>
        </motion.div>

        {/* Categories */}

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.techStack.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]"
            >
              <h3 className="text-2xl font-bold text-white">
                {category.category}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
