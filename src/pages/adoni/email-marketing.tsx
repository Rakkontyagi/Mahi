import React from 'react';
import { SEOHead } from '../../components/SEO/SEOHead';
import { TrustSignals } from '../../components/TrustSignals';
import { Testimonials } from '../../components/Testimonials';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export default function AdoniEmailMarketingPage() {
  return (
    <>
      <SEOHead
        title={"Email Marketing in Adoni | Best Email Marketing Company in Adoni"}
        description={"Rank #1 with the top email marketing company in Adoni. Proven results, local expertise, and advanced strategies for businesses in Adoni."}
        keywords={["Email Marketing","Adoni","Email Marketing Adoni company","Email Marketing Adoni agency","Email Marketing Adoni experts","Email Marketing Adoni pricing","Email Marketing Adoni packages","Email Marketing Adoni for small business","Email Marketing Adoni for startups","Email Marketing Adoni results","Email Marketing Adoni case studies","Email Marketing Adoni reviews"]}
        canonicalUrl={"https://goddigitalmarketing.com/adoni/email-marketing/"}
        ogImage={"https://goddigitalmarketing.com/og-image.jpg"}
        structuredData={{"@context":"https://schema.org","@type":"Service","name":"Email Marketing in Adoni | Best Email Marketing Company in Adoni","description":"Rank #1 with the top email marketing company in Adoni. Proven results, local expertise, and advanced strategies for businesses in Adoni.","provider":{"@type":"Organization","name":"God Digital Marketing"},"areaServed":"Adoni","keywords":"Email Marketing, Adoni, Email Marketing Adoni company, Email Marketing Adoni agency, Email Marketing Adoni experts, Email Marketing Adoni pricing, Email Marketing Adoni packages, Email Marketing Adoni for small business, Email Marketing Adoni for startups, Email Marketing Adoni results, Email Marketing Adoni case studies, Email Marketing Adoni reviews"}}
      />
      <main className="min-h-screen bg-black text-white">
        <Breadcrumbs currentPage={"Email Marketing in Adoni | Best Email Marketing Company in Adoni"} />
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Email Marketing in Adoni | Best Email Marketing Company in Adoni</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Rank #1 with the top email marketing company in Adoni. Proven results, local expertise, and advanced strategies for businesses in Adoni. Email Marketing Adoni company, Email Marketing Adoni agency, Email Marketing Adoni experts.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="/adoni/ppc-advertising/" className="text-blue-400 underline">PPC Advertising in Adoni</a> <a href="/adoni/social-media-marketing/" className="text-blue-400 underline">Social Media Marketing in Adoni</a> <a href="/services/email-marketing/" className="text-blue-400 underline">Email Marketing India</a> <a href="/industries/healthcare/email-marketing/" className="text-blue-400 underline">Healthcare Email Marketing</a>
          </div>
        </section>
        <section className="py-12 bg-black border-t border-gray-800">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-8 text-lg text-gray-200 mb-8">
            <li>Local expertise for Adoni businesses</li>
            <li>Proven results and transparent reporting</li>
            <li>Advanced strategies: Email Marketing Adoni company, Email Marketing Adoni agency, Email Marketing Adoni experts, Email Marketing Adoni pricing, Email Marketing Adoni packages</li>
            <li>Google My Business, content marketing, and link building</li>
            <li>100% white-hat, E-E-A-T and LLM-friendly content</li>
          </ul>
        </section>
        <TrustSignals />
        <Testimonials />
        <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Google in Adoni?</h2>
          <p className="text-lg mb-6">Get your free SEO audit and see how we can grow your business with advanced, AI-powered SEO strategies.</p>
          <a href="/contact/" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300">Get Started Today</a>
        </section>
      </main>
    </>
  );
}
