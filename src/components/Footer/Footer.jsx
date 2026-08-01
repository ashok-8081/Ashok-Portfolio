import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { portfolio } from "../../data/portFolioData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#020617] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}

          <div>
            <h2 className="text-4xl font-black tracking-tight">
              {portfolio.name}
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-400">
              Software Engineer passionate about building modern, scalable and
              user-friendly web applications using the MERN Stack. Always eager
              to learn, solve problems and contribute to impactful products.
            </p>
          </div>

          {/* Right */}

          <div className="lg:text-right">
            <h3 className="text-2xl font-bold">Quick Links</h3>

            <div className="mt-6 flex flex-wrap gap-5 lg:justify-end">
              <a
                href="#home"
                className="transition-all duration-300 hover:text-blue-400 hover:-translate-y-1"
              >
                Home
              </a>

              <a
                href="#about"
                className="transition-all duration-300 hover:text-blue-400 hover:-translate-y-1"
              >
                About
              </a>

              <a
                href="#skills"
                className="transition-all duration-300 hover:text-blue-400 hover:-translate-y-1"
              >
                Tech Stack
              </a>

              <a
                href="#projects"
                className="transition-all duration-300 hover:text-blue-400 hover:-translate-y-1"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="transition-all duration-300 hover:text-blue-400 hover:-translate-y-1"
              >
                Contact
              </a>
            </div>

            <div className="mt-8 flex gap-5 text-2xl lg:justify-end">
              <a
                href={portfolio.github}
                target="_blank"
                rel="noreferrer"
                className="transition transition-all duration-300 hover:text-blue-400 hover:-translate-y-1"
              >
                <FaGithub />
              </a>

              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition transition-all duration-300 hover:text-blue-400 hover:-translate-y-1"
              >
                <FaLinkedin />
              </a>

              <a
                href={`mailto:${portfolio.email}`}
                className="transition transition-all duration-300 hover:text-blue-400 hover:-translate-y-1"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-slate-400">
              © {year} {portfolio.name}. All rights reserved.
            </p>

            <p className="flex items-center gap-2 text-slate-400">
              Crafted with React, Tailwind CSS, Framer Motion and lots of ☕ by Ashok Kumar Dubey.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
