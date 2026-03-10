import fs from "fs";

const domain = "https://clickcommercehub.dpdns.org";

const services = [
"amazon-cataloging-service",
"amazon-product-listing-service",
"amazon-account-management-service",
"amazon-ppc-management-service",
"flipkart-cataloging-service",
"flipkart-product-listing-service",
"flipkart-account-management-service",
"meesho-cataloging-service",
"meesho-product-listing-service",
"seo-services-for-ecommerce",
"amazon-seo-services",
"social-media-marketing-for-ecommerce",
"gst-registration-for-ecommerce-sellers"
];

const locations = [
"india","delhi","mumbai","bangalore","hyderabad",
"pune","chennai","kolkata","ahmedabad","surat",
"jaipur","lucknow","patna"
];

let urls = [];

urls.push(`${domain}/`);

services.forEach(service=>{
urls.push(`${domain}/${service}`);
});

services.forEach(service=>{
locations.forEach(city=>{
urls.push(`${domain}/${service}-${city}`);
});
});

let sitemap=`<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap+=`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

urls.forEach(url=>{
sitemap+=`
<url>
<loc>${url}</loc>
</url>`;
});

sitemap+=`\n</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap);

console.log("Sitemap generated successfully");
