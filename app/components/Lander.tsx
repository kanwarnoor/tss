"use client";

import { motion } from "framer-motion";
import Button from "./Button";

const letters = ["T", "S", "S"];

export default function Lander() {
  return (
    <div className="h-screen w-full flex items-center justify-center gap-10">
      <p className="text-[15rem] font-extrabold  flex">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, x: 50, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, filter: `blur(${i * 2}px)` }}
            transition={{
              duration: 1,
              delay: i * 0.15,
              ease: "easeOut",
            }}
            className="inline-block logo"
          >
            {letter}
          </motion.span>
        ))}
      </p>
      <div className="flex flex-col">
        <motion.p
          initial={{ opacity: 0, x: -50, filter: "blur(20px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="logo text-3xl font-extrabold"
        >
          Technical Student Society
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -25, filter: "blur(20px)" }}
          animate={{ opacity: 0.5, x: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: "easeInOut",
          }}
          className="logo text-xl"
        >
          Guru Nanak Dev University
        </motion.p>
        {/* <Button href="/register" label="Register" /> */}
      </div>

     
    </div>
  );
}
