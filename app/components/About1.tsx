"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// ── Stat counter card ────────────────────────────────────────────────────────
function StatCard({
  value,
  label,
  delay = 0,
}: {
  value: string;
  label: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-8 rounded-2xl border border-black/10 bg-white/60 backdrop-blur-sm hover:border-black/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <span className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-stone-800 to-stone-500">
        {value}
      </span>
      <span className="mt-2 text-sm font-medium text-stone-500 uppercase tracking-widest text-center">
        {label}
      </span>
    </motion.div>
  );
}

// ── Pill badge ────────────────────────────────────────────────────────────────
function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-900 text-white uppercase tracking-widest">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      {text}
    </span>
  );
}

// ── Section: Who We Are ───────────────────────────────────────────────────────
function WhoWeAre() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Text */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge text="Who We Are" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-stone-900"
        >
          The Official Student Body of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-700 to-stone-400">
            MCA · GNDU
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-stone-600 text-lg leading-relaxed"
        >
          Rooted in the MCA Department of Computer Science at Guru Nanak Dev
          University, TSS is the official student body dedicated to bridging
          academic curiosities with industry-leading innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="flex flex-wrap gap-3 pt-2"
        >
          {["Hackathons", "Workshops", "Tech Fests", "Industry Connect"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-sm font-medium border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100 transition-colors duration-200 cursor-default"
              >
                {tag}
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, x: 40 }}
        animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl group"
      >
        <Image
          src="/about-team.jpg"
          alt="TSS team collaborating"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-stone-800 text-sm font-semibold shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            MCA Dept · Guru Nanak Dev University
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ── Section: What We Do ───────────────────────────────────────────────────────
function WhatWeDo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const activities = [
    {
      icon: "⚡",
      title: "Hackathons",
      desc: "Marathon coding events where ideas transform into working prototypes.",
    },
    {
      icon: "🛠️",
      title: "Workshops",
      desc: "Hands-on sessions led by industry experts and senior peers.",
    },
    {
      icon: "🚀",
      title: "Tech Fests",
      desc: "University-wide competitions showcasing student ingenuity and skill.",
    },
    {
      icon: "🤝",
      title: "Specialized Teams",
      desc: "Domain-expert squads contributing to every major departmental event.",
    },
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, x: -40 }}
        animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl group order-last lg:order-first"
      >
        <Image
          src="/about-hackathon.jpg"
          alt="TSS Hackathon"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-stone-800 text-sm font-semibold shadow-lg">
            <span className="text-base">🏆</span>
            Where skills are forged
          </div>
        </div>
      </motion.div>

      {/* Text & Cards */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge text="What We Do" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-stone-900"
        >
          Organizers of the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-700 to-stone-400">
            Extra-Curricular Landscape
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-stone-600 text-lg leading-relaxed"
        >
          As primary organizers of our extra-curricular landscape, we lead
          hackathons, workshops, and technical fests, ensuring our teams
          contribute specialized expertise to every major event in the
          department.
        </motion.p>

        <div className="grid grid-cols-2 gap-3 pt-2">
          {activities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: "easeOut" }}
              className="p-4 rounded-2xl border border-stone-100 bg-white/70 hover:shadow-md hover:border-stone-200 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="mt-1.5 font-semibold text-stone-800 text-sm">{item.title}</p>
              <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Section: Legacy & Timeline ────────────────────────────────────────────────
function LegacySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const milestones = [
    { year: "Decades", label: "Legacy of student excellence" },
    { year: "2026", label: "Official registration & recognition" },
    { year: "Now", label: "Scaled impact across the university" },
  ];

  return (
    <div ref={ref} className="text-center space-y-12">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Badge text="Our Legacy" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-stone-900"
        >
          A New Era of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-700 to-stone-400">
            Official Recognition
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Though our legacy spans decades, our registration in 2026 marked a
          new era of official recognition and scaled impact across the
          university.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col md:flex-row items-center justify-center">
        {milestones.map((m, i) => (
          <div key={m.year} className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-stone-800 to-stone-600 flex items-center justify-center shadow-xl">
                <span className="text-white font-extrabold text-xs text-center leading-tight px-1">
                  {m.year}
                </span>
              </div>
              <p className="mt-3 text-stone-600 text-sm font-medium max-w-[120px] text-center leading-snug">
                {m.label}
              </p>
            </motion.div>

            {i < milestones.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="hidden md:block h-px w-24 bg-gradient-to-r from-stone-400 to-stone-300 mx-4"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Section: Manifesto ────────────────────────────────────────────────────────
function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={containerRef}
      className="relative rounded-3xl overflow-hidden"
      style={{ minHeight: 400 }}
    >
      <motion.div className="absolute inset-0" style={{ x }}>
        <Image
          src="/about-hero.jpg"
          alt="TSS vision background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />

      <div
        ref={ref}
        className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-24 space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white/80 uppercase tracking-widest backdrop-blur-sm border border-white/20">
            Our Manifesto
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl tracking-tight"
        >
          Diverse teams,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-300 to-white">
            one shared horizon
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-xl max-w-lg leading-relaxed"
        >
          Exploring the frontiers of what&apos;s possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex gap-2 mt-4"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-white/60"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// ── GSAP horizontal marquee ───────────────────────────────────────────────────
function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tl = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  const items = [
    "Hackathons",
    "Workshops",
    "Tech Fests",
    "Innovation",
    "Community",
    "Excellence",
    "GNDU · MCA",
    "2026 ✦",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-stone-200 py-4 bg-stone-50/50">
      <div ref={trackRef} className="flex gap-12 whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-stone-400 font-semibold text-sm uppercase tracking-[0.2em] flex-shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Hero / Page Header ────────────────────────────────────────────────────────
function AboutHero() {
  const words = ["About", "TSS"];

  return (
    <div className="relative flex flex-col items-center justify-center text-center pt-36 pb-20 px-6 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-stone-200/40 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-stone-100 blur-2xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <Badge text="Technical Student Society" />
      </motion.div>

      <h1 className="text-7xl lg:text-[10rem] font-extrabold tracking-tight leading-none">
        {words.map((word, wi) =>
          word.split("").map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: wi * 0.4 + ci * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block logo ${wi === 1 ? "text-stone-400 ml-6" : "text-stone-900"}`}
            >
              {char}
            </motion.span>
          ))
        )}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-6 text-stone-500 text-xl max-w-md leading-relaxed"
      >
        Where curiosity meets community, and ideas become impact.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-16 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-stone-400 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-stone-400 to-transparent"
        />
      </motion.div>
    </div>
  );
}

// ── Root Export ───────────────────────────────────────────────────────────────
export default function About() {
  return (
    <section className="min-h-screen bg-white text-stone-900 overflow-hidden">
      <AboutHero />

      <Marquee />

      <div className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard value="10+" label="Years of Legacy" delay={0} />
        <StatCard value="2026" label="Official Registration" delay={0.1} />
        <StatCard value="50+" label="Events Organized" delay={0.2} />
        <StatCard value="∞" label="Ideas Sparked" delay={0.3} />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <WhoWeAre />
      </div>

      <Marquee />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <WhatWeDo />
      </div>

      <div className="bg-stone-50/70 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <LegacySection />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <Manifesto />
      </div>
    </section>
  );
}

