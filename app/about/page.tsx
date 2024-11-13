import type { Metadata } from "next";
import React from "react";
import { fetchPageData } from "data/fetchPageData";
import { PageContent } from "components/PageContent";

export const metadata: Metadata = {
  title: "About",
  description: "Shawn Rice - About",
};

export default async function About() {
  const { title, content } = await fetchPageData("about");

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">{title}</h1>

      <PageContent content={content} />
    </section>
  );
}
