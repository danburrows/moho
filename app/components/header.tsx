"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full flex justify-between items-center px-8 py-6 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-sm sticky top-0 z-50"
    >
      <Link href="/" className="text-xl font-medium tracking-tight text-white">
        Moho
      </Link>
      <nav className="flex gap-6 text-neutral-400 text-sm">
        <Link href="/buildings" className="hover:text-white transition">Buildings</Link>
        <Link href="/about" className="hover:text-white transition">About</Link>
      </nav>
    </motion.header>
  )
}
