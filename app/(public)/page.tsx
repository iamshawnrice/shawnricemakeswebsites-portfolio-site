import Image from "next/image";

export default function Page() {
  return (
    <section className="m-auto max-w-2xl">
      <div className="text-center mb-4">
        <Image
          src="/headshot.jpg"
          alt="Profile photo"
          className="rounded-full mx-auto"
          unoptimized
          width={240}
          height={240}
          priority
        />
      </div>

      <h1 className="mb-8 text-2xl font-medium text-center tracking-tight">
        Hi. I'm Shawn Rice.
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am a software engineer based in beautiful Charleston, SC. I am a
          firm believer in the path of least resistance and maintain that the
          simplest solution is the usually the right one. My career started in
          the arts world, so I am well acquainted with communicating and
          collaborating with people from diverse disciplines and backgrounds.
          And it has given me a tremendous amount of empathy for non-technical
          users.
        </p>
        <p>
          However, the journey from under-employed actor/failing real-estate
          agent to senior-level web developer did not occur overnight. It all
          started when...
        </p>

        <div className="mb-8">
          <header className="text-center">
            <h2 className="mb-1 text-xl font-medium tracking-tight">
              Fish Out of Water
            </h2>
            <small className="mb-2 text-sm">Sometime in 2011</small>
          </header>

          <p>
            Fed up with the gypsy lifestyle of a theater artist, I was working
            as a rental agent for a real estate broker in Brooklyn. One day my
            boss decided that I should make a website for one of our new
            properties (though I had made no indications that I was able to do
            so). Not one to back away from a challenge, I obtained a copy of
            Dreamweaver and a book on HTML. Within a week we had a perfectly
            horrible little 4 page site on our hands. Lucky for me, it worked
            out: he paid me a couple hundred dollars and immediately asked for
            another. This was what those in the world of dramatic literature
            refer to as the ‘Inciting Incident’.
          </p>
        </div>

        <div className="mb-8">
          <header className="text-center">
            <h2 className="mb-1 text-xl font-medium tracking-tight">
              Freelancing Across America
            </h2>
            <small className="mb-2 text-sm">
              September 2011 - September 2012
            </small>
          </header>

          <p>
            Once I had a solid grasp on the basics, I decided to bounce around
            the country for a bit: my travels took me from New York to Minnesota
            then Connecticut, Pennsylvania, Maine, up to Alaska, down to
            Florida, and eventually back to New York. All the while designing
            and building WordPress sites for anyone at any price - my only
            concern was that every project gave me the opportunity to learn
            something new. I made sites for actors, singers, voiceover artists,
            a chocolatier, service providers in the fracking industry, a moving
            company, and a cross-dressing Rabbi. I learned many many lessons
            during this time but the two main takeaways were: 1. that my design
            capabilities were limited and 2. that I wanted to learn by working
            beneath someone more knowledgeable than myself.
          </p>
        </div>

        <div className="mb-8">
          <header className="text-center">
            <h2 className="mb-1 text-xl font-medium tracking-tight">
              Meanwhile Back in the City...
            </h2>
            <small className="mb-2 text-sm">
              September 2012 - February 2013
            </small>
          </header>

          <p>
            Upon returning to New York, I immediately obtained a design
            internship with Magnet Media Films - a video production company
            based in Manhattan. I was able to contribute to a significant amount
            of client deliverables in my 3 months there and learned volumes
            about design for both print and web. To round out my schedule, I
            began freelancing with King Features Syndicate - the company which
            manages the rights to just about every comic strip you might be able
            to think of. Many of the sites were designed by their team, but I
            was able to put my new design skills to work and contributed designs
            to almost half of the fifteen sites I did for them. Some of my
            favorites include Beetle Bailey, Hagar the Horrible, and Olive Oyl.
          </p>
        </div>

        <div className="mb-8">
          <header className="text-center">
            <h2 className="mb-1 text-xl font-medium tracking-tight">
              A Different Kind of Agency
            </h2>
            <small className="mb-2 text-sm">February 2013 - July 2014</small>
          </header>

          <p>
            During my year of travel, I reconnected with a long time friend from
            college who convinced me to move back to Florida and become her
            husband. Well...it may not have played out exactly like that, but
            that‘s a story for a different time. The important detail is that I
            returned to Florida, married a fantastic girl named Heather, and
            began working for a full-service creative agency called Different
            Perspective. My time at Different Perspective gave me experience
            with multi language sites, introduced me to the exciting world of
            ecommerce, and showed me how to manage relationships with clients.
            It also taught me that taking the time to compose good documentation
            is a tiny investment up front that saves hours and hours of emails
            and consultation down the road.
          </p>
        </div>

        <div className="mb-8">
          <header className="text-center">
            <h2 className="mb-1 text-xl font-medium tracking-tight">
              There’s No I in Team
            </h2>
            <small className="mb-2 text-sm">July 2014 - February 2016</small>
          </header>

          <p>
            The agency work was fast paced and exciting, but I felt as though I
            was missing out by being the only developer in the room. I spent the
            next two and a half years working with two great teams at Izea and
            Junyo. I learned the importance of code standards, the fine art of
            collaboration via GitHub, and the pain of tech debt. I had the
            opportunity to work with a great variety of technologies including
            Ruby on Rails, Bootstrap, Django, Backbone, Angular, Highcharts and
            a little bit of Node. It was truly inspiring to be surrounded by so
            many people who were committed to pushing their skills further and
            doing good work.
          </p>
        </div>

        <div className="mb-8">
          <header className="text-center">
            <h2 className="mb-1 text-xl font-medium tracking-tight">
              Ecommerce in the Holy City
            </h2>
            <small className="mb-2 text-sm">
              February 2016 - December 2018
            </small>
          </header>

          <p>
            Seeking an exit from Florida before we started our family, Heather
            and I felt the pull of Charleston in a big way - the thriving tech
            scene, active music community, and phenomenal restaurants made it
            the perfect place to settle down and start a family. Blue Acorn (now
            Blue Acorn iCi) gave me the opportunity to work on a great team with
            some high profile clients via the Salesforce Commerce Cloud
            platform. It was also the first time I worked with proprietary
            software - instilling within me a profound appreciation for the open
            source world.
          </p>
        </div>

        <div className="mb-8">
          <header className="text-center">
            <h2 className="mb-1 text-xl font-medium tracking-tight">
              Talking to the Future
            </h2>
            <small className="mb-2 text-sm">
              December 2018 - February 2020
            </small>
          </header>

          <p>
            Feeling like I was being left behind by a rapidly evolving industry,
            I set upon learning React, Redux, and Typescript in my spare time.
            As soon as I had a firm grasp on them, I sought a position that
            would elevate my skills beyond jQuery enhanced server-rendered apps.
            And that is how I found XAPPMedia. XAPPMedia is helping to define
            what is possible with voice-powered software (Siri, Alexa, and
            Google Assistant). During my time with them, I became thoroughly
            immersed in the entire lifecycle of the modern development stack:
            from wireframing and defining requirements, to development and
            testing, all the way to deployment via CICD.
          </p>
        </div>

        <div className="mb-8">
          <header className="text-center">
            <h2 className="mb-1 text-xl font-medium tracking-tight">
              Tying it all Together
            </h2>
            <small className="mb-2 text-sm">March 2020 - September 2020</small>
          </header>

          <p>
            An opportunity to work with a long-time mentor presented itself and
            I had to jump at the chance. Mokriya is a globally distributed
            consultancy that provides design, development, and project
            management expertise to its clients. It is also a great place to
            work. I had the opportunity to contribute in meaningful ways to
            products that help people while collaborating with team members that
            are literally all over the planet. It taught me so much about the
            importance of clarity in both written and verbal communication, the
            effectiveness of linters and coding standards to keep everyone on
            the same page, and the power of distributed teams.
          </p>
        </div>

        <div className="mb-8">
          <header className="text-center">
            <h2 className="mb-1 text-xl font-medium tracking-tight">
              Hitting the Mark
            </h2>
            <small className="mb-2 text-sm">
              September 2020 - November 2023
            </small>
          </header>

          <p>
            After my project with Mokriya was complete, I wanted to work on
            something big. Like mission-critical, life-saving, make the world a
            better place, big. Enter Mark43. During my time here, I have learned
            how to responsibly make significant changes to an app that runs
            24/7, the value of mentorship for both the mentor and mentee, what
            to look for when interviewing candidates, and how to juggle tech
            debt, user-experience, and just plain getting things done. It was by
            far the most challenging role I had faced in my career, but also the
            most fulfilling.
          </p>
        </div>

        <div className="mb-8">
          <header className="text-center">
            <h2 className="mb-1 text-xl font-medium tracking-tight">
              Move Fast and Ship Things
            </h2>
            <small className="mb-2 text-sm">
              November 2023 - This Very Day
            </small>
          </header>

          <p>
            After three years in the enterprise world, I had the itch to move
            fast. That's how I found Artisan Studios; a consultancy positively
            brimming with intelligent, passionate people who are great at what
            they do. My time with Artisan has given me the opportunity to get
            hands-on experience with AWS and Next.js. And I have had the
            pleasure of working with one of the biggest brands in fast-service
            restaurants (hint: it's the one who's marketing team is seemingly
            run by semi-literate cows).
          </p>
        </div>
      </div>
    </section>
  );
}
