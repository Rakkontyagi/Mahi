// src/data/staticPagesData.ts

export interface StaticPageContent {
  slug: string; // e.g., "privacy-policy"
  title: string; // e.g., "Privacy Policy"
  contentMarkdown: string; // The main content in Markdown format
  metaTitle?: string; // Optional SEO title
  metaDescription: string;
  lastUpdated?: string; // Optional, e.g., "2024-07-15"
}

export const allStaticPages: StaticPageContent[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    metaTitle: "Privacy Policy | God Digital Marketing",
    metaDescription: "Read the Privacy Policy for God Digital Marketing to understand how we collect, use, and protect your personal information.",
    lastUpdated: "2024-07-26", // Example date
    contentMarkdown: `
# Privacy Policy for God Digital Marketing

**Last Updated: July 26, 2024**

Welcome to God Digital Marketing ("us", "we", or "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at contact@goddigitalmarketing.com.

## 1. INFORMATION WE COLLECT

As a visitor to our Website, you can engage in many activities without providing any Personal Information. We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site.

### 1.1 Information You Provide to Us
-   **Contact Forms**: When you fill out a contact form, request a consultation, or download a resource, we may collect your name, email address, phone number, company name, and any other information you voluntarily provide.
-   **Communications**: If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

### 1.2 Information We Collect Automatically
-   **Log and Usage Data**: Like many websites, we collect information that your browser sends whenever you visit our Website ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Website that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
-   **Cookies and Similar Technologies**: We may use cookies and similar tracking technologies to track the activity on our Website and hold certain information.

## 2. HOW WE USE YOUR INFORMATION

We use the information we collect in various ways, including to:
-   Provide, operate, and maintain our website
-   Improve, personalize, and expand our website
-   Understand and analyze how you use our website
-   Develop new products, services, features, and functionality
-   Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
-   Process your transactions
-   Send you emails
-   Find and prevent fraud

## 3. SHARING YOUR INFORMATION

We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.

## 4. DATA SECURITY

We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.

## 5. YOUR DATA PROTECTION RIGHTS

Depending on your location, you may have the following rights regarding your personal information:
-   The right to access – You have the right to request copies of your personal data.
-   The right to rectification – You have the right to request that we correct any information you believe is inaccurate.
-   The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
-   The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
-   The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
-   The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.

If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.

## 6. CHANGES TO THIS PRIVACY POLICY

We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.

## 7. CONTACT US

If you have questions or comments about this notice, you may email us at contact@goddigitalmarketing.com or by post to:

God Digital Marketing
[Your Company's Physical Address - Placeholder]
India
`
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service",
    metaTitle: "Terms of Service | God Digital Marketing",
    metaDescription: "Please read these Terms of Service carefully before using the God Digital Marketing website and services.",
    lastUpdated: "2024-07-26", // Example date
    contentMarkdown: `
# Terms of Service for God Digital Marketing

**Last Updated: July 26, 2024**

Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the https://goddigitalmarketing.com website (the "Service") operated by God Digital Marketing ("us", "we", or "our").

Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.

By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.

## 1. SERVICES

God Digital Marketing provides various digital marketing, AI automation, and lead generation services as described on our website. All services are subject to specific agreements and statements of work that will outline the scope, deliverables, and fees.

## 2. ACCOUNTS

When you create an account with us (if applicable), you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.

## 3. INTELLECTUAL PROPERTY

The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of God Digital Marketing and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of God Digital Marketing.

## 4. LINKS TO OTHER WEB SITES

Our Service may contain links to third-party web sites or services that are not owned or controlled by God Digital Marketing.

God Digital Marketing has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that God Digital Marketing shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.

We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.

## 5. TERMINATION

We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.

All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.

## 6. DISCLAIMER

Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.

## 7. GOVERNING LAW

These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.

Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.

## 8. CHANGES

We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.

## 9. CONTACT US

If you have any questions about these Terms, please contact us:
-   By email: contact@goddigitalmarketing.com
-   By visiting this page on our website: /contact/
-   By mail: [Your Company's Physical Address - Placeholder], India
`
  }
];
