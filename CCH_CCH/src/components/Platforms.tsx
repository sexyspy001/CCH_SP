import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { platforms } from '../data';

export default function Platforms() {
  return (
    <section id="platforms" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-600 font-semibold tracking-wide uppercase text-sm">Supported Platforms</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Sell Everywhere
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We help you onboard, manage, and scale across all major ecommerce platforms. Click on a platform to learn more.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden space-x-16 group">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
              className="flex space-x-16 items-center min-w-max"
            >
              {[...platforms, ...platforms, ...platforms].map((platform, idx) => (
                <Link
                  key={`${platform.id}-${idx}`}
                  to={`/${platform.slug}`}
                  className="flex items-center justify-center h-24 px-12 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
                >
                  <span className="text-2xl font-bold text-gray-700 hover:text-orange-600 transition-colors">{platform.name}</span>
                </Link>
              ))}
            </motion.div>
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
