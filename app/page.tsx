import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/headshot.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={240}
          height={240}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi. I'm Shawn Rice.
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am a web developer based in beautiful Charleston, SC. I am a firm
          believer in the path of least resistance and maintain that the
          simplest solution is the usually the right one. My career started in
          the arts world, so I am well acquainted with communicating and
          collaborating with people from diverse disciplines and backgrounds.
          And it has given me a tremendous amount of empathy for non-technical
          users. 
        </p>
        <p>
          However, the journey from under-employed actor/failing
          real-estate agent to senior-level web developer did not occur
          overnight. It all started when...
        </p>

        <div className="mb-8">
          <header className="text-center">
            <h2 className="mb-1 text-xl font-medium tracking-tight">
              Fish Out of Water
            </h2>
            <small className="mb-2 text-sm">Sometime in 2011</small>
          </header>

          <p>
            Fed up with the gypsy lifestyle of a theater artist, I was working as
            a rental agent for a real estate broker in Brooklyn. One day my boss
            decided that I should make a website for one of our new properties
            (though I had made no indications that I was able to do so). Never one
            to back away from a challenge, I obtained a copy of Dreamweaver and a
            book on HTML. Within a week we had a perfectly horrible little 4 page
            site on our hands. Lucky for me, it worked out: he paid me a couple
            hundred dollars and immediately asked for another. This was what those
            in the world of dramatic literature refer to as the ‘Inciting
            Incident’.
          </p>
        </div>


        <div className="mb-8">
          <header className="text-center">
            <h2 className="mb-1 text-xl font-medium tracking-tight">
              Freelancing Across America
            </h2>
            <small className="mb-2 text-sm">September 2011 - September 2012</small>
          </header>

          <p>
            Once I had a solid grasp on the basics, I decided to bounce around the
            country for a bit: my travels took me from New York to Minnesota then
            Connecticut, Pennsylvania, Maine, up to Alaska, down to Florida, and
            eventually back to New York. All the while designing and building
            WordPress sites for anyone at any price - my only concern was that
            every project gave me the opportunity to learn something new. I made
            sites for actors, singers, voiceover artists, a chocolatier, service
            providers in the fracking industry, a moving company, and a
            cross-dressing Rabbi. I learned many many lessons during this time but
            the two main takeaways were: 1. that my design capabilities were
            limited and 2. that I wanted to learn by working beneath someone more
            knowledgeable than myself.
          </p>
        </div>
      </div>
    </section>
  );
}
