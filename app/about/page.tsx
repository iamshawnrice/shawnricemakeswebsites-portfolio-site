
import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Shawn Rice - About",
};

export default function About() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">About</h1>

      <Image
          src="/about.jpg"
          alt="The Rice Family"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={240}
          height={240}
          priority
        />
      <p>I live in Charleston, SC with my wife Heather (she’s the cute one on in the back), son Leonardo (he’s the cute one on the right, having just completed a fun run), and daughter Eliza (she’s the cute one on the left with the pig tails). We are in charge of feeding and entertaining a black Labrador named Red and an orange tabby named CC (though I pretty universally refer to him as Cecil). When not taking care of animals or children, we like to work in the yard, tromp around in the woods, eat delicious food, and visit our favorite place in the US: Western North Carolina. You can learn more about me <a href="https://iamshawnrice.com">here</a> and more about Heather <a href="https://iamheatherrice.com">here</a>.</p>
    </section>
  );
}
