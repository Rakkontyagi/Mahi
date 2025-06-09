import React from 'react';
import { SEOHead } from '../../components/SEO/SEOHead';
import { TrustSignals } from '../../components/TrustSignals';
import { Testimonials } from '../../components/Testimonials';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export default function KadapaMarketingAutomationPage() {
  return (
    <>
      <SEOHead
        title={"Marketing Automation in Kadapa | Best Marketing Automation Company in Kadapa"}
        description={"Rank #1 with the top marketing automation company in Kadapa. Proven results, local expertise, and advanced strategies for businesses in Kadapa."}
        keywords={["Marketing Automation","Kadapa","Marketing Automation Kadapa company","Marketing Automation Kadapa agency","Marketing Automation Kadapa experts","Marketing Automation Kadapa pricing","Marketing Automation Kadapa packages","Marketing Automation Kadapa for small business","Marketing Automation Kadapa for startups","Marketing Automation Kadapa results","Marketing Automation Kadapa case studies","Marketing Automation Kadapa reviews"]}
        canonicalUrl={"https://goddigitalmarketing.com/kadapa/marketing-automation/"}
        ogImage={"https://goddigitalmarketing.com/og-image.jpg"}
        structuredData={{"@context":"https://schema.org","@type":"Service","name":"Marketing Automation in Kadapa | Best Marketing Automation Company in Kadapa","description":"Rank #1 with the top marketing automation company in Kadapa. Proven results, local expertise, and advanced strategies for businesses in Kadapa.","provider":{"@type":"Organization","name":"God Digital Marketing"},"areaServed":"Kadapa","keywords":"Marketing Automation, Kadapa, Marketing Automation Kadapa company, Marketing Automation Kadapa agency, Marketing Automation Kadapa experts, Marketing Automation Kadapa pricing, Marketing Automation Kadapa packages, Marketing Automation Kadapa for small business, Marketing Automation Kadapa for startups, Marketing Automation Kadapa results, Marketing Automation Kadapa case studies, Marketing Automation Kadapa reviews"}}
      />
      <main className="min-h-screen bg-black text-white">
        <Breadcrumbs currentPage={"Marketing Automation in Kadapa | Best Marketing Automation Company in Kadapa"} />
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Marketing Automation in Kadapa | Best Marketing Automation Company in Kadapa</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Rank #1 with the top marketing automation company in Kadapa. Proven results, local expertise, and advanced strategies for businesses in Kadapa. Marketing Automation Kadapa company, Marketing Automation Kadapa agency, Marketing Automation Kadapa experts.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="/kadapa/ppc-advertising/" className="text-blue-400 underline">PPC Advertising in Kadapa</a> <a href="/kadapa/social-media-marketing/" className="text-blue-400 underline">Social Media Marketing in Kadapa</a> <a href="/services/marketing-automation/" className="text-blue-400 underline">Marketing Automation India</a> <a href="/industries/healthcare/marketing-automation/" className="text-blue-400 underline">Healthcare Marketing Automation</a>
          </div>
        </section>
        <section className="py-12 bg-black border-t border-gray-800">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-8 text-lg text-gray-200 mb-8">
            <li>Local expertise for Kadapa businesses</li>
            <li>Proven results and transparent reporting</li>
            <li>Advanced strategies: Marketing Automation Kadapa company, Marketing Automation Kadapa agency, Marketing Automation Kadapa experts, Marketing Automation Kadapa pricing, Marketing Automation Kadapa packages</li>
            <li>Google My Business, content marketing, and link building</li>
            <li>100% white-hat, E-E-A-T and LLM-friendly content</li>
          </ul>
        </section>
        <TrustSignals />
        <Testimonials />
        <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Google in Kadapa?</h2>
          <p className="text-lg mb-6">Get your free SEO audit and see how we can grow your business with advanced, AI-powered SEO strategies.</p>
          <a href="/contact/" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300">Get Started Today</a>
        </section>
      </main>
    </>
  );
}
