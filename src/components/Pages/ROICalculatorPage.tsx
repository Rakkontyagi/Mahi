import React from 'react';
import { MarketingAutomationROICalculator } from '../InteractiveTools/MarketingAutomationROICalculator';
import SEOHead from '../SEO/SEOHead';
import AnimatedSection from '../Shared/AnimatedSection';
import BaseCard from '../Shared/BaseCard'; // Optional, for styling
import { HelpCircle, TrendingUp, MessageCircle, CheckCircle } from 'lucide-react';

const ROICalculatorPage: React.FC = () => {
  const YourCompanyName = "God Digital Marketing"; // Placeholder
  const siteBaseUrl = "https://goddigitalmarketing.com"; // Placeholder
  const canonicalUrl = `${siteBaseUrl}/tools/marketing-automation-roi-calculator/`;

  return (
    <>
      <SEOHead
        title={`Marketing Automation ROI Calculator | Estimate Your Savings | ${YourCompanyName}`}
        description="Use our free Marketing Automation ROI Calculator to estimate potential time and cost savings for your business. See how automation can boost efficiency and results."
        keywords="marketing automation roi calculator, roi calculator marketing, automation savings estimator, marketing efficiency tool, business roi calculator"
        canonicalUrl={canonicalUrl}
      />
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-indigo-900 text-gray-200 font-sans">
        {/* Hero Section */}
        <AnimatedSection animationType="fadeInDown" duration={1000}>
          <section className="py-16 sm:py-20 md:py-28 text-center bg-black/30 backdrop-blur-lg">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                className="inline-block p-3 mb-4 bg-indigo-500/20 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-300" />
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white break-words">
                Calculate Your Marketing Automation ROI
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2 leading-relaxed">
                Discover the potential time and cost savings your business can achieve by implementing marketing automation. Fill in your current metrics below to get an instant estimate.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Calculator Section */}
        <AnimatedSection animationType="fadeInUp" duration={1000} delay={200}>
          <div className="my-12 md:my-16 max-w-4xl mx-auto px-4 sm:px-6">
            <MarketingAutomationROICalculator />
          </div>
        </AnimatedSection>

        {/* Explanation of Assumptions Section */}
        <AnimatedSection animationType="fadeInUp" duration={1000} delay={300}>
          <section className="my-12 md:my-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <BaseCard variant="glass" className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-indigo-300 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 mr-3" /> Understanding Your Results: Key Assumptions
                </h2>
                <ul className="list-none space-y-3 text-gray-300 text-sm sm:text-base">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Assumes automation can reduce manual time per lead by <strong>70%</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Assumes automation can reduce manual time per email campaign by <strong>50%</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Calculations are estimates based on your inputs and these typical efficiency gains. Actual results can vary.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mr-2 mt-1 flex-shrink-0" />
                    <span>This calculator focuses on time/cost savings and does not include potential software costs or direct revenue uplift for simplicity.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mr-2 mt-1 flex-shrink-0" />
                    <span>Average hourly cost should ideally include salary, benefits, and proportionate overheads for the most accurate estimate.</span>
                  </li>
                </ul>
              </BaseCard>
            </div>
          </section>
        </AnimatedSection>

        {/* Interpretation of Results / Next Steps Section */}
        <AnimatedSection animationType="fadeInUp" duration={1000} delay={400}>
          <section className="text-center my-12 md:my-16 py-10 md:py-16 bg-black/20 backdrop-blur-sm rounded-xl mx-4 sm:mx-auto max-w-5xl shadow-xl">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300">
                Ready to Realize These Savings?
              </h2>
              <p className="text-md sm:text-lg text-gray-300 max-w-2xl mx-auto mt-4 mb-8 leading-relaxed">
                The estimated savings highlight how marketing automation can free up valuable team resources and budget. Imagine reinvesting this into further growth initiatives for your business. This is the power of smart automation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                <a
                  href="/marketing-automation/" // Assuming this is the slug for Marketing Automation service page
                  className="w-full sm:w-auto inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg text-md sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore Our Marketing Automation Services
                </a>
                <a
                  href="/digital-marketing-consultation/" // Generic consultation link
                  className="w-full sm:w-auto inline-block bg-slate-700 hover:bg-slate-600 text-gray-200 font-semibold py-3 px-8 rounded-lg text-md sm:text-lg transition-all duration-300 transform hover:scale-105 border border-slate-600"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </>
  );
};

export default ROICalculatorPage;
// Add framer-motion import if not already implicitly available via AnimatedSection
// For this component, motion from framer-motion is used in the Hero's icon animation.
// However, AnimatedSection itself uses framer-motion, so it should be fine.
// Added it to the hero icon for a small touch.
import { motion } from 'framer-motion';
