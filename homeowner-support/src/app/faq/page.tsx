'use client';

import Link from "next/link";
import Footer from "../../components/Footer";
import { useState } from "react";

const faqs = [
  {
    category: "Emergency Foreclosure - Atlanta, Orlando, Birmingham",
    questions: [
      {
        question: "I received a foreclosure notice in Atlanta today. What should I do immediately?",
        answer: "URGENT: Call us immediately at (770) 752-2509. In Atlanta, Georgia foreclosure laws allow 30 days to respond to a foreclosure notice. We can file emergency motions to delay the process and negotiate with your lender within 24 hours. Time is critical - don't wait."
      },
      {
        question: "Can you stop a foreclosure sale scheduled for next week in Orlando?",
        answer: "Yes! We have successfully stopped foreclosure sales even when scheduled for the following week in Orlando and throughout Florida. We can file emergency bankruptcy protection, negotiate last-minute loan modifications, or arrange quick sale options. Call (770) 752-2509 immediately."
      },
      {
        question: "My sheriff sale is tomorrow in Birmingham. Is it too late?",
        answer: "It's not too late! We've stopped sheriff sales on the day they were scheduled. In Birmingham, Alabama, we can file emergency legal documents, negotiate with lenders, or arrange immediate cash purchase. Every minute counts - call us now at (770) 752-2509."
      },
      {
        question: "I'm 3 months behind on mortgage payments in Knoxville. Can you help?",
        answer: "Absolutely! Being 3 months behind in Knoxville, Tennessee puts you at risk of foreclosure initiation, but we can help immediately. We offer emergency loan modifications, payment plans, and refinancing options specifically for Tennessee homeowners. Call (770) 752-2509 for urgent assistance."
      }
    ]
  },
  {
    category: "General",
    questions: [
      {
        question: "What is Homeowner Support?",
        answer: "Homeowner Support is a professional service that helps homeowners facing financial difficulties, foreclosure, or those looking to access their home's equity. We provide comprehensive solutions including foreclosure prevention, mortgage assistance, quick sales, and equity loans."
      },
      {
        question: "How quickly can you help me?",
        answer: "We understand that time is critical. Our team responds within 1 hour during business hours and can often provide immediate assistance. For emergency situations, we offer same-day consultations and can begin working on your case immediately."
      },
      {
        question: "Is your consultation really free?",
        answer: "Yes, absolutely. We offer a 100% free, no-obligation consultation to assess your situation and discuss your options. There are no hidden fees or charges for this initial consultation."
      },
      {
        question: "What areas do you serve?",
        answer: "While we're headquartered in Atlanta, GA, we serve homeowners nationwide. Our team of licensed professionals can assist you regardless of your location in the United States."
      }
    ]
  },
  {
    category: "Foreclosure Prevention",
    questions: [
      {
        question: "I received a foreclosure notice. What should I do?",
        answer: "Don't panic, but act quickly. Contact us immediately at (770) 752-2509. Time is critical in foreclosure cases, but we have multiple strategies to help stop or delay foreclosure proceedings, including loan modifications, payment plans, and legal interventions."
      },
      {
        question: "Can you really stop a foreclosure that's already started?",
        answer: "Yes, in many cases we can stop or delay foreclosure proceedings even after they've begun. We use various legal and financial strategies including bankruptcy protection, loan modifications, short sales, and negotiating with lenders. The sooner you contact us, the more options we have."
      },
      {
        question: "How long does the foreclosure prevention process take?",
        answer: "The timeline varies depending on your specific situation and state laws. We can often implement immediate measures to delay foreclosure within 24-48 hours, while long-term solutions like loan modifications may take 30-90 days to complete."
      }
    ]
  },
  {
    category: "Mortgage Assistance",
    questions: [
      {
        question: "What types of mortgage assistance do you offer?",
        answer: "We offer loan modifications, refinancing, payment reduction programs, interest rate adjustments, term extensions, and forbearance agreements. Our team works directly with lenders to negotiate better terms that fit your current financial situation."
      },
      {
        question: "My mortgage payment increased and I can't afford it. Can you help?",
        answer: "Yes, we specialize in helping homeowners with payment increases due to adjustable rates, property taxes, or insurance. We can negotiate with your lender for lower payments, different loan terms, or explore refinancing options even with poor credit."
      },
      {
        question: "Do I need good credit for mortgage assistance?",
        answer: "No, we work with homeowners regardless of credit score. While good credit provides more options, we have solutions specifically designed for those with poor or damaged credit, including hard money loans and alternative financing."
      }
    ]
  },
  {
    category: "Quick Sale",
    questions: [
      {
        question: "How fast can you buy my house?",
        answer: "We can close in as little as 7 days if needed. Our typical timeline is 2-3 weeks, but we can adjust based on your needs. We buy houses as-is, so there's no need for repairs or preparations."
      },
      {
        question: "Will I get a fair price for my home?",
        answer: "We provide competitive cash offers based on current market conditions, your home's condition, and your timeline needs. While cash offers are typically below retail market value, you save on realtor fees, repairs, holding costs, and get certainty of closing."
      },
      {
        question: "What condition does my house need to be in?",
        answer: "We buy houses in any condition - literally. Whether your home needs major repairs, has code violations, or is in perfect condition, we'll make you a fair cash offer. No repairs or cleaning needed."
      }
    ]
  },
  {
    category: "Equity Loans",
    questions: [
      {
        question: "Can I get an equity loan with bad credit?",
        answer: "Yes! We specialize in equity loans for homeowners with poor credit. We focus on your home's equity rather than just your credit score. Our network of lenders includes those who work specifically with challenged credit situations."
      },
      {
        question: "How much can I borrow against my home equity?",
        answer: "Typically, you can borrow up to 80-90% of your home's value minus any existing mortgages. The exact amount depends on your home's value, existing loans, and the lender's criteria. We'll help you maximize your borrowing potential."
      },
      {
        question: "How long does it take to get an equity loan?",
        answer: "Our equity loan process is much faster than traditional banks. Pre-approval can happen within 24 hours, and funding typically occurs within 2-3 weeks. For urgent situations, we have expedited options available."
      }
    ]
  },
  {
    category: "Costs and Fees",
    questions: [
      {
        question: "How much do your services cost?",
        answer: "Our consultation is completely free. For services where we help save your home or negotiate with lenders, we typically work on a success-fee basis - you only pay if we achieve results. For quick sales, there are no fees to you at all. Specific costs vary by service and situation."
      },
      {
        question: "Are there any upfront fees?",
        answer: "No, we never charge upfront fees. We believe in earning our compensation through results. Any fees are clearly disclosed and only charged after successful completion of services."
      },
      {
        question: "Do I need money to get started?",
        answer: "No, you don't need any money to start working with us. Our initial consultation and case evaluation are free, and most of our services require no upfront payment from you."
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-200">
            Find answers to common questions about our foreclosure prevention and homeowner support services.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((item, index) => {
                  const isOpen = openItems[`${category.category}-${index}`];
                  return (
                    <div key={index} className="bg-white rounded-lg shadow-md">
                      <button
                        onClick={() => toggleItem(category.category, index)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900">{item.question}</span>
                        <span className="text-blue-900 text-xl">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Our team is here to help. Contact us for a free consultation.
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
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}