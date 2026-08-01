import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import { MdEmail } from "react-icons/md";

import { portfolio } from "../../data/portfolioData";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020617] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />
          <div className="absolute right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.35em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I'm actively looking for Software Engineering Internship and Full
            Stack Development opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {/* Email */}

          <motion.a
            href={`mailto:${portfolio.email}`}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]"
          >
            <MdEmail size={40} className="text-blue-400" />

            <h3 className="mt-6 text-2xl font-bold text-white">Email</h3>

            <p className="mt-3 text-slate-300">{portfolio.email}</p>
          </motion.a>

          {/* Phone */}

          <motion.a
            href="tel:+918081656208"
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]"
          >
            <FaPhoneAlt size={35} className="text-blue-400" />

            <h3 className="mt-6 text-2xl font-bold text-white">Phone</h3>

            <p className="mt-3 text-slate-300">+91 80816 56208</p>
          </motion.a>

          {/* GitHub */}

          <motion.a
            href={portfolio.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]"
          >
            <FaGithub size={40} className="text-blue-400" />

            <h3 className="mt-6 text-2xl font-bold text-white">GitHub</h3>

            <p className="mt-3 text-slate-300 break-all">
              github.com/ashok-8081
            </p>
          </motion.a>

          {/* LinkedIn */}

          <motion.a
            href={portfolio.linkedin}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]"
          >
            <FaLinkedin size={40} className="text-blue-400" />

            <h3 className="mt-6 text-2xl font-bold text-white">LinkedIn</h3>

            <p className="mt-3 text-slate-300">Connect With Me</p>
          </motion.a>

          {/* LeetCode */}

          <motion.a
            href={portfolio.leetcode}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]"
          >
            <SiLeetcode size={40} className="text-[#FFA116]" />

            <h3 className="mt-6 text-2xl font-bold text-white">LeetCode</h3>

            <p className="mt-3 text-slate-300">View My Profile</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
