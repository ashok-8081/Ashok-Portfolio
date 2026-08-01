import { motion } from "framer-motion";
import { portfolio } from "../../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="bg-slate-900 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
            ABOUT ME
          </span>

          <h2 className="mt-8 text-5xl font-black tracking-tight text-white">
            Building products,
            <br />
            solving problems.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300">
            {portfolio.about.description}
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {portfolio.quickInfo.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                {item.title}
              </p>

              <h3 className="mt-4 text-2xl font-bold text-white">
                {item.value}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 rounded-[32px] border border-slate-800 bg-slate-950/60 p-10 text-white backdrop-blur-xl">
          <h3 className="text-3xl font-bold">Highlights</h3>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {portfolio.about.highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:border-blue-500/40"
              >
                <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>

                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
