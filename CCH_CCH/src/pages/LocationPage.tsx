import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, MapPin } from 'lucide-react';
import { useEffect } from 'react';

interface LocationPageProps {
  service: { platformId: string; name: string; slug: string };
  platform?: { id: string; name: string; slug: string };
  location: string;
}

export default function LocationPage({ service, platform, location }: LocationPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.slug, location]);

  const platformName = platform ? platform.name : 'Ecommerce';
  const platformSlug = platform ? `/${platform.slug}` : '/ecommerce';
  const capitalizedLocation = location.charAt(0).toUpperCase() + location.slice(1);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/our-services" className="hover:text-orange-600">Our Services</Link>
          <span className="mx-2">/</span>
          <Link to={platformSlug} className="hover:text-orange-600">{platformName} Services</Link>
          <span className="mx-2">/</span>
          <Link to={`/${service.slug}`} className="hover:text-orange-600">{service.name}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{capitalizedLocation}</span>
        </div>

        {/* Hero Section */}
        <div className="bg-gray-900 py-16 sm:py-24 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to={`/${service.slug}`}
              className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to {service.name}
            </Link>
            
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block text-orange-500">{platformName} {service.name}</span>
              <span className="block flex items-center gap-4 mt-2">
                in {capitalizedLocation} <MapPin className="h-10 w-10 text-orange-500" />
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-300">
              Expert {service.name.toLowerCase()} tailored specifically for your {platformName} business in {capitalizedLocation}. Click Commerce Hub is your local authorized service provider for scalable growth.
            </p>
            <div className="mt-8">
              <Link to="/contact-click-commerce-hub" className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg inline-block">
                Get a Local Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Content Section (SEO Optimized) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg prose-orange">
          <h2>Top-Rated {platformName} {service.name} in {capitalizedLocation}</h2>
          <p>
            If you are a business owner in {capitalizedLocation} looking to scale your presence on {platformName}, you need a partner who understands both the platform's global algorithms and local market dynamics. Click Commerce Hub provides specialized {service.name.toLowerCase()} services designed to give sellers in {capitalizedLocation} a competitive edge.
          </p>

          <h2>Why Local Sellers Need {service.name}</h2>
          <p>
            The ecommerce landscape is highly competitive. For sellers based in {capitalizedLocation}, effective {service.name.toLowerCase()} directly impacts your seller metrics, search rankings, and overall visibility. Neglecting this crucial aspect can lead to suppressed listings and lost revenue. Our local expertise ensures your business is fully optimized to capture both regional and national demand.
          </p>

          <h2>How Click Commerce Hub Helps {capitalizedLocation} Businesses</h2>
          <p>
            Our approach to {platformName} {service.name} is deeply analytical. We conduct a thorough audit of your current operations, identify areas for improvement, and develop a customized roadmap. Whether you are struggling with low visibility, poor conversion rates, or compliance issues, our comprehensive services are engineered to overcome these challenges.
          </p>

          <h2>Benefits of Partnering With Us</h2>
          <ul>
            <li><strong>Local Expertise:</strong> We understand the unique logistical and market challenges in {capitalizedLocation}.</li>
            <li><strong>Increased Visibility:</strong> Optimize your presence to rank higher in {platformName} search results.</li>
            <li><strong>Higher Conversion Rates:</strong> Turn more browsers into buyers with strategic improvements.</li>
            <li><strong>Risk Mitigation:</strong> Ensure full compliance with {platformName} policies to avoid suspensions.</li>
          </ul>

          <h2>Why Choose Click Commerce Hub?</h2>
          <p>
            Choosing the right partner for {platformName} {service.name} in {capitalizedLocation} is critical. As an authorized {platformName} service provider, Click Commerce Hub offers unmatched expertise and reliability. We have a proven track record of success helping local businesses achieve national scale.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Do you offer in-person consultations in {capitalizedLocation}?</h3>
              <p className="mt-2 text-gray-600">While our primary operations are remote to ensure maximum efficiency and cost-effectiveness for our clients, we do arrange strategic meetings for enterprise clients in {capitalizedLocation} when necessary.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">How long does it take to see results?</h3>
              <p className="mt-2 text-gray-600">Results vary depending on the current state of your account, but our clients typically start seeing measurable improvements within the first 30 to 60 days.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Is Click Commerce Hub authorized by {platformName}?</h3>
              <p className="mt-2 text-gray-600">Yes, we are an authorized service provider, meaning we have passed strict quality checks and adhere to all platform compliance guidelines.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-orange-600 rounded-3xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:p-16 text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Grow Your {capitalizedLocation} Business on {platformName}
              </h2>
              <p className="mt-4 text-lg leading-6 text-orange-100 max-w-2xl mx-auto">
                Contact our team of authorized experts today to discuss how we can tailor our {service.name.toLowerCase()} services to meet your unique needs.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/contact-click-commerce-hub"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-orange-600 bg-white hover:bg-orange-50 shadow-lg hover:shadow-xl transition-all"
                >
                  Get a Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
