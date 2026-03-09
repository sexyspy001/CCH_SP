import { motion } from 'motion/react';
import { ArrowRight, Globe2, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-full opacity-20 transform -translate-x-1/2"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-orange-50 rounded-l-full opacity-20 transform translate-x-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block xl:inline">Empowering Brands in the</span>{' '}
            <span className="block text-orange-600 xl:inline">Digital Commerce Era</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500"
          >
            Comprehensive ecommerce management, quick commerce onboarding, digital marketing, and compliance solutions for independent brands worldwide.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex justify-center gap-4 flex-col sm:flex-row"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all"
            >
              Request Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border-2 border-gray-200 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 md:py-4 md:text-lg md:px-10 transition-all"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {[
            {
              icon: <Globe2 className="h-8 w-8 text-orange-500" />,
              title: 'Global Reach',
              desc: 'Serving clients across India, US, UK, Singapore, and more.',
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
              title: 'Growth Driven',
              desc: 'Optimized advertising, cataloging, and account management.',
            },
            {
              icon: <ShieldCheck className="h-8 w-8 text-orange-500" />,
              title: 'Full Compliance',
              desc: 'GST registration, APOB/VPOB, and international tax support.',
            },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-orange-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
