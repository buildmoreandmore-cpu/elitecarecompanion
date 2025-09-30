import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Alpharetta Home Care Services | Elite Care Companion | North Fulton Senior Care',
  description: 'Professional home care services in Alpharetta, GA. Serving Avalon, North Point, and gated communities. Corporate family specialists, modern home care solutions. Call (470) 696-3850.',
  keywords: 'Alpharetta home care, Avalon home care, North Point senior care, Alpharetta elder care, North Fulton home care, Alpharetta caregiver, elderly care Alpharetta GA, Alpharetta companion care, senior care Alpharetta, Alpharetta dementia care',
  openGraph: {
    title: 'Alpharetta Home Care Services | Elite Care Companion',
    description: 'Trusted home care in Alpharetta, GA. Serving corporate families and retirees in North Fulton with professional, compassionate care solutions.',
    url: 'https://elitecarecompanion.com/alpharetta-home-care',
    type: 'website',
    locale: 'en_US',
    siteName: 'Elite Care Companion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alpharetta Home Care Services | Elite Care Companion',
    description: 'Professional home care in Alpharetta, GA. Emergency care available 24/7. Call (470) 696-3850.',
  }
};

export default function AlpharettaHomeCare() {
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
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">Alpharetta</span> Corporate Family Home Care
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Specialized care for North Fulton&apos;s corporate professionals and retirees - from Avalon to gated communities, we understand the modern family&apos;s care needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:470-696-3850" className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
                Emergency Care: (470) 696-3850
              </a>
              <a href="#contact" className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Alpharetta-Specific Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Corporate Family Care Specialists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the unique needs of technology professionals, executives, and affluent retirees in North Fulton County
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Schedule Flexibility</h3>
              <p className="text-gray-600">
                Understanding demanding travel schedules, late-night conference calls, and executive responsibilities that require adaptable care solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m11 0a2 2 0 01-2 2H7a2 2 0 01-2-2m2-2h2m8-2V9a2 2 0 00-2-2H9a2 2 0 00-2 2v8.1M9 7h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Suburban Home Expertise</h3>
              <p className="text-gray-600">
                Familiar with contemporary home layouts, smart home technology integration, and the accessibility needs of modern suburban properties.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Avalon &amp; North Point Access</h3>
              <p className="text-gray-600">
                Transportation and accompaniment to premier shopping, dining, and entertainment venues that maintain social connections and quality of life.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gated Community Navigation</h3>
              <p className="text-gray-600">
                Experience with security protocols, guest registration, and community-specific procedures for seamless care delivery in gated neighborhoods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m11 0a2 2 0 01-2 2H7a2 2 0 01-2-2m2-2h2m8-2V9a2 2 0 00-2-2H9a2 2 0 00-2 2v8.1M9 7h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Northside Hospital Network</h3>
              <p className="text-gray-600">
                Strong partnerships with Northside Hospital Forsyth and the extensive North Fulton medical community for coordinated healthcare.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Technology Integration</h3>
              <p className="text-gray-600">
                Comfortable working with smart home systems, health monitoring apps, and digital communication tools preferred by tech-savvy families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Areas & Transportation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              North Fulton Area Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Avalon&apos;s luxury amenities to quiet gated communities, we navigate all of Alpharetta with professional expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Alpharetta Destinations</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Avalon Mixed-Use Development</h4>
                    <p className="text-gray-600">Transportation to upscale shopping, fine dining, and entertainment venues that maintain social connections.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">North Point Mall &amp; Shopping</h4>
                    <p className="text-gray-600">Assistance with shopping trips, prescription pickup, and maintaining familiar retail connections.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Northside Hospital Forsyth</h4>
                    <p className="text-gray-600">Familiar with hospital navigation, parking, and appointment coordination at this premier medical facility.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Technology Corridor Offices</h4>
                    <p className="text-gray-600">Supporting care during family visits to corporate offices and business parks throughout North Fulton.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Premium Gated Communities</h4>
                    <p className="text-gray-600">Experience with country club communities, luxury subdivisions, and their specific security and access protocols.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation Times from Alpharetta</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">To Northside Hospital Forsyth:</span>
                  <span className="font-semibold text-gray-900">8-15 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">To Avalon Shopping:</span>
                  <span className="font-semibold text-gray-900">3-10 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">To North Point Mall:</span>
                  <span className="font-semibold text-gray-900">5-12 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">To Northside Cherokee:</span>
                  <span className="font-semibold text-gray-900">15-25 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">To Downtown Roswell:</span>
                  <span className="font-semibold text-gray-900">10-18 minutes</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Corporate Schedule Coordination</h4>
                <p className="text-purple-800 text-sm">
                  Flexible scheduling around business travel, late meetings, and corporate event calendars common in the technology sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Family Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Corporate Family Care Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the unique care challenges faced by technology professionals, executives, and affluent retirees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Unpredictable Corporate Travel</h3>
              <p className="text-gray-600 mb-4">
                Technology and corporate professionals often face last-minute travel, extended business trips, and irregular schedules.
              </p>
              <div className="text-purple-600 font-semibold">Our Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• 24-hour emergency coverage activation</li>
                <li>• Flexible live-in arrangements during travel</li>
                <li>• Remote family coordination and updates</li>
                <li>• Multi-week care continuity planning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">High-Stress Corporate Lifestyle</h3>
              <p className="text-gray-600 mb-4">
                Executive families often face high stress, long work hours, and difficulty balancing career demands with care responsibilities.
              </p>
              <div className="text-purple-600 font-semibold">Our Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• Complete care management and coordination</li>
                <li>• Detailed reporting and communication systems</li>
                <li>• Stress reduction through reliable care presence</li>
                <li>• Professional boundary management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Geographic Family Dispersal</h3>
              <p className="text-gray-600 mb-4">
                Corporate careers often result in adult children living across the country, making local care coordination challenging.
              </p>
              <div className="text-purple-600 font-semibold">Our Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• Video call facilitation and tech support</li>
                <li>• Detailed written and photo updates</li>
                <li>• Multi-state family communication coordination</li>
                <li>• Emergency contact protocol management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Integration Expectations</h3>
              <p className="text-gray-600 mb-4">
                Tech-savvy families expect modern solutions including smart home integration, health apps, and digital monitoring.
              </p>
              <div className="text-purple-600 font-semibold">Our Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• Smart home system compatibility training</li>
                <li>• Health monitoring app integration</li>
                <li>• Digital medication management systems</li>
                <li>• Remote monitoring and alert systems</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Suburban Isolation Concerns</h3>
              <p className="text-gray-600 mb-4">
                Large suburban homes in gated communities can lead to social isolation when driving becomes difficult.
              </p>
              <div className="text-purple-600 font-semibold">Our Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• Transportation to social venues and activities</li>
                <li>• Community center and club participation</li>
                <li>• Shopping and dining outings for social connection</li>
                <li>• Technology-assisted family communication</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Healthcare Expectations</h3>
              <p className="text-gray-600 mb-4">
                Affluent families expect premium healthcare coordination and access to top specialists throughout the region.
              </p>
              <div className="text-purple-600 font-semibold">Our Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• Concierge-level healthcare coordination</li>
                <li>• Specialist appointment management</li>
                <li>• Premium insurance navigation assistance</li>
                <li>• Multi-location medical facility coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services for Alpharetta */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Executive-Level Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium care solutions designed for the sophisticated needs of Alpharetta&apos;s corporate and retiree community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Corporate Executive Support</h3>
              <p className="text-purple-800 mb-6">
                Specialized care coordination for senior executives and technology leaders who understand the demands of high-performance careers.
              </p>
              <ul className="space-y-2 text-purple-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Concierge-level service coordination
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Business travel coordination and coverage
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Executive assistant coordination interface
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Technology Professional Families</h3>
              <p className="text-blue-800 mb-6">
                Understanding the unique culture and expectations of families in the technology sector, with emphasis on innovation and efficiency.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Smart home and IoT integration support
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Digital health monitoring and reporting
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Flexible remote work environment support
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Connect with Our Specialized Care Network</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/dementia-care" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-purple-600 mb-2">Memory Care Specialists</h4>
                <p className="text-gray-600 text-sm">Advanced dementia and Alzheimer&apos;s care</p>
              </Link>
              <Link href="/sandy-springs-home-care" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-purple-600 mb-2">Sandy Springs Services</h4>
                <p className="text-gray-600 text-sm">Adjacent premium care area</p>
              </Link>
              <Link href="/buckhead-home-care" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-purple-600 mb-2">Buckhead Luxury Care</h4>
                <p className="text-gray-600 text-sm">High-end residential care services</p>
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
              Alpharetta Corporate Families Choose Elite Care
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
                &quot;As a technology executive, I travel constantly and work unpredictable hours. Elite Care Companion has been a lifesaver for our family. They understand the demands of corporate life and provide seamless care for my mother whether I&apos;m in town or traveling internationally. Their technology integration and professional communication have been outstanding.&quot;
              </p>
              <div className="font-semibold text-gray-900">David L.</div>
              <div className="text-gray-600 text-sm">VP of Engineering, Fortune 500 Tech Company</div>
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
                &quot;We moved to Alpharetta for my husband&apos;s corporate role, and finding quality care for his aging parents was a major concern. Elite Care understands the expectations of professional families. They coordinate with our busy schedules, provide detailed updates, and have helped maintain the quality of life our parents expect. The care team even helped set up video calls so the grandchildren could stay connected during the pandemic.&quot;
              </p>
              <div className="font-semibold text-gray-900">Jennifer M.</div>
              <div className="text-gray-600 text-sm">Corporate Spouse, North Fulton Resident</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Begin Executive-Level Care in Alpharetta
            </h2>
            <p className="text-xl text-gray-600">
              Call for immediate assistance or schedule a professional consultation
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
                  <p className="text-red-100 mt-2">24/7 Response • Corporate Family Specialists</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Alpharetta Corporate Care Features:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-purple-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Flexible scheduling around corporate travel and demands</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-purple-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Smart home technology integration and support</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-purple-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Gated community and premium neighborhood expertise</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-purple-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Concierge-level service coordination and communication</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-bold text-purple-900 mb-2">North Fulton Service Network:</h4>
                <div className="grid grid-cols-2 gap-2 text-purple-700 text-sm">
                  <span>• Alpharetta</span>
                  <span>• Milton</span>
                  <span>• Johns Creek</span>
                  <span>• Roswell</span>
                  <Link href="/sandy-springs-home-care" className="hover:underline">• Sandy Springs</Link>
                  <span>• Cumming</span>
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
              <p className="text-gray-300 mb-4">Professional home care services for corporate families and retirees throughout North Fulton.</p>
              <div className="space-y-2">
                <a href="tel:470-696-3850" className="text-yellow-400 font-semibold hover:underline">
                  (470) 696-3850
                </a>
                <div className="text-gray-300">Available 24/7</div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">North Fulton Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/alpharetta-home-care" className="hover:text-white">Alpharetta</Link></li>
                <li><Link href="/sandy-springs-home-care" className="hover:text-white">Sandy Springs</Link></li>
                <li><span className="hover:text-white">Roswell</span></li>
                <li><span className="hover:text-white">Johns Creek</span></li>
                <li><span className="hover:text-white">Milton</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Executive Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/dementia-care" className="hover:text-white">Memory Care</Link></li>
                <li><span className="hover:text-white">Corporate Family Support</span></li>
                <li><span className="hover:text-white">Technology Integration</span></li>
                <li><span className="hover:text-white">Concierge Care</span></li>
                <li><span className="hover:text-white">Travel Coverage</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div>Lenny Monsanto, Owner</div>
                <div>lennylmonsanto@gmail.com</div>
                <div>Licensed &amp; Insured</div>
                <div>Corporate Care Specialists</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Elite Care Companion. All rights reserved. Premium home care services for Alpharetta corporate families and North Fulton communities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}