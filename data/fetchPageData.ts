import { sql } from "@vercel/postgres";

type PageData = {
    id: string;
    content: string;
    title: string;
}

export const fetchPageData = async (pageId: string) => {
  const result = await sql`
    SELECT * FROM Pages
    WHERE page_id = ${pageId};
  `;

  const pageData = result.rows[0];

  return {
    id: pageData.page_id,
    content: pageData.page_content,
    title: pageData.page_title,
  }
};
