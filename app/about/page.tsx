import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { fetchPageData } from "data/fetchPageData";

export const metadata: Metadata = {
  title: "About",
  description: "Shawn Rice - About",
};

export default async function About() {
  const {title, content} = await fetchPageData('about');

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">{title}</h1>

      {
        content.map((block) => {
          const { content, tag } = block;

          switch (tag) {
            case "img": 
              return (
                <Image
                  src={content.src}
                  alt={content.alt}
                  className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
                  unoptimized
                  width={content.width}
                  height={content.height}
                  priority
                />
              );
            case "p": 
            const markup = { __html: content };
            return <p dangerouslySetInnerHTML={markup} />;
            default:
              break;
          }
        })
      }
    </section>
  );
}
