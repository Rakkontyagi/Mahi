import React from 'react';
import { SEOHead } from '../../components/SEO/SEOHead';
import { TrustSignals } from '../../components/TrustSignals';
import { Testimonials } from '../../components/Testimonials';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export default function GunturMarketingAutomationPage() {
  return (
    <>
      <SEOHead
        title={"Marketing Automation in Guntur | Best Marketing Automation Company in Guntur"}
        description={"Rank #1 with the top marketing automation company in Guntur. Proven results, local expertise, and advanced strategies for businesses in Guntur."}
        keywords={["Marketing Automation","Guntur","Marketing Automation Guntur company","Marketing Automation Guntur agency","Marketing Automation Guntur experts","Marketing Automation Guntur pricing","Marketing Automation Guntur packages","Marketing Automation Guntur for small business","Marketing Automation Guntur for startups","Marketing Automation Guntur results","Marketing Automation Guntur case studies","Marketing Automation Guntur reviews"]}
        canonicalUrl={"https://goddigitalmarketing.com/guntur/marketing-automation/"}
        ogImage={"https://goddigitalmarketing.com/og-image.jpg"}
        structuredData={{"@context":"https://schema.org","@type":"Service","name":"Marketing Automation in Guntur | Best Marketing Automation Company in Guntur","description":"Rank #1 with the top marketing automation company in Guntur. Proven results, local expertise, and advanced strategies for businesses in Guntur.","provider":{"@type":"Organization","name":"God Digital Marketing"},"areaServed":"Guntur","keywords":"Marketing Automation, Guntur, Marketing Automation Guntur company, Marketing Automation Guntur agency, Marketing Automation Guntur experts, Marketing Automation Guntur pricing, Marketing Automation Guntur packages, Marketing Automation Guntur for small business, Marketing Automation Guntur for startups, Marketing Automation Guntur results, Marketing Automation Guntur case studies, Marketing Automation Guntur reviews"}}
      />
      <main className="min-h-screen bg-black text-white">
        <Breadcrumbs currentPage={"Marketing Automation in Guntur | Best Marketing Automation Company in Guntur"} />
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Marketing Automation in Guntur | Best Marketing Automation Company in Guntur</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Rank #1 with the top marketing automation company in Guntur. Proven results, local expertise, and advanced strategies for businesses in Guntur. Marketing Automation Guntur company, Marketing Automation Guntur agency, Marketing Automation Guntur experts.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="/guntur/ppc-advertising/" className="text-blue-400 underline">PPC Advertising in Guntur</a> <a href="/guntur/social-media-marketing/" className="text-blue-400 underline">Social Media Marketing in Guntur</a> <a href="/services/marketing-automation/" className="text-blue-400 underline">Marketing Automation India</a> <a href="/industries/healthcare/marketing-automation/" className="text-blue-400 underline">Healthcare Marketing Automation</a>
          </div>
        </section>
        <section className="py-12 bg-black border-t border-gray-800">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-8 text-lg text-gray-200 mb-8">
            <li>Local expertise for Guntur businesses</li>
            <li>Proven results and transparent reporting</li>
            <li>Advanced strategies: Marketing Automation Guntur company, Marketing Automation Guntur agency, Marketing Automation Guntur experts, Marketing Automation Guntur pricing, Marketing Automation Guntur packages</li>
            <li>Google My Business, content marketing, and link building</li>
            <li>100% white-hat, E-E-A-T and LLM-friendly content</li>
          </ul>
        </section>
        <TrustSignals />
        <Testimonials />
        <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Google in Guntur?</h2>
          <p className="text-lg mb-6">Get your free SEO audit and see how we can grow your business with advanced, AI-powered SEO strategies.</p>
          <a href="/contact/" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300">Get Started Today</a>
        </section>
      </main>
    </>
  );
}
