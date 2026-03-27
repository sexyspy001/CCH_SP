import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {

  useEffect(() => {
    window.scrollTo(0, 0);

    // ✅ SEO FIX (VERY IMPORTANT)
    document.title = "About Click Commerce Hub | Ecommerce Experts in India";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about Click Commerce Hub, a leading ecommerce service provider offering Amazon seller services, Flipkart consulting, Meesho onboarding, and marketplace growth solutions."
      );
    }

  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      <main className="pt-24 pb-16">

        {/* Hero Section */}
        <div className="bg-orange-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            {/* ✅ SEO H1 */}
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              About Click Commerce Hub – Ecommerce Growth Experts
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
              We help ecommerce sellers scale on Amazon, Flipkart, Meesho and marketplaces with expert cataloging, PPC, and account management services.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg prose-orange">

          <h2>Our Mission</h2>
          <p>
            At Click Commerce Hub, our mission is to empower ecommerce sellers and brands across India to scale successfully on marketplaces like Amazon, Flipkart, and Meesho. We provide strategic guidance, execution, and optimization to help businesses grow faster.
          </p>

          <h2>Who We Are</h2>
          <p>
            Click Commerce Hub is a results-driven ecommerce service provider specializing in marketplace management, digital marketing, and compliance services. Our expertise includes Amazon seller services, Flipkart account management, and quick commerce onboarding.
          </p>

          <h2>Our Core Services</h2>
          <ul>
            <li>Amazon Seller Services (Cataloging, PPC, Account Management)</li>
            <li>Flipkart Seller Services & FBF Onboarding</li>
            <li>Meesho Product Listing & Growth</li>
            <li>Quick Commerce Onboarding (Blinkit, Zepto, Instamart)</li>
            <li>Digital Marketing (SEO, PPC, Social Media)</li>
          </ul>

          <h2>Why Choose Click Commerce Hub?</h2>
          <ul>
            <li><strong>Data-Driven Strategy:</strong> Every decision backed by analytics</li>
            <li><strong>Marketplace Expertise:</strong> Deep understanding of Amazon & Flipkart algorithms</li>
            <li><strong>Growth Focus:</strong> We focus on sales, not just listings</li>
            <li><strong>End-to-End Support:</strong> From setup to scaling</li>
          </ul>

          <h2>Serving Across India</h2>
          <p>
            We provide ecommerce services in Delhi, Mumbai, Bangalore, Hyderabad, Pune, Chennai, Kolkata, Patna and across India.
          </p>

        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gray-900 rounded-3xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:p-16 text-center">

              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to Grow Your Ecommerce Business?
              </h2>

              <p className="mt-4 text-lg text-gray-300">
                Get expert help for Amazon, Flipkart & marketplace growth today.
              </p>

              <div className="mt-8 flex justify-center">
                <Link
                  to="/contact-click-commerce-hub"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-gray-900 bg-white hover:bg-orange-50 shadow-lg transition-all"
                >
                  Get Free Consultation
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
