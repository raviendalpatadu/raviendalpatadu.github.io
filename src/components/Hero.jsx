import React, { useRef, useState, useEffect } from "react";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Mouse position state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth mouse spring for spotlight
  const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 });

  // Tilt calculations
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalize coordinates to -0.5 to 0.5
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    const xPct = mouseX / width;
    const yPct = mouseY / height;

    x.set(xPct);
    y.set(yPct);
  };

  // Typewriter effect state
  const [textIndex, setTextIndex] = useState(0);
  const roles = ["Information Systems", "Web Development", "UI/UX Design"];
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[roleIndex % roles.length];

      if (isDeleting) {
        setCurrentRole(fullText.substring(0, currentRole.length - 1));
      } else {
        setCurrentRole(fullText.substring(0, currentRole.length + 1));
      }

      if (!isDeleting && currentRole === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentRole === "") {
        setIsDeleting(false);
        setRoleIndex(roleIndex + 1);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex]);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative overflow-hidden flex items-center bg-slate-950 perspective-1000 px-4 md:px-8 lg:px-16"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Interactive Spotlight */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([latestX, latestY]) => {
              // Convert normalized -0.5 -> 0.5 back to percentages for CSS
              const xP = (latestX + 0.5) * 100;
              const yP = (latestY + 0.5) * 100;
              return `radial-gradient(circle 600px at ${xP}% ${yP}%, rgba(6,182,212,0.15), transparent 80%)`;
            }
          ),
        }}
      />

      <div className="container mx-auto z-10 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-1 lg:gap-20">
          {/* Text Content (Left) */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 text-sm font-medium mb-4 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Available for opportunities
              </div>

              <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-2 leading-tight tracking-tight">
                Ravien <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                  Dalpatadu
                </span>
              </h1>

              <div className="h-8 md:h-10 mb-2 text-lg md:text-2xl text-slate-400 font-mono">
                <span>I build </span>
                <span className="text-cyan-400 border-r-2 border-cyan-400 pr-1 animate-pulse">
                  {currentRole}
                </span>
              </div>

              <div className="lg:hidden inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/10 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm mx-auto">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Available for opportunities
              </div>

              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4">
                Transforming ideas into reality through clean code and intuitive
                design. Undergraduate at UCSC crafting the future of the web.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-8 py-3 bg-white text-slate-950 font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center gap-2 text-sm md:text-base"
                >
                  Explore Work <ArrowDown size={18} />
                </motion.a>

                <div className="flex items-center gap-4">
                  {[
                    {
                      icon: <Github size={20} />,
                      href: "https://github.com/raviendalpatadu",
                    },
                    {
                      icon: <Linkedin size={20} />,
                      href: "https://www.linkedin.com/in/ravien-dalpatadu-8718b7223/",
                    },
                    {
                      icon: <Mail size={20} />,
                      href: "mailto:ravien.dalpatadu@gmail.com",
                    },
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      whileHover={{ y: -5, color: "#22d3ee" }}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-400 hover:border-cyan-500/50 transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive 3D Card (Right) */}
          <motion.div className="w-1/3 lg:w-1/2 flex justify-center lg:justify-end relative mt-4 lg:mt-0">
            <motion.div
              className="relative w-40 md:w-64 lg:w-[38rem] aspect-square lg:aspect-[4/5] lg:h-[45rem] rounded-full lg:rounded-none overflow-hidden lg:overflow-visible cursor-none group border-4 border-cyan-500/20 lg:border-none shadow-2xl lg:shadow-none bg-slate-900 lg:bg-transparent"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty(
                  "--x",
                  `${e.clientX - rect.left}px`
                );
                e.currentTarget.style.setProperty(
                  "--y",
                  `${e.clientY - rect.top}px`
                );
              }}
            >
              {/* Main Image Container */}
              <div
                className="w-full h-full relative"
                style={{ transformStyle: "flat" }}
              >
                {/* 1. Base Layer (Natural) */}
                <ImageWithSkeleton
                  src="/imgs/ravein-hero.png"
                  alt="Ravien Natural"
                  className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-2xl transition-all duration-500"
                  imgClassName="object-contain"
                />

                {/* 2. Color Layer (Reveal) - Uses CSS Mask */}
                <ImageWithSkeleton
                  src="/imgs/ravein-hero.png"
                  alt="Ravien Color"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  imgClassName="object-contain"
                  style={{
                    maskImage: `radial-gradient(circle 200px at var(--x, 50%) var(--y, 50%), black 0%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 200px at var(--x, 50%) var(--y, 50%), black 0%, transparent 100%)`,
                  }}
                />

                {/* Mobile Fallback: Full Color Overlay (Hidden on Desktop) */}
                <ImageWithSkeleton
                  src="/imgs/ravein-hero.png"
                  alt="Ravien Mobile"
                  className="absolute inset-0 w-full h-full lg:hidden opacity-100 pointer-events-none"
                  imgClassName="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute hidden lg:flex bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-medium bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-400 via-cyan-500/50 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
