import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work
          together or just chat about technology.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button variant="outline" size="lg" asChild>
            <a href="mailto:hello@shawnricemakeswebsites.com" className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              hello@shawnricemakeswebsites.com
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/shawnrice"
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
              href="https://linkedin.com/in/shawnrice"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
