import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Target, Briefcase, MapPin, Library, Users, ChevronRight } from 'lucide-react';
import { GodDigitalNavLogo } from '../Brand/GodDigitalLogo';
import { MegaMenu } from './MegaMenu';

export const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null);

  const mobileMenuCategoryTitleClasses = "flex justify-between items-center py-3 text-white font-semibold hover:bg-slate-700/30 focus:bg-slate-700/30 rounded-md px-2 cursor-pointer transition-colors duration-200";
  const mobileMenuSubCategoryTitleClasses = "py-2 text-slate-300 font-medium px-2 text-sm"; // For sub-category titles like "Digital Marketing"
  const mobileMenuLinkClasses = "block text-gray-300 hover:text-white py-1.5 pl-4 pr-2 hover:bg-slate-600/50 rounded-md text-sm transition-colors duration-200"; // For actual links

  const mobileMenuItems = [
    {
      id: 'services',
      title: "Services",
      icon: <Target className="w-5 h-5 mr-3 flex-shrink-0" />,
      subCategories: [
        {
          title: "Digital Marketing",
          hrefParent: "/digital-marketing/", // Optional parent link
          links: [
            { name: "SEO Services", href: "/seo-services/" },
            { name: "PPC Advertising", href: "/ppc-advertising/" },
            { name: "Social Media Marketing", href: "/social-media-marketing/" },
            { name: "Content Marketing", href: "/content-marketing/" },
            { name: "Google Ads Management", href: "/google-ads-management/" },
          ],
        },
        {
          title: "Automation & AI",
          hrefParent: "/ai-automation/",
          links: [
            { name: "AI-Powered Solutions", href: "/ai-automation/" },
            { name: "Marketing Automation", href: "/marketing-automation/" },
            { name: "Business Process Automation", href: "/business-automation/" },
          ],
        },
        {
          title: "Lead Generation & Web", // Combined for brevity on mobile
          hrefParent: "/lead-generation/",
          links: [
            { name: "Lead Generation Services", href: "/lead-generation/" },
            { name: "Web Design & Development", href: "/web-design-development/" },
          ],
        },
      ],
    },
    {
      id: 'industrySolutions',
      title: "Industry Solutions",
      icon: <Briefcase className="w-5 h-5 mr-3 flex-shrink-0" />,
      links: [
        { name: "Healthcare Marketing", href: "/industries/healthcare/digital-marketing/" },
        { name: "Real Estate Solutions", href: "/industries/real-estate/digital-marketing/" },
        { name: "E-commerce Growth", href: "/industries/ecommerce/digital-marketing/" },
        { name: "View All Industries", href: "/industries/" },
      ],
    },
    {
      id: 'locations',
      title: "Locations",
      icon: <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />,
      links: [ // Simplified for mobile - direct links or to tier pages if they exist
          { name: "Mumbai", href: "/digital-marketing/maharashtra/mumbai/" }, // Example specific link
          { name: "Delhi", href: "/digital-marketing/delhi/new-delhi/" },
          { name: "Bangalore", href: "/digital-marketing/karnataka/bangalore/" },
          { name: "View All Locations", href: "/locations/" }, // Hub page
      ]
    },
    {
      id: 'resources',
      title: "Resources",
      icon: <Library className="w-5 h-5 mr-3 flex-shrink-0" />,
      links: [
        { name: "Blog", href: "/blog/" },
        { name: "Case Studies", href: "/case-studies/" },
        { name: "ROI Calculator", href: "/tools/marketing-automation-roi-calculator/" },
      ],
    },
    { id: 'about', title: "About Us", href: "/about/", icon: <Users className="w-5 h-5 mr-3 flex-shrink-0" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top Bar */}
      <div className="border-b border-gray-800/50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-green-400" />
                <span className="text-gray-300">+91 9999999999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-blue-400" />
                <span className="text-gray-300">contact@goddigitalmarketing.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-gray-400">
              <span>Serving 500+ Cities Across India</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <GodDigitalNavLogo animated={true} />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center lg:space-x-6"> {/* Changed space-x-8 to lg:space-x-6 */}
            <MegaMenu
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              activeMenu={activeMenu}
              onMenuChange={setActiveMenu}
            />

            <a
              href="/about/"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="/contact/"
              className="lg:px-4 xl:px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300" {/* Changed px-6 */}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              {/* New content for <div className="space-y-6"> */}
              <div className="space-y-1"> {/* New container for all mobile menu items */}
                {mobileMenuItems.map((item) => (
                  <div key={item.id} className="border-b border-slate-700/80 last:border-b-0">
                    {item.subCategories ? ( // Specifically for "Services"
                      <div>
                        <button // Changed to button for better accessibility for accordions
                          type="button"
                          className={`${mobileMenuCategoryTitleClasses} w-full`}
                          onClick={() => setOpenMobileSubMenu(openMobileSubMenu === item.id ? null : item.id)}
                          aria-expanded={openMobileSubMenu === item.id}
                          aria-controls={`mobile-submenu-${item.id}`}
                        >
                          <div className="flex items-center">
                            {item.icon}
                            <span>{item.title}</span>
                          </div>
                          <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${openMobileSubMenu === item.id ? 'rotate-90' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {openMobileSubMenu === item.id && (
                            <motion.div
                              id={`mobile-submenu-${item.id}`}
                              initial={{ height: 0, opacity: 0, marginTop: 0, marginBottom: 0 }}
                              animate={{ height: 'auto', opacity: 1, marginTop: '0.25rem', marginBottom: '0.5rem' }}
                              exit={{ height: 0, opacity: 0, marginTop: 0, marginBottom: 0 }}
                              className="overflow-hidden ml-3 pl-3 border-l-2 border-slate-600" // Indented sub-menu
                            >
                              {item.subCategories.map((sc) => (
                                <div key={sc.title} className="pt-1 pb-1">
                                  {/* Optional: Link for the sub-category title itself */}
                                  {sc.hrefParent ? (
                                      <a href={sc.hrefParent} className={`${mobileMenuSubCategoryTitleClasses} flex items-center justify-between hover:bg-slate-700/30 rounded-md`} onClick={() => setIsOpen(false)}>
                                          {sc.title}
                                          <ChevronRight className="w-4 h-4 text-slate-500" />
                                      </a>
                                  ) : (
                                      <h4 className={`${mobileMenuSubCategoryTitleClasses} text-slate-400`}>{sc.title}</h4>
                                  )}
                                  <div className="space-y-0.5 mt-1">
                                    {sc.links.map(link => (
                                      <a key={link.name} href={link.href} className={mobileMenuLinkClasses} onClick={() => setIsOpen(false)}>
                                        {link.name}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : ( // For items with direct links (Industry Solutions, Locations, Resources, About Us)
                      <a href={item.href || '#'} /* Fallback href for items that group links */
                         className={`${mobileMenuCategoryTitleClasses} ${item.links ? 'cursor-default' : ''} justify-start`}
                         onClick={(e) => {
                           if (!item.links && item.href) { // Only navigate if it's a direct link
                             setIsOpen(false);
                           } else if (item.links) { // If it's a category header for a simple list, prevent navigation
                             e.preventDefault(); // Prevent navigation for category headers that just expand
                           }
                         }}
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </a>
                    )}
                    {/* Render simple links for categories like Industry Solutions, Locations, Resources if they have item.links and not subCategories */}
                    {item.links && !item.subCategories && (
                      <div className="ml-3 pl-5 py-2 space-y-0.5 border-l-2 border-slate-600">
                        {item.links.map(link => (
                          <a key={link.name} href={link.href} className={mobileMenuLinkClasses} onClick={() => setIsOpen(false)}>
                            {link.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile CTA - ensure this is still present after the loop */}
                <motion.a
                  href="/contact/" // Or a more specific consultation link like /digital-marketing-consultation/
                  className="block w-full mt-8 mb-4 px-6 py-3.5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-full text-center hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 text-base"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  Get Free Consultation
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};