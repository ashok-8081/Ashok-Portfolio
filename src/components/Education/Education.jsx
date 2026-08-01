import { motion } from "framer-motion";

const education = [
  {
    title:  "B.Tech in Computer Science & Engineering",
    subtitle: "Vellore Institute of Technology BHOPAL(VITB)",
    duration: "2024 - 2028",
    description:
      "Currently pursuing B.Tech in Computer Science with a strong focus on Data Structures & Algorithms, Full Stack Development, System Design fundamentals, and modern web technologies.",
  },
];

const achievements = [
  "250+ DSA Problems Solved",
  "MERN Stack Developer",
  "Built Multiple Full Stack Projects",
  "Open to Software Engineering Internships",
];

const Education = () => {
  return (
    <section id="education" className="bg-slate-900 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
            Education
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            My Learning Journey
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]"
          >
            {education.map((item) => (
              <div key={item.title}>
                <p className="text-blue-400 font-semibold">{item.duration}</p>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-xl text-slate-300">{item.subtitle}</p>

                <p className="mt-6 leading-8 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8 text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40"
          >
            <h3 className="text-3xl font-bold">Achievements</h3>

            <div className="mt-8 space-y-5">
              {achievements.map((item) => (
                <div
                  key=<div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
                    <span>{item}</span>
                  </div>
                  className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-all duration-300 hover:border-blue-500/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
