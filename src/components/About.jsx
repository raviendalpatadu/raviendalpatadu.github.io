import React, { useState } from "react";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Code,
  GraduationCap,
  Trophy,
  Briefcase,
  Award,
  Terminal,
  Target,
  Medal,
  Crown,
  Flag,
  ExternalLink,
} from "lucide-react";
import {
  FaJava,
  FaPython,
  FaPhp,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaSass,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiLatex,
} from "react-icons/si";

const About = () => {
  // ... (education and experience arrays remain unchanged) ...

  const education = [
    {
      year: "2022 - Present",
      title: "BSc (Hons) in Information Systems",
      institution: "University of Colombo School of Computing (UCSC)",
      details: "4th Year (Internal) | GPA 3.7118/4.000 | Rank - 05",
      logo: "/imgs/ucsc.png",
    },
    {
      year: "2024",
      title: "Bachelor of Information Technology (BIT)",
      institution: "UCSC - External",
      details: "Second Class Upper Division",
      logo: "/imgs/ucsc.png",
    },
    {
      year: "2012 - 2020",
      title: "School",
      institution: "S. Thomas' College - Bandarawela",
      details:
        "G.C.E. Advanced Level (2020) - 1A, 1C, 1S (Physical Science) | Ordinary Level - 6As, 3Bs",
      logo: "/imgs/stcb.png",
    },
  ];

  const experience = [
    {
      title: "Engineering Intern",
      company: "WSO2 Lanka (Pvt) Ltd",
      period: "Nov 2024 – Apr 2025",
      description:
        "Worked on the Asgardeo Admin Portal end-to-end. Designed frontend interfaces, built microservices for internal integrations, and implemented key features like tenant deletion and user management using React and Java.",
      logo: "/imgs/wso2.png",
    },
  ];

  const technologies = [
    {
      category: "Languages",
      items: [
        { name: "Java", icon: <FaJava className="text-orange-500" /> },
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
        { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
        { name: "C", icon: <Terminal className="text-blue-500" size={20} /> },
        { name: "C#", icon: <Code className="text-green-500" size={20} /> },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        {
          name: "Spring Boot",
          icon: <SiSpringboot className="text-green-500" />,
        },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-300" />,
        },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "SCSS", icon: <FaSass className="text-pink-400" /> },
        { name: "Latex", icon: <SiLatex className="text-white" /> },
      ],
    },
  ];

  const sportsAchievements = [
    {
      title: "Youth Olympic Games 2018",
      details: "Represented Sri Lanka (Argentina) | World Rank 6th",
      icon: <Target className="text-cyan-400" />,
      image: "/imgs/youg2018.jpg",
    },
    {
      title: "South Asian Games 2019",
      details: "Silver Medalist in Archery (Nepal)",
      icon: <Medal className="text-slate-300" />, // Silverish
      image: "/imgs/sag_2019.jpg",
    },
    {
      title: "National Archery Pool",
      details: "Member of National Team (2018 - Present)",
      icon: <Crown className="text-yellow-500" />,
      image: "/imgs/naational_pool.jpg",
    },
  ];

  const techAchievements = [
    {
      title: "CyberZee'24 - Inter University Cyber Security Quiz",
      details:
        "2nd Place | Team 'HereForTheBytes'. Competing against over 50 universities. (Aug 2024)",
      icon: <Medal className="text-slate-300" />,
      image: "/imgs/cyberzee.jpg",
    },
    {
      title: "NetCom SLIIT CODEFEST 2023",
      details:
        "3rd Place | Team 'HereForTheBytes' secured 3rd place in the Netcom competition. (Jan 2024)",
      icon: <Award className="text-orange-400" />, // Bronzeish
      image: "/imgs/netcom.jpg",
    },
    {
      title: "CTF SLIIT CODEFEST 2023",
      details:
        "Merit Award | In the Capture The Flag (CTF) challenge. (Jan 2024)",
      icon: <Flag className="text-emerald-400" />,
      image: "/imgs/codefest2023.jpg",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 md:px-8 bg-slate-950 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mb-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            About Me
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Beyond academics, I am a proud member of the{" "}
            <span className="text-cyan-400 font-medium">
              Sri Lankan National Archery Team
            </span>{" "}
            (National Pool 2018-Present). My diverse experiences in both
            academics and sports have instilled in me a strong sense of
            discipline, teamwork, and a commitment to excellence.
          </p>
        </motion.div>

        <div className="space-y-24">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                <Briefcase size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white">Experience</h3>
            </div>
            <div className="space-y-8 pl-4 lg:pl-0">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative pl-8 border-l-2 border-slate-800 hover:border-cyan-500 transition-colors duration-300"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors duration-300"></div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
                    {item.logo && (
                      <div className="p-2 bg-white rounded-lg shrink-0">
                        <img
                          src={item.logo}
                          alt={item.company}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="text-2xl font-bold text-white leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-cyan-400 font-medium text-lg">
                        {item.company}{" "}
                        <span className="text-slate-500 text-base">
                          | {item.period}
                        </span>
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            id="education"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-colors group flex flex-col items-start gap-4"
                >
                  {item.logo && (
                    <div className="p-3 bg-white/15 rounded-xl border border-white/10 group-hover:scale-105 transition-transform">
                      <img
                        src={item.logo}
                        alt={item.institution}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {item.institution}
                    </h4>
                    <p className="text-indigo-400 font-medium mb-1 text-sm">
                      {item.title}
                    </p>
                    <p className="text-slate-500 text-xs mb-4 uppercase tracking-wider">
                      {item.year}
                    </p>
                    <p className="text-slate-400 text-sm">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                <Trophy size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white">Achievements</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Sports Column */}
              <div>
                <h4 className="text-xl font-bold text-slate-300 mb-6 flex items-center gap-2 pb-2 border-b border-slate-800">
                  <Target className="text-cyan-400" size={20} /> Sporting
                  Achievements
                </h4>
                <div className="space-y-6">
                  {sportsAchievements.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-cyan-400 transition-all duration-300 overflow-hidden flex flex-col"
                    >
                      {/* Image or Pattern */}
                      {item.image && (
                        <div className="h-48 overflow-hidden relative border-b border-slate-800/50">
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      )}

                      <div className="p-6 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-cyan-400">
                            {item.icon}
                          </div>
                          <h4 className="text-white font-bold text-lg leading-tight">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed pl-1">
                          {item.details}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* World Archery Profile Link */}
                <div className="mt-8 text-center sm:text-left">
                  <a
                    href="https://www.worldarchery.sport/profile/21079/ravien-dalpatadu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors group text-sm uppercase tracking-wide border-b border-cyan-500/20 hover:border-cyan-400 pb-0.5"
                  >
                    View Athlete Profile{" "}
                    <ExternalLink
                      size={16}
                      className="transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                    />
                  </a>
                </div>
              </div>

              {/* Tech Column */}
              <div>
                <h4 className="text-xl font-bold text-slate-300 mb-6 flex items-center gap-2 pb-2 border-b border-slate-800">
                  <Terminal className="text-purple-400" size={20} /> Tech
                  Competitions
                </h4>
                <div className="space-y-6">
                  {techAchievements.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-purple-500 transition-all duration-300 overflow-hidden flex flex-col"
                    >
                      {item.image && (
                        <div className="h-48 overflow-hidden relative border-b border-slate-800/50">
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      )}

                      <div className="p-6 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-purple-400">
                            {item.icon}
                          </div>
                          <h4 className="text-white font-bold text-lg leading-tight">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed pl-1">
                          {item.details}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                <Code size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white">
                Technical Skills
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-colors"
                >
                  <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2 text-lg">
                    {tech.category === "Languages" && <Terminal size={18} />}
                    {tech.category === "Frameworks" && <Code size={18} />}
                    {tech.category === "Databases" && <BookOpen size={18} />}
                    {tech.category === "Tools" && <Briefcase size={18} />}
                    {tech.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((t, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 bg-slate-950 border border-slate-800 px-3 py-2 rounded-lg hover:border-emerald-500/50 transition-colors"
                      >
                        <span className="text-lg">{t.icon}</span>
                        <span className="text-slate-300 text-sm font-medium">
                          {t.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
