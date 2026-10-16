"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-24">
      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-stone-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-stone-200/40 blur-3xl opacity-60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-white/80 backdrop-blur-xl border border-stone-200 rounded-3xl shadow-2xl shadow-stone-200/40 p-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-center mb-8"
          >
            <Link
              href="/"
              className="text-3xl font-extrabold tracking-wide text-stone-900 no-underline logo"
            >
              TSS
            </Link>
            <h1 className="mt-3 text-2xl font-bold text-stone-800 tracking-tight">
              Create your account
            </h1>
            <p className="mt-1.5 text-sm text-stone-500">
              Join the Technical Student Society
            </p>
          </motion.div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label
                htmlFor="register-name"
                className="block text-sm font-semibold text-stone-700 mb-1.5"
              >
                Full Name
              </label>
              <input
                id="register-name"
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-transparent transition-all duration-200 text-sm"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <label
                htmlFor="register-email"
                className="block text-sm font-semibold text-stone-700 mb-1.5"
              >
                Email
              </label>
              <input
                id="register-email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-transparent transition-all duration-200 text-sm"
              />
            </motion.div>

            {/* Student ID */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label
                htmlFor="register-student-id"
                className="block text-sm font-semibold text-stone-700 mb-1.5"
              >
                Student ID
              </label>
              <input
                id="register-student-id"
                type="text"
                placeholder="e.g. MCA2026001"
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-transparent transition-all duration-200 text-sm"
              />
            </motion.div>

            {/* Password */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <label
                htmlFor="register-password"
                className="block text-sm font-semibold text-stone-700 mb-1.5"
              >
                Password
              </label>
              <input
                id="register-password"
                type="password"
                placeholder="Create a strong password"
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-transparent transition-all duration-200 text-sm"
              />
            </motion.div>

            {/* Register Button — disabled, "Coming Soon" */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2"
            >
              <button
                type="button"
                disabled
                className="relative w-full py-3 rounded-xl bg-stone-300 text-stone-500 font-bold text-sm cursor-not-allowed overflow-hidden group"
              >
                <span className="relative z-10">Coming Soon</span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]" />
              </button>
            </motion.div>
          </form>

          {/* Login link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 text-center text-sm text-stone-500"
          >
            Have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-stone-800 hover:text-stone-600 transition-colors duration-200 no-underline underline-offset-2 hover:underline"
            >
              Login instead
            </Link>
          </motion.p>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-center text-xs text-stone-400"
        >
          Technical Student Society · GNDU
        </motion.p>
      </motion.div>
    </div>
  );
}
