import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Award, Users } from 'lucide-react';

const delhiKeywords = [
  'digital marketing agency delhi',
  'digital marketing expert delhi', 
  'digital marketing in delhi',
  'best digital marketing company in delhi'
];

const delhiStats = [
  { icon: <MapPin className="w-6 h-6" />, label: 'Delhi Presence', value: '7+ Years' },
  { icon: <Users className="w-6 h-6" />, label: 'Delhi Clients', value: '200+' },
  { icon: <TrendingUp className="w-6 h-6" />, label: 'Growth Rate', value: '340%' },
  { icon: <Award className="w-6 h-6" />, label: 'Awards Won', value: '15+' }
];

export const DelhiKeywordOptimization: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Delhi's Premier
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Digital Marketing Agency
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            As the leading digital marketing expert in Delhi, we deliver exceptional results 
            for businesses across the capital and NCR region
          </p>
        </motion.div>

        {/* Keywords showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {delhiKeywords.map((keyword, index) => (
            <motion.div
              key={keyword}
              className="p-6 border border-gray-800 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                borderColor: '#ffffff40',
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 capitalize">
                {keyword.replace(/-/g, ' ')}
              </h3>
              <p className="text-gray-400">
                {index === 0 && "Leading digital marketing agency in Delhi with proven track record of delivering exceptional ROI for businesses across all industries."}
                {index === 1 && "Certified digital marketing expert in Delhi providing strategic consultation and hands-on implementation for sustainable growth."}
                {index === 2 && "Comprehensive digital marketing services in Delhi including SEO, PPC, social media, and content marketing solutions."}
                {index === 3 && "Recognized as the best digital marketing company in Delhi with award-winning campaigns and client satisfaction rates above 95%."}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Delhi statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {delhiStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4 text-white">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Delhi-specific content */}
        <motion.div
          className="mt-16 p-8 border border-gray-800 bg-gradient-to-br from-black/60 to-gray-900/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Why Choose Our Digital Marketing Agency in Delhi?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Local Market Expertise</h4>
              <p className="text-gray-400 mb-6">
                Deep understanding of Delhi's business landscape, consumer behavior, and market dynamics. 
                Our digital marketing strategies are tailored for the unique challenges and opportunities in the Delhi NCR region.
              </p>
              <h4 className="text-xl font-semibold text-white mb-4">Proven Results</h4>
              <p className="text-gray-400">
                Track record of helping Delhi businesses achieve 300%+ growth in digital presence, 
                with measurable improvements in leads, sales, and brand visibility across all digital channels.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Comprehensive Services</h4>
              <p className="text-gray-400 mb-6">
                Full-spectrum digital marketing services including SEO, PPC, social media marketing, 
                content creation, website development, and brand strategy - all under one roof in Delhi.
              </p>
              <h4 className="text-xl font-semibold text-white mb-4">Industry Recognition</h4>
              <p className="text-gray-400">
                Multiple awards and certifications recognizing our excellence as a digital marketing company in Delhi, 
                with partnerships with Google, Facebook, and other major platforms.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};