import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { portfolio } from "../../data/portfolioData";

const FeaturedProject = () => {
  const project = portfolio.featuredProject;

  return (
    <section id="projects" className="bg-slate-900 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.35em] text-blue-400">
            Featured Project
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Built With Production Mindset
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            One of my best full-stack applications showcasing modern web
            development practices, scalable architecture and clean UI.
          </p>
        </motion.div>

        {/* Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 grid items-center gap-16 rounded-[40px] border border-slate-800 bg-slate-950/60 p-10 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40"
        >
          {/* LEFT */}

          <div>
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
              MERN Stack
            </span>

            <h3 className="mt-8 text-5xl font-black text-white">
              {project.title}
            </h3>

            <p className="mt-3 text-xl font-semibold text-blue-400">
              {project.subtitle}
            </p>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              {project.description}
            </p>

            {/* Tech Stack */}

            <div className="mt-10 flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-blue-600"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-blue-500 hover:bg-blue-600"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </div>
          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative flex justify-center"
          >
            {/* Background Glow */}

            <div className="absolute h-105 w-105 rounded-full bg-blue-500/20 blur-[120px]" />

            {/* Laptop Mockup */}

            <div className="relative w-full max-w-155">
              {/* Laptop Top */}

              <div className="rounded-t-[22px] border border-slate-700 bg-slate-900 p-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500"></span>

                  <span className="h-3 w-3 rounded-full bg-yellow-500"></span>

                  <span className="h-3 w-3 rounded-full bg-green-500"></span>
                </div>
              </div>

              {/* Screen */}

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="overflow-hidden border-x border-b border-slate-700 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8"
              >
                <div className="rounded-2xl bg-slate-900 p-8 shadow-xl">
                  <h2 className="text-4xl font-black text-white">ShopSphere</h2>

                  <p className="mt-4 text-slate-300 leading-8">
                    Modern Full Stack E-Commerce platform built with React,
                    Node.js, Express, MongoDB and Razorpay integration.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-slate-800 p-5">
                      <p className="text-sm text-slate-300">Authentication</p>
                    </div>

                    <div className="rounded-xl bg-slate-800 p-5">
                      <p className="text-sm text-slate-300">Razorpay</p>
                    </div>

                    <div className="rounded-xl bg-slate-800 p-5">
                      <p className="text-sm text-slate-300">Admin Panel</p>
                    </div>

                    <div className="rounded-xl bg-slate-800 p-5">
                      <p className="text-sm text-slate-300">Responsive UI</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Laptop Bottom */}

              <div className="mx-auto h-5 w-[92%] rounded-b-full bg-slate-700"></div>
            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -left-8 top-10 rounded-2xl border border-slate-700 bg-slate-950/90 p-5 shadow-xl backdrop-blur-lg"
            >
              <h3 className="text-3xl font-black text-blue-400">MERN</h3>

              <p className="mt-2 text-sm text-slate-300">Production Ready</p>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-6 bottom-10 rounded-2xl bg-slate-900 p-5 text-white shadow-2xl"
            >
              <h3 className="text-3xl font-black">100%</h3>

              <p className="mt-2 text-sm text-slate-300">Responsive</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
