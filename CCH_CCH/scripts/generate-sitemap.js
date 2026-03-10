import fs from "fs";

const domain = "https://clickcommercehub.dpdns.org";

/* IMPORTANT
Since Node can't import TypeScript easily during build,
we define the SEO pages here directly.
*/

const services = [
"amazon-cataloging-service",
"amazon-product-listing-service",
"amazon-account-management-service",
"amazon-advertising-optimization-service",
"amazon-ppc-management-service",
"amazon-a-plus-content-service",
"amazon-brand-store-design-service",
"flipkart-cataloging-service",
"flipkart-product-listing-service",
"flipkart-account-management-service",
"flipkart-advertising-service",
"meesho-cataloging-service",
"meesho-product-listing-service",
"seo-services-for-ecommerce",
"amazon-seo-services",
"social-media-marketing-for-ecommerce",
"email-marketing-for-ecommerce",
"content-marketing-for-ecommerce",
"gst-registration-for-ecommerce-sellers",
"gst-compliance-for-sellers"
];

const locations = [
"india","delhi","mumbai","bangalore","hyderabad",
"pune","chennai","kolkata","ahmedabad","surat",
"jaipur","lucknow","patna","noida","gurgaon"
];

const blogs = [
"how-to-start-selling-on-amazon-india",
"amazon-seller-registration-guide",
"how-to-create-amazon-product-listing",
"amazon-advertising-beginners-guide",
"how-to-rank-products-on-amazon"
];

let urls = [];

// homepage
urls.push(`${domain}/`);

// service pages
services.forEach(service=>{
  urls.push(`${domain}/${service}`);
});

// location pages
services.forEach(service=>{
  locations.forEach(location=>{
    urls.push(`${domain}/${service}-${location}`);
  });
});

// blog pages
blogs.forEach(blog=>{
  urls.push(`${domain}/${blog}`);
});

// build xml
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

urls.forEach(url=>{
  sitemap += `
  <url>
    <loc>${url}</loc>
  </url>`;
});

sitemap += `\n</urlset>`;

// write sitemap
fs.writeFileSync("./public/sitemap.xml", sitemap);

console.log("Sitemap generated successfully");
