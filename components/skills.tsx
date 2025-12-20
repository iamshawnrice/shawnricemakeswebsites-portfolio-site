"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface Skill {
    name: string
    since: number
    end?: number
}

interface Certification {
    name: string
    image: string
    credlyUrl: string
    issuer: string
}

export function Skills() {
    const currentYear = new Date().getFullYear()

    const skills: Skill[] = [
        // Foundational
        { name: "JavaScript", since: 2013 },
        { name: "HTML", since: 2013 },
        { name: "CSS", since: 2013 },
        { name: "Git", since: 2015 },

        // Application
        { name: "React", since: 2017 },
        { name: "TypeScript", since: 2017 },
        { name: "CI/CD", since: 2017 },

        // Platforms & Frameworks
        { name: "Next.js", since: 2023 },
        { name: "Tailwind CSS", since: 2023 },
        { name: "AWS", since: 2023 },
        { name: "Django", since: 2015, end: 2017 },
        { name: "WordPress", since: 2013, end: 2015 },
        { name: "Salesforce Commerce Cloud", since: 2015, end: 2017 }
    ]

    const certifications: Certification[] = [
        {
            name: "Solutions Architect – Associate",
            issuer: "Amazon Web Services",
            image: "/images/certifications/aws-solutions-architect.png",
            credlyUrl: "https://www.credly.com/badges/785f7617-3098-4012-855e-4b0f226d8b2f/public_url"
        },
        {
            name: "Next.js Foundations",
            issuer: "Vercel",
            image: "/images/certifications/nextjs-foundations.png",
            credlyUrl: "https://www.credly.com/badges/944505bc-a064-45bd-9ab9-e7dcf7685d69/public_url"
        },
        {
            name: "Vercel Foundations",
            issuer: "Vercel",
            image: "/images/certifications/vercel-foundations.png",
            credlyUrl: "https://www.credly.com/badges/eca27473-c148-424e-a28c-303c687d5ea8/public_url"
        }
    ]

    const calculateYears = (since: number, end?: number) => {
        const rawYears = end ? end - since : currentYear - since

        if (rawYears >= 10) return "10+"
        if (rawYears >= 8) return "8+"
        if (rawYears >= 5) return "5+"
        return "2+"
    }

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-serif font-bold text-center mb-14">
                    Technical <span className="text-[var(--srmw-blue)]">Experience</span>
                </h2>

                <p className="text-sm text-muted-foreground text-center mb-10">
                    Technologies I’ve used extensively in production environments.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Skills */}
                    <div className="lg:col-span-2 space-y-8">
                        {skills.map(skill => {
                            const years = calculateYears(skill.since, skill.end)

                            return (
                                <div key={skill.name} className="space-y-3 group">
                                    <div className="flex items-center justify-between">
                                        <span className="text-base font-semibold tracking-tight">
                                            {skill.name}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {years} yrs
                                        </span>
                                    </div>

                                    {/* Normalized experience bar */}
                                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                                        <div className="h-full w-full rounded-full bg-gradient-to-r from-[var(--srmw-blue)] to-[var(--srmw-blue)]/70 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Certifications */}
                    <div className="lg:col-span-1">
                        <Card className="h-full">
                            <CardHeader className="pb-2">
                                <h3 className="text-2xl font-serif">Certifications</h3>
                            </CardHeader>
                            <CardContent className="space-y-10">
                                {certifications.map(cert => (
                                    <Link
                                        key={cert.name}
                                        href={cert.credlyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block"
                                    >
                                        <div className="space-y-3">
                                            <div className="relative aspect-square w-full max-w-[180px] mx-auto rounded-xl bg-black/90 shadow-sm group-hover:shadow-md transition-all">
                                                <Image
                                                    src={cert.image}
                                                    alt={cert.name}
                                                    fill
                                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>

                                            <div className="text-center space-y-1">
                                                <p className="text-sm font-medium leading-tight">
                                                    {cert.name}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {cert.issuer}
                                                </p>
                                                <p className="text-[11px] text-muted-foreground italic">
                                                    Focus: production-grade web platforms
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
