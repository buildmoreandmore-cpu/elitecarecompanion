import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Brookhaven Home Care Services | Elite Care Companion | Near Emory & CDC',
  description: 'Professional home care services in Brookhaven, GA. Serving Town Brookhaven, Emory University area, CDC neighborhoods. 24/7 emergency care, dementia specialists, companion care. Call (470) 696-3850.',
  keywords: 'Brookhaven home care, Emory University home care, CDC area eldercare, Town Brookhaven senior care, Brookhaven personal care, home health aide Brookhaven, elderly care Brookhaven GA, Brookhaven caregiver services, senior companion Brookhaven, Brookhaven dementia care',
  openGraph: {
    title: 'Brookhaven Home Care Services | Elite Care Companion',
    description: 'Trusted home care services in Brookhaven, GA. Serving families near Emory University, CDC, and Town Brookhaven with compassionate, professional care.',
    url: 'https://elitecarecompanion.com/brookhaven-home-care',
    type: 'website',
    locale: 'en_US',
    siteName: 'Elite Care Companion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brookhaven Home Care Services | Elite Care Companion',
    description: 'Professional home care in Brookhaven, GA. Emergency care available 24/7. Call (470) 696-3850.',
  }
};

export default function BrookhavenHomeCare() {
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Home Care in <span className="text-yellow-300">Brookhaven</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Serving families near Emory University, CDC, Town Brookhaven, and historic neighborhoods with compassionate, personalized care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:470-696-3850" className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
                Emergency Care: (470) 696-3850
              </a>
              <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brookhaven-Specific Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Brookhaven Families Choose Elite Care Companion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep understanding of Brookhaven&apos;s unique neighborhoods, from the academic atmosphere near Emory to the professional community around CDC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m11 0a2 2 0 01-2 2H7a2 2 0 01-2-2m2-2h2m8-2V9a2 2 0 00-2-2H9a2 2 0 00-2 2v8.1M9 7h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emory University Area Expertise</h3>
              <p className="text-gray-600">
                Familiar with the academic community culture, Emory Healthcare network, and transportation needs around the university campus and Druid Hills area.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CDC Professional Community</h3>
              <p className="text-gray-600">
                Understanding of health-conscious families and professionals working at CDC, NIH, and other research institutions in the Clifton Road corridor.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Town Brookhaven Access</h3>
              <p className="text-gray-600">
                Easy access to Town Brookhaven shopping, dining, and medical facilities. We coordinate transportation and accompany clients to local appointments and activities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Emergency Response</h3>
              <p className="text-gray-600">
                Rapid response times throughout Brookhaven neighborhoods. Our caregivers know the quickest routes to Emory University Hospital and other local medical facilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Historic Neighborhood Familiarity</h3>
              <p className="text-gray-600">
                Experience with older homes in historic Brookhaven, understanding accessibility challenges and safety considerations unique to established neighborhoods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare Coordination</h3>
              <p className="text-gray-600">
                Strong relationships with Emory Healthcare providers, CDC occupational health services, and local medical practices throughout the Brookhaven area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Landmarks & Accessibility */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Brookhaven Landmarks &amp; Accessibility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We know Brookhaven inside and out - from navigating busy Clifton Road to finding the best parking at Town Brookhaven
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Brookhaven Locations We Serve</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Town Brookhaven</h4>
                    <p className="text-gray-600">Transportation to shopping, dining, and medical appointments at this popular mixed-use development.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Emory University Hospital</h4>
                    <p className="text-gray-600">Familiar with campus navigation, parking procedures, and accompanying clients to specialist appointments.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">CDC Clifton Road Campus</h4>
                    <p className="text-gray-600">Supporting families of CDC employees with flexible scheduling around government work requirements.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Historic Brookhaven Neighborhoods</h4>
                    <p className="text-gray-600">Experience with older homes, narrow driveways, and unique accessibility needs in established residential areas.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Buford Highway Medical District</h4>
                    <p className="text-gray-600">Easy access to specialty medical practices and international pharmacies along the Buford Highway corridor.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation &amp; Navigation</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">To Emory University Hospital:</span>
                  <span className="font-semibold text-gray-900">5-10 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">To Town Brookhaven:</span>
                  <span className="font-semibold text-gray-900">3-8 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">To CDC Main Campus:</span>
                  <span className="font-semibold text-gray-900">5-12 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">To Children&apos;s Healthcare:</span>
                  <span className="font-semibold text-gray-900">8-15 minutes</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Traffic-Aware Scheduling</h4>
                <p className="text-blue-800 text-sm">
                  We plan appointments around Clifton Road rush hours and Emory University event traffic to ensure timely arrivals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Brookhaven Senior Issues */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Challenges for Brookhaven Seniors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges seniors face in Brookhaven and provide targeted solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Historic Home Accessibility</h3>
              <p className="text-gray-600 mb-4">
                Many Brookhaven homes were built before ADA guidelines, creating challenges with stairs, narrow doorways, and bathroom access.
              </p>
              <div className="text-blue-600 font-semibold">Our Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• Home safety assessments and modifications</li>
                <li>• Mobility assistance and fall prevention</li>
                <li>• Coordination with home modification contractors</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Clifton Road Traffic Navigation</h3>
              <p className="text-gray-600 mb-4">
                Heavy traffic on Clifton Road and around Emory can be stressful and dangerous for senior drivers.
              </p>
              <div className="text-blue-600 font-semibold">Our Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• Professional transportation services</li>
                <li>• Medical appointment coordination</li>
                <li>• Shopping and errand assistance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Isolation</h3>
              <p className="text-gray-600 mb-4">
                Professional families in Brookhaven often travel, leaving elderly parents without regular social interaction.
              </p>
              <div className="text-blue-600 font-semibold">Our Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• Companion care and conversation</li>
                <li>• Outings to Town Brookhaven events</li>
                <li>• Connection to local senior activities</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Complex Medical Coordination</h3>
              <p className="text-gray-600 mb-4">
                Multiple specialists at Emory, CDC occupational health, and private practices can be overwhelming to coordinate.
              </p>
              <div className="text-blue-600 font-semibold">Our Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• Appointment scheduling and management</li>
                <li>• Medical record organization</li>
                <li>• Communication with healthcare teams</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Medication Management</h3>
              <p className="text-gray-600 mb-4">
                Multiple prescriptions from different Emory specialists require careful coordination and monitoring.
              </p>
              <div className="text-blue-600 font-semibold">Our Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• Medication reminders and administration</li>
                <li>• Pharmacy coordination and pickup</li>
                <li>• Drug interaction monitoring</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Response Planning</h3>
              <p className="text-gray-600 mb-4">
                Distance from family members working demanding professional jobs requires robust emergency planning.
              </p>
              <div className="text-blue-600 font-semibold">Our Solutions:</div>
              <ul className="text-gray-600 text-sm mt-2 space-y-1">
                <li>• 24/7 emergency response system</li>
                <li>• Family communication protocols</li>
                <li>• Medical emergency preparedness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Specific to Brookhaven */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Services for Brookhaven Residents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored care solutions that address the specific needs of the Brookhaven community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Academic Family Support</h3>
              <p className="text-blue-800 mb-6">
                Specialized care for families connected to Emory University, understanding academic schedules, conference travel, and research demands.
              </p>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Flexible scheduling around academic calendars
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Extended coverage during conference travel
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Coordination with Emory Employee Health services
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-green-900 mb-4">CDC Professional Family Care</h3>
              <p className="text-green-800 mb-6">
                Understanding the unique needs of government employees and public health professionals working at CDC and NIH facilities.
              </p>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Security clearance-aware staff selection
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Emergency response during government travel
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Federal employee health insurance coordination
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Quick Links to Our Specialized Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/dementia-care" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">Dementia Care</h4>
                <p className="text-gray-600 text-sm">Specialized memory care for all stages</p>
              </Link>
              <Link href="/sandy-springs-home-care" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">Sandy Springs Care</h4>
                <p className="text-gray-600 text-sm">Perimeter area home care services</p>
              </Link>
              <Link href="/buckhead-home-care" className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-blue-600 mb-2">Buckhead Care</h4>
                <p className="text-gray-600 text-sm">Luxury home care in Buckhead</p>
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
              What Brookhaven Families Say
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
                &quot;As an Emory professor, I needed someone who understood my irregular schedule and could provide reliable care for my mother. Elite Care Companion has been absolutely wonderful - they know how to navigate campus traffic and always get her to appointments on time.&quot;
              </p>
              <div className="font-semibold text-gray-900">Dr. Sarah M.</div>
              <div className="text-gray-600 text-sm">Emory University Faculty, Brookhaven Resident</div>
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
                &quot;Working at CDC means I sometimes have to travel on short notice for public health emergencies. Lenny and his team have been incredible - they can step in immediately and my father feels completely comfortable with them. They even know which pharmacy near Town Brookhaven has his specialty medications.&quot;
              </p>
              <div className="font-semibold text-gray-900">Michael R.</div>
              <div className="text-gray-600 text-sm">CDC Epidemiologist, Brookhaven Resident</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start Care Today in Brookhaven
            </h2>
            <p className="text-xl text-gray-600">
              Call now for immediate assistance or schedule a free consultation
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
                  <p className="text-red-100 mt-2">24/7 Response • Licensed • Insured</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Why Choose Elite Care Companion?</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Deep knowledge of Brookhaven neighborhoods and landmarks</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Experience with Emory Healthcare and CDC community needs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Licensed, bonded, and insured caregivers</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Flexible scheduling around professional work demands</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-blue-900 mb-2">Service Areas Near Brookhaven:</h4>
                <div className="grid grid-cols-2 gap-2 text-blue-700 text-sm">
                  <Link href="/buckhead-home-care" className="hover:underline">• Buckhead</Link>
                  <Link href="/sandy-springs-home-care" className="hover:underline">• Sandy Springs</Link>
                  <span>• Druid Hills</span>
                  <span>• Alpharetta</span>
                  <span>• Decatur</span>
                  <span>• Vinings</span>
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
              <p className="text-gray-300 mb-4">Professional home care services throughout the Atlanta metro area.</p>
              <div className="space-y-2">
                <a href="tel:470-696-3850" className="text-yellow-400 font-semibold hover:underline">
                  (470) 696-3850
                </a>
                <div className="text-gray-300">Available 24/7</div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/brookhaven-home-care" className="hover:text-white">Brookhaven</Link></li>
                <li><Link href="/buckhead-home-care" className="hover:text-white">Buckhead</Link></li>
                <li><Link href="/sandy-springs-home-care" className="hover:text-white">Sandy Springs</Link></li>
                <li><span className="hover:text-white">Druid Hills</span></li>
                <li><span className="hover:text-white">Alpharetta</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/dementia-care" className="hover:text-white">Dementia Care</Link></li>
                <li><span className="hover:text-white">Companion Care</span></li>
                <li><span className="hover:text-white">Personal Care</span></li>
                <li><span className="hover:text-white">24-Hour Care</span></li>
                <li><span className="hover:text-white">Emergency Care</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div>Lenny Monsanto, Owner</div>
                <div>lennylmonsanto@gmail.com</div>
                <div>Licensed &amp; Insured</div>
                <div>Serving Atlanta Metro</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Elite Care Companion. All rights reserved. Licensed home care provider serving Brookhaven, Buckhead, Sandy Springs, and surrounding Atlanta communities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}