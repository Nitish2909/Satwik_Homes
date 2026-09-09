import { useState, useEffect } from "react";
import { Shield, ChevronRight } from "lucide-react";

const SECTIONS = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: [
      "Your privacy is important to us. It is Satwik Homes' policy to respect your privacy regarding any information we may collect from you across our website, https://satwikhomes.com/, and other platforms we own and operate.",
      {
        heading: "Personal Information",
        body: "We only ask for personal information when we truly need it to provide real estate services to you (e.g., inquiry forms, property listing, site visit bookings). We collect it by fair and lawful means, with your knowledge and consent.",
      },
      {
        heading: "Usage & Property Activity Data",
        body: "We automatically collect information about how you interact with our website, including your IP address, browser type, saved properties, search filters (e.g., location, budget, property type), viewed listings, device identifiers, and referring URLs. This data helps us personalise your property search.",
      },
      {
        heading: "Location Data",
        body: "With your permission, we may collect location data from your device to provide location-based features, such as showing nearby properties, projects, and local neighborhood insights.",
      },
      {
        heading: "Communications & Inquiries",
        body: "When you contact us, send inquiries to property owners/agents, or request a call-back, we retain records of those interactions, including form submissions, chat logs, emails, and call notes.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    content: [
      "Satwik Homes uses the information we collect for the following real estate service purposes:",
      {
        heading: "Service Delivery",
        body: "To facilitate buying, selling, renting, or leasing transactions, schedule site visits, connect you with verified sellers or agents, and present relevant property listings.",
      },
      {
        heading: "Account Management",
        body: "To create and manage your Satwik Homes account, enable saved property alerts, and manage user preferences and authentication.",
      },
      {
        heading: "Communication",
        body: "To send transactional notifications (inquiry confirmations, visit schedules), property alerts matching your saved criteria, promotional updates (with your consent), and service notices.",
      },
      {
        heading: "Personalisation",
        body: "To recommend properties, projects, and real estate market trends tailored to your search history, location, and budget preferences.",
      },
      {
        heading: "Analytics & Improvement",
        body: "To analyze platform traffic, monitor listing engagement, debug technical issues, and improve our website performance.",
      },
      {
        heading: "Legal & Regulatory Compliance",
        body: "To comply with applicable real estate regulations (including RERA compliance where applicable), satisfy legal processes, enforce our terms of service, and protect the rights and safety of Satwik Homes and our users.",
      },
    ],
  },
  {
    id: "information-sharing",
    title: "Information Sharing",
    content: [
      "We do not sell, rent, or trade your personal contact details to third-party marketers. We share your information only under the following conditions:",
      {
        heading: "Property Partners & Agents",
        body: "When you submit an inquiry or request a call for a specific property, we share your necessary contact details with the relevant property developers, real estate agents, or property owners so they can assist you.",
      },
      {
        heading: "Service Providers",
        body: "We engage trusted third-party service providers who assist us in operating our platform — including payment gateways (for premium listings/token amounts), cloud hosting providers (AWS, Google Cloud), analytics engines (Google Analytics), and customer communication tools.",
      },
      {
        heading: "Business Transfers",
        body: "In the event of a merger, acquisition, or sale of Satwik Homes assets, your information may be transferred as part of that transaction. You will be notified of any such change.",
      },
      {
        heading: "Legal Requirements",
        body: "We may disclose your information if required to do so by law, court order, or government authority, or when we believe disclosure is necessary to protect legal rights and public safety.",
      },
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    content: [
      "We take the security of your personal and financial information seriously and implement industry-standard technical and organizational safeguards.",
      {
        heading: "Encryption",
        body: "All data transmitted between your browser and our platform is encrypted using TLS 1.2 or higher. Stored sensitive records are encrypted at rest using AES-256 standard.",
      },
      {
        heading: "Access Controls",
        body: "Access to user and inquiry data is restricted strictly to authorized personnel who require access to perform their operational duties. All staff are bound by strict confidentiality agreements.",
      },
      {
        heading: "Payment Security",
        body: "We do not store complete payment card details or banking credentials on our servers. All financial transactions are processed securely through PCI-DSS compliant payment gateways.",
      },
      {
        heading: "Incident Response",
        body: "We maintain a proactive security incident response plan. In the unlikely event of a security breach affecting your personal data, we will notify you in accordance with applicable legal requirements.",
      },
      "Despite these security protections, no method of transmission over the internet is completely risk-free. We advise you to use strong passwords and keep your login credentials confidential.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Tracking Technologies",
    content: [
      "Satwik Homes uses cookies and similar technologies to optimize your search experience on our platform.",
      {
        heading: "Essential Cookies",
        body: "Necessary for core platform features such as user login, shortlisting properties, and security functions. These cannot be disabled.",
      },
      {
        heading: "Analytics Cookies",
        body: "Help us measure platform traffic, identify popular residential regions, and analyze how users interact with property listings (e.g., Google Analytics).",
      },
      {
        heading: "Marketing Cookies",
        body: "Used to present relevant real estate offers, projects, and ads tailored to your preferences across third-party websites.",
      },
      {
        heading: "Preference Cookies",
        body: "Remember your customized settings, such as your preferred search location, currency, and language.",
      },
      "You can manage cookie settings through your web browser preferences at any time.",
    ],
  },
  {
    id: "user-rights",
    title: "Your Rights",
    content: [
      "Subject to local laws, you have the following rights regarding your personal information:",
      {
        heading: "Access",
        body: "You have the right to request a copy of the personal details and property inquiry records we hold about you.",
      },
      {
        heading: "Correction",
        body: "You may update or modify inaccurate profile details or property listing information at any time via your account settings or by contacting support.",
      },
      {
        heading: "Deletion",
        body: "You may request the deletion of your account and personal data, subject to legal and regulatory retention requirements.",
      },
      {
        heading: "Portability",
        body: "You can request a copy of your personal data in a structured, commonly used, machine-readable format.",
      },
      {
        heading: "Withdraw Consent",
        body: "Where processing relies on your consent (such as promotional real estate newsletters), you can unsubscribe or opt out at any time.",
      },
      "To exercise any of these rights, please write to us at satwikhomes@gmail.com. We will respond within 30 days.",
    ],
  },
  {
    id: "contact-information",
    title: "Contact Information",
    content: [
      "If you have questions, feedback, or concerns regarding this Privacy Policy or our real estate data practices, please contact us:",
      {
        heading: "Satwik Homes Privacy & Legal Team",
        body: "Email: satwikhomes@gmail.com | Phone: +91-8816942362 | Address: SCO 98, Sec. 4-5, Urban Estate, Karnal, Haryana — 132001",
      },
      "We take privacy inquiries seriously and will resolve your requests promptly. If you are not satisfied with our resolution, you retain the right to approach the appropriate data protection authority.",
    ],
  },
];

function SectionContent({ content }) {
  return (
    <div className="space-y-3">
      {content.map((item, idx) => {
        if (typeof item === "string") {
          return (
            <p key={idx} className="text-slate-700 leading-relaxed">
              {item}
            </p>
          );
        }
        return (
          <p key={idx} className="text-slate-700 leading-relaxed">
            <strong className="text-slate-900">{item.heading}: </strong>
            {item.body}
          </p>
        );
      })}
    </div>
  );
}

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    
    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto mt-12">
          <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center mx-auto mb-4">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto leading-relaxed">
            At Satwik Homes, your privacy matters. This policy explains how we
            collect, use, and safeguard your personal information when you navigate our platform and real estate services.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-12 lg:flex lg:gap-10">
        {/* Sticky TOC sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              Contents
            </h3>
            <nav className="space-y-1">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === section.id
                      ? "bg-amber-50 text-amber-700 font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                  }`}
                >
                  <ChevronRight
                    className={`w-3.5 h-3.5 flex-shrink-0 ${
                      activeSection === section.id
                        ? "text-amber-500"
                        : "text-slate-300"
                    }`}
                  />
                  <span className="leading-tight">{section.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Article */}
        <article className="flex-1 min-w-0 max-w-3xl">
          <div className="space-y-12">
            {SECTIONS.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28"
              >
                <h2 className="font-playfair text-2xl font-bold text-slate-800 mb-4 pb-3 border-b border-slate-100">
                  {section.title}
                </h2>
                <SectionContent content={section.content} />
              </section>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-12 p-5 bg-amber-50 rounded-2xl border border-amber-100">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-800">
                Questions about this policy?
              </strong>{" "}
              Contact our privacy team at{" "}
              <a
                href="mailto:satwikhomes@gmail.com"
                className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2"
              >
                satwikhomes@gmail.com
              </a>
              . We are committed to transparency and will respond to all privacy
              inquiries within 30 days.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}