import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open,setOpen] = useState(false);

  const links = [
    { name:"About", to:"/about"},
    { name:"Ecommerce", to:"/ecommerce"},
    { name:"Quick Commerce", to:"/quick-commerce"},
    { name:"Services", to:"/services"},
    { name:"AI Tools", to:"/ai-tools"},
    { name:"Insights", to:"/blog"},
    { name:"Contact", to:"/contact-click-commerce-hub"}
  ];

  return (

    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">

            <img
              src="https://raw.githubusercontent.com/sexyspy001/clickcommercehub_logo/4ab5caadb309169d25eab1f33ca1beab7177f861/cch-logoog%20(2).png"
              className="h-9 w-auto"
              alt="Click Commerce Hub"
            />

            <span className="font-semibold text-gray-900 text-lg hidden lg:block">
              Click Commerce Hub
            </span>

          </Link>


          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-7 text-sm text-gray-600 font-medium">

            {links.map((link)=>(
              <Link
                key={link.name}
                to={link.to}
                className="hover:text-orange-600 transition"
              >
                {link.name}
              </Link>
            ))}

          </nav>


          {/* CTA */}
          <div className="hidden lg:flex">

            <Link
              to="/contact-click-commerce-hub"
              className="bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-700 transition"
            >
              Get Started
            </Link>

          </div>


          {/* Mobile Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={()=>setOpen(!open)}
          >
            {open ? <X size={24}/> : <Menu size={24}/>}
          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      {open && (

        <div className="lg:hidden bg-white border-t border-gray-100">

          <div className="px-6 py-4 space-y-3">

            {links.map((link)=>(
              <Link
                key={link.name}
                to={link.to}
                onClick={()=>setOpen(false)}
                className="block text-gray-700 hover:text-orange-600"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact-click-commerce-hub"
              onClick={()=>setOpen(false)}
              className="block bg-orange-600 text-white text-center py-2 rounded-full"
            >
              Get Started
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}
