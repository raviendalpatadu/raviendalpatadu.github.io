import React from "react";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Server, Database } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "ZKP Framework for Data Liability",
      category: "Research Project (Ongoing)",
      description:
        "Zero-Knowledge Proof based framework to reduce organizational data liability in binary attestations. Implemented Circom circuits and Groth16 proof generation.",
      tags: ["Circom", "Node.js", "Privacy", "Research"],
      link: "https://github.com/orgs/ZKPresearch/repositories",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop", // Abstract tech image
    },
    {
      title: "Testify - Examination Platform",
      category: "Full Stack Application",
      description:
        "Secure examination platform used by tutors. Features automated grading and question generation using OpenAI API. Built with React and Spring Boot.",
      tags: ["React", "Spring Boot", "OpenAI API", "MySQL"],
      link: "https://github.com/orgs/Project-Testify/repositories",
      image:
        "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2940&auto=format&fit=crop", // Exam/Learning image
    },
    {
      title: "TrackNBook",
      category: "Web Application",
      description:
        "Railway reservation and tracking system. Features front-end and back-end development for reservation tracking including MVC implementation.",
      tags: ["HTML", "PHP", "SCSS", "JavaScript"],
      link: "https://github.com/raviendalpatadu/trackNbook",
      image:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2968&auto=format&fit=crop", // Train image
    },
    {
      title: "Philldesk",
      category: "Pharmacy Management",
      description:
        "Online pharmacy management system for prescription management, billing, and inventory control.",
      tags: ["React", "Spring Boot", "Java"],
      link: "https://github.com/raviendalpatadu/philldesk-frontend",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2969&auto=format&fit=crop", // Pharmacy/Medical image
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900 bg-opacity-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work, ranging from research in cryptography
            to full-stack web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-all duration-300 z-10" />
                <div className="absolute top-4 right-4 z-20 bg-slate-900/90 backdrop-blur text-cyan-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-slate-700">
                  {project.category}
                </div>
                <ImageWithSkeleton
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full"
                  imgClassName="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-700/50 text-slate-300 border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-700/50">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                  >
                    <FaGithub size={18} /> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/raviendalpatadu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-8 rounded-full border border-slate-700 hover:border-cyan-500 transition-all duration-300 group"
          >
            <FaGithub
              size={24}
              className="group-hover:text-cyan-400 transition-colors"
            />
            <span>Find more on GitHub</span>
            <ExternalLink
              size={16}
              className="text-slate-500 group-hover:text-cyan-400 transition-colors"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
