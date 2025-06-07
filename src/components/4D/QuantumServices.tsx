import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Palette, Globe, Search, Share2, Zap, Target, Brain, TrendingUp, Users, Rocket, Settings } from 'lucide-react';
import { QuantumCard } from './QuantumCard';
import { MoneyBackground } from './MoneyBackground';

const services = [
  {
    title: "Lead Generation Mastery",
    icon: <Target className="w-8 h-8" />,
    keywords: ["lead generation", "qualified leads", "conversion optimization"],
    states: {
      past: (
        <div>
          <p className="text-sm">Historical lead analysis reveals untapped customer segments and conversion patterns.</p>
          <div className="mt-2 text-xs text-gray-400">Lead quality improvement: +340% conversion rates</div>
        </div>
      ),
      present: (
        <div>
          <p className="text-sm">AI-powered lead generation delivering high-quality prospects in real-time.</p>
          <div className="mt-2 text-xs text-gray-400">Active campaigns: 67 | Live leads: 24/7 generation</div>
        </div>
      ),
      future: (
        <div>
          <p className="text-sm">Predictive lead scoring and automated nurturing for maximum conversion potential.</p>
          <div className="mt-2 text-xs text-gray-400">Forecasted growth: +280% lead quality over 12 months</div>
        </div>
      )
    }
  },
  {
    title: "AI Business Automation",
    icon: <Brain className="w-8 h-8" />,
    keywords: ["ai automation", "business automation", "workflow optimization"],
    states: {
      past: (
        <div>
          <p className="text-sm">Legacy process analysis identifies automation opportunities for efficiency gains.</p>
          <div className="mt-2 text-xs text-gray-400">Process optimization: 89% manual tasks automated</div>
        </div>
      ),
      present: (
        <div>
          <p className="text-sm">Intelligent automation systems streamlining operations and boosting productivity.</p>
          <div className="mt-2 text-xs text-gray-400">Active automations: 156 | Time saved: 40 hours/week</div>
        </div>
      ),
      future: (
        <div>
          <p className="text-sm">Self-evolving AI systems that continuously optimize and adapt to business needs.</p>
          <div className="mt-2 text-xs text-gray-400">Productivity increase: +450% efficiency projected</div>
        </div>
      )
    }
  },
  {
    title: "ROI Optimization Engine",
    icon: <TrendingUp className="w-8 h-8" />,
    keywords: ["roi optimization", "return on investment", "profit maximization"],
    states: {
      past: (
        <div>
          <p className="text-sm">Historical ROI analysis uncovers hidden profit opportunities and cost inefficiencies.</p>
          <div className="mt-2 text-xs text-gray-400">ROI improvement: +267% average client increase</div>
        </div>
      ),
      present: (
        <div>
          <p className="text-sm">Real-time ROI tracking and optimization across all marketing channels and campaigns.</p>
          <div className="mt-2 text-xs text-gray-400">Current ROI: 4.8x average | Optimization: Continuous</div>
        </div>
      ),
      future: (
        <div>
          <p className="text-sm">Predictive ROI modeling with automated budget allocation for maximum returns.</p>
          <div className="mt-2 text-xs text-gray-400">Projected ROI: 6.2x within 18 months</div>
        </div>
      )
    }
  },
  {
    title: "Digital Marketing Mastery",
    icon: <Rocket className="w-8 h-8" />,
    keywords: ["digital marketing", "seo", "ppc", "social media marketing"],
    states: {
      past: (
        <div>
          <p className="text-sm">Comprehensive digital footprint analysis reveals growth opportunities across all channels.</p>
          <div className="mt-2 text-xs text-gray-400">Channel optimization: 12 platforms, +189% engagement</div>
        </div>
      ),
      present: (
        <div>
          <p className="text-sm">Integrated digital marketing campaigns delivering consistent results across India.</p>
          <div className="mt-2 text-xs text-gray-400">Active campaigns: 89 | Reach: 2.8M users nationwide</div>
        </div>
      ),
      future: (
        <div>
          <p className="text-sm">AI-driven omnichannel marketing with predictive audience targeting and content optimization.</p>
          <div className="mt-2 text-xs text-gray-400">Growth projection: +320% market penetration</div>
        </div>
      )
    }
  },
  {
    title: "Productivity Enhancement",
    icon: <Settings className="w-8 h-8" />,
    keywords: ["productivity enhancement", "efficiency optimization", "workflow automation"],
    states: {
      past: (
        <div>
          <p className="text-sm">Workflow analysis identifies bottlenecks and inefficiencies in business operations.</p>
          <div className="mt-2 text-xs text-gray-400">Efficiency gains: +156% productivity improvement</div>
        </div>
      ),
      present: (
        <div>
          <p className="text-sm">Streamlined processes and automated workflows maximizing team productivity.</p>
          <div className="mt-2 text-xs text-gray-400">Time savings: 35 hours/week | Error reduction: 94%</div>
        </div>
      ),
      future: (
        <div>
          <p className="text-sm">Self-optimizing systems that continuously enhance productivity and eliminate waste.</p>
          <div className="mt-2 text-xs text-gray-400">Projected efficiency: +400% productivity boost</div>
        </div>
      )
    }
  },
  {
    title: "Business Growth Acceleration",
    icon: <Users className="w-8 h-8" />,
    keywords: ["business growth", "scale business", "market expansion"],
    states: {
      past: (
        <div>
          <p className="text-sm">Growth pattern analysis reveals scalable strategies for sustainable expansion.</p>
          <div className="mt-2 text-xs text-gray-400">Historical growth: +234% average client expansion</div>
        </div>
      ),
      present: (
        <div>
          <p className="text-sm">Multi-channel growth strategies driving rapid business expansion across India.</p>
          <div className="mt-2 text-xs text-gray-400">Active growth initiatives: 45 | Market penetration: 78%</div>
        </div>
      ),
      future: (
        <div>
          <p className="text-sm">Predictive growth modeling with automated scaling strategies for exponential expansion.</p>
          <div className="mt-2 text-xs text-gray-400">Projected growth: +500% business expansion</div>
        </div>
      )
    }
  }
];

export const QuantumServices: React.FC = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* 4D Money Background */}
      <MoneyBackground />

      <div className="max-w-7xl mx-auto px-4 text-center mb-12 relative z-10">
        <motion.div
          className="inline-flex items-center space-x-2 mb-4 px-4 py-2 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Zap className="w-4 h-4 text-white" />
          <span className="text-white text-sm">God Digital Marketing Services</span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Revolutionary
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Business Solutions
          </span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Transform your business with our comprehensive suite of services designed to 
          generate leads, automate processes, optimize ROI, and accelerate growth across India
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <QuantumCard
                title={service.title}
                states={service.states}
                icon={service.icon}
                keywords={service.keywords}
                className="h-80"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced money-themed gradient overlay */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-96 h-96 border border-yellow-500/20 rounded-full bg-gradient-radial from-yellow-500/10 to-transparent" />
      </motion.div>
    </section>
  );
};