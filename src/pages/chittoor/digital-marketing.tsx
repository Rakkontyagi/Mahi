import React from 'react';
import { SEOHead } from '../../components/SEO/SEOHead';
import { TrustSignals } from '../../components/TrustSignals';
import { Testimonials } from '../../components/Testimonials';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export default function ChittoorDigitalMarketingPage() {
  return (
    <>
      <SEOHead
        title={"Digital Marketing in Chittoor | Best Digital Marketing Company in Chittoor"}
        description={"Rank #1 with the top digital marketing company in Chittoor. Proven results, local expertise, and advanced strategies for businesses in Chittoor."}
        keywords={["Digital Marketing","Chittoor","Digital Marketing Chittoor company","Digital Marketing Chittoor agency","Digital Marketing Chittoor experts","Digital Marketing Chittoor pricing","Digital Marketing Chittoor packages","Digital Marketing Chittoor for small business","Digital Marketing Chittoor for startups","Digital Marketing Chittoor results","Digital Marketing Chittoor case studies","Digital Marketing Chittoor reviews"]}
        canonicalUrl={"https://goddigitalmarketing.com/chittoor/digital-marketing/"}
        ogImage={"https://goddigitalmarketing.com/og-image.jpg"}
        structuredData={{"@context":"https://schema.org","@type":"Service","name":"Digital Marketing in Chittoor | Best Digital Marketing Company in Chittoor","description":"Rank #1 with the top digital marketing company in Chittoor. Proven results, local expertise, and advanced strategies for businesses in Chittoor.","provider":{"@type":"Organization","name":"God Digital Marketing"},"areaServed":"Chittoor","keywords":"Digital Marketing, Chittoor, Digital Marketing Chittoor company, Digital Marketing Chittoor agency, Digital Marketing Chittoor experts, Digital Marketing Chittoor pricing, Digital Marketing Chittoor packages, Digital Marketing Chittoor for small business, Digital Marketing Chittoor for startups, Digital Marketing Chittoor results, Digital Marketing Chittoor case studies, Digital Marketing Chittoor reviews"}}
      />
      <main className="min-h-screen bg-black text-white">
        <Breadcrumbs currentPage={"Digital Marketing in Chittoor | Best Digital Marketing Company in Chittoor"} />
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Digital Marketing in Chittoor | Best Digital Marketing Company in Chittoor</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Rank #1 with the top digital marketing company in Chittoor. Proven results, local expertise, and advanced strategies for businesses in Chittoor. Digital Marketing Chittoor company, Digital Marketing Chittoor agency, Digital Marketing Chittoor experts.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="/chittoor/ppc-advertising/" className="text-blue-400 underline">PPC Advertising in Chittoor</a> <a href="/chittoor/social-media-marketing/" className="text-blue-400 underline">Social Media Marketing in Chittoor</a> <a href="/services/digital-marketing/" className="text-blue-400 underline">Digital Marketing India</a> <a href="/industries/healthcare/digital-marketing/" className="text-blue-400 underline">Healthcare Digital Marketing</a>
          </div>
        </section>
        <section className="py-12 bg-black border-t border-gray-800">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-8 text-lg text-gray-200 mb-8">
            <li>Local expertise for Chittoor businesses</li>
            <li>Proven results and transparent reporting</li>
            <li>Advanced strategies: Digital Marketing Chittoor company, Digital Marketing Chittoor agency, Digital Marketing Chittoor experts, Digital Marketing Chittoor pricing, Digital Marketing Chittoor packages</li>
            <li>Google My Business, content marketing, and link building</li>
            <li>100% white-hat, E-E-A-T and LLM-friendly content</li>
          </ul>
        </section>
        <TrustSignals />
        <Testimonials />
        <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Google in Chittoor?</h2>
          <p className="text-lg mb-6">Get your free SEO audit and see how we can grow your business with advanced, AI-powered SEO strategies.</p>
          <a href="/contact/" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300">Get Started Today</a>
        </section>
      </main>
    </>
  );
}
