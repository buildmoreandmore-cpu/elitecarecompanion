'use client';

import Link from "next/link";
import AddressInput from "../components/AddressInput";
import Footer from "../components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "FinancialService"],
        "@id": "https://www.homeowner-support.com/#organization",
        "name": "Homeowner Support",
        "url": "https://www.homeowner-support.com",
        "description": "Emergency foreclosure help and mortgage assistance for Atlanta and Georgia homeowners. Stop foreclosure in 24 hours.",
        "telephone": "+1-770-752-2509",
        "priceRange": "$$",
        "openingHours": "Mo-Su 24:00",
        "serviceArea": [
          {
            "@type": "State",
            "name": "Georgia"
          },
          {
            "@type": "State",
            "name": "Florida"
          },
          {
            "@type": "State",
            "name": "Alabama"
          },
          {
            "@type": "State",
            "name": "Tennessee"
          }
        ],
        "areaServed": [
          "Atlanta, GA", "Alpharetta, GA", "Buckhead, GA", "East Point, GA", "McDonough, GA", "Sandy Springs, GA", "Dunwoody, GA", "Macon, GA", "Savannah, GA",
          "Orlando, FL", "Miami, FL", "Tampa Bay, FL", "Jacksonville, FL", "Tallahassee, FL", "Gainesville, FL", "Sarasota, FL",
          "Birmingham, AL",
          "Hendersonville, TN", "Morristown, TN", "Johnson City, TN", "Crossville, TN", "Knoxville, TN", "McMinnville, TN", "Spring Hill, TN"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-770-752-2509",
          "contactType": "customer service",
          "areaServed": ["Atlanta", "Georgia"],
          "availableLanguage": "English",
          "hoursAvailable": "Mo-Su 24:00"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Financial Plaza, Suite 200",
          "addressLocality": "Atlanta",
          "addressRegion": "GA",
          "postalCode": "30309",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "33.7490",
          "longitude": "-84.3880"
        },
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://www.homeowner-support.com/#website",
        "url": "https://www.homeowner-support.com",
        "name": "Homeowner Support",
        "description": "Expert foreclosure prevention and homeowner assistance services",
        "publisher": {
          "@id": "https://www.homeowner-support.com/#organization"
        }
      },
      {
        "@type": "Service",
        "name": "Foreclosure Prevention",
        "description": "Stop foreclosure proceedings with expert guidance and proven strategies",
        "provider": {
          "@id": "https://www.homeowner-support.com/#organization"
        },
        "serviceType": "Financial Service",
        "areaServed": "United States"
      },
      {
        "@type": "Service",
        "name": "Mortgage Assistance",
        "description": "Mortgage modification, refinancing, and payment relief options",
        "provider": {
          "@id": "https://www.homeowner-support.com/#organization"
        },
        "serviceType": "Financial Service",
        "areaServed": "United States"
      },
      {
        "@type": "Service",
        "name": "Quick Home Sale",
        "description": "Fast cash offers for homes in any condition with 24-48 hour closing",
        "provider": {
          "@id": "https://www.homeowner-support.com/#organization"
        },
        "serviceType": "Real Estate Service",
        "areaServed": "United States"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": "Homeowner Support saved my home from foreclosure. Their team worked with my lender to modify my loan and reduce my payments by $400/month.",
        "itemReviewed": {
          "@id": "https://homeowner-support-1tobgm2yy-francis-projects-cc692baf.vercel.app/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can you stop foreclosure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We can help stop foreclosure proceedings in as little as 24 hours through various legal strategies and negotiations with lenders."
            }
          },
          {
            "@type": "Question",
            "name": "What services do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer foreclosure help, mortgage assistance, equity loans, quick home sales, owner financing, and transitional funding."
            }
          },
          {
            "@type": "Question",
            "name": "Are there any upfront fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, we offer transparent services with no upfront fees or hidden costs."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-900">Homeowner Support</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#services" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="#success" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Success Stories</Link>
                <Link href="#contact" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                <span className="text-blue-900 font-semibold">(770) 752-2509</span>
                <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800">
                  Get free consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-blue-600 font-medium">Licensed & Bonded Professionals</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Stop Foreclosure<br />
                in <span className="text-blue-600">24 Hours</span><br />
                Atlanta & Georgia
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                URGENT: Received a foreclosure notice? Don&apos;t lose your home. Our emergency foreclosure team has helped over 1,000 Atlanta & Georgia homeowners stop foreclosure, avoid sheriff sales, and keep their homes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 flex items-center">
                  <span className="mr-2">📞</span>
                  Call Now: (770) 752-2509
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50">
                  Get Free Consultation
                </button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  24/7 Emergency Help
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  No Upfront Fees
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 text-center mb-4">
                Get Your FREE Consultation
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Find out how we can help you avoid foreclosure and keep your home
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <AddressInput
                  placeholder="Property Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onAddressSelect={(address, details) => {
                    console.log('Selected address:', address, details);
                  }}
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>How can we help you?</option>
                  <option>Foreclosure Prevention</option>
                  <option>Mortgage Assistance</option>
                  <option>Quick Sale</option>
                  <option>Other</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
                >
                  Get My Free Consultation Now
                </button>
                <p className="text-xs text-center text-gray-500">
                  Your information is 100% secure and confidential
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Homeowner Solutions</h2>
            <p className="text-lg text-gray-600">
              From foreclosure prevention to quick cash sales, we provide comprehensive support for every homeowner situation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Foreclosure Help Atlanta</h3>
              <p className="text-gray-600 mb-6">
                URGENT: Stop foreclosure today! Emergency assistance for Atlanta & Georgia homeowners facing foreclosure notices, sheriff sales, or court dates.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Legal assistance
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Payment plans
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Loan modifications
                </li>
              </ul>
              <Link href="/foreclosure-help" className="bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 w-full text-center block">
                Get Foreclosure Help
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mortgage Assistance Atlanta GA</h3>
              <p className="text-gray-600 mb-6">
                Can't pay mortgage this month? Behind on payments? We offer emergency modification, refinancing, and relief options for Georgia homeowners.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Payment reduction
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Interest rate relief
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Term extensions
                </li>
              </ul>
              <Link href="/mortgage-assistance" className="bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 w-full text-center block">
                Request Assistance
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Home Equity Loans Atlanta</h3>
              <p className="text-gray-600 mb-6">
                Bad credit equity loan Atlanta? Emergency cash from home equity even with poor credit. Fast approval process for Georgia homeowners.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Bad credit OK
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Quick approval
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Competitive rates
                </li>
              </ul>
              <Link href="/equity-loans" className="bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 w-full text-center block">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cash House Buyers Atlanta</h3>
              <p className="text-gray-600 mb-6">
                Sell house before foreclosure Atlanta! We buy houses cash Georgia - get offer in 24 hours. No repairs, fast closing guaranteed.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  As-is purchase
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  24-48hr closing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  No fees or commissions
                </li>
              </ul>
              <Link href="/quick-sale" className="bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 w-full text-center block">
                Get Cash Offer
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Owner Financing</h3>
              <p className="text-gray-600 mb-6">
                Alternative purchase options for buyers with credit challenges.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Flexible terms
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Credit repair help
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Direct financing
                </li>
              </ul>
              <Link href="/contact" className="bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 w-full text-center block">
                Learn More
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transitional Funding</h3>
              <p className="text-gray-600 mb-6">
                Support for moving costs and transition expenses when selling your home.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Moving assistance
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Temporary housing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Relocation support
                </li>
              </ul>
              <Link href="/contact" className="bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 w-full text-center block">
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 px-3 py-1 rounded-full text-sm text-blue-800 font-medium mb-4">
              Trusted & Verified
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Homeowners Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No Fees</h3>
              <p className="text-gray-600 text-sm">Transparent offers with zero hidden costs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Closing</h3>
              <p className="text-gray-600 text-sm">24-48 hour closing guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏅</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No Repairs</h3>
              <p className="text-gray-600 text-sm">We buy homes in any condition</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Licensed housing counselors & real estate professionals</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Homeowners Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24hrs</div>
              <div className="text-gray-600">Average Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-600">In Cash Offers Made</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="success" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Stories, Real Results</h2>
            <p className="text-lg text-gray-600">
              See how we've helped thousands of homeowners overcome their challenges and achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Homeowner Support saved my home from foreclosure. Their team worked with my lender to
                modify my loan and reduce my payments by $400/month. I can't thank them enough!"
              </p>
              <div>
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-sm text-gray-500">Phoenix, AZ</div>
                <div className="text-sm text-blue-600 font-medium">Foreclosure Prevention</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Got a cash offer in 24 hours and closed in 3 days. No repairs needed, no fees, and they
                handled everything. Made selling my inherited property so easy."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Michael Chen</div>
                <div className="text-sm text-gray-500">Dallas, TX</div>
                <div className="text-sm text-blue-600 font-medium">Quick Sale</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "After my divorce, I was struggling with mortgage payments. They helped me refinance and
                get back on track. Professional, caring, and results-driven."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Lisa Rodriguez</div>
                <div className="text-sm text-gray-500">Miami, FL</div>
                <div className="text-sm text-blue-600 font-medium">Mortgage Assistance</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Needed to access my home equity for medical bills. Even with poor credit, they found me a
                solution with reasonable terms. Highly recommend!"
              </p>
              <div>
                <div className="font-semibold text-gray-900">David Thompson</div>
                <div className="text-sm text-gray-500">Atlanta, GA</div>
                <div className="text-sm text-blue-600 font-medium">Equity Loan</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The transitional funding helped cover my moving costs when I had to relocate for work.
                They made a stressful situation more manageable."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Jennifer Martinez</div>
                <div className="text-sm text-gray-500">San Antonio, TX</div>
                <div className="text-sm text-blue-600 font-medium">Transitional Funding</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Owner financing option allowed me to buy my first home despite credit challenges.
                They worked with me every step of the way."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Robert Wilson</div>
                <div className="text-sm text-gray-500">Orlando, FL</div>
                <div className="text-sm text-blue-600 font-medium">Owner Financing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-100 rounded-lg p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Emergency Foreclosure Help - Atlanta, Orlando, Birmingham</h2>
            <p className="text-lg text-gray-600 mb-8">
              URGENT: Foreclosure notice received? Every day matters! Our emergency foreclosure team serves Atlanta, Buckhead, Sandy Springs, Orlando, Miami, Tampa Bay, Birmingham, Knoxville, and surrounding areas. Licensed professionals standing by 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="tel:7707522509" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 flex items-center">
                <span className="mr-2">📞</span>
                Call Now: (770) 752-2509
              </a>
              <a href="tel:7707522509" className="text-blue-900 font-semibold hover:underline flex items-center">
                Book Free Consultation →
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Available 24/7 • No obligation consultation • Licensed professionals • Confidential service
            </p>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
}
