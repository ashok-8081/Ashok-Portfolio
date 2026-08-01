import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

import { MdEmail, MdOutlineFileDownload } from "react-icons/md";

import profile from "../../assets/images/profile.jpg";
import { portfolio } from "../../data/portFolioData";
import { SiLeetcode } from "react-icons/si";
import reactLogo from "../../assets/icons/react.svg";
import nodeLogo from "../../assets/icons/nodejs.svg";
import mongoLogo from "../../assets/icons/mongodb.svg";
import javaLogo from "../../assets/icons/java.svg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020617] pt-20"
    >
      {/* ========================= */}
      {/* Background */}
      {/* ========================= */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[160px]" />

        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 lg:px-10">
        <div className="grid w-full items-center gap-20 lg:grid-cols-2">
          {/* ================================= */}

          {/* LEFT */}

          {/* ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white px-5 py-3 shadow-sm">
              <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>

              <span className="text-sm font-semibold text-slate-700">
                Available for Software Engineering Internship
              </span>
            </div>

            {/* Name */}

            <h1 className="mt-10 text-6xl font-black leading-none tracking-tight text-white md:text-7xl lg:text-8xl">
              {portfolio.name}
            </h1>

            {/* Typing */}

            <div className="mt-8 h-12 text-2xl font-semibold text-blue-600">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  1800,

                  "MERN Stack Developer",
                  1800,

                  "Problem Solver",
                  1800,
                ]}
                speed={45}
                repeat={Infinity}
              />
            </div>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-300">
              {portfolio.heroDescription}
            </p>
            {/* =============================== */}
            {/* CTA Buttons */}
            {/* =============================== */}

            <div className="mt-12 flex flex-wrap items-center gap-5">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600"
              >
                View My Work →
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={portfolio.resume}
                download
                className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-8 py-4 font-medium text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600"
              >
                <MdOutlineFileDownload size={22} />
                Download Resume
              </a>
            </div>

            {/* =============================== */}
            {/* Social Icons */}
            {/* =============================== */}

            <div className="mt-12 flex items-center gap-5">
              <a
                href={portfolio.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-2xl text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-slate-900 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-2xl text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedin />
              </a>

              <a
                href={`mailto:${portfolio.email}`}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-2xl text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-red-500 hover:text-white"
              >
                <MdEmail />
              </a>
              <a
                href={portfolio.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-2xl text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-[#FFA116] hover:text-white"
              >
                <SiLeetcode />
              </a>
            </div>
          </motion.div>

          {/* ================================= */}
          {/* RIGHT SIDE */}
          {/* ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="relative flex justify-center"
          >
            {/* Glow */}

            <div className="absolute h-[520px] w-[520px] rounded-full bg-blue-400/20 blur-[120px]" />

            {/* Photo Card */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative p-5"
            >
              <img
                src={profile}
                alt="Ashok Kumar Dubey"
                className="w-72 h-72 md:w-80 md:h-80 lg:w-90 lg:h-90
  object-cover
  rounded-full
  border-8 border-blue-500
  shadow-[0_0_80px_rgba(59,130,246,0.45)]
  transition-all
  duration-500
  hover:scale-105"
              />
            </motion.div>
            {/* =============================== */}
            {/* Floating Card - DSA */}
            {/* =============================== */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                delay: 0.6,
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -left-8 top-10 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-lg"
            >
              <p className="text-3xl font-black text-slate-900">250+</p>

              <p className="mt-1 text-sm font-medium text-slate-500">
                DSA Problems
              </p>
            </motion.div>

            {/* =============================== */}
            {/* Floating Card - MERN */}
            {/* =============================== */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: [0, 10, 0],
              }}
              transition={{
                delay: 0.8,
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-10 top-1/2 rounded-2xl border border-white/70 bg-white/90 px-6 py-4 shadow-xl backdrop-blur-lg"
            >
              <p className="font-bold text-slate-900">MERN Stack</p>

              <p className="mt-1 text-sm text-slate-500">
                Full Stack Developer
              </p>
            </motion.div>

            {/* =============================== */}
            {/* Floating Card - CGPA */}
            {/* =============================== */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, 10, 0],
              }}
              transition={{
                delay: 1,
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-5 left-10 rounded-2xl border border-white/70 bg-white/90 px-6 py-4 shadow-xl backdrop-blur-lg"
            >
              <p className="text-2xl font-black text-blue-600">Open Source</p>

              <p className="text-sm text-slate-500">GitHub</p>
            </motion.div>

            {/* =============================== */}
            {/* Floating Card - Internship */}
            {/* =============================== */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, -8, 0],
              }}
              transition={{
                delay: 1.2,
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute -bottom-6 right-5 rounded-2xl border border-blue-200 bg-blue-600 px-6 py-4 text-white shadow-2xl"
            >
              <p className="text-sm font-semibold">Open to</p>

              <p className="mt-1 text-lg font-bold">
                Software Engineering Internships
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute -bottom-20 left-1/2 flex -translate-x-1/2 gap-4 rounded-full bg-slate-900/80 px-6 py-3 backdrop-blur-lg">
        <img src={reactLogo} alt="React" className="h-8 w-8" />

        <img src={nodeLogo} alt="Node" className="h-8 w-8" />

        <img src={mongoLogo} alt="MongoDB" className="h-8 w-8" />

        <img src={javaLogo} alt="Java" className="h-8 w-8" />
      </div>

      {/* =============================== */}
      {/* Scroll Indicator */}
      {/* =============================== */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex"
      >
        <div className="flex h-14 w-8 justify-center rounded-full border-2 border-slate-300">
          <div className="mt-2 h-3 w-3 rounded-full bg-blue-600"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
