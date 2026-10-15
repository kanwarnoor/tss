import { div } from "framer-motion/client";
import React from "react";

export default function About() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div
        className={`w-screen h-1/5 bg-stone-100 text-center flex items-center justify-center text-6xl font-extrabold text-stone-700`}
      >
        <p className="flex mr-auto ml-20">About us:</p>
      </div>
      <div
        className={`w-screen h-1/5 bg-stone-200 bg-stone-100 text-center flex items-center justify-center text-xl text-justify px-20 font-extrabold text-stone-600`}
      >
        <p>
          Rooted in the MCA Department of Computer Science at Guru Nanak Dev
          University, TSS is the official student body dedicated to bridging
          academic curiosities with industry-leading innovation.
        </p>
      </div>
      <div
        className={`w-screen h-1/5 bg-stone-300 bg-stone-100 text-center flex items-center justify-center text-xl text-justify px-20 font-extrabold text-stone-500`}
      >
        <p>
          As primary organizers of our extra-curricular landscape, we lead
          hackathons, workshops, and technical fests, ensuring our teams
          contribute specialized expertise to every major event in the
          department.
        </p>
      </div>
      <div
        className={`w-screen h-1/5 bg-stone-400 bg-stone-100 text-center flex items-center justify-center text-xl text-justify px-20 font-extrabold text-stone-300`}
      >
        Though our legacy spans decades, our registration in 2026 marked a new
        era of official recognition and scaled impact across the university.
      </div>
      <div
        className={`w-screen h-1/5 bg-stone-500 bg-stone-100 text-center flex items-center justify- text-xl text-justify px-20 font-extrabold text-stone-200`}
      >
        Diverse teams, one shared horizon - exploring the frontiers of
        what&apos;s possible.
      </div>
    </div>
  );
}
