import Link from "next/link";
import Footer from "../../components/Footer";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "1",
      title: "Free Consultation",
      description: "Contact us for a free, no-obligation consultation. We'll discuss your situation, understand your goals, and explore available options.",
      icon: "📞",
      details: [
        "Call us at (770) 752-2509 or fill out our online form",
        "Speak with a licensed professional within 1 hour",
        "100% confidential discussion",
        "No credit check required"
      ]
    },
    {
      number: "2",
      title: "Situation Analysis",
      description: "Our experts analyze your financial situation, property details, and create a customized action plan tailored to your needs.",
      icon: "📊",
      details: [
        "Review of mortgage documents and payment history",
        "Property valuation and equity assessment",
        "Credit and financial situation evaluation",
        "Identification of all available options"
      ]
    },
    {
      number: "3",
      title: "Solution Implementation",
      description: "We implement the agreed-upon solution, whether it's stopping foreclosure, modifying your loan, or facilitating a quick sale.",
      icon: "⚡",
      details: [
        "Direct negotiation with lenders",
        "Legal document preparation and filing",
        "Coordination with all parties involved",
        "Regular updates on progress"
      ]
    },
    {
      number: "4",
      title: "Resolution & Support",
      description: "We see your case through to successful resolution and provide ongoing support to ensure long-term success.",
      icon: "✅",
      details: [
        "Finalization of agreements or transactions",
        "Post-resolution support and guidance",
        "Financial counseling for future stability",
        "Access to our network of professionals"
      ]
    }
  ];

  const services = [
    {
      title: "Foreclosure Prevention",
      timeline: "24-48 hours for emergency intervention",
      process: "We immediately contact your lender, file necessary paperwork to delay proceedings, and negotiate for loan modification or payment plans."
    },
    {
      title: "Mortgage Assistance",
      timeline: "30-90 days for modification approval",
      process: "We analyze your mortgage terms, prepare modification proposals, submit applications, and negotiate with lenders for better terms."
    },
    {
      title: "Quick Sale",
      timeline: "7-21 days to close",
      process: "We evaluate your property, make a cash offer, handle all paperwork, and close on your timeline with no repairs needed."
    },
    {
      title: "Equity Loans",
      timeline: "2-3 weeks for funding",
      process: "We assess your equity, connect you with appropriate lenders, assist with applications, and expedite the approval process."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-900">Homeowner Support</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/#services" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/#success" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Success Stories</Link>
                <span className="text-blue-900 font-semibold">(770) 752-2509</span>
                <Link href="/contact" className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800">
                  Get free consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-xl text-blue-200">
            Our simple, proven process to help you overcome financial challenges and keep your home.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our 4-Step Process</h2>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-900 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      Step {step.number}: {step.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-900 mr-2">✓</span>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-24">
                    <div className="w-0.5 h-16 bg-blue-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Timelines */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Service Timelines</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="border-2 border-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    ⏱️ {service.timeline}
                  </span>
                </div>
                <p className="text-gray-600">{service.process}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Why Our Process Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">We respond within 1 hour and can begin working on your case immediately.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍⚖️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Legal Expertise</h3>
              <p className="text-gray-600">Licensed professionals who understand foreclosure law and lender negotiations.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Over 10,000 homeowners helped with a 95% success rate.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">No Upfront Fees</h3>
              <p className="text-gray-600">Free consultation and no payment required until we deliver results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Take the first step toward financial freedom. Contact us today for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7707522509"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 inline-flex items-center justify-center"
            >
              <span className="mr-2">📞</span>
              Call Now: (770) 752-2509
            </a>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 inline-flex items-center justify-center">
              Start Online Application
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}