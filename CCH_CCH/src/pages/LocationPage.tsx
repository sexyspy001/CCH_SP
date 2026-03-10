import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, MapPin } from "lucide-react";
import { useEffect } from "react";

interface LocationPageProps {
  service: { platformId: string; name: string; slug: string };
  platform?: { id: string; name: string; slug: string };
  location: string;
}

export default function LocationPage({
  service,
  platform,
  location
}: LocationPageProps) {

  const platformName = platform ? platform.name : "Ecommerce";
  const platformSlug = platform ? `/${platform.slug}` : "/ecommerce";
  const city = location.charAt(0).toUpperCase() + location.slice(1);

  useEffect(() => {

    window.scrollTo(0, 0);

    document.title =
      `${service.name} in ${city} | ${platformName} Experts | Click Commerce Hub`;

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        `Looking for ${service.name.toLowerCase()} in ${city}? Click Commerce Hub provides expert ${platformName} seller services including cataloging, listing optimization, advertising management and ecommerce growth solutions.`
      );
    }

  }, [service.slug, location]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Click Commerce Hub ${service.name}`,
    areaServed: city,
    serviceType: service.name,
    url: `https://clickcommercehub.dpdns.org/${service.slug}-${location}`,
    telephone: "+91-8252265832"
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      <Navbar />

      <main className="pt-24 pb-16">

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">

          <Link to="/" className="hover:text-orange-600">Home</Link>

          <span className="mx-2">/</span>

          <Link to="/our-services" className="hover:text-orange-600">
            Our Services
          </Link>

          <span className="mx-2">/</span>

          <Link to={platformSlug} className="hover:text-orange-600">
            {platformName} Services
          </Link>

          <span className="mx-2">/</span>

          <Link to={`/${service.slug}`} className="hover:text-orange-600">
            {service.name}
          </Link>

          <span className="mx-2">/</span>

          <span className="text-gray-900 font-semibold">
            {city}
          </span>

        </div>

        {/* Hero */}
        <div className="bg-gray-900 py-20 text-white">

          <div className="max-w-6xl mx-auto px-4">

            <Link
              to={`/${service.slug}`}
              className="inline-flex items-center text-orange-400 mb-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to {service.name}
            </Link>

            <h1 className="text-4xl md:text-6xl font-extrabold">

              {platformName} {service.name}

              <span className="block text-orange-500 mt-3 flex items-center gap-4">

                in {city}

                <MapPin className="h-8 w-8 text-orange-500" />

              </span>

            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-2xl">

              Click Commerce Hub provides professional {service.name.toLowerCase()} services
              for businesses and sellers in {city}. Our experts help brands scale
              faster on {platformName} with optimized listings, marketplace strategy,
              and performance-driven growth.

            </p>

            <Link
              to="/contact-click-commerce-hub"
              className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold"
            >
              Get Expert Consultation
            </Link>

          </div>

        </div>

        {/* SEO Content */}

        <div className="max-w-4xl mx-auto px-4 py-16">

          <h2 className="text-3xl font-bold mb-6">
            {service.name} in {city}
          </h2>

          <p className="mb-6">

            Ecommerce sellers in {city} are increasingly expanding into
            online marketplaces. Professional {service.name.toLowerCase()}
            services ensure your products perform better, rank higher,
            and convert more buyers on {platformName}.

          </p>

          <h2 className="text-3xl font-bold mb-6">
            Why Sellers in {city} Need {service.name}
          </h2>

          <p className="mb-6">

            Competition on ecommerce marketplaces is extremely high.
            Sellers in {city} need optimized listings, proper catalog
            management, and strategic marketing to succeed.

          </p>

          <h2 className="text-3xl font-bold mb-6">
            Our Process
          </h2>

          <ul className="list-disc ml-6 mb-6">

            <li>Marketplace account audit</li>
            <li>Keyword research and SEO optimization</li>
            <li>Product listing creation</li>
            <li>Advertising campaign setup</li>
            <li>Performance monitoring</li>

          </ul>

          <h2 className="text-3xl font-bold mb-6">
            Other Locations We Serve
          </h2>

          <ul className="space-y-2">

            <li>
              <Link
                to={`/${service.slug}-delhi`}
                className="text-orange-600"
              >
                {service.name} in Delhi
              </Link>
            </li>

            <li>
              <Link
                to={`/${service.slug}-mumbai`}
                className="text-orange-600"
              >
                {service.name} in Mumbai
              </Link>
            </li>

            <li>
              <Link
                to={`/${service.slug}-bangalore`}
                className="text-orange-600"
              >
                {service.name} in Bangalore
              </Link>
            </li>

          </ul>

        </div>

      </main>

      <Footer />

    </div>
  );
}
