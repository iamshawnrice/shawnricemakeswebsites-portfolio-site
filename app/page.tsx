import { Hero } from "@/components/hero"
import { Timeline } from "@/components/timeline"
import { Footer } from "@/components/footer"
import { Skills } from "@/components/skills"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Timeline />
      <Skills />
      <Footer />
    </main>
  )
}
