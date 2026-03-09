import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { platforms } from '../data';

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/">
              <img
                className="h-16"
                src="https://raw.githubusercontent.com/sexyspy001/clickcommercehub_logo/4ab5caadb309169d25eab1f33ca1beab7177f861/cch-logoog%20(2).png"
                alt="Click Commerce Hub"
              />
            </Link>
            <p className="text-gray-400 text-base">
              Empowering independent brands globally with comprehensive ecommerce, marketing, and compliance solutions.
            </p>
            <div className="flex space-x-6">
              {/* Social links can go here */}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/ecommerce" className="text-base text-gray-400 hover:text-white">Ecommerce Management</Link></li>
                  <li><Link to="/quick-commerce" className="text-base text-gray-400 hover:text-white">Quick Commerce</Link></li>
                  <li><Link to="/services" className="text-base text-gray-400 hover:text-white">All Services</Link></li>
                  <li><a href={isHome ? '#pricing' : '/#pricing'} className="text-base text-gray-400 hover:text-white">Pricing</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Platforms</h3>
                <ul className="mt-4 space-y-4">
                  {platforms.slice(0, 4).map((platform) => (
                    <li key={platform.id}>
                      <Link to={`/${platform.slug}`} className="text-base text-gray-400 hover:text-white">
                        {platform.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/about" className="text-base text-gray-400 hover:text-white">About</Link></li>
                  <li><Link to="/blog" className="text-base text-gray-400 hover:text-white">Blog</Link></li>
                  <li><a href={isHome ? '#regions' : '/#regions'} className="text-base text-gray-400 hover:text-white">Global Reach</a></li>
                  <li><Link to="/contact-click-commerce-hub" className="text-base text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/privacy-policy" className="text-base text-gray-400 hover:text-white">Privacy Policy</Link></li>
                  <li><Link to="/terms-of-service" className="text-base text-gray-400 hover:text-white">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Click Commerce Hub. All rights reserved.
          </p>
          <div className="mt-4 text-sm text-gray-500 xl:text-center max-w-4xl mx-auto">
            <p className="mb-2 font-semibold text-gray-400">Privacy Policy Statement:</p>
            <p>We do not store or use your credentials for any other purposes. Your data will not be shared with others. We guarantee zero misuse of your information.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
