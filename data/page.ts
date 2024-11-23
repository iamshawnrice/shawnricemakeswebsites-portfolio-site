import { sql } from "@vercel/postgres";
import { PageContentT, PageDataT } from "types";

type PageQueryRow = {
  page_id: string;
  page_content: PageContentT[];
  page_title: string;
};

export const fetchPages = async (): Promise<PageDataT[]> => {
  const result = await sql<PageQueryRow>`
    SELECT * FROM Pages;
  `;

  return result.rows.map((pageData) => {
    return {
      id: pageData.page_id,
      content: pageData.page_content,
      title: pageData.page_title,
    };
  });
};

export const fetchPageById = async (pageId: string): Promise<PageDataT> => {
  const result = await sql<PageQueryRow>`
    SELECT * FROM Pages
    WHERE page_id = ${pageId};
  `;

  const pageData = result.rows[0];

  return {
    id: pageData.page_id,
    content: pageData.page_content,
    title: pageData.page_title,
  };
};
