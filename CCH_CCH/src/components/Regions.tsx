import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const regions = [
  'India', 'Singapore', 'United States', 'United Kingdom', 'Canada', 'Australia', 'UAE', 'Netherlands', 'Russia'
];

export default function Regions() {
  return (
    <section id="regions" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-500 font-semibold tracking-wide uppercase text-sm">Global Reach</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Remote Internet-Based Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            We provide remote services globally, helping brands expand their footprint internationally.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={region}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-700/50 transition-colors"
            >
              <MapPin className="h-8 w-8 text-orange-500 mb-3" />
              <span className="font-medium">{region}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
