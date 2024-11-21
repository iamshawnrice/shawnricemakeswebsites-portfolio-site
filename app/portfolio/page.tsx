import React from "react";
import type { Metadata } from "next";
import { fetchPageById } from "data/page";
import { PageContent } from "components/PageContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Shawn Rice - Portfolio",
};

export default async function Portfolio() {
  const { title, content } = await fetchPageById("portfolio");

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">{title}</h1>

      <PageContent content={content} />
    </section>
  );
}
