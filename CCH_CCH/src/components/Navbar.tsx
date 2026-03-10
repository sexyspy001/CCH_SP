import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const links = [
    { name: 'Home', href: isHome ? '#home' : '/#home' },
    { name: 'About', href: '/about' },
    { name: 'Ecommerce', href: '/ecommerce' },
    { name: 'Quick Commerce', href: '/quick-commerce' },
    { name: 'All Services', href: '/services' },
    { name: 'AI Tools', href: '/ai-tools' },
    { name: 'Pricing', href: isHome ? '#pricing' : '/#pricing' },
    { name: 'Insights', href: '/blog' },
    { name: 'Contact', href: '/contact-click-commerce-hub' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <img
                className="h-12 w-auto"
                src="https://raw.githubusercontent.com/sexyspy001/clickcommercehub_logo/4ab5caadb309169d25eab1f33ca1beab7177f861/cch-logoog%20(2).png"
                alt="Click Commerce Hub"
              />
              <span className="font-bold text-xl text-gray-900 hidden lg:block">Click Commerce Hub</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden xl:flex items-center space-x-4">
            {links.map((link) => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-600 hover:text-orange-600 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-orange-600 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              )
            ))}
            <Link
              to="/contact-click-commerce-hub"
              className="bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-orange-700 transition-colors shadow-sm whitespace-nowrap ml-2"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="xl:hidden bg-white border-b border-gray-100"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
