import { motion } from 'motion/react';
import { ShoppingCart, Megaphone, FileText, Globe, Box, CheckCircle2 } from 'lucide-react';

const services = [
  {
    category: 'Ecommerce Management',
    icon: <ShoppingCart className="h-6 w-6 text-orange-600" />,
    items: [
      'Quick Commerce Onboarding',
      'Cataloging & Imaging',
      'A+ Content Creation',
      'Account Management',
      'Advertising Optimization',
      'Excess Inventory Management',
      'Seller Lending Assistance',
      'Training & Onboarding',
    ],
  },
  {
    category: 'Logistics & Fulfillment',
    icon: <Box className="h-6 w-6 text-orange-600" />,
    items: [
      'Domestic Shipping',
      'International Shipping',
      'International Returns',
      'FBA Prep & Packaging',
      'Storage Solutions',
      'Manufacturing Support',
    ],
  },
  {
    category: 'Digital Marketing & Web',
    icon: <Megaphone className="h-6 w-6 text-orange-600" />,
    items: [
      'Brand Digital Marketing',
      'Shopify Store Development',
      'Website Creation',
      'WhatsApp Marketing',
      'Google & Meta Marketing',
      'Email Marketing',
    ],
  },
  {
    category: 'Legal & Compliance',
    icon: <FileText className="h-6 w-6 text-orange-600" />,
    items: [
      'GST Registration',
      'VPOB, PPOB, APOB Services',
      'Taxes & Accounting',
      'Compliance Management',
      'IP Accelerator',
      'Sustainability Consulting',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-600 font-semibold tracking-wide uppercase text-sm">Our Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Solutions for Your Brand
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            From quick commerce onboarding to global expansion, we provide end-to-end services to scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="p-6 border-b border-gray-50 bg-orange-50/50 flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{service.category}</h3>
              </div>
              <ul className="p-6 space-y-4">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
