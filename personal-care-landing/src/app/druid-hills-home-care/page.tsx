import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Druid Hills Home Care Services | Elite Care Companion | Historic Garden District',
  description: 'Professional home care in historic Druid Hills, GA. Serving Fernbank area, Emory University neighborhoods, Lullwater Park vicinity. Expert care for historic homes and established families. Call (470) 696-3850.',
  keywords: 'Druid Hills home care, Fernbank home care, Emory Druid Hills senior care, historic Druid Hills eldercare, Lullwater Park area care, Druid Hills caregiver, elderly care Druid Hills GA, Druid Hills companion care, senior home care Druid Hills, Druid Hills dementia care',
  openGraph: {
    title: 'Druid Hills Home Care Services | Elite Care Companion',
    description: 'Trusted home care in historic Druid Hills garden district. Serving families near Fernbank, Emory, and Lullwater Park with compassionate, professional care.',
    url: 'https://elitecarecompanion.com/druid-hills-home-care',
    type: 'website',
    locale: 'en_US',
    siteName: 'Elite Care Companion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Druid Hills Home Care Services | Elite Care Companion',
    description: 'Professional home care in historic Druid Hills, GA. Emergency care available 24/7. Call (470) 696-3850.',
  }
};

export default function DruidHillsHomeCare() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Elite Care Companion</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/dementia-care" className="text-gray-700 hover:text-blue-600">Dementia Care</Link>
              <a href="tel:470-696-3850" className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700">
                Emergency: (470) 696-3850
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Druid Hills <span className="text-yellow-300">Historic Garden District</span> Home Care
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Specialized care for families in Atlanta&apos;s most historic neighborhood - from Fernbank to Lullwater Park, serving established families with dignity and respect
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:470-696-3850" className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
                Emergency Care: (470) 696-3850
              </a>
              <a href="#contact" className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Druid Hills Heritage & Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Heritage Home Care Specialists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the unique needs of families in Atlanta&apos;s garden district, where history meets modern healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m11 0a2 2 0 01-2 2H7a2 2 0 01-2-2m2-2h2m8-2V9a2 2 0 00-2-2H9a2 2 0 00-2 2v8.1M9 7h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Historic Home Specialists</h3>
              <p className="text-gray-600">
                Expert experience with 1920s-1940s architecture, multi-level homes, original hardwood floors, and period-appropriate accessibility solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural &amp; Educational Connections</h3>
              <p className="text-gray-600">
                Transportation and accompaniment to Fernbank Museum, Emory events, Atlanta Botanical Garden, and other cultural activities important to educated families.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Garden District Lifestyle</h3>
              <p className="text-gray-600">
                Support for maintaining beautiful gardens, outdoor spaces, and the active lifestyle that defines this historic neighborhood&apos;s character.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m11 0a2 2 0 01-2 2H7a2 2 0 01-2-2m2-2h2m8-2V9a2 2 0 00-2-2H9a2 2 0 00-2 2v8.1M9 7h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emory Healthcare Network</h3>
              <p className="text-gray-600">
                Seamless coordination with Emory University Hospital, specialty clinics, and the broader Emory healthcare ecosystem serving this community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lullwater Park Access</h3>
              <p className="text-gray-600">
                Safe accompaniment to Lullwater Park for nature walks, bird watching, and outdoor activities that maintain physical and mental wellness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Generational Family Support</h3>
              <p className="text-gray-600">
                Understanding the complex needs of established families with multiple generations, coordinating care across family members and properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Druid Hills Landmarks & Navigation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Historic Druid Hills Landmarks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Olmsted Brothers&apos; original landscape design to modern cultural attractions - we know every corner of this special neighborhood
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Druid Hills Destinations</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fernbank Museum of Natural History</h4>
                    <p className="text-gray-600">Transportation to exhibitions, IMAX theater, and educational programs that keep minds active and engaged.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lullwater Park &amp; Conservation Garden</h4>
                    <p className="text-gray-600">Safe walking assistance on trails, lake viewing, and nature photography for outdoor wellness activities.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Emory University Campus</h4>
                    <p className="text-gray-600">Navigation assistance for healthcare appointments, library visits, and cultural events on campus.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Druid Hills Golf Club Area</h4>
                    <p className="text-gray-600">Familiar with the exclusive neighborhood around the golf club and its unique access considerations.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Historic Olmsted Linear Parks</h4>
                    <p className="text-gray-600">Appreciation for the original landscape architecture and safe navigation of the historic parkway system.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation Times from Druid Hills</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">To Emory University Hospital:</span>
                  <span className="font-semibold text-gray-900">3-8 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">To Fernbank Museum:</span>
                  <span className="font-semibold text-gray-900">2-5 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">To Virginia-Highland:</span>
                  <span className="font-semibold text-gray-900">5-10 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">To CDC Clifton Campus:</span>
                  <span className="font-semibold text-gray-900">8-12 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">To Little Five Points:</span>
                  <span className="font-semibold text-gray-900">6-10 minutes</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Historic District Navigation</h4>
                <p className="text-green-800 text-sm">
                  Understanding narrow historic streets, limited parking, and preservation district guidelines for respectful home modifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Home Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Historic Home Care Challenges &amp; Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise for the unique considerations of caring for seniors in Atlanta&apos;s most historic neighborhood
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Level Historic Homes</h3>
              <p className="text-gray-600 mb-4">
                Original 1920s-1940s homes often have stairs, split levels, and challenging layouts that weren&apos;t designed for aging in place.
              </p>
              <div className="text-green-600 font-semibold">Our Specialized Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• Stair safety assessments and navigation assistance</li>
                <li>• Coordination with preservation-approved modifications</li>
                <li>• Strategic bedroom/bathroom arrangement planning</li>
                <li>• Fall prevention in period-appropriate layouts</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Historic Preservation Restrictions</h3>
              <p className="text-gray-600 mb-4">
                Historic district guidelines limit home modifications, requiring creative solutions for accessibility needs.
              </p>
              <div className="text-green-600 font-semibold">Our Specialized Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• Knowledge of approved modification contractors</li>
                <li>• Temporary accessibility solutions</li>
                <li>• Period-appropriate safety equipment</li>
                <li>• Coordination with historic preservation requirements</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Garden &amp; Landscape Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Established families often have extensive gardens and landscapes that become difficult to maintain with age.
              </p>
              <div className="text-green-600 font-semibold">Our Specialized Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• Light gardening assistance and supervision</li>
                <li>• Coordination with landscape professionals</li>
                <li>• Safe outdoor mobility assistance</li>
                <li>• Seasonal garden enjoyment activities</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cultural &amp; Educational Isolation</h3>
              <p className="text-gray-600 mb-4">
                Highly educated families may feel isolated when they can no longer drive to museums, lectures, and cultural events.
              </p>
              <div className="text-green-600 font-semibold">Our Specialized Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• Transportation to Fernbank and cultural venues</li>
                <li>• Accompaniment to Emory lectures and events</li>
                <li>• Virtual cultural experience facilitation</li>
                <li>• Intellectual stimulation and conversation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Complex Family Dynamics</h3>
              <p className="text-gray-600 mb-4">
                Multi-generational families with properties, trusts, and complex healthcare needs require sophisticated coordination.
              </p>
              <div className="text-green-600 font-semibold">Our Specialized Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• Professional family communication protocols</li>
                <li>• Estate and property care coordination</li>
                <li>• Multiple physician and specialist management</li>
                <li>• Discrete, professional service approach</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Neighborhood Privacy Expectations</h3>
              <p className="text-gray-600 mb-4">
                Established neighborhood with privacy expectations and professional reputation considerations for families.
              </p>
              <div className="text-green-600 font-semibold">Our Specialized Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• Discrete, professional caregiver presentation</li>
                <li>• Respectful neighborhood integration</li>
                <li>• Confidential service approach</li>
                <li>• Understanding of community social dynamics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Druid Hills Community Integration */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community-Centered Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maintaining connections to the rich cultural and social fabric of Druid Hills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Cultural &amp; Educational Engagement</h3>
              <p className="text-green-800 mb-6">
                Keeping intellectually curious seniors connected to the educational and cultural opportunities that define this community.
              </p>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Fernbank Museum programs and exhibitions
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Emory University public lectures and events
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Atlanta Botanical Garden seasonal activities
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Local book clubs and discussion groups
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Historic Neighborhood Lifestyle</h3>
              <p className="text-blue-800 mb-6">
                Preserving the active, engaged lifestyle that residents have enjoyed for decades in this special community.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Daily walks through historic neighborhoods
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lullwater Park nature experiences
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Garden appreciation and light maintenance
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Social connections with longtime neighbors
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Related Care Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/dementia-care" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-green-600 mb-2">Memory Care</h4>
                <p className="text-gray-600 text-sm">Specialized dementia and Alzheimer&apos;s care</p>
              </Link>
              <Link href="/brookhaven-home-care" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-green-600 mb-2">Brookhaven Care</h4>
                <p className="text-gray-600 text-sm">CDC and Emory community services</p>
              </Link>
              <Link href="/buckhead-home-care" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-green-600 mb-2">Buckhead Care</h4>
                <p className="text-gray-600 text-sm">Luxury home care services</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Historic Druid Hills Families Trust Elite Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;Our family has lived in this 1925 home for three generations. When mother needed care, we were worried about finding someone who would understand and respect both the house and our family&apos;s history here. Elite Care Companion has been perfect - they know how to navigate our stairs safely, respect our antiques, and they even drive mother to her favorite events at Fernbank.&quot;
              </p>
              <div className="font-semibold text-gray-900">Margaret H.</div>
              <div className="text-gray-600 text-sm">Third-Generation Druid Hills Resident</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &quot;Dad is a retired professor and very particular about his routines and intellectual stimulation. Lenny found a caregiver who actually enjoys discussing literature and current events with him. They take walks through Lullwater Park and visit the Botanical Garden regularly. It&apos;s kept dad mentally sharp and socially engaged in a way we couldn&apos;t have managed from a distance.&quot;
              </p>
              <div className="font-semibold text-gray-900">James K.</div>
              <div className="text-gray-600 text-sm">Son of Retired Emory Professor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Begin Professional Care in Historic Druid Hills
            </h2>
            <p className="text-xl text-gray-600">
              Call for immediate assistance or schedule a discrete consultation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <div className="bg-red-600 text-white p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold mb-2">Emergency Care Available Now</h3>
                  <a href="tel:470-696-3850" className="text-2xl font-bold hover:underline">
                    (470) 696-3850
                  </a>
                  <p className="text-red-100 mt-2">24/7 Response • Historic Home Specialists</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Druid Hills Specializations:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Historic home navigation and safety expertise</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Cultural and educational activity coordination</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Multi-generational family coordination</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Discrete, professional service approach</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-bold text-green-900 mb-2">Adjacent Service Areas:</h4>
                <div className="grid grid-cols-2 gap-2 text-green-700 text-sm">
                  <Link href="/brookhaven-home-care" className="hover:underline">• Brookhaven</Link>
                  <span>• Virginia-Highland</span>
                  <span>• Candler Park</span>
                  <span>• Little Five Points</span>
                  <span>• Inman Park</span>
                  <Link href="/buckhead-home-care" className="hover:underline">• Buckhead</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Elite Care Companion</h3>
              <p className="text-gray-300 mb-4">Professional home care services throughout historic Atlanta neighborhoods.</p>
              <div className="space-y-2">
                <a href="tel:470-696-3850" className="text-yellow-400 font-semibold hover:underline">
                  (470) 696-3850
                </a>
                <div className="text-gray-300">Available 24/7</div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Historic Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/druid-hills-home-care" className="hover:text-white">Druid Hills</Link></li>
                <li><Link href="/brookhaven-home-care" className="hover:text-white">Brookhaven</Link></li>
                <li><Link href="/buckhead-home-care" className="hover:text-white">Buckhead</Link></li>
                <li><Link href="/sandy-springs-home-care" className="hover:text-white">Sandy Springs</Link></li>
                <li><span className="hover:text-white">Alpharetta</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Care Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/dementia-care" className="hover:text-white">Memory Care</Link></li>
                <li><span className="hover:text-white">Historic Home Care</span></li>
                <li><span className="hover:text-white">Cultural Activities</span></li>
                <li><span className="hover:text-white">Garden Care</span></li>
                <li><span className="hover:text-white">Family Coordination</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div>Lenny Monsanto, Owner</div>
                <div>lennylmonsanto@gmail.com</div>
                <div>Licensed &amp; Insured</div>
                <div>Historic District Specialists</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Elite Care Companion. All rights reserved. Specialized home care for Atlanta&apos;s historic neighborhoods including Druid Hills, Brookhaven, and surrounding communities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}