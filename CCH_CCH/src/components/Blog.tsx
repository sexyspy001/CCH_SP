import { motion } from 'motion/react';
import { HelpCircle, TrendingUp, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../data';

const articles = [
  {
    type: 'FAQ',
    icon: <HelpCircle className="h-5 w-5 text-blue-500" />,
    title: 'How to Start Selling on Amazon India',
    slug: 'how-to-start-selling-on-amazon-india',
    excerpt: 'A comprehensive guide to launching your brand on Amazon India, covering registration, cataloging, and initial marketing strategies.',
    date: 'March 10, 2024',
  },
  {
    type: 'Advantage',
    icon: <TrendingUp className="h-5 w-5 text-green-500" />,
    title: 'Quick Commerce Business Model',
    slug: 'quick-commerce-business-model',
    excerpt: 'Understanding the mechanics of 10-minute delivery platforms and how your brand can leverage them for exponential growth.',
    date: 'March 5, 2024',
  },
  {
    type: 'News',
    icon: <Newspaper className="h-5 w-5 text-purple-500" />,
    title: 'Amazon SEO Strategy Guide',
    slug: 'amazon-seo-strategy-guide',
    excerpt: 'Master the Amazon A9 algorithm. Learn how to optimize your product listings to rank higher and drive more organic sales.',
    date: 'February 28, 2024',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-600 font-semibold tracking-wide uppercase text-sm">Insights & Knowledge</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Learn and Grow
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Answers to common questions, advantages of our services, and the latest industry news.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-orange-600 flex items-center gap-2 mb-3">
                    {article.icon}
                    {article.type}
                  </p>
                  <Link to={`/${article.slug}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 hover:text-orange-600 transition-colors">{article.title}</p>
                    <p className="mt-3 text-base text-gray-500">{article.excerpt}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">Click Commerce Hub</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Click Commerce Hub Team</p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={article.date}>{article.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
