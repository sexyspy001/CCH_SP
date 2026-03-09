import { Link } from 'react-router-dom';
import { ecommercePlatforms } from '../data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, ShoppingCart, Package, TrendingUp, ShieldCheck } from 'lucide-react';
import { useEffect } from 'react';

export default function EcommerceMainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packages = [
    {
      title: 'Amazon Onboarding Essentials',
      icon: <Package className="h-6 w-6 text-orange-600" />,
      description: 'Everything you need to launch successfully on Amazon. Includes account setup, brand registry, SEO-optimized cataloging for up to 50 SKUs, and initial FBA shipment creation.',
      cta: 'Learn More'
    },
    {
      title: 'Digital Marketing Growth Package',
      icon: <TrendingUp className="h-6 w-6 text-orange-600" />,
      description: 'Accelerate your sales with targeted advertising. Includes comprehensive PPC campaign setup, keyword research, daily bid optimization, and weekly performance reporting.',
      cta: 'Learn More'
    },
    {
      title: 'Comprehensive Account Management',
      icon: <ShieldCheck className="h-6 w-6 text-orange-600" />,
      description: 'A fully managed solution for established brands. We handle daily operations, inventory forecasting, dispute resolution, advertising, and strategic growth planning.',
      cta: 'Learn More'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-orange-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Ecommerce Services</span>
              <span className="block text-orange-600">Platform Management</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
              Comprehensive end-to-end management for all major ecommerce marketplaces. We help you scale your brand, optimize your listings, and maximize your revenue.
            </p>
          </div>
        </div>

        {/* Popular Service Packages */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Popular Service Packages</h2>
            <p className="mt-4 text-lg text-gray-500">Tailored solutions designed to meet your brand at every stage of growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all flex flex-col">
                <div className="p-6 border-b border-gray-50 bg-orange-50/50 flex items-center gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    {pkg.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{pkg.title}</h3>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-6 flex-1">{pkg.description}</p>
                  <Link 
                    to="/contact-click-commerce-hub" 
                    className="inline-flex items-center justify-center w-full px-4 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 font-medium transition-colors"
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Our Services (1500+ words simulation) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg prose-orange border-t border-gray-100">
          <h2>Transforming Your Ecommerce Presence</h2>
          <p>
            In today's hyper-competitive digital landscape, establishing a robust presence across multiple ecommerce platforms is no longer optional; it is a critical imperative for brand survival and growth. At Click Commerce Hub, we understand that managing multiple marketplaces—each with its own unique algorithms, policies, and customer behaviors—can be an overwhelming task for any business. That is why we offer comprehensive, end-to-end ecommerce management services designed to take the burden off your shoulders and drive measurable, sustainable growth.
          </p>
          <p>
            Our approach to ecommerce management is holistic and data-driven. We do not simply list your products and hope for the best. Instead, we act as a strategic extension of your team, deeply integrating with your business objectives to craft tailored strategies that resonate with your target audience. From the initial stages of onboarding and cataloging to the complexities of advertising optimization, inventory management, and international expansion, our team of seasoned experts handles every facet of your ecommerce operations with precision and care.
          </p>

          <h3>The Complexity of Multi-Channel Selling</h3>
          <p>
            Selling on platforms like Amazon, Flipkart, Meesho, and Myntra presents a unique set of challenges. Each marketplace operates as its own ecosystem. What works on Amazon may not necessarily yield the same results on Flipkart. The search algorithms differ, the advertising platforms have distinct nuances, and the fulfillment requirements can vary significantly. Navigating this complex web requires a deep, specialized understanding of each platform's architecture.
          </p>
          <p>
            This is where Click Commerce Hub excels. As a specialized service provider for leading ecommerce platforms, we possess insider knowledge and access to advanced tools that give our clients a decisive competitive edge. We stay abreast of the latest policy changes, algorithm updates, and emerging trends, ensuring that your brand is always positioned for maximum visibility and conversion. Our proactive approach minimizes the risk of account suspensions, listing suppressions, and other common pitfalls that can derail your ecommerce success.
          </p>

          <h3>Our Core Ecommerce Capabilities</h3>
          <p>
            Our service portfolio is designed to address every stage of the ecommerce lifecycle. We begin with meticulous cataloging and imaging, ensuring that your products are presented in the most compelling and search-optimized manner possible. High-quality visuals and keyword-rich descriptions are the foundation of ecommerce success, and our creative team excels at crafting listings that capture attention and drive sales.
          </p>
          <p>
            Beyond the basics, we offer advanced services such as A+ Content creation, which enhances your brand story and builds trust with consumers. Our advertising optimization experts leverage sophisticated bidding strategies and data analytics to maximize your return on ad spend (ROAS) across various platform-specific advertising networks. We also provide comprehensive account management, acting as your primary point of contact for all platform-related inquiries, dispute resolutions, and strategic planning.
          </p>

          <h3>Logistics, Compliance, and Global Expansion</h3>
          <p>
            Ecommerce is not just about digital marketing; it is heavily reliant on robust logistics and strict compliance. Click Commerce Hub provides end-to-end support for domestic and international shipping, FBA prep and packaging, and excess inventory management. We ensure that your products reach your customers quickly and efficiently, minimizing fulfillment costs and maximizing customer satisfaction.
          </p>
          <p>
            Furthermore, we navigate the complex landscape of legal and compliance requirements, including GST registration, VPOB/PPOB/APOB services, and tax accounting. For brands looking to expand their footprint globally, we offer specialized services for international shipping and returns, helping you tap into lucrative new markets with confidence. Our goal is to provide a seamless, frictionless experience that allows you to focus on product innovation and brand building.
          </p>

          <h3>Why Choose Click Commerce Hub?</h3>
          <p>
            Partnering with Click Commerce Hub means choosing a partner dedicated to your long-term success. We measure our achievements by the growth of your revenue and the strength of your brand. Our transparent reporting, dedicated account managers, and relentless pursuit of excellence make us the premier choice for brands seeking to dominate the ecommerce landscape. Explore our platform-specific services below to see how we can tailor our expertise to your unique needs.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Supported Ecommerce Platforms</h2>
            <p className="mt-4 text-lg text-gray-500">Select a platform to explore our specialized services and expertise.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecommercePlatforms.map((platform) => (
              <Link
                key={platform.id}
                to={`/${platform.slug}`}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all group flex flex-col items-center text-center"
              >
                <div className="bg-orange-50 p-4 rounded-full mb-4 group-hover:bg-orange-100 transition-colors">
                  <ShoppingCart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                  {platform.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Specialized service provider for {platform.name}. End-to-end management and growth strategies.
                </p>
                <div className="mt-auto flex items-center text-orange-600 font-medium text-sm">
                  View Services <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
