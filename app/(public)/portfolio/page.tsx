import React from "react";
import type { Metadata } from "next";
import { fetchPageById } from "data/page";
import { PageContent } from "lib/components/PageContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Shawn Rice - Portfolio",
};

export default async function Portfolio() {
  const { content, title } = await fetchPageById("portfolio");

  return (
    <section>
      <div className="m-auto max-w-2xl">
        <h1 className="mb-8 text-2xl font-medium tracking-tight">{title}</h1>
        <PageContent content={content} />
      </div>
    </section>
  );
}
