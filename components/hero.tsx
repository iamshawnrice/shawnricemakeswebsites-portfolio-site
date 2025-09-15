"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Compass, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 mx-auto rounded-full overflow-hidden border-2 border-white w-[300px] h-[300px]">
          <Image src="/images/headshot.jpg" alt="Shawn Rice" width={300} height={300} />
        </div>
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-balance mb-6 leading-tight">
            <span className="text-foreground">Shawn</span> <span className="text-slate-400">Rice</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Hi. I&#39;m a frontend-focused Senior Software Engineer based out of Charleston, SC. I believe in
            simplicity, the power of mentorship, the importance of code-review, the necessity of test coverage, and that
            every decision should be made with the user in mind.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            onClick={scrollToTimeline}
            size="lg"
            className="bg-(--srmw-blue) hover:bg-white text-white hover:text-(--srmw-blue) px-8 py-3 text-lg"
          >
            View My Journey
            <Compass className="ml-2 h-5 w-5" />
          </Button>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:iamshawnrice@gmail.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/iamshawnrice"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://linkedin.com/in/iamshawnrice"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
