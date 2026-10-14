"use client";

import Link from "next/link";

interface ButtonProps {
  label: string;
  href: string;
  className?: string;
  size?: "small" | "large";
}

export default function Button({
  label,
  href,
  className,
  size = "small",
}: ButtonProps) {
  return (
    <div className={className}>
      <Link
        href={href}
        className={`inline-block px-6 py-2 bg-stone-700 text-white font-bold rounded-full no-underline hover:scale-105 hover:shadow-lg transition-all duration-200 ${size === "large" ? "text-xl px-8 py-3" : "text-sm"}`}
      >
        <p>{label}</p>
      </Link>
    </div>
  );
}
