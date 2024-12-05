import type { Metadata } from "next";
import React from "react";
import { fetchPageById } from "data/page";
import { PageContent } from "lib/components/PageContent";

export const metadata: Metadata = {
  title: "About",
  description: "Shawn Rice - About",
};

export default async function About() {
  const { content } = await fetchPageById("about");

  return (
    <section>
      <div className="m-auto max-w-2xl text-center">
        <PageContent content={content} />
      </div>
    </section>
  );
}
