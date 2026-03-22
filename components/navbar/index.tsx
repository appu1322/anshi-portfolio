"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import Resume from "../resume";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      {/* Navbar */}
      <motion.nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-lg font-bold">
            Anshi<span className="text-blue-500">.dev</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Resume Button (Desktop Only) */}
            <Resume />

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md border border-black/10 dark:border-white/10"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-xs z-50 bg-white dark:bg-black shadow-xl transform transition-transform ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="h-16 flex items-center justify-between px-5 border-b border-black/10 dark:border-white/10">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-8 gap-6 text-lg font-medium">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 px-4 py-3 rounded-lg bg-blue-500 text-white text-center font-semibold"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}
