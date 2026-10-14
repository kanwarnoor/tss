"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Button from "./Button";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Finances", href: "/finances" },
  { label: "Mission", href: "/mission" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        console.log("scroll");
      } else {
        setScrolled(false);
        console.log("scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent text-black">
      <div className="max-w mx-auto px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl logo font-extrabold tracking-wide  no-underline"
        >
          TSS
        </Link>

        <motion.ul className="list-none flex items-center gap-8 m-0 p-0 ">
          {navItems.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: i * 0.1,
              }}
            >
              <Link
                href={item.href}
                className=" no-underline text-sm font-medium hover:opacity-80 transition-opacity duration-200"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
          <motion.li
            initial={{
              opacity: 0,
              filter: "blur(20px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.3,
              delay: 0.5,
            }}
          >
            <Button href="/register" label="Register" />
          </motion.li>
        </motion.ul>
      </div>
    </nav>
  );
}
