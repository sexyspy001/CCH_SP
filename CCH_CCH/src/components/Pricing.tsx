import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-600 font-semibold tracking-wide uppercase text-sm">Pricing Policy</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Custom Pricing for Unique Needs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Every brand is different. We offer tailored pricing based on your specific requirements and scale.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="px-6 py-12 sm:p-10 sm:pb-6">
            <div className="flex justify-center">
              <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-orange-100 text-orange-600">
                Tailored Solution
              </span>
            </div>
            <div className="mt-4 flex justify-center text-6xl font-extrabold text-gray-900">
              Custom Price
            </div>
            <p className="mt-5 text-lg text-gray-500 text-center">
              Contact us to get a personalized quote for your business.
            </p>
          </div>
          <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
            <ul className="space-y-4">
              {[
                'Flexible service selection',
                'Scalable as your business grows',
                'Dedicated account manager',
                'Transparent reporting',
                'No hidden fees',
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">{feature}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
