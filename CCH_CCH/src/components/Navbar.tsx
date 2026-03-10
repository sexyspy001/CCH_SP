import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Ecommerce", href: "/ecommerce" },
    { name: "Quick Commerce", href: "/quick-commerce" },
    { name: "Services", href: "/services" },
    { name: "AI Tools", href: "/ai-tools" },
    { name: "Insights", href: "/blog" },
    { name: "Contact", href: "/contact-click-commerce-hub" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://raw.githubusercontent.com/sexyspy001/clickcommercehub_logo/4ab5caadb309169d25eab1f33ca1beab7177f861/cch-logoog%20(2).png"
              className="h-10 w-auto"
              alt="Click Commerce Hub"
            />

            <span className="font-semibold text-lg text-gray-900 hidden xl:block">
              Click Commerce Hub
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-8">

            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-gray-600 hover:text-orange-600 transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact-click-commerce-hub"
              className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-5 py-2.5 rounded-full font-semibold shadow-md transition"
            >
              Get Started
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            className="xl:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26}/> : <Menu size={26}/>}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100">

          <div className="flex flex-col px-6 py-6 space-y-4">

            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 text-base font-medium hover:text-orange-600"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact-click-commerce-hub"
              onClick={() => setIsOpen(false)}
              className="bg-orange-600 text-white text-center py-3 rounded-full font-semibold"
            >
              Get Started
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
}
