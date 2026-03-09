import { Link } from 'react-router-dom';
import { platforms, allServicePages } from '../data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Settings } from 'lucide-react';
import { useEffect } from 'react';

export default function ServicesMainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-orange-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Our Comprehensive</span>
              <span className="block text-orange-600">Service Portfolio</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
              Explore our wide range of specialized services designed to optimize your operations, ensure compliance, and drive growth across all ecommerce and quick commerce platforms.
            </p>
          </div>
        </div>

        {/* Services Directory */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-16">
            {platforms.map((platform) => {
              const platformServices = allServicePages.filter(s => s.platformId === platform.id);
              if (platformServices.length === 0) return null;

              return (
                <div key={platform.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gray-900 px-8 py-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                      <Settings className="h-6 w-6 text-orange-500" />
                      {platform.name} Services
                    </h2>
                    <Link
                      to={`/${platform.slug}`}
                      className="text-orange-400 hover:text-orange-300 font-medium text-sm flex items-center transition-colors"
                    >
                      View Platform Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                  <div className="p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {platformServices.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/${service.slug}`}
                          className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50 transition-all group"
                        >
                          <span className="text-gray-700 group-hover:text-orange-700 font-medium text-sm">
                            {service.name}
                          </span>
                          <ArrowRight className="ml-auto h-4 w-4 text-gray-400 group-hover:text-orange-500 opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
