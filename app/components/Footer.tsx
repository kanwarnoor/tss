"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Finances", href: "/finances" },
  { label: "Mission", href: "/mission" },
  { label: "Register", href: "/register" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tss_gndu/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  // {
  //   label: "LinkedIn",
  //   href: "https://linkedin.com",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="22"
  //       height="22"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="1.5"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
  //       <rect width="4" height="12" x="2" y="9" />
  //       <circle cx="4" cy="4" r="2" />
  //     </svg>
  //   ),
  // },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#3b3230] via-[#2e2523] to-[#241e1b] text-[#c9b8ae] min-h-[25vh] flex flex-col justify-center px-8 py-14 relative overflow-hidden">
      {/* Main grid */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-8 md:gap-12">
        {/* Brand column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          // variants={fadeUp}
          custom={0}
        >
          <Link
            href="/"
            className="font-[family-name:var(--font-space-grotesk)] text-3xl font-extrabold tracking-wide text-[#f5ebe4] no-underline hover:text-[#d4a574] transition-colors duration-250"
          >
            TSS
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-[#9a8a7e]">
            Technical Student Society
            <br />
            Guru Nanak Dev University
          </p>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          // variants={fadeUp}
          custom={1}
        >
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.12em] text-[#d4a574] mb-5">
            Quick Links
          </h4>
          <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="no-underline text-sm text-[#b0a096] hover:text-[#f5ebe4] hover:translate-x-1 transition-all duration-200 inline-block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social media */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          // variants={fadeUp}
          custom={2}
        >
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-xs font-bold uppercase tracking-[0.12em] text-[#d4a574] mb-5">
            Connect With Us
          </h4>
          <div className="flex flex-col gap-3.5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex items-center gap-2.5 no-underline text-sm text-[#b0a096] hover:text-[#f5ebe4] hover:translate-x-1 transition-all duration-200"
              >
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto mt-10 mb-5 h-px bg-gradient-to-r from-transparent via-[#5a4a42] to-transparent" />

      {/* Bottom bar */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-1">
        <p className="text-[0.8rem] text-[#9a8a7e] m-0">
          &copy; TSS 2026. All rights reserved.
        </p>
        <p className="text-[0.55rem] text-[#6b5d55] m-0 tracking-wide">
          made by Kanwarnoor Singh
        </p>
      </div>
    </footer>
  );
}
