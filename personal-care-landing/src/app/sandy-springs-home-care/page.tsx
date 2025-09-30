import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Care Services in Sandy Springs GA - Near Perimeter Mall & City Springs | Elite Care Companion',
  description: 'Professional home care in Sandy Springs, Georgia. Serving Perimeter Mall, City Springs, Dunwoody, Abernathy Square. 24/7 care, transportation, companionship. Call (470) 696-3850 today.',
  keywords: 'home care Sandy Springs, senior care Perimeter Mall, elderly care City Springs, Sandy Springs Georgia home care, Dunwoody home care, Abernathy Square senior care, private caregiver Sandy Springs, 24 hour care Sandy Springs, dementia care Sandy Springs GA, companion care Sandy Springs, emergency home care Sandy Springs, weekend caregiver Sandy Springs, live-in care Sandy Springs, respite care Sandy Springs, Sandy Springs senior services, home health aide Sandy Springs, personal care Sandy Springs Georgia, medication reminders Sandy Springs, transportation Sandy Springs, meal preparation Sandy Springs'
};

export default function SandySpringsHomeCare() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Home Care Services in Sandy Springs, Georgia
            </h1>
            <p className="text-xl sm:text-2xl text-green-200 mb-6">
              Serving Perimeter Mall, City Springs, Dunwoody & North Fulton Area
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:470-696-3850"
                className="bg-white text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors"
              >
                Call Now: (470) 696-3850
              </a>
              <Link
                href="/#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-800 transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Local Area Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Trusted Home Care in Sandy Springs Community
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                <strong>Sandy Springs is a thriving city</strong> in North Fulton County, known for <strong>Perimeter Mall, City Springs mixed-use development</strong>, and excellent healthcare facilities. Our home care services support Sandy Springs residents who want to age in place in this vibrant, family-friendly community.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you live near <strong>Perimeter Center, Abernathy Square, Dunwoody Village, or the Chattahoochee River</strong>, Elite Care Companion provides comprehensive care that keeps you connected to Sandy Springs&apos; active lifestyle and community resources.
              </p>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <p className="text-green-800 font-semibold mb-2">✓ Immediate Care Available</p>
                <p className="text-green-700">✓ Northside Hospital Partnership</p>
                <p className="text-green-700">✓ Transportation to Perimeter Mall</p>
                <p className="text-green-700">✓ Familiar with Sandy Springs Services</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sandy Springs Coverage Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Business Districts:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Perimeter Center</li>
                    <li>• City Springs</li>
                    <li>• Abernathy Square</li>
                    <li>• Concourse Corporate Center</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Neighborhoods:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• North Springs</li>
                    <li>• Riverside</li>
                    <li>• Dunwoody Village</li>
                    <li>• Perimeter Woods</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Major Roads:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• GA-400 corridor</li>
                    <li>• Roswell Road</li>
                    <li>• Abernathy Road</li>
                    <li>• Johnson Ferry Road</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Near:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Chattahoochee River</li>
                    <li>• Sandy Springs Library</li>
                    <li>• Heritage Sandy Springs</li>
                    <li>• MARTA North Springs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sandy Springs Specific Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Home Care Services in Sandy Springs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting active seniors and families throughout Sandy Springs and North Fulton County
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Senior Transportation */}
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sandy Springs Transportation</h3>
              <p className="text-gray-600 mb-4">Safe transportation to Northside Hospital, Perimeter Mall shopping, City Springs events, medical appointments, and MARTA North Springs station.</p>
              <Link href="/transportation-services" className="text-green-600 font-medium hover:text-green-700">
                Learn more about transportation →
              </Link>
            </div>

            {/* Companion Care */}
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Active Senior Companionship</h3>
              <p className="text-gray-600 mb-4">Companions for Sandy Springs activities: Heritage Sandy Springs Museum visits, Chattahoochee River walks, City Springs entertainment, and community events.</p>
              <Link href="/companion-care" className="text-green-600 font-medium hover:text-green-700">
                Learn more about companion care →
              </Link>
            </div>

            {/* Recovery Care */}
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Northside Hospital Recovery</h3>
              <p className="text-gray-600 mb-4">Post-surgery and post-hospitalization care for Northside Hospital patients. We coordinate with your Sandy Springs medical team for seamless recovery support.</p>
              <Link href="/post-surgery-care" className="text-green-600 font-medium hover:text-green-700">
                Learn more about recovery care →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sandy Springs Healthcare Network */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sandy Springs Healthcare Partners
            </h2>
            <p className="text-xl text-gray-600">
              Coordinating with North Fulton&apos;s leading medical facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Northside Hospital</h3>
              <p className="text-gray-600 text-sm mb-2">1000 Johnson Ferry Rd, Sandy Springs</p>
              <p className="text-gray-600">Premier partner for post-surgical and rehabilitation care coordination</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Children&apos;s Healthcare - Scottish Rite</h3>
              <p className="text-gray-600 text-sm mb-2">1001 Johnson Ferry Rd</p>
              <p className="text-gray-600">Pediatric home care coordination and family support services</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">WellStar North Fulton Hospital</h3>
              <p className="text-gray-600 text-sm mb-2">3000 Hospital Blvd, Roswell (Nearby)</p>
              <p className="text-gray-600">Emergency care coordination and discharge planning support</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Perimeter Medical Associates</h3>
              <p className="text-gray-600 text-sm mb-2">Multiple Perimeter Center locations</p>
              <p className="text-gray-600">Primary care coordination and chronic disease management</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Sandy Springs Urgent Care</h3>
              <p className="text-gray-600 text-sm mb-2">6065 Roswell Rd</p>
              <p className="text-gray-600">Urgent medical needs and minor emergency care coordination</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">CVS Health & Walgreens</h3>
              <p className="text-gray-600 text-sm mb-2">Multiple Sandy Springs locations</p>
              <p className="text-gray-600">Prescription management and pharmacy coordination services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sandy Springs Lifestyle Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Supporting Your Sandy Springs Lifestyle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shopping & Errands</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Perimeter Mall shopping assistance and transportation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>City Springs entertainment and dining accompaniment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Grocery shopping at Whole Foods, Publix, and local markets</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Banking and financial errands in Perimeter Center</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Activities</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Heritage Sandy Springs Museum and cultural events</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Chattahoochee River National Recreation Area walks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Sandy Springs Library programs and book clubs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Community Center fitness classes and social activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sandy Springs FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sandy Springs Home Care - Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How do you handle transportation to Northside Hospital from Sandy Springs?</h3>
              <p className="text-gray-600">Our caregivers are very familiar with the route to Northside Hospital and can provide door-to-door medical transportation. We coordinate with hospital staff for appointments, handle paperwork assistance, and ensure comfortable transport during recovery periods.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can you help with shopping at Perimeter Mall and City Springs?</h3>
              <p className="text-gray-600">Absolutely! Our companions assist with shopping trips to Perimeter Mall, City Springs, and local Sandy Springs businesses. We help with mobility, carrying packages, and can accompany you to restaurants and entertainment venues in these areas.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you serve all neighborhoods in Sandy Springs?</h3>
              <p className="text-gray-600">Yes, we provide care throughout Sandy Springs including Perimeter Center, North Springs, Riverside, Dunwoody Village, and all residential areas. We&apos;re familiar with Sandy Springs&apos; unique traffic patterns and can navigate efficiently throughout the city.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What&apos;s your experience with Sandy Springs senior housing communities?</h3>
              <p className="text-gray-600">We work with residents of various Sandy Springs senior living communities and are familiar with visitor protocols, health requirements, and community resources. We can coordinate with community staff to ensure comprehensive care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience Quality Home Care in Sandy Springs
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let Elite Care Companion support your active Sandy Springs lifestyle with professional, compassionate care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:470-696-3850"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors"
            >
              Call (470) 696-3850 Now
            </a>
            <Link
              href="/#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Schedule Free Consultation
            </Link>
          </div>
          <p className="text-green-200 mt-4">Same-Day Care Available in Sandy Springs</p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span>›</span>
            <span className="text-gray-900">Sandy Springs Home Care Services</span>
          </div>
        </div>
      </nav>
    </div>
  );
}