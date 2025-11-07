"use client"

import { motion } from "framer-motion"

type BuildingCardProps = {
  title: string
  location: string
  year: string
  image?: string
}

export function BuildingCard({ title, location, year, image }: BuildingCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition"
    >
      {image && (
        <img src={image} alt={title} className="h-48 w-full object-cover opacity-80 group-hover:opacity-100 transition" />
      )}
      <div className="p-4">
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-neutral-400 text-sm">{location}, {year}</p>
      </div>
    </motion.div>
  )
}
