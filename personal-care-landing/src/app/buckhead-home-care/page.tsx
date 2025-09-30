import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Care Services in Buckhead Atlanta - Near Phipps Plaza & Lenox Square | Elite Care Companion',
  description: 'Professional home care services in Buckhead, Atlanta. Serving Phipps Plaza, Lenox Square, Buckhead Village. Personal care, companionship, 24/7 care. Call (470) 696-3850 for same-day service.',
  keywords: 'home care Buckhead, senior care Phipps Plaza, elderly care Lenox Square, Buckhead Village home care, private caregiver Buckhead Atlanta, live-in care Buckhead, 24 hour care Buckhead, dementia care Buckhead, post surgery care Buckhead, companion care Buckhead, emergency home care Buckhead, weekend caregiver Buckhead, overnight care Buckhead, respite care Buckhead, Buckhead senior services, home health aide Buckhead, personal care Buckhead Atlanta, medication reminders Buckhead, transportation services Buckhead, meal preparation Buckhead',
};

export default function BuckheadHomeCare() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Home Care Services in Buckhead, Atlanta
            </h1>
            <p className="text-xl sm:text-2xl text-blue-200 mb-6">
              Serving Phipps Plaza, Lenox Square, Buckhead Village & Surrounding Areas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:470-696-3850"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Call Now: (470) 696-3850
              </a>
              <Link
                href="/#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
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
                Why Buckhead Families Choose Elite Care Companion
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                <strong>Buckhead is Atlanta&apos;s premier neighborhood</strong>, home to luxury shopping at Phipps Plaza and Lenox Square, upscale dining, and beautiful residential areas. Our clients in Buckhead deserve the highest quality of care, which is why Elite Care Companion provides <strong>premium home care services</strong> tailored to the sophisticated needs of this distinguished community.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you live in <strong>Buckhead Village, Tuxedo Park, Garden Hills, or near the Buckhead Triangle</strong>, our compassionate caregivers understand the unique lifestyle and expectations of Buckhead residents. We provide discreet, professional care that maintains your independence and dignity.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-blue-800 font-semibold mb-2">✓ Same-Day Service Available</p>
                <p className="text-blue-700">✓ Licensed & Bonded Caregivers</p>
                <p className="text-blue-700">✓ 24/7 Emergency Care</p>
                <p className="text-blue-700">✓ Serving Buckhead Since 2020</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Buckhead Service Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Shopping Districts:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Phipps Plaza area</li>
                    <li>• Lenox Square vicinity</li>
                    <li>• Buckhead Village</li>
                    <li>• Buckhead Triangle</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Neighborhoods:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Tuxedo Park</li>
                    <li>• Garden Hills</li>
                    <li>• Haynes Manor</li>
                    <li>• Peachtree Hills</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Major Streets:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Peachtree Road</li>
                    <li>• Roswell Road</li>
                    <li>• West Paces Ferry</li>
                    <li>• Piedmont Road</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Near:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Atlanta Financial Center</li>
                    <li>• Buckhead Library</li>
                    <li>• Charlie Loudermilk Park</li>
                    <li>• Governor&apos;s Mansion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Specific to Buckhead */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Home Care Services in Buckhead
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored care solutions for the discerning residents of Atlanta&apos;s most prestigious neighborhood
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Live-in Care */}
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24-Hour Live-In Care</h3>
              <p className="text-gray-600 mb-4">Round-the-clock professional care for Buckhead residents who want to age in place in their luxury homes. Perfect for those near Phipps Plaza and Lenox Square who need consistent support.</p>
              <Link href="/24-hour-care" className="text-blue-600 font-medium hover:text-blue-700">
                Learn more about 24-hour care →
              </Link>
            </div>

            {/* Companion Care */}
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Companion Care Services</h3>
              <p className="text-gray-600 mb-4">Social companionship for Buckhead seniors, including shopping trips to Lenox Square, cultural activities, and maintaining active lifestyles in Atlanta&apos;s premier neighborhood.</p>
              <Link href="/companion-care" className="text-blue-600 font-medium hover:text-blue-700">
                Learn more about companion care →
              </Link>
            </div>

            {/* Transportation */}
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Transportation</h3>
              <p className="text-gray-600 mb-4">Safe, reliable transportation to Emory Healthcare, Piedmont Hospital, and medical appointments throughout Buckhead and Atlanta metro area.</p>
              <Link href="/transportation-services" className="text-blue-600 font-medium hover:text-blue-700">
                Learn more about transportation →
              </Link>
            </div>

            {/* Post-Surgery */}
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Post-Surgery Recovery Care</h3>
              <p className="text-gray-600 mb-4">Specialized recovery support in your Buckhead home after procedures at Emory, Piedmont, or Atlanta area hospitals. Professional wound care and rehabilitation assistance.</p>
              <Link href="/post-surgery-care" className="text-blue-600 font-medium hover:text-blue-700">
                Learn more about recovery care →
              </Link>
            </div>

            {/* Dementia Care */}
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Memory Care & Dementia Support</h3>
              <p className="text-gray-600 mb-4">Specialized Alzheimer&apos;s and dementia care for Buckhead families, with trained caregivers who understand memory care best practices and safety protocols.</p>
              <Link href="/dementia-care" className="text-blue-600 font-medium hover:text-blue-700">
                Learn more about dementia care →
              </Link>
            </div>

            {/* Emergency Care */}
            <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Emergency Care</h3>
              <p className="text-gray-600 mb-4">Immediate home care placement for Buckhead residents. Hospital discharge support, sudden illness, or family emergencies. Available 24/7.</p>
              <Link href="/emergency-care" className="text-blue-600 font-medium hover:text-blue-700">
                Learn more about emergency care →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Healthcare Partners */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Partnering with Buckhead&apos;s Premier Healthcare Facilities
            </h2>
            <p className="text-xl text-gray-600">
              We coordinate seamlessly with top medical providers serving the Buckhead community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Emory Healthcare</h3>
              <p className="text-gray-600 text-sm mb-2">1365 Clifton Rd NE (Nearby)</p>
              <p className="text-gray-600">Post-discharge care coordination and ongoing medical support</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Piedmont Atlanta Hospital</h3>
              <p className="text-gray-600 text-sm mb-2">1968 Peachtree Rd NW</p>
              <p className="text-gray-600">Comprehensive recovery care and rehabilitation support</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Atlanta Medical Center</h3>
              <p className="text-gray-600 text-sm mb-2">315 Boulevard NE (Nearby)</p>
              <p className="text-gray-600">Emergency care coordination and hospital-to-home transitions</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Northside Hospital</h3>
              <p className="text-gray-600 text-sm mb-2">1000 Johnson Ferry Rd (Sandy Springs)</p>
              <p className="text-gray-600">Surgical recovery support and specialized care coordination</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Buckhead Family Medicine</h3>
              <p className="text-gray-600 text-sm mb-2">Multiple Buckhead locations</p>
              <p className="text-gray-600">Primary care coordination and medication management</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Buckhead Pharmacies</h3>
              <p className="text-gray-600 text-sm mb-2">CVS, Walgreens, Local pharmacies</p>
              <p className="text-gray-600">Prescription pickup and medication coordination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Buckhead-Specific FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions - Buckhead Home Care
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide home care services throughout all of Buckhead?</h3>
              <p className="text-gray-600">Yes, we serve all areas of Buckhead including Phipps Plaza area, Lenox Square vicinity, Buckhead Village, Tuxedo Park, Garden Hills, Haynes Manor, and Peachtree Hills. We&apos;re familiar with the parking, access, and security requirements of Buckhead&apos;s luxury residential buildings and gated communities.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can your caregivers help with shopping at Phipps Plaza and Lenox Square?</h3>
              <p className="text-gray-600">Absolutely! Our companion caregivers are experienced with Buckhead&apos;s premier shopping destinations. We can assist with shopping trips to Phipps Plaza, Lenox Square, and Buckhead Village, including luxury retail assistance and personal shopping support.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly can you start care for a Buckhead resident?</h3>
              <p className="text-gray-600">We offer same-day care placement for Buckhead residents, understanding that many of our clients have urgent needs following hospital stays at Emory or Piedmont. Our caregivers are familiar with Buckhead&apos;s traffic patterns and can navigate efficiently to provide prompt service.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you work with Buckhead&apos;s high-end residential buildings?</h3>
              <p className="text-gray-600">Yes, our caregivers are experienced working in Buckhead&apos;s luxury high-rise buildings, condominiums, and gated communities. We understand concierge protocols, security procedures, and parking requirements for buildings throughout the area.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What makes your Buckhead home care different from competitors?</h3>
              <p className="text-gray-600">We understand Buckhead&apos;s sophisticated clientele and provide premium, discreet care that maintains your lifestyle and social connections. Our caregivers are trained to work in luxury environments and understand the expectations of discerning Buckhead residents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Premium Home Care in Buckhead?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Call Elite Care Companion today for a free consultation tailored to your Buckhead lifestyle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:470-696-3850"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Call (470) 696-3850 Now
            </a>
            <Link
              href="/#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Free Consultation
            </Link>
          </div>
          <p className="text-blue-200 mt-4">Available 24/7 for Emergency Care in Buckhead</p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>›</span>
            <span className="text-gray-900">Buckhead Home Care Services</span>
          </div>
        </div>
      </nav>
    </div>
  );
}