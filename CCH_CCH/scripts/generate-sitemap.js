import fs from "fs";

const domain = "https://clickcommercehub.dpdns.org";

/* services */
const services = [
"amazon-cataloging-service",
"amazon-listing-optimization-service",
"amazon-product-listing-service",
"amazon-account-management-service",
"amazon-advertising-optimization-service",
"amazon-ppc-management-service",
"amazon-a-plus-content-service",
"amazon-brand-store-design-service",
"flipkart-cataloging-service",
"flipkart-product-listing-service",
"flipkart-account-management-service",
"meesho-cataloging-service",
"meesho-product-listing-service",
"seo-services-for-ecommerce",
"amazon-seo-services",
"social-media-marketing-for-ecommerce",
"gst-registration-for-ecommerce-sellers",
"ecommerce-business-consulting"
];

/* locations */
const locations = [
"india","delhi","mumbai","bangalore","hyderabad","pune","chennai","kolkata",
"ahmedabad","surat","jaipur","lucknow","kanpur","nagpur","indore","thane",
"bhopal","visakhapatnam","patna","vadodara","ludhiana","agra","nashik",
"faridabad","meerut","rajkot","varanasi","srinagar","amritsar"
];

/* platform pages */
const platforms = [
"amazon-seller-services",
"flipkart-seller-services",
"meesho-seller-services",
"myntra-seller-services",
"snapdeal-seller-services",
"ajio-seller-services",
"jiomart-seller-services"
];

/* blog pages */
const blogs = [
"how-to-start-selling-on-amazon-india",
"amazon-seller-registration-guide",
"how-to-create-amazon-product-listing",
"amazon-advertising-beginners-guide",
"how-to-rank-products-on-amazon",
"flipkart-seller-onboarding-guide",
"meesho-seller-registration-guide"
];

let urls = [];

/* homepage */
urls.push(`${domain}/`);

/* platform pages */
platforms.forEach(p=>{
urls.push(`${domain}/${p}`);
});

/* service pages */
services.forEach(service=>{
urls.push(`${domain}/${service}`);
});

/* location pages */
services.forEach(service=>{
locations.forEach(city=>{
urls.push(`${domain}/${service}-${city}`);
});
});

/* blog pages */
blogs.forEach(blog=>{
urls.push(`${domain}/${blog}`);
});

/* build sitemap */
let sitemap=`<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap+=`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

urls.forEach(url=>{
sitemap+=`
<url>
<loc>${url}</loc>
</url>`;
});

sitemap+=`\n</urlset>`;

/* write file */
fs.writeFileSync("./public/sitemap.xml", sitemap);

console.log("Sitemap generated successfully");
