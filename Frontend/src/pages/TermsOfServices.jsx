import { useState, useEffect } from "react";
import {
  FileText,
  ChevronRight,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";

const SECTIONS = [
  {
    id: "acceptance-of-terms",
    title: "Acceptance of Terms",
    content: [
      "By accessing or using Satwik Homes's website, mobile application, or any of our Real Estate services, you agree to be bound by these Terms of Service and our Privacy Policy, which is incorporated herein by reference.",
      "If you do not agree to these Terms, please do not use our services. These Terms constitute a legally binding agreement between you and Satwik Homes Real Estate Pvt. Ltd.",
      {
        heading: "Eligibility",
        body: "You must be at least 18 years of age and legally competent to enter into binding contracts under applicable Indian laws to create an account, list properties, or execute property transactions.",
      },
      {
        heading: "Updates to Terms",
        body: "We reserve the right to update these Terms at any time. Material changes will be communicated via email or a prominent notice on our platform. Your continued use of our services after the effective date of any changes constitutes your acceptance of the revised Terms.",
      },
    ],
  },
  {
    id: "booking-and-payment",
    title: "Property Booking & Payment",
    content: [
      {
        heading: "Booking & Token Process",
        body: "A property booking, site visit reservation, or token payment is confirmed only upon receipt of payment (full or advance deposit as specified) and issuance of a confirmation email/receipt from Satwik Homes. Property availability is subject to change until payment is confirmed.",
      },
      {
        heading: "Pricing & Valuation",
        body: "All property prices and service fees are listed in Indian Rupees (INR) unless otherwise stated. Prices are subject to seller updates or market adjustments prior to booking confirmation. Satwik Homes reserves the right to correct typographical or pricing errors.",
      },
      {
        heading: "Payment Methods",
        body: "We accept UPI, credit/debit cards, and net banking options through our payment partner Razorpay. Wire transfers and direct bank transfers may also be accommodated for large transactions.",
      },
      {
        heading: "Deposit & Balance Payment",
        body: "For property deals requiring an initial token or advance deposit, the remaining balance must be paid by the due date specified in your booking or sales agreement. Failure to pay the balance by the due date may result in cancellation of the booking as per agreement terms.",
      },
      {
        heading: "Taxes & Registration Fees",
        body: "GST, statutory taxes, stamp duty, and government registration fees are not included in the basic listed property price unless explicitly specified. Service fees, if any, will be clearly displayed before payment.",
      },
      {
        heading: "Price Inclusions & Exclusions",
        body: "Each property listing clearly states what is included (e.g., parking space, maintenance deposit, amenities). Satwik Homes is not responsible for external costs not listed as inclusions (e.g., individual utility connections, legal registration charges).",
      },
    ],
  },
  {
    id: "cancellation-policy",
    title: "Cancellation & Refund Policy",
    content: [
      {
        heading: "User-Initiated Cancellations",
        body: "Our refund policy for token amounts, service fees, or site visit bookings is tiered based on the notice period given prior to the scheduled transaction or agreement date.",
      },
      "__refund_table__",
      "Processing fees and payment gateway charges (typically 2–3%) are non-refundable in all cases.",
      {
        heading: "How to Cancel",
        body: "Cancellations must be submitted in writing via your Satwik Homes account dashboard or by emailing satwikhomes@gmail.com. The cancellation date is the date we receive your written request.",
      },
      {
        heading: "Satwik Homes-Initiated Cancellations",
        body: "If Satwik Homes or the property builder cancels a booking due to legal discrepancies, title issues, property unavailability, or force majeure, you will receive a full refund or the option to transfer your deposit to an alternative listing.",
      },
      {
        heading: "Property Advisory & Verification",
        body: "We strongly recommend conducting independent legal verification and title checks prior to making major financial commitments. Satwik Homes can recommend legal advisory partners upon request.",
      },
    ],
  },
  {
    id: "real-estate-documentation",
    title: "Property & Identity Documentation",
    content: [
      {
        heading: "User Responsibility",
        body: "It is your sole responsibility to ensure that you provide valid identity details and legal documents required for real estate purchase, sale, lease, or registry.",
      },
      {
        heading: "Government Identifiers & KYC",
        body: "For real estate transactions in India, government-issued photo ID and tax identification (such as PAN Card, Voter ID, or Passport) are mandatory for buyers, sellers, and tenants for KYC and registry compliance.",
      },
      {
        heading: "Property Title & Verification Documents",
        body: "Sellers and builders listing properties on Satwik Homes must provide clear title deeds, approved building plans, non-encumbrance certificates, and RERA registration details where applicable.",
      },
      {
        heading: "Document Copies",
        body: "We recommend maintaining physical and digital copies of all agreements, receipts, and ownership documents. Satwik Homes bears no responsibility for financial losses arising from missing, fraudulent, or invalid documentation supplied by users.",
      },
    ],
  },
  {
    id: "health-and-safety",
    title: "Site Visit & Property Inspection Safety",
    content: [
      {
        heading: "Site Visit Declaration",
        body: "By scheduling a site visit to active construction sites or real estate projects, you agree to adhere to safety guidelines posted at the location.",
      },
      {
        heading: "Safety Instructions",
        body: "You agree to follow all safety instructions provided by Satwik Homes site representatives, project managers, and property guides. Mandatory safety gear (such as hard hats on active construction sites) must be worn when required.",
      },
      {
        heading: "Risk Acknowledgement",
        body: "Inspecting properties, especially those under construction, carries inherent physical risks. By participating in a site visit, you acknowledge and accept these operational risks.",
      },
      {
        heading: "Code of Conduct",
        body: "Unlawful behavior, trespassing onto unapproved site areas, or damage to property during site visits is strictly prohibited and may result in immediate termination of services and legal action.",
      },
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: [
      {
        heading: "Scope",
        body: "To the maximum extent permitted by applicable law, Satwik Homes, its directors, employees, agents, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our real estate services.",
      },
      {
        heading: "Third-Party Sellers & Developers",
        body: "Satwik Homes acts as a platform connecting property buyers, sellers, agents, and developers. While we strive to verify listings, Satwik Homes is not responsible for misrepresentations, structural defects, construction delays, or defaults caused by third-party sellers or developers.",
      },
      {
        heading: "Force Majeure",
        body: "Satwik Homes shall not be liable for any failure or delay in performance arising from circumstances beyond our reasonable control, including natural disasters, acts of God, legal restrictions, government action, or market disruptions.",
      },
      {
        heading: "Cap on Liability",
        body: "Where liability cannot be excluded by law, Satwik Homes's total liability to you for any claim shall not exceed the service fee amount paid by you to Satwik Homes for the specific transaction giving rise to the claim.",
      },
      {
        heading: "Indemnification",
        body: "You agree to indemnify and hold Satwik Homes harmless from any claims, damages, or expenses (including legal fees) arising from your violation of these Terms, misrepresentation of property details, or willful misconduct.",
      },
    ],
  },
  {
    id: "changes-to-terms",
    title: "Changes to Terms & Jurisdiction",
    content: [
      "Satwik Homes reserves the right to modify these Terms of Service at any time. We will provide reasonable notice of significant changes by sending an email to your registered email address and posting a notice on our website with the effective date of changes.",
      {
        heading: "Continued Use",
        body: "Your continued use of Satwik Homes's platform after the effective date of any modifications constitutes your acceptance of the revised Terms.",
      },
      {
        heading: "Governing Law",
        body: "These Terms are governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Karnal / New Delhi, India.",
      },
      {
        heading: "Entire Agreement",
        body: "These Terms, together with our Privacy Policy and any transaction-specific agreements, constitute the entire agreement between you and Satwik Homes regarding your use of our services.",
      },
      {
        heading: "Contact Us",
        body: "For any questions about these Terms, please contact us at satwikhomes@gmail.com or write to us at SCO 98, Sec 4-5, Urban Estate, Karnal, Haryana — 132001.",
      },
    ],
  },
];

const REFUND_TABLE = [
  {
    period: "15+ days before agreement / visit date",
    refund: "90% — Full Refund",
    icon: "green",
  },
  {
    period: "10-12 days before agreement / visit date",
    refund: "50% Refund",
    icon: "amber",
  },
  {
    period: "Less than 3 days / No-show",
    refund: "No Refund",
    icon: "red",
  },
];

function SectionContent({ content }) {
  return (
    <div className="space-y-3">
      {content.map((item, idx) => {
        if (item === "__refund_table__") {
          return (
            <div key={idx} className="overflow-x-auto my-4">
              <table className="w-full border-collapse text-sm rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-amber-50">
                    <th className="px-4 py-3 text-left text-amber-800 font-bold border border-amber-200">
                      Cancellation Notice Period
                    </th>
                    <th className="px-4 py-3 text-left text-amber-800 font-bold border border-amber-200">
                      Eligible Refund
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {REFUND_TABLE.map((row, ri) => (
                    <tr
                      key={ri}
                      className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-3 border border-slate-200 text-slate-700 font-medium">
                        {row.period}
                      </td>
                      <td
                        className={`px-4 py-3 border border-slate-200 font-semibold ${
                          row.icon === "green"
                            ? "text-green-700"
                            : row.icon === "amber"
                              ? "text-amber-700"
                              : "text-red-600"
                        }`}
                      >
                        {row.refund}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
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

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
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
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto leading-relaxed">
            Please read these terms carefully before engaging with Satwik Homes. By
            using our platform or services, you agree to be bound by these terms.
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
          <div className="mt-12 p-5 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-800">
                Questions about these terms?
              </strong>{" "}
              Contact our legal team at{" "}
              <a
                href="mailto:satwikhomes@gmail.com"
                className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2"
              >
                satwikhomes@gmail.com
              </a>
              . These terms were last updated in September 2026 and supersede all
              prior versions.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}