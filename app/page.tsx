"use client"

import { Header } from "./components/header"
import { BuildingCard } from "./components/building-card"

const buildings = [
  { title: "Sugden House", location: "Watford", year: "1955", image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Sugden_House.jpg" },
  { title: "The Economist Building", location: "London", year: "1964", image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Economist_Building_London.jpg" },
  { title: "Hunstanton School", location: "Norfolk", year: "1954", image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Hunstanton_School.jpg" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tight mb-8">Modern Houses of Britain</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {buildings.map((b) => (
            <BuildingCard key={b.title} {...b} />
          ))}
        </div>
      </section>
    </main>
  )
}
