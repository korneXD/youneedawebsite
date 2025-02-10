import fs from "fs";
import path from "path";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Default URL for local development

async function getLastModifiedDate(filePath) {
  filePath = path.join(process.cwd(), filePath);
  try {
    const stats = await fs.promises.stat(filePath);
    return stats.mtime;
  } catch (error) {
    console.error(`Error getting last modified date for ${filePath}:`, error);
    return new Date(); // Return current date if error occurs
  }
}

export default async function sitemap() {
  const pageRoutes = [""];
  const staticRoutes = await Promise.all(
    pageRoutes.map(async (pageRoute) => {
      const lastModified = await getLastModifiedDate(
        `src/app/${pageRoute}/page.js`,
      );
      const page = pageRoute.replace(/\/?\(.*?\)/g, "").replace(/^\/+/, "");
      return {
        url: `${BASE_URL}/${page}`,
        lastModified,
      };
    }),
  );

  const sitemap = [...staticRoutes];

  return sitemap;
}
