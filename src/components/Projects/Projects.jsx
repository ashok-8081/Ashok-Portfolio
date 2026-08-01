import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { portfolio } from "../../data/portfolioData";

const Projects = () => {
  return (
    <section id="all-projects" className="bg-[#020617] py-28">
      <div className="mx-auto max-w-7xl px-6">
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
            duration: 0.6,
          }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
            More Projects
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Other Things I've Built
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Apart from my featured project, I enjoy building applications,
            experimenting with new technologies and improving my problem solving
            skills.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {portfolio.projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="overflow-hidden rounded-[30px] border border-slate-800 bg-slate-950/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]"
            >
              {/* Banner */}

              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
                <div className="text-center">
                  <h2 className="text-5xl font-black text-white">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-blue-400">Full Stack Application</p>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-6 leading-8 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-blue-500 hover:bg-blue-600"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
