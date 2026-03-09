import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
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
              <span className="block">About</span>
              <span className="block text-orange-600">Click Commerce Hub</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
              We are a team of passionate ecommerce experts dedicated to helping independent brands scale globally.
            </p>
          </div>
        </div>

        {/* Content Section (SEO Optimized) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg prose-orange">
          <h2>Our Mission</h2>
          <p>
            At Click Commerce Hub, our mission is simple: to empower independent brands and retailers to thrive in the complex and ever-evolving world of digital commerce. We believe that every great product deserves a global audience, and we provide the expertise, tools, and strategic guidance necessary to make that a reality.
          </p>
          <p>
            The ecommerce landscape is no longer just about setting up a website; it's about establishing a dominant presence across multiple marketplaces, optimizing for quick commerce, and navigating intricate compliance and logistical challenges. We exist to simplify this complexity, acting as a trusted partner and an extension of your team.
          </p>

          <h2>Who We Are</h2>
          <p>
            We are a collective of seasoned ecommerce strategists, digital marketers, logistics experts, and compliance specialists. Our team brings together decades of combined experience working with top-tier brands and leading marketplaces like Amazon, Flipkart, Blinkit, and Zepto. We are not just consultants; we are practitioners who understand the day-to-day realities of running an online business.
          </p>
          <p>
            As an authorized service provider for major ecommerce platforms, we have passed rigorous quality checks and possess deep, insider knowledge of the algorithms and policies that govern these ecosystems. This privileged access allows us to deliver strategies that are not only effective but also fully compliant, minimizing risk and maximizing ROI for our clients.
          </p>

          <h2>Our Approach</h2>
          <p>
            We take a holistic, data-driven approach to ecommerce management. We understand that success is not achieved through isolated tactics but through a cohesive strategy that integrates cataloging, advertising, inventory management, and customer service.
          </p>
          <ul>
            <li><strong>Data-Centric:</strong> Every decision we make is backed by rigorous data analysis. We continuously monitor performance metrics to identify opportunities for optimization and growth.</li>
            <li><strong>Tailored Solutions:</strong> We recognize that every brand is unique. We do not offer cookie-cutter solutions. Instead, we develop customized roadmaps tailored to your specific goals, target audience, and competitive landscape.</li>
            <li><strong>Transparent Partnership:</strong> We believe in complete transparency. Our clients have full visibility into our strategies, actions, and the results we deliver. We view ourselves as long-term partners invested in your success.</li>
          </ul>

          <h2>Why Partner With Us?</h2>
          <p>
            Choosing Click Commerce Hub means choosing a partner dedicated to your long-term growth. We measure our success by the success of our clients. Whether you are a startup looking to launch your first product or an established brand seeking to expand internationally, we have the expertise and resources to help you achieve your objectives.
          </p>
          <p>
            We handle the heavy lifting of marketplace management, allowing you to focus on what you do best: developing innovative products and building your brand. From navigating the complexities of quick commerce onboarding to executing sophisticated advertising campaigns, we are here to guide you every step of the way.
          </p>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gray-900 rounded-3xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:p-16 text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to accelerate your growth?
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-300 max-w-2xl mx-auto">
                Contact our team today to discuss how we can help you dominate the ecommerce landscape.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/contact-click-commerce-hub"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-gray-900 bg-white hover:bg-orange-50 shadow-lg transition-all"
                >
                  Get in Touch
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
