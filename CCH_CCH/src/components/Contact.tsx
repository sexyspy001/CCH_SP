import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-600 font-semibold tracking-wide uppercase text-sm">Get in Touch</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Request Service
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Ready to scale your brand? Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                  <div className="mt-1">
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md" />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                  <div className="mt-1">
                    <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1">
                  <input id="email" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md" />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number / WhatsApp</label>
                <div className="mt-1">
                  <input type="text" name="phone" id="phone" autoComplete="tel" className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Required</label>
                <div className="mt-1">
                  <select id="service" name="service" className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md">
                    <option>Ecommerce Management</option>
                    <option>Quick Commerce Onboarding</option>
                    <option>Digital Marketing</option>
                    <option>Legal & Compliance</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <div className="mt-1">
                  <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border border-gray-300 rounded-md"></textarea>
                </div>
              </div>

              <div>
                <button type="submit" className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors">
                  Submit Request
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <p className="text-lg text-gray-500 mb-8">
                We provide remote internet-based services globally. Reach out to us via email or phone for any inquiries.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-orange-100 rounded-full p-3">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Sales Inquiries</p>
                  <a href="mailto:sales@clickcommercehub.dpdns.org" className="text-base text-gray-500 hover:text-orange-600">sales@clickcommercehub.dpdns.org</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-orange-100 rounded-full p-3">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">General Info</p>
                  <a href="mailto:info@clickcommercehub.dpdns.org" className="text-base text-gray-500 hover:text-orange-600">info@clickcommercehub.dpdns.org</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 bg-orange-100 rounded-full p-3">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Phone & WhatsApp</p>
                  <a href="tel:+916200017130" className="text-base text-gray-500 hover:text-orange-600">+91 - 6200017130</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 bg-orange-100 rounded-full p-3">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Global Operations</p>
                  <p className="text-base text-gray-500">Remote Internet-Based Service</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
