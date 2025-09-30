import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-6">
            <div className="text-lg sm:text-2xl font-bold text-blue-900">
              <Link href="/" className="hover:text-blue-700">Elite Care Companion</Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/companion-care" className="text-gray-700 hover:text-blue-600 font-medium">Companion Care</Link>
                <Link href="/personal-care" className="text-gray-700 hover:text-blue-600 font-medium">Personal Care</Link>
                <Link href="/24-hour-care" className="text-gray-700 hover:text-blue-600 font-medium">24-Hour Care</Link>
                <Link href="/dementia-care" className="text-gray-700 hover:text-blue-600 font-medium">Dementia Care</Link>
                <Link href="/home-care-faq" className="text-gray-700 hover:text-blue-600 font-medium">FAQ</Link>
              </div>
              <a
                href="tel:470-696-3850"
                className="bg-blue-600 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-xs sm:text-base whitespace-nowrap"
              >
                Call (470) 696-3850
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Professional Home Care Services
              <span className="block text-blue-600">In Atlanta, Georgia</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
              <strong>Elite Care Companion</strong> provides quality personal care services in <strong>Buckhead, Sandy Springs, Brookhaven, Druid Hills, and Alpharetta</strong>. Our compassionate, competent, honest, and dependable staff will assist you or your loved ones during periods of convalescence, recovery, or daily living needs.
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
              Available 24/7 for emergency care needs. Licensed, bonded, and trusted by families across the Atlanta metro area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:470-696-3850"
                className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Call Now (470) 696-3850
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Elite Care Companion in Atlanta?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Compassionate Care</h3>
              <p className="text-gray-600 mt-2">Caring for your loved ones in Buckhead, Sandy Springs, and surrounding areas with genuine warmth</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Licensed & Bonded</h3>
              <p className="text-gray-600 mt-2">Fully licensed home care agency serving Atlanta metro with comprehensive insurance coverage</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Available 24/7</h3>
              <p className="text-gray-600 mt-2">Emergency home care services available around the clock in Brookhaven, Druid Hills, and Alpharetta</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Immediate Service</h3>
              <p className="text-gray-600 mt-2">Same-day caregiver placement available for urgent home care needs across Atlanta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Home Care Services in Atlanta Metro
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Elite Care Companion provides professional home care services throughout <strong>Buckhead, Sandy Springs, Brookhaven, Druid Hills, and Alpharetta</strong>. Our certified caregivers help you maintain independence and dignity in your own home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/personal-care" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow block">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Care & Daily Living</h3>
              <p className="text-gray-600 mb-4">Professional assistance with bathing, grooming, dressing, and personal hygiene for seniors in Buckhead and Sandy Springs.</p>
              <div className="text-blue-600 font-semibold hover:text-blue-800">Learn More →</div>
            </Link>

            <Link href="/companion-care" className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow block">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Companion Care Services</h3>
              <p className="text-gray-600 mb-4">Meaningful social interaction, conversation, and emotional support to combat loneliness in Brookhaven and Druid Hills.</p>
              <div className="text-blue-600 font-semibold hover:text-blue-800">Learn More →</div>
            </Link>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Meal Planning & Preparation</h3>
              <p className="text-gray-600 mb-4">Nutritious meal planning, cooking, and dietary support for seniors and disabled individuals in Alpharetta area.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transportation Services</h3>
              <p className="text-gray-600 mb-4">Safe, reliable medical transportation and errands throughout Atlanta metro - doctor visits, pharmacy, shopping.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medication Management</h3>
              <p className="text-gray-600 mb-4">Medication reminders, prescription pickup, and coordination with healthcare providers for all clients.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Light Housekeeping</h3>
              <p className="text-gray-600 mb-4">Maintaining a clean, safe home environment with light cleaning, laundry, and organization services.</p>
            </div>
          </div>

          {/* Additional Services Grid */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Home Care Services Available</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Mobility & Safety</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Walking assistance</li>
                  <li>• Wheelchair help</li>
                  <li>• Fall prevention</li>
                  <li>• Light exercise</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Healthcare Support</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Post-surgery care</li>
                  <li>• Recovery assistance</li>
                  <li>• Chronic illness support</li>
                  <li>• Rehabilitation help</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Specialized Care</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <Link href="/dementia-care" className="text-blue-600 hover:underline">Dementia care</Link></li>
                  <li>• Alzheimer&apos;s support</li>
                  <li>• Stroke recovery</li>
                  <li>• Palliative care</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Emergency Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <Link href="/24-hour-care" className="text-blue-600 hover:underline">24-hour care</Link></li>
                  <li>• Weekend coverage</li>
                  <li>• Holiday care</li>
                  <li>• Respite services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location-Specific Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Serving Atlanta&apos;s Premier Communities
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Elite Care Companion proudly serves families throughout the Atlanta metro area with professional home care services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/buckhead-home-care" className="bg-blue-800 p-6 rounded-lg hover:bg-blue-700 transition-colors block">
              <h3 className="text-xl font-bold mb-4 text-white">Buckhead Home Care</h3>
              <p className="text-blue-200 mb-4">Premier home care services in Atlanta&apos;s upscale Buckhead district. Serving Phipps Plaza, Lenox Square areas.</p>
              <ul className="text-blue-200 space-y-1">
                <li>• Personal care services</li>
                <li>• Live-in caregivers</li>
                <li>• Medical transportation</li>
                <li>• 24/7 emergency care</li>
              </ul>
              <div className="text-yellow-300 font-semibold mt-3">Learn More →</div>
            </Link>

            <Link href="/sandy-springs-home-care" className="bg-blue-800 p-6 rounded-lg hover:bg-blue-700 transition-colors block">
              <h3 className="text-xl font-bold mb-4 text-white">Sandy Springs & Dunwoody</h3>
              <p className="text-blue-200 mb-4">Comprehensive senior care near Perimeter Mall, Dunwoody Village, and surrounding communities.</p>
              <ul className="text-blue-200 space-y-1">
                <li>• Companion care</li>
                <li>• Medication reminders</li>
                <li>• Meal preparation</li>
                <li>• Doctor appointments</li>
              </ul>
              <div className="text-yellow-300 font-semibold mt-3">Learn More →</div>
            </Link>

            <Link href="/brookhaven-home-care" className="bg-blue-800 p-6 rounded-lg hover:bg-blue-700 transition-colors block">
              <h3 className="text-xl font-bold mb-4 text-white">Brookhaven & Druid Hills</h3>
              <p className="text-blue-200 mb-4">Professional caregivers serving Emory University area, CDC, and historic <Link href="/druid-hills-home-care" className="text-yellow-300 hover:underline">Druid Hills</Link> neighborhood.</p>
              <ul className="text-blue-200 space-y-1">
                <li>• Post-surgery recovery</li>
                <li>• Alzheimer&apos;s care</li>
                <li>• Respite services</li>
                <li>• Housekeeping help</li>
              </ul>
              <div className="text-yellow-300 font-semibold mt-3">Learn More →</div>
            </Link>

            <Link href="/alpharetta-home-care" className="bg-blue-800 p-6 rounded-lg hover:bg-blue-700 transition-colors block">
              <h3 className="text-xl font-bold mb-4 text-white">Alpharetta & Roswell</h3>
              <p className="text-blue-200 mb-4">Quality home care in North Fulton County, near Avalon, North Point Mall, and Roswell Historic District.</p>
              <ul className="text-blue-200 space-y-1">
                <li>• Elder care services</li>
                <li>• Disability support</li>
                <li>• Transportation services</li>
                <li>• Chronic illness care</li>
              </ul>
              <div className="text-yellow-300 font-semibold mt-3">Learn More →</div>
            </Link>

            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Vinings & Smyrna</h3>
              <p className="text-blue-200 mb-4">Home healthcare services near Vinings Jubilee, Cumberland Mall, and Truist Park area.</p>
              <ul className="text-blue-200 space-y-1">
                <li>• Daily living assistance</li>
                <li>• Dementia support</li>
                <li>• Overnight care</li>
                <li>• Family respite</li>
              </ul>
            </div>

            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Decatur & Tucker</h3>
              <p className="text-blue-200 mb-4">Affordable home care services in DeKalb County, near Stone Mountain Park and downtown Decatur.</p>
              <ul className="text-blue-200 space-y-1">
                <li>• Personal hygiene help</li>
                <li>• Grocery shopping</li>
                <li>• Light housekeeping</li>
                <li>• Prescription pickup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Lenny Monsanto - Your Trusted Atlanta Home Care Provider
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founder and owner of Elite Care Companion, <strong>Lenny Monsanto</strong> brings years of dedication and passion to providing exceptional personal care services throughout the Atlanta metro area. His commitment to compassionate, competent, and dependable care has made Elite Care Companion a trusted name in Georgia home health services.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Lenny understands that choosing the right home care provider is one of the most important decisions you&apos;ll make for yourself or your loved ones. That&apos;s why he personally ensures that every member of our team shares his values of honesty, dependability, and genuine care for our clients&apos; well-being throughout <strong>Buckhead, Sandy Springs, Brookhaven, Druid Hills, and Alpharetta</strong>.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With Elite Care Companion, you&apos;re not just getting a service provider – you&apos;re gaining a partner who truly cares about improving your quality of life and helping you maintain your independence with dignity and comfort in your own home.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-semibold">Licensed & Insured Home Care Agency</p>
                <p className="text-green-700">Serving Atlanta Metro • Available 24/7 • Emergency Care</p>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-center">
                <div className="bg-blue-600 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lenny Monsanto</h3>
                <p className="text-blue-600 font-semibold text-lg mb-6">Founder & Owner</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:470-696-3850" className="text-gray-700 font-medium hover:text-blue-600">(470) 696-3850</a>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:lennylmonsanto@gmail.com" className="text-gray-700 font-medium hover:text-blue-600">lennylmonsanto@gmail.com</a>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-600 text-white rounded-lg">
                  <p className="font-semibold">Call for Immediate Service</p>
                  <p className="text-sm">Available 24/7 for Emergency Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <Link href="/home-care-faq" className="hover:text-blue-600">Frequently Asked Questions About Home Care in Atlanta</Link>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Common questions about our home care services in Buckhead, Sandy Springs, Brookhaven, Druid Hills, and Alpharetta.
            </p>
            <Link href="/home-care-faq" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View All FAQ →
            </Link>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly can you start home care services in Atlanta?</h3>
              <p className="text-gray-600">We offer same-day caregiver placement for emergency situations. For planned care, we can typically begin services within 24-48 hours after your initial consultation. Call (470) 696-3850 for immediate assistance.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What areas of Atlanta do you serve?</h3>
              <p className="text-gray-600">Elite Care Companion provides home care services throughout Buckhead, Sandy Springs, Brookhaven, Druid Hills, Alpharetta, Roswell, Vinings, Smyrna, Decatur, Tucker, and surrounding Atlanta metro communities.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Are your caregivers licensed and insured?</h3>
              <p className="text-gray-600">Yes, all our caregivers are thoroughly screened, background-checked, and bonded. Elite Care Companion is a fully licensed home care agency with comprehensive insurance coverage for your protection.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide 24-hour home care services?</h3>
              <p className="text-gray-600">Yes, we offer around-the-clock care including overnight caregivers, live-in care, and 24/7 emergency services. We&apos;re available weekends and holidays throughout the Atlanta area.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What types of home care services do you provide?</h3>
              <p className="text-gray-600">We offer comprehensive home care including personal care, companionship, medication reminders, meal preparation, transportation, light housekeeping, post-surgery recovery care, and specialized support for dementia and chronic illnesses.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How much does home care cost in Atlanta?</h3>
              <p className="text-gray-600">Home care costs vary based on the level of care needed and hours required. We offer competitive rates and flexible scheduling. Contact us for a free consultation and personalized care plan with transparent pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Home Care Consultation Today
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Fill out the form below and Lenny will contact you personally within 1 hour to discuss your care needs and answer any questions you may have.
            </p>
            <div className="bg-green-50 p-4 rounded-lg mb-8">
              <p className="text-green-800 font-semibold">✓ No obligation consultation</p>
              <p className="text-green-700">✓ Same-day service available • ✓ Licensed & insured • ✓ Available 24/7</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-lg p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Elite Care Companion</h3>
              <p className="text-blue-200 mb-4">
                Professional home care services throughout Atlanta metro. Licensed, bonded, and available 24/7.
              </p>
              <div className="space-y-2 text-blue-200">
                <p>Licensed Home Care Agency</p>
                <p>Serving Atlanta Metro Since 2020</p>
                <p>Available 24/7 • Emergency Care</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-blue-200">
                <p>Lenny Monsanto, Owner</p>
                <p><a href="tel:470-696-3850" className="hover:text-white">Phone: (470) 696-3850</a></p>
                <p><a href="mailto:lennylmonsanto@gmail.com" className="hover:text-white">lennylmonsanto@gmail.com</a></p>
                <p>Atlanta, Georgia 30309</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <div className="space-y-1 text-blue-200">
                <p>• <Link href="/buckhead-home-care" className="hover:text-white">Buckhead</Link> & <Link href="/sandy-springs-home-care" className="hover:text-white">Sandy Springs</Link></p>
                <p>• <Link href="/brookhaven-home-care" className="hover:text-white">Brookhaven</Link> & <Link href="/druid-hills-home-care" className="hover:text-white">Druid Hills</Link></p>
                <p>• <Link href="/alpharetta-home-care" className="hover:text-white">Alpharetta</Link> & Roswell</p>
                <p>• Vinings & Smyrna</p>
                <p>• Decatur & Tucker</p>
                <p>• <Link href="/home-care-near-atlanta-landmarks" className="hover:text-white">All Atlanta Metro Areas</Link></p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <div className="space-y-1 text-blue-200">
                <p>• <Link href="/personal-care" className="hover:text-white">Personal Care & Hygiene</Link></p>
                <p>• <Link href="/companion-care" className="hover:text-white">Companion Care Services</Link></p>
                <p>• <Link href="/home-care-near-atlanta-landmarks" className="hover:text-white">Medical Transportation</Link></p>
                <p>• Medication Management</p>
                <p>• Meal Planning & Cooking</p>
                <p>• Light Housekeeping</p>
                <p>• <Link href="/24-hour-care" className="hover:text-white">24-Hour Live-In Care</Link></p>
                <p>• <Link href="/dementia-care" className="hover:text-white">Dementia & Alzheimer&apos;s Care</Link></p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 Elite Care Companion. All rights reserved. Licensed Home Care Agency serving Atlanta, Georgia.</p>
            <p className="mt-2 text-sm">Call (470) 696-3850 for immediate home care assistance in Buckhead, Sandy Springs, Brookhaven, Druid Hills, Alpharetta and surrounding areas.</p>
          </div>
        </div>
      </footer>

      {/* Schema.org structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "Elite Care Companion",
            "description": "Professional home care services in Atlanta, GA. Personal care, companionship, transportation, and medication management.",
            "url": "https://elite-care-companion.com",
            "telephone": "+1-470-696-3850",
            "email": "lennylmonsanto@gmail.com",
            "address": {
              "@type": "PostalAddress",
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
            "founder": {
              "@type": "Person",
              "name": "Lenny Monsanto",
              "email": "lennylmonsanto@gmail.com"
            },
            "areaServed": [
              "Buckhead, GA",
              "Sandy Springs, GA",
              "Brookhaven, GA",
              "Druid Hills, GA",
              "Alpharetta, GA",
              "Atlanta, GA"
            ],
            "serviceType": [
              "Home Care Services",
              "Personal Care",
              "Companion Care",
              "Elder Care",
              "Senior Care",
              "Disability Care"
            ],
            "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
            "priceRange": "$$"
          })
        }}
      />
    </div>
  );
}