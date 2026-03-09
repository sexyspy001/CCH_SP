import { Link } from 'react-router-dom';
import { allServicePages } from '../data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

interface PlatformPageProps {
  platform: { id: string; name: string; slug: string };
}

export default function PlatformPage({ platform }: PlatformPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [platform.slug]);

  const platformServices = allServicePages.filter(s => s.platformId === platform.id);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/ecommerce" className="hover:text-orange-600">Ecommerce Services</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{platform.name} Services</span>
        </div>

        {/* Hero Section */}
        <div className="bg-orange-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">{platform.name}</span>
              <span className="block text-orange-600">Management Services</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
              Click Commerce Hub is your trusted, quality-checked partner for scaling your brand on {platform.name}. We provide end-to-end solutions to maximize your sales and streamline operations.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="#contact" className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg">
                Get Started with {platform.name}
              </a>
            </div>
          </div>
        </div>

        {/* Content Section (SEO Optimized) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg prose-orange">
          <h2>About {platform.name} Marketplace</h2>
          <p>
            {platform.name} is one of the most dynamic and rapidly growing marketplaces in the digital ecosystem. For independent brands, retailers, and manufacturers, establishing a strong presence on {platform.name} is a critical step toward reaching a massive, highly engaged customer base. The platform offers unparalleled reach, robust infrastructure, and a suite of tools designed to help sellers succeed. However, navigating its complex algorithms, strict compliance policies, and intense competition requires specialized knowledge and a strategic approach.
          </p>

          <h2>Advantages of Selling on {platform.name}</h2>
          <p>
            Selling on {platform.name} provides numerous advantages that can exponentially accelerate your business growth. First and foremost is access to millions of active buyers who trust the platform for their daily shopping needs. This built-in trust translates to higher conversion rates compared to standalone ecommerce websites. Additionally, {platform.name} offers advanced fulfillment networks, allowing you to leverage their logistics infrastructure to deliver products quickly and reliably to customers across the country, and even internationally.
          </p>
          <p>
            Furthermore, the platform provides powerful advertising tools that enable you to target specific customer demographics, search queries, and competitor products. By utilizing these tools effectively, you can significantly increase your product visibility and drive targeted traffic to your listings, resulting in a higher return on investment (ROI).
          </p>

          <h2>Requirements to Become a {platform.name} Seller</h2>
          <p>
            To begin your journey on {platform.name}, you must meet several key requirements. These typically include having a registered business entity, a valid GSTIN (Goods and Services Tax Identification Number), an active bank account in the name of the business, and a clear understanding of the platform's seller policies. You will also need high-quality product images, detailed product descriptions, and a reliable supply chain to ensure you can meet customer demand and maintain healthy seller metrics.
          </p>

          <h2>The Seller Onboarding Process</h2>
          <p>
            The onboarding process can be intricate, involving multiple steps from account creation and brand registry to cataloging and initial inventory shipment. A single mistake during this critical phase can lead to delays, listing suppressions, or even account suspension. This is why many brands choose to partner with a specialized service provider like Click Commerce Hub to ensure a smooth, error-free launch.
          </p>

          <h2>Common Seller Challenges</h2>
          <p>
            Even established sellers face ongoing challenges on {platform.name}. These include managing intense price competition, optimizing advertising campaigns to maintain profitability, dealing with complex tax and compliance regulations, and navigating the ever-changing search algorithms. Additionally, managing inventory levels to prevent stockouts while avoiding excess storage fees requires precise forecasting and logistical expertise.
          </p>

          <h2>How Click Commerce Hub Helps {platform.name} Sellers</h2>
          <p>
            As a <strong>specialized {platform.name} service provider</strong>, Click Commerce Hub has passed rigorous quality checks and possesses deep, insider knowledge of the platform. We act as an extension of your team, providing end-to-end management services that cover every aspect of your {platform.name} business. From initial onboarding and SEO-optimized cataloging to advanced PPC management and account reinstatement, we have the expertise to overcome any challenge and drive sustainable growth.
          </p>
          <p>
            Our data-driven strategies are tailored to your specific brand goals. We don't just aim for short-term sales spikes; we focus on building a resilient, highly profitable business on {platform.name}. By partnering with us, you gain access to proprietary tools, dedicated account managers, and a team of experts committed to your success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our {platform.name} Services</h2>
            <p className="mt-4 text-lg text-gray-500">Explore our comprehensive range of specialized services tailored for {platform.name}.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformServices.length > 0 ? (
              platformServices.map((service) => (
                <Link
                  key={service.slug}
                  to={`/${service.slug}`}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {service.name}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <p className="text-sm text-gray-500">
                    Professional {service.name.toLowerCase()} optimized for {platform.name} sellers.
                  </p>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-8 text-gray-500">
                <p>Detailed services for {platform.name} are currently being updated. Please contact us for a full list of capabilities.</p>
                <Link to="/contact-click-commerce-hub" className="text-orange-600 font-medium hover:underline mt-2 inline-block">Contact Us</Link>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Are you a specialized {platform.name} partner?</h3>
              <p className="mt-2 text-gray-600">Yes, Click Commerce Hub is a specialized service provider. We have passed all necessary quality checks and compliance audits required by {platform.name}.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Do you handle end-to-end management?</h3>
              <p className="mt-2 text-gray-600">Absolutely. We manage everything from initial onboarding and cataloging to daily operations, advertising optimization, and inventory management.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">How do I get started?</h3>
              <p className="mt-2 text-gray-600">Simply fill out the contact form below or reach out to us via phone or email. Our team will schedule a free consultation to discuss your specific needs and create a customized growth plan.</p>
            </div>
          </div>
        </div>

        {/* Lead Capture / CTA */}
        <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gray-900 rounded-3xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:p-16 text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to dominate {platform.name}?
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-300 max-w-2xl mx-auto">
                Get a free audit of your current {platform.name} account or a strategic roadmap for your new launch.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/contact-click-commerce-hub"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-gray-900 bg-white hover:bg-orange-50 shadow-lg transition-all"
                >
                  Book Your Free Consultation
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
