import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { CTA } from "@/components/landing/CTA";
import {
  FileSearch,
  Mail,
  TrendingUp,
  Shield,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: FileSearch,
    title: "Credit Report Analysis",
    description:
      "I'll conduct a thorough review of your credit reports from Equifax, Experian, and TransUnion to identify every error, inaccuracy, and disputable item.",
    features: [
      "Review all three credit bureau reports",
      "Identify errors and inaccuracies",
      "Find duplicate accounts",
      "Spot outdated negative items",
      "Analyze credit utilization",
    ],
  },
  {
    icon: Mail,
    title: "Professional Dispute Letters",
    description:
      "Using proven templates and strategies, I craft personalized dispute letters designed to get results.",
    features: [
      "Bureau-specific dispute letters",
      "Debt validation requests",
      "Goodwill letters for creditors",
      "Pay-for-delete negotiations",
      "Identity theft disputes",
      "Inquiry removal requests",
    ],
  },
  {
    icon: Shield,
    title: "Debt Validation",
    description:
      "Challenge questionable debts by demanding proper validation from collectors, ensuring they can legally collect.",
    features: [
      "Request original creditor documentation",
      "Challenge statute of limitations",
      "Verify debt ownership chain",
      "Dispute inaccurate amounts",
    ],
  },
  {
    icon: Users,
    title: "Creditor Negotiations",
    description:
      "I'll work directly with creditors to negotiate the best possible outcomes for your credit profile.",
    features: [
      "Pay-for-delete agreements",
      "Goodwill adjustments",
      "Settlement negotiations",
      "Payment plan arrangements",
    ],
  },
  {
    icon: TrendingUp,
    title: "Credit Building Strategy",
    description:
      "Get a personalized roadmap to build positive credit history and improve your score over time.",
    features: [
      "Secured credit card recommendations",
      "Credit builder loan options",
      "Authorized user strategies",
      "Credit utilization optimization",
    ],
  },
  {
    icon: Clock,
    title: "Ongoing Case Management",
    description:
      "I don't just send letters and disappear. I track every dispute and follow up until resolution.",
    features: [
      "Track all dispute responses",
      "Send follow-up letters as needed",
      "Regular progress updates",
      "Escalation when necessary",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Credit Repair Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive credit repair services tailored to your unique
              situation. Every case is different, and I treat it that way.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="p-4 bg-blue-100 rounded-xl w-fit mb-6">
                      <service.icon className="h-10 w-10 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 ${
                      index % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <div className="aspect-square flex items-center justify-center">
                      <service.icon className="h-32 w-32 text-blue-200" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Note */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Every credit situation is unique. I offer customized solutions
              based on your specific needs. Contact me for a free consultation
              to discuss your situation and get a personalized quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
