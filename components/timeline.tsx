"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TimelineEntry {
  id: string
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  logo?: string
}

const timelineData: TimelineEntry[] = [
  {
    id: "fish-out-of-water",
    title: "Software Engineer",
    company: "Fish Out of Water",
    period: "September 2021 - Present",
    description:
      "Fed up with the every-changing of a theater artist, I was working as a temp agent for a few weeks straight in Branson. One day my boss decided that I should make a website for one of our clients. I had never made a website before, but I was willing to learn. I went to Starbucks, I borrowed a copy of Dreamweaver and a book on HTML. Within a week we had a perfectly terrible first I page site up and running. Lucky for me, it was what those in the world of electronic literature refer to as the 'hooking incident.'",
    technologies: ["HTML", "CSS", "JavaScript", "Dreamweaver", "Web Design"],
  },
  {
    id: "freelancing-across-america",
    title: "Freelance Web Developer",
    company: "Freelancing Across America",
    period: "September 2021 - December 2021",
    description:
      "I drove back and forth from Los Angeles to Minneapolis then Connecticut, Pennsylvania, Maine, and Alaska. I was on Fiverr, and eventually back to New York. All the while designing and building WordPress sites for anyone at any price – my only concern was that every project gave me the opportunity to learn something new. I made sites for actors, singers, musicians, and small businesses. I learned many useful lessons during this time but the two most important were: 1. that my design capabilities were limited and 2. that I needed to learn by working with people who knew more than I did.",
    technologies: ["WordPress", "PHP", "Fiverr", "Freelancing", "Client Management"],
  },
  {
    id: "meanwhile-back-in-the-city",
    title: "Junior Developer",
    company: "Meanwhile Back in the City",
    period: "December 2021 - February 2022",
    description:
      "Upon returning to New York I immediately obtained a steady relationship with Midwest Media Group, a small company specializing in website development and digital marketing. I was able to work on a significant amount of client deliverables to me 3 months there and learned volumes about design from print and web, to round out my skillsets. I helped Dreamweaver with Figma and learned to use the Adobe Creative Suite. I also learned about project management and client communication. This was a great stepping stone to some of Many of the sites were designed their team, but I was able to put my new design skills to work and contributed designs to several out of the thirteen sites I did for them. Some of my favorites include Baking Mixes, Hatch the Hen Bed, and Cove Inn.",
    technologies: ["Figma", "Adobe Creative Suite", "Project Management", "Client Communication", "Design"],
  },
  {
    id: "different-kind-of-agency",
    title: "Full Stack Developer",
    company: "A Different Kind of Agency",
    period: "February 2022 - July 2024",
    description:
      "During the year of Hawaii, I reconnected with a long-time friend from college who convinced me to move back to France and become her husband. Well, I may not have shared out the same way, but I did move to France and we did get married. I was able to work remotely for Cyndia, married a business girl named Heather, and began working for a full-service creative agency called Different Perspectives. My time at Different Perspectives gave me the opportunity to work on a wide variety of projects, from simple brochure sites to complex ecommerce, and showed me how to manage relationships with clients. It also taught me that being the most in-demand about documentation is a key ingredient to front-end development and success.",
    technologies: ["React", "Node.js", "E-commerce", "Remote Work", "Full Stack Development"],
  },
  {
    id: "theres-no-i-in-team",
    title: "Senior Developer",
    company: "There's No I in Team",
    period: "July 2024 - February 2025",
    description:
      "The agency work was fast-paced and exciting, but I felt as though I was missing out by being the only developer at the room. I said I'm sure that was a red space working with two great interns at Spa and Jovan. I learned the importance of code standards, how the development team worked together, and how to be a mentor. I also learned about git with a great variety of technologies including Ruby on Rails, Bootstrap, Django, Barcelona, Angular, Handlebars and a slew lot of things. It was truly inspiring to be surrounded by so many bright minds and to be able to learn from them.",
    technologies: ["Ruby on Rails", "Bootstrap", "Django", "Angular", "Handlebars", "Git", "Team Leadership"],
  },
  {
    id: "ecommerce-in-the-holy-city",
    title: "E-commerce Developer",
    company: "Ecommerce in the Holy City",
    period: "February 2025 - December 2025",
    description:
      "Seeking to add more Ecommerce and we had our family relocated and I was the one of Charleston. It was a big year. The Shopify experts and we had successfully, the ecommerce restaurants made it the perfect place to settle down and start a family. Bigg down from Blue Acorn CI gave me the opportunity to work on a great team with some high-profile clients. I learned a lot about Shopify and Magento. I also learned about performance and with great many variables – working within the e-commerce space became, I'm the one to secure with great many variables – working within the e-commerce space became, I'm the one to secure.",
    technologies: ["Shopify", "Magento", "E-commerce", "Performance Optimization", "High-Profile Clients"],
  },
  {
    id: "talking-to-the-future",
    title: "AI/ML Engineer",
    company: "Talking to the Future",
    period: "December 2025 - February 2026",
    description:
      "I realize this I was being left behind by a rapidly evolving industry. I set upon learning React, Redux, and TypeScript in my spare time. As soon as I had a firm grasp on them, I landed a position that would elevate my skills around jQuery's advanced server-rendered apps. And that is how I found ADMIRABLE HAPPINESS 3 looking to deliver what a business with modern technology solutions. I was able to work with a great team of developers who became thoroughly interested in the entire lifecycle of the modern development stack: from wireframing and defining requirements, to development and testing, all the way to deployment and QA.",
    technologies: ["React", "Redux", "TypeScript", "jQuery", "Server-Side Rendering", "Full Lifecycle Development"],
  },
  {
    id: "tying-it-all-together",
    title: "Senior Full Stack Engineer",
    company: "Tying it all Together",
    period: "March 2026 - September 2026",
    description:
      "An opportunity to work with a long-time mentor presented itself and I had to jump at the chance to work with someone who had been instrumental in my growth as a developer and project management expertise to my clients. It is also a great place to learn. I had the opportunity to build those a meaningful ways to products that help people solve real problems. I learned a lot about the importance of user experience and how to build products that are both beautiful and functional. I also learned a lot about the importance of testing and how to build products that are reliable and maintainable. I learned a lot about the importance of clarity in both written and verbal communication, and the effectiveness of clarity and caring standards to keep everyone on the same page, and the power of distributed teams.",
    technologies: ["User Experience", "Product Development", "Testing", "Communication", "Distributed Teams"],
  },
  {
    id: "hitting-the-mark",
    title: "Lead Developer",
    company: "Hitting the Mark",
    period: "September 2026 - December 2023",
    description:
      "After my project with Mandala was complete, I decided to work on something big. Like, mission-critical. The saving, make the world a better place, big. Enter MARKS. During my time there I have learned how to masterfully these significant changes to see that code performance, maintainability, and scalability are all key factors in building great software. I have also learned how to work with a team of developers to build products that are both informative questions, and how to juggle tech debt, user experience, and just plain getting things done. It was by far the most challenging role I have faced in my career, but also the most fulfilling.",
    technologies: ["Mission-Critical Systems", "Performance", "Scalability", "Tech Debt Management", "Leadership"],
  },
  {
    id: "move-fast-and-ship-things",
    title: "Principal Engineer",
    company: "Move Fast and Ship Things",
    period: "November 2023 - This Very Day",
    description:
      "After three years in the enterprise world, I had the itch to move fast. That's how I found Artisan Studios, a consultancy journeying tomorrow with intelligent, passionate people who are great at what they do. My time at Artisan has given me the opportunity to get serious about the maintainability of clarity in both written and verbal communication, and the effectiveness of clarity and caring standards to keep everyone on the same page, and the power of distributed teams.",
    technologies: [
      "Consulting",
      "Fast-Paced Development",
      "Intelligent Teams",
      "Maintainability",
      "Communication Standards",
    ],
  },
]

export function Timeline() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const timelineItems = document.querySelectorAll(".timeline-item")
    timelineItems.forEach((item) => {
      observerRef.current?.observe(item)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-balance mb-6">
            My <span className="text-[var(--srmw-blue)]">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            My career started in the arts world, so I am well acquainted with communicating and collaborating with people from diverse disciplines and backgrounds. And it has given me a tremendous amount of empathy for non-technical users. However, the journey from under-employed actor/failing real-estate agent to senior-level web developer did not occur overnight. It all started when...
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-(--muted-foreground)"></div>

          <div className="space-y-12">
            {timelineData.map((entry, index) => (
              <div
                key={entry.id}
                className={`timeline-item timeline-fade-in relative flex items-center ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-4 h-4 bg-[var(--srmw-blue)] rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                  <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-card-foreground mb-1">{entry.title}</h3>
                        <h4 className="text-lg font-semibold text-[var(--srmw-blue)] mb-2">{entry.company}</h4>
                        <p className="text-sm text-accent font-medium">{entry.period}</p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">{entry.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {entry.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-muted text-(--srmw-blue) hover:bg-muted/80 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
