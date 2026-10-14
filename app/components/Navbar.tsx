"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl logo font-extrabold tracking-wide text-foreground no-underline"
        >
          TSS
        </Link>

        <ul className="list-none logo flex items-center gap-8 m-0 p-0">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-foreground no-underline text-sm font-medium hover:opacity-80 transition-opacity duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/register"

              // className="inline-block px-6 py-2 bg-foreground text-background font-bold text-sm rounded-full no-underline hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
