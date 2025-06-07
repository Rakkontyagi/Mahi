import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Award, Users, Target, ArrowRight } from 'lucide-react';
import { GlassmorphismCard } from '../Advanced/GlassmorphismCard';
import { ScrollReveal } from '../Advanced/ParallaxSection';

interface StateLocationPageProps {
  state: {
    name: string;
    slug: string;
    cities: Array<{
      name: string;
      slug: string;
      population?: number;
      isMetro?: boolean;
      industries?: string[];
    }>;
  };
  services: Array<{
    name: string;
    slug: string;
    description: string;
  }>;
}

export const StateLocationPage: React.FC<StateLocationPageProps> = ({ state, services }) => {
  const majorCities = state.cities.filter(city => city.isMetro || (city.population && city.population > 500000));
  const otherCities = state.cities.filter(city => !city.isMetro && (!city.population || city.population <= 500000));

  const stateStats = [
    { icon: <MapPin className="w-6 h-6" />, label: "Cities Covered", value: `${state.cities.length}+` },
    { icon: <Users className="w-6 h-6" />, label: "Clients Served", value: "500+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Average Growth", value: "340%" },
    { icon: <Award className="w-6 h-6" />, label: "Success Rate", value: "98%" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center space-x-2 mb-6 px-4 py-2 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Target className="w-4 h-4 text-white" />
                <span className="text-white text-sm">State-Wide Coverage</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Digital Marketing Services in
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  {state.name}
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive digital marketing solutions across all major cities in {state.name}. 
                Expert services tailored for local markets with proven results.
              </p>
            </div>
          </ScrollReveal>

          {/* State Stats */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stateStats.map((stat, index) => (
                <GlassmorphismCard key={stat.label} className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </GlassmorphismCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Services Across {state.name}
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Comprehensive digital marketing solutions available in all major cities across {state.name}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.slug} direction="up" delay={index * 0.1}>
                <GlassmorphismCard className="p-8 h-full">
                  <h3 className="text-xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {majorCities.slice(0, 3).map((city) => (
                      <motion.a
                        key={city.slug}
                        href={`/${service.slug}/${state.slug}/${city.slug}/`}
                        className="flex items-center justify-between p-2 hover:bg-white/5 rounded transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-gray-300">{city.name}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </motion.a>
                    ))}
                  </div>

                  <motion.a
                    href={`/${service.slug}/${state.slug}/`}
                    className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    View All Cities
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.a>
                </GlassmorphismCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section className="py-20 bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Major Cities in {state.name}
              </h2>
              <p className="text-gray-300 text-lg">
                Premium digital marketing services in {state.name}'s key business centers
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {majorCities.map((city, index) => (
              <ScrollReveal key={city.slug} direction="up" delay={index * 0.1}>
                <GlassmorphismCard className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{city.name}</h3>
                    {city.isMetro && (
                      <span className="px-2 py-1 bg-white/10 text-white text-xs rounded">Metro</span>
                    )}
                  </div>
                  
                  {city.population && (
                    <p className="text-gray-400 text-sm mb-4">
                      Population: {city.population.toLocaleString()}
                    </p>
                  )}

                  <div className="space-y-2">
                    {services.slice(0, 3).map((service) => (
                      <motion.a
                        key={service.slug}
                        href={`/${service.slug}/${state.slug}/${city.slug}/`}
                        className="block p-2 hover:bg-white/5 rounded transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-gray-300 text-sm">{service.name}</span>
                      </motion.a>
                    ))}
                  </div>

                  <motion.a
                    href={`/locations/${state.slug}/${city.slug}/`}
                    className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300 mt-4"
                    whileHover={{ x: 5 }}
                  >
                    View All Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.a>
                </GlassmorphismCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Other Cities */}
          {otherCities.length > 0 && (
            <ScrollReveal direction="up">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Other Cities We Serve</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {otherCities.map((city, index) => (
                  <ScrollReveal key={city.slug} direction="up" delay={index * 0.05}>
                    <motion.a
                      href={`/locations/${state.slug}/${city.slug}/`}
                      className="block p-4 border border-gray-800 bg-black/30 hover:bg-white/5 transition-colors duration-300 rounded-lg text-center"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-white font-medium">{city.name}</div>
                      <div className="text-gray-400 text-sm">All Services</div>
                    </motion.a>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Dominate {state.name} Markets?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Partner with {state.name}'s leading digital marketing agency for guaranteed results 
              and exceptional ROI across all major cities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get State-Wide Strategy
              </motion.button>
              <motion.button
                className="px-8 py-4 border border-gray-600 text-white hover:border-white transition-colors duration-300 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Success Stories
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};