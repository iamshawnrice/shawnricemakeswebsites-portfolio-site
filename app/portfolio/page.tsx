import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Shawn Rice - Portfolio",
};

export default function Portfolio() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Well...this is embarrassing
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Like many in the enterprise world, my work for the last seven or so
          years has been cloistered behind paywalls. And while, I stand behind
          (nearly) every bit of code I've ever shipped, flexing projects I did
          before 2017 would not be an accurate representation of my current
          skill set.
        </p>

        <p>
          So in lieu of a bunch of sites that aren't even accessible on public
          servers anymore, I present some of my thoughts/philosophies/opinions
          with regard to making things happen with code.
        </p>

        <div className="mb-8">
          <h2 className="mb-4 text-xl font-medium tracking-tight">Opinions</h2>

          <h3 className="mb-1 text-lg font-medium tracking-tight">General</h3>

          <p className="m-0">Simple &gt; Clever 99.9% of the time.</p>

          <h3 className="mb-1 text-lg font-medium tracking-tight">HTML</h3>      

          <p className="m-0">Acccessibility matters</p>
          <p className="m-0">Less markup is usually better than more.</p>

          <h3 className="mb-1 text-lg font-medium tracking-tight">CSS</h3>
          
          <p className="m-0">Only be as specific as you need to be.</p>
          <p className="m-0">If your selector is more than 4 elements long, there is probably an opportunity to simplify.</p>
          <p className="m-0">BEM is good.</p>

          <h3 className="mb-1 text-lg font-medium tracking-tight">TypeScript</h3>

          <p className="m-0">Compile time code safety is good. Run time code safety is better. Having both is key.</p>
          <p className="m-0">TypeScript in test files is usually overkill and unnecessarily complicates covering edge cases.</p>
          <p className="m-0">It may not be clear from the previous two statements, but I am pro-TypeScript. It makes refactoring a breeze and helps eliminate stupid mistakes. But I feel there is a point where it stops boosting developer velocity and starts to hinder it. I’m not sure where that point is, but I think it tends to happen when people are being too clever with it. Or maybe the APIs it’s trying to protect are too flexible and that’s where the janky developer experience comes from. Either way, keep it simple.</p>

          <h3 className="mb-1 text-lg font-medium tracking-tight">React</h3>

          <p className="m-0">Keep your components small.</p>
          <p className="m-0">Keep your project organized as flatly as possible.</p>
          <p className="m-0">Don’t use 3rd party libraries unless truly necessary.</p>
          <p className="m-0">Don’t use React to do what the browser can do for you.</p>
          <p className="m-0">Check for performance issues early and often.</p>
          <p className="m-0">Thunks are easier to reason about than epics.</p>
          <p className="m-0">CssModules &gt; any other styling method (though I also enjoy working with Tailwind very much)</p>

          <h3 className="mb-1 text-lg font-medium tracking-tight">Other/Misc</h3>

          <p className="m-0">Everybody has time to help. Everybody is entitled to ask for help.</p>
          <p className="m-0">Read the error message. Google (or ask your favorite AI assistant about) the error message.</p>
          <p className="m-0">Rubber-stamping PRs will bite you in the ass.</p>
          <p className="m-0">QA’s primary job is user advocate.</p>
        </div>
      </div>
    </section>
  );
}
