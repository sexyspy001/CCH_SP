import { Link } from 'react-router-dom';
import { locations } from '../data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, CheckCircle2, MapPin } from 'lucide-react';
import { useEffect } from 'react';

interface ServicePageProps {
  service: { platformId: string; name: string; slug: string };
  platform?: { id: string; name: string; slug: string };
}

export default function ServicePage({ service, platform }: ServicePageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.slug]);

  const platformName = platform ? platform.name : 'Ecommerce';
  const platformSlug = platform ? `/${platform.slug}` : '/ecommerce';

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
          <span className="text-gray-900 font-medium">{service.name}</span>
        </div>

        {/* Hero Section */}
        <div className="bg-gray-900 py-16 sm:py-24 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to={platformSlug}
              className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to {platformName} Services
            </Link>
            
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block text-orange-500">{platformName}</span>
              <span className="block">{service.name}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-300">
              Expert {service.name.toLowerCase()} tailored specifically for your {platformName} business by Click Commerce Hub, an authorized service provider. We ensure compliance, optimization, and scalable growth.
            </p>
            <div className="mt-8">
              <Link to="/contact-click-commerce-hub" className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg inline-block">
                Get a Free Audit
              </Link>
            </div>
          </div>
        </div>

        {/* Content Section (SEO Optimized) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg prose-orange">
          <h2>Introduction to {service.name} on {platformName}</h2>
          <p>
            In the highly competitive landscape of {platformName}, excelling in {service.name.toLowerCase()} is not just an option; it is a necessity for survival and growth. As an authorized service provider, Click Commerce Hub brings unparalleled expertise to {platformName} {service.name}. We understand that the algorithms, policies, and best practices governing {platformName} are unique and constantly evolving. Our dedicated team of specialists is committed to staying ahead of these changes, ensuring that your brand not only complies with all requirements but also leverages them for maximum advantage.
          </p>

          <h2>Why Sellers Need {service.name}</h2>
          <p>
            Why is {service.name.toLowerCase()} so critical on {platformName}? The answer lies in the platform's sophisticated ecosystem, which rewards sellers who provide an exceptional customer experience and adhere strictly to its guidelines. Effective {service.name.toLowerCase()} directly impacts your seller metrics, which in turn influences your search rankings, Buy Box eligibility, and overall visibility. Neglecting this crucial aspect of your business can lead to suppressed listings, account suspensions, and a significant loss of revenue.
          </p>

          <h2>How Click Commerce Hub Provides {service.name}</h2>
          <p>
            Our approach to {platformName} {service.name} is deeply analytical and highly strategic. We do not believe in one-size-fits-all solutions. Instead, we conduct a thorough audit of your current operations, identify areas for improvement, and develop a customized roadmap designed to achieve your specific business objectives. Whether you are struggling with low visibility, poor conversion rates, logistical bottlenecks, or compliance issues, our comprehensive {service.name.toLowerCase()} services are engineered to overcome these challenges and drive measurable results.
          </p>

          <h2>Benefits of Our Service</h2>
          <ul>
            <li><strong>Increased Visibility:</strong> Optimize your presence to rank higher in {platformName} search results.</li>
            <li><strong>Higher Conversion Rates:</strong> Turn more browsers into buyers with strategic improvements.</li>
            <li><strong>Cost Efficiency:</strong> Reduce wasted spend and optimize your operational costs.</li>
            <li><strong>Risk Mitigation:</strong> Ensure full compliance with {platformName} policies to avoid suspensions.</li>
          </ul>

          <h2>Our Proven Process</h2>
          <p>
            Our process for managing {platformName} {service.name} is meticulous and comprehensive. It begins with a deep dive into your account data, where we analyze historical performance, identify trends, and pinpoint specific pain points. We then benchmark your performance against industry standards and top competitors to uncover hidden opportunities. Based on this analysis, we develop a tailored strategy that outlines specific actions, timelines, and key performance indicators (KPIs).
          </p>
          <p>
            Implementation is where our expertise truly shines. Our team executes the strategy with precision, utilizing advanced tools and proprietary techniques to optimize every aspect of your {service.name.toLowerCase()}. We monitor performance continuously, making data-driven adjustments in real-time to ensure that we are always moving towards your goals.
          </p>

          <h2>Why Choose Click Commerce Hub?</h2>
          <p>
            Choosing the right partner for {platformName} {service.name} is one of the most important decisions you will make for your ecommerce business. As an authorized {platformName} service provider, Click Commerce Hub offers a level of expertise, reliability, and accountability that is unmatched in the industry. We have a proven track record of success, a deep understanding of the platform, and a relentless commitment to our clients' growth.
          </p>
        </div>

        {/* Location SEO Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 rounded-3xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Available Locations for {service.name}</h2>
            <p className="mt-2 text-gray-500">We provide expert {service.name.toLowerCase()} services across major cities in India.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc}
                to={`/${service.slug}-${loc}`}
                className="flex items-center justify-center p-3 bg-white rounded-lg border border-gray-200 hover:border-orange-500 hover:text-orange-600 transition-colors text-sm font-medium capitalize shadow-sm"
              >
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                {loc}
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">How long does it take to see results from {service.name}?</h3>
              <p className="mt-2 text-gray-600">Results vary depending on the current state of your account, but our clients typically start seeing measurable improvements within the first 30 to 60 days of implementing our strategies.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Do you guarantee sales increases?</h3>
              <p className="mt-2 text-gray-600">While we cannot guarantee specific sales figures due to market variables, we do guarantee that our strategies are based on proven data and {platformName} best practices designed to maximize your growth potential.</p>
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
                Ready to optimize your {platformName} {service.name}?
              </h2>
              <p className="mt-4 text-lg leading-6 text-orange-100 max-w-2xl mx-auto">
                Contact our team of authorized experts today to discuss how we can tailor our services to meet your unique business needs.
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
