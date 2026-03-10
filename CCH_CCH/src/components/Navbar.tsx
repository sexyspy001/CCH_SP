import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Ecommerce", to: "/ecommerce" },
    { name: "Quick Commerce", to: "/quick-commerce" },
    { name: "All Services", to: "/services" },
    { name: "AI Tools", to: "/ai-tools" },
    { name: "Insights", to: "/blog" },
    { name: "Contact", to: "/contact-click-commerce-hub" },
  ];

  return (

    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">

            <img
              src="https://raw.githubusercontent.com/sexyspy001/clickcommercehub_logo/4ab5caadb309169d25eab1f33ca1beab7177f861/cch-logoog%20(2).png"
              className="h-11 w-auto"
              alt="Click Commerce Hub"
            />

            <span className="font-bold text-lg text-gray-900 hidden lg:block whitespace-nowrap">
              Click Commerce Hub
            </span>

          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">

            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}

          </nav>


          {/* CTA */}
          <div className="hidden lg:flex">

            <Link
              to="/contact-click-commerce-hub"
              className="bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-700 transition-all shadow-sm"
            >
              Get Started
            </Link>

          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-gray-700"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      {open && (

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-t border-gray-100"
        >

          <div className="px-6 py-4 space-y-3">

            {links.map((link) => (

              <Link
                key={link.name}
                to={link.to}
                onClick={() => setOpen(false)}
                className="block text-gray-700 font-medium hover:text-orange-600"
              >
                {link.name}
              </Link>

            ))}

            <Link
              to="/contact-click-commerce-hub"
              onClick={() => setOpen(false)}
              className="block mt-4 bg-orange-600 text-white text-center py-2.5 rounded-full font-semibold"
            >
              Get Started
            </Link>

          </div>

        </motion.div>

      )}

    </header>
  );
}
