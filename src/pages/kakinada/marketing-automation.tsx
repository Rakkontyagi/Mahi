import React from 'react';
import { SEOHead } from '../../components/SEO/SEOHead';
import { TrustSignals } from '../../components/TrustSignals';
import { Testimonials } from '../../components/Testimonials';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export default function KakinadaMarketingAutomationPage() {
  return (
    <>
      <SEOHead
        title={"Marketing Automation in Kakinada | Best Marketing Automation Company in Kakinada"}
        description={"Rank #1 with the top marketing automation company in Kakinada. Proven results, local expertise, and advanced strategies for businesses in Kakinada."}
        keywords={["Marketing Automation","Kakinada","Marketing Automation Kakinada company","Marketing Automation Kakinada agency","Marketing Automation Kakinada experts","Marketing Automation Kakinada pricing","Marketing Automation Kakinada packages","Marketing Automation Kakinada for small business","Marketing Automation Kakinada for startups","Marketing Automation Kakinada results","Marketing Automation Kakinada case studies","Marketing Automation Kakinada reviews"]}
        canonicalUrl={"https://goddigitalmarketing.com/kakinada/marketing-automation/"}
        ogImage={"https://goddigitalmarketing.com/og-image.jpg"}
        structuredData={{"@context":"https://schema.org","@type":"Service","name":"Marketing Automation in Kakinada | Best Marketing Automation Company in Kakinada","description":"Rank #1 with the top marketing automation company in Kakinada. Proven results, local expertise, and advanced strategies for businesses in Kakinada.","provider":{"@type":"Organization","name":"God Digital Marketing"},"areaServed":"Kakinada","keywords":"Marketing Automation, Kakinada, Marketing Automation Kakinada company, Marketing Automation Kakinada agency, Marketing Automation Kakinada experts, Marketing Automation Kakinada pricing, Marketing Automation Kakinada packages, Marketing Automation Kakinada for small business, Marketing Automation Kakinada for startups, Marketing Automation Kakinada results, Marketing Automation Kakinada case studies, Marketing Automation Kakinada reviews"}}
      />
      <main className="min-h-screen bg-black text-white">
        <Breadcrumbs currentPage={"Marketing Automation in Kakinada | Best Marketing Automation Company in Kakinada"} />
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Marketing Automation in Kakinada | Best Marketing Automation Company in Kakinada</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Rank #1 with the top marketing automation company in Kakinada. Proven results, local expertise, and advanced strategies for businesses in Kakinada. Marketing Automation Kakinada company, Marketing Automation Kakinada agency, Marketing Automation Kakinada experts.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="/kakinada/ppc-advertising/" className="text-blue-400 underline">PPC Advertising in Kakinada</a> <a href="/kakinada/social-media-marketing/" className="text-blue-400 underline">Social Media Marketing in Kakinada</a> <a href="/services/marketing-automation/" className="text-blue-400 underline">Marketing Automation India</a> <a href="/industries/healthcare/marketing-automation/" className="text-blue-400 underline">Healthcare Marketing Automation</a>
          </div>
        </section>
        <section className="py-12 bg-black border-t border-gray-800">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-8 text-lg text-gray-200 mb-8">
            <li>Local expertise for Kakinada businesses</li>
            <li>Proven results and transparent reporting</li>
            <li>Advanced strategies: Marketing Automation Kakinada company, Marketing Automation Kakinada agency, Marketing Automation Kakinada experts, Marketing Automation Kakinada pricing, Marketing Automation Kakinada packages</li>
            <li>Google My Business, content marketing, and link building</li>
            <li>100% white-hat, E-E-A-T and LLM-friendly content</li>
          </ul>
        </section>
        <TrustSignals />
        <Testimonials />
        <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Google in Kakinada?</h2>
          <p className="text-lg mb-6">Get your free SEO audit and see how we can grow your business with advanced, AI-powered SEO strategies.</p>
          <a href="/contact/" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300">Get Started Today</a>
        </section>
      </main>
    </>
  );
}
