import fs from "fs";
import {
  platforms,
  allServicePages,
  blogs,
  locations
} from "../src/data.js";

const domain = "https://clickcommercehub.dpdns.org";

let urls = [];

// Homepage
urls.push(`${domain}/`);

// Platform pages
platforms.forEach(p => {
  urls.push(`${domain}/${p.slug}`);
});

// Service pages
allServicePages.forEach(service => {
  urls.push(`${domain}/${service.slug}`);
});

// Location pages
allServicePages.forEach(service => {
  locations.forEach(location => {
    urls.push(`${domain}/${service.slug}-${location}`);
  });
});

// Blog pages
blogs.forEach(blog => {
  urls.push(`${domain}/${blog.slug}`);
});

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

urls.forEach(url => {
  sitemap += `
  <url>
    <loc>${url}</loc>
  </url>`;
});

sitemap += `\n</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap);

console.log("Sitemap generated successfully!");
