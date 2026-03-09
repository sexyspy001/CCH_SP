import { Link } from 'react-router-dom';
import { quickCommercePlatforms } from '../data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Zap } from 'lucide-react';
import { useEffect } from 'react';

export default function QuickCommerceMainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-orange-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Quick Commerce</span>
              <span className="block text-orange-600">Onboarding & Management</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
              Accelerate your brand's reach with 10-minute delivery platforms. We handle the complexities of onboarding, cataloging, and scaling on quick commerce.
            </p>
          </div>
        </div>

        {/* About Our Services (1500+ words simulation) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg prose-orange">
          <h2>The Rise of Quick Commerce</h2>
          <p>
            The retail landscape is undergoing a seismic shift, driven by the consumer demand for instant gratification. Quick commerce, characterized by ultra-fast delivery times—often within 10 to 30 minutes—has rapidly evolved from a niche service to a mainstream expectation. Platforms like Blinkit, Swiggy Instamart, Zepto, and Flipkart Minutes are leading this revolution, transforming how consumers purchase groceries, daily essentials, and increasingly, a wider array of consumer goods. For brands, establishing a presence on these platforms is no longer just an opportunity for incremental sales; it is a strategic necessity to remain relevant and competitive.
          </p>
          <p>
            However, the operational dynamics of quick commerce are vastly different from traditional ecommerce. The emphasis on hyper-local fulfillment, real-time inventory management, and rapid catalog updates presents unique challenges. Onboarding onto these platforms can be a complex and time-consuming process, requiring strict adherence to specific data formats, imaging guidelines, and logistical protocols. This is where Click Commerce Hub steps in as your expert partner.
          </p>

          <h3>Navigating the Quick Commerce Ecosystem</h3>
          <p>
            At Click Commerce Hub, we specialize in demystifying the quick commerce ecosystem for brands of all sizes. We understand that speed is the essence of these platforms, not just in delivery, but in execution. Our dedicated quick commerce team is equipped with the knowledge and tools necessary to expedite your onboarding process, ensuring that your products are available to consumers in record time. We act as the bridge between your brand and the platforms, handling the intricate details of integration so you can focus on production and supply chain management.
          </p>
          <p>
            Our approach begins with a comprehensive assessment of your product portfolio to determine its suitability for quick commerce. We analyze market trends, consumer behavior, and platform-specific data to identify the optimal assortment for hyper-local delivery. We then manage the entire onboarding lifecycle, from initial documentation and compliance checks to catalog creation, imaging, and pricing strategy. Our goal is to ensure a seamless launch that maximizes your initial visibility and sales velocity.
          </p>

          <h3>Optimizing for Hyper-Local Success</h3>
          <p>
            Success in quick commerce hinges on visibility within a very specific geographic radius. Unlike national ecommerce platforms, where search algorithms prioritize broad relevance, quick commerce algorithms are heavily influenced by local availability, delivery speed, and hyper-local demand patterns. Our team employs sophisticated optimization techniques tailored to these unique dynamics. We ensure that your product titles, descriptions, and keywords are meticulously crafted to capture local search intent.
          </p>
          <p>
            Furthermore, we understand the critical importance of inventory management in the quick commerce model. Stockouts not only result in lost sales but can also negatively impact your brand's ranking and visibility on the platform. We work closely with your supply chain team and the platforms' dark store networks to optimize inventory levels, forecast demand, and minimize the risk of out-of-stock situations. Our proactive monitoring and reporting provide you with the insights needed to maintain optimal availability across all operational zones.
          </p>

          <h3>Driving Growth and Profitability</h3>
          <p>
            Beyond onboarding and optimization, Click Commerce Hub is committed to driving sustained growth and profitability for your brand on quick commerce platforms. We leverage platform-specific advertising tools and promotional mechanisms to boost your visibility, acquire new customers, and increase basket sizes. Our data-driven approach allows us to measure the ROI of every campaign, continuously refining our strategies to maximize your return on investment.
          </p>
          <p>
            We also provide invaluable insights into consumer behavior and market trends within the quick commerce space. By analyzing purchase patterns, search queries, and competitive dynamics, we help you identify new product opportunities, optimize your pricing strategy, and stay ahead of the curve. Partnering with Click Commerce Hub means gaining a strategic advantage in one of the fastest-growing segments of the retail industry. Explore our platform-specific services below to learn how we can accelerate your quick commerce journey.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Supported Quick Commerce Platforms</h2>
            <p className="mt-4 text-lg text-gray-500">Select a platform to explore our specialized onboarding and management services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickCommercePlatforms.map((platform) => (
              <Link
                key={platform.id}
                to={`/${platform.slug}`}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all group flex flex-col items-center text-center"
              >
                <div className="bg-orange-50 p-4 rounded-full mb-4 group-hover:bg-orange-100 transition-colors">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                  {platform.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Fast-track your onboarding and optimize your presence on {platform.name}.
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
