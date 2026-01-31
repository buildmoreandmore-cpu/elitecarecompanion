import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { CTA } from "@/components/landing/CTA";
import {
  ExternalLink,
  FileText,
  CreditCard,
  Shield,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const creditReportSources = [
  {
    name: "AnnualCreditReport.com",
    url: "https://www.annualcreditreport.com",
    description:
      "The only federally authorized source for free credit reports. Get one free report from each bureau every year.",
    features: [
      "100% free - no credit card required",
      "All three bureaus (Equifax, Experian, TransUnion)",
      "One free report per bureau per year",
      "Official government-mandated site",
    ],
    recommended: true,
    icon: Shield,
  },
  {
    name: "IdentityIQ",
    url: "https://www.identityiq.com",
    description:
      "Get all three credit reports with scores for just $1. Great option if you need reports more frequently.",
    features: [
      "$1 for 7-day trial (all 3 reports + scores)",
      "Updated daily credit monitoring",
      "Credit score simulator",
      "Cancel anytime",
    ],
    recommended: false,
    icon: CreditCard,
    note: "Remember to cancel before the trial ends to avoid monthly charges.",
  },
];

const additionalResources = [
  {
    title: "Dispute Letter Templates",
    description:
      "When you become a client, you'll have access to professional dispute letter templates for various situations.",
    icon: FileText,
  },
  {
    title: "Credit Score Factors",
    description:
      "Understanding what impacts your score: payment history (35%), credit utilization (30%), length of history (15%), credit mix (10%), new credit (10%).",
    icon: AlertCircle,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Credit Report Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Before we can fix your credit, we need to see what&apos;s on your
              report. Here&apos;s where to get your credit reports.
            </p>
          </div>
        </section>

        {/* Main Resources */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Where to Get Your Credit Reports
            </h2>

            <div className="space-y-8">
              {creditReportSources.map((source, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg p-8 border-2 ${
                    source.recommended
                      ? "border-green-500"
                      : "border-transparent"
                  }`}
                >
                  {source.recommended && (
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-4">
                      Recommended
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <source.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {source.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{source.description}</p>
                      <ul className="space-y-2 mb-6">
                        {source.features.map((feature, fIndex) => (
                          <li
                            key={fIndex}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {source.note && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                          <p className="text-yellow-800 text-sm">
                            <strong>Note:</strong> {source.note}
                          </p>
                        </div>
                      )}
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Visit {source.name}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              How to Submit Your Reports
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-gray-600 mb-6">
                Once you become a client, you&apos;ll receive a unique link to your
                personal client portal. From there, you can:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3">
                    Option 1: Upload Files
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Save your reports as PDF</li>
                    <li>• Take screenshots of each page</li>
                    <li>• Upload directly to your portal</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3">
                    Option 2: Share Access
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Share your IdentityIQ login temporarily</li>
                    <li>• Add notes about specific items</li>
                    <li>• Describe issues in text form</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started - Request Your Client Portal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Additional Resources
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {additionalResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                >
                  <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                    <resource.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
