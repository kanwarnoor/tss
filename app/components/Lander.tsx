"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function Lander() {
  return (
    <div className="flex">
      <div className="h-screen w-full flex items-center justify-center gap-10 text-black">
        <p className="text-[18rem] h-52 justify-center items-center  font-extrabold  flex ">
          {["T", "S", "S"].map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: 50, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, x: 0, filter: `blur(${i * 2}px)` }}
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
        <motion.div
          initial={{ opacity: 0, x: -50, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="flex flex-col h-52 p-10 rounded-xl bg-white/10 border-2 border-black/10 backdrop-blur-sm my-auto justify-center items-left"
        >
          <motion.p
            initial={{ opacity: 0, x: -50, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
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
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="logo text-xl font-medium"
          >
            Guru Nanak Dev University
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
              filter: "blur(20px)",
            }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: "easeInOut",
            }}
            className="mt-auto"
          >
            <Button
              href="/register"
              label="Register"
              className="mt-10"
              size="large"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full h-screen absolute -z-10">
        <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.85)_0%,_rgba(255,255,255,0.5)_45%,_transparent_100%)]" />
        <video
          src="/ai.mp4"
          className="w-full h-full object-cover mix-blend-hard-light brightness-100 contrast-1000 hue-rotate-0 overflow-hidden"
          autoPlay
          loop
          muted
          playsInline
          preload="true"
          crossOrigin="anonymous"
        ></video>
      </div>
      <div className="absolute bottom-0 mb-10 text-black  m-auto left-0 right-0 text-center items-center ">
        <motion.p
          initial={{
            opacity: 0,
            y: 25,
            filter: "blur(20px)",
          }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: "easeInOut",
          }}
          className=""
        >
          Where curiosity meets community
        </motion.p>
      </div>
    </div>
  );
}
