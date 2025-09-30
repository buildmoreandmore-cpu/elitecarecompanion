import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Home Care Near Atlanta Landmarks | Elite Care Companion | Phipps Plaza, Emory, Lenox',
  description: 'Home care services near major Atlanta landmarks. Phipps Plaza, Emory Hospital, Lenox Square, Perimeter Mall, Atlanta Botanical Garden. Local home care experts. Call (470) 696-3850.',
  keywords: 'home care near Phipps Plaza, home care near Emory Hospital, home care near Lenox Square, home care near Perimeter Mall, home care near Northside Hospital, home care near Atlanta Botanical Garden, home care near Fernbank Museum, home care near Town Brookhaven',
  openGraph: {
    title: 'Home Care Near Atlanta Landmarks | Elite Care Companion',
    description: 'Professional home care services throughout Atlanta near major landmarks, hospitals, shopping centers, and attractions.',
    url: 'https://elitecarecompanion.com/home-care-near-atlanta-landmarks',
    type: 'website',
    locale: 'en_US',
    siteName: 'Elite Care Companion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Care Near Atlanta Landmarks | Elite Care Companion',
    description: 'Home care services near Phipps Plaza, Emory Hospital, Lenox Square, and other Atlanta landmarks.',
  }
};

export default function HomeCareLandmarks() {
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
              Home Care Near Atlanta <span className="text-yellow-300">Landmarks</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Professional home care services throughout Atlanta near major landmarks, hospitals, shopping centers, and cultural attractions you know and love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:470-696-3850" className="bg-yellow-500 text-green-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition-colors">
                Local Home Care: (470) 696-3850
              </a>
              <a href="#contact" className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Find Care Near You
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Location Matters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Location Matters for Home Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Knowing Atlanta&apos;s landmarks, traffic patterns, and local resources helps us provide better, more convenient care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-green-100 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Transportation</h3>
              <p className="text-gray-600">
                Our caregivers know the best routes to your favorite shopping centers, restaurants, and medical facilities, avoiding traffic and finding convenient parking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m11 0a2 2 0 01-2 2H7a2 2 0 01-2-2m2-2h2m8-2V9a2 2 0 00-2-2H9a2 2 0 00-2 2v8.1M9 7h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare Coordination</h3>
              <p className="text-gray-600">
                We have established relationships with major hospitals and medical facilities, making appointment coordination and emergency response more efficient.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibent text-gray-900 mb-3">Community Connections</h3>
              <p className="text-gray-600">
                Local knowledge helps us connect you with community resources, social activities, and services that enhance quality of life and social engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Healthcare Landmarks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Home Care Near Major Atlanta Hospitals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in coordinating care with Atlanta&apos;s premier medical facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Emory University Hospital</h3>
              <div className="space-y-3">
                <p className="text-blue-800 text-sm">
                  <strong>Location:</strong> 1364 Clifton Rd NE, Atlanta, GA 30322
                </p>
                <p className="text-blue-800 text-sm">
                  Home care services in surrounding areas: <Link href="/brookhaven-home-care" className="underline hover:text-blue-900">Brookhaven</Link>, <Link href="/druid-hills-home-care" className="underline hover:text-blue-900">Druid Hills</Link>, Decatur, Virginia-Highland
                </p>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Our Emory Area Services:</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Post-surgery recovery care</li>
                    <li>• Transportation to follow-up appointments</li>
                    <li>• Coordination with Emory specialists</li>
                    <li>• Cancer care support and companionship</li>
                    <li>• Rehabilitation exercise assistance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-900 mb-4">Northside Hospital</h3>
              <div className="space-y-3">
                <p className="text-green-800 text-sm">
                  <strong>Location:</strong> 1000 Johnson Ferry Rd NE, Atlanta, GA 30342
                </p>
                <p className="text-green-800 text-sm">
                  Home care services in surrounding areas: <Link href="/sandy-springs-home-care" className="underline hover:text-green-900">Sandy Springs</Link>, <Link href="/buckhead-home-care" className="underline hover:text-green-900">Buckhead</Link>, Dunwoody, Roswell
                </p>
                <div className="bg-green-100 p-3 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Our Northside Area Services:</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Cardiac recovery care</li>
                    <li>• Maternity support and newborn care</li>
                    <li>• Orthopedic rehabilitation</li>
                    <li>• Hospital discharge planning</li>
                    <li>• Emergency backup care</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Northside Hospital Forsyth</h3>
              <div className="space-y-3">
                <p className="text-purple-800 text-sm">
                  <strong>Location:</strong> 1200 Northside Forsyth Dr, Cumming, GA 30041
                </p>
                <p className="text-purple-800 text-sm">
                  Home care services in surrounding areas: <Link href="/alpharetta-home-care" className="underline hover:text-purple-900">Alpharetta</Link>, Cumming, Johns Creek, Milton
                </p>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Our Northside Forsyth Services:</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Corporate executive health support</li>
                    <li>• Preventive care coordination</li>
                    <li>• Specialty care transportation</li>
                    <li>• Health monitoring and wellness</li>
                    <li>• Concierge-level care coordination</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-900 mb-4">Children&apos;s Healthcare of Atlanta</h3>
              <div className="space-y-3">
                <p className="text-red-800 text-sm">
                  <strong>Locations:</strong> Egleston, Scottish Rite, Hughes Spalding
                </p>
                <p className="text-red-800 text-sm">
                  Supporting families throughout Atlanta metro area during pediatric care needs
                </p>
                <div className="bg-red-100 p-3 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Family Support Services:</h4>
                  <ul className="text-red-800 text-sm space-y-1">
                    <li>• Grandparent respite care</li>
                    <li>• Sibling care during hospitalizations</li>
                    <li>• Transportation for family visits</li>
                    <li>• Emotional support for families</li>
                    <li>• Household management during crisis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-orange-900 mb-4">Piedmont Atlanta Hospital</h3>
              <div className="space-y-3">
                <p className="text-orange-800 text-sm">
                  <strong>Location:</strong> 1968 Peachtree Rd NW, Atlanta, GA 30309
                </p>
                <p className="text-orange-800 text-sm">
                  Home care services in surrounding areas: Midtown, <Link href="/buckhead-home-care" className="underline hover:text-orange-900">Buckhead</Link>, Virginia-Highland, Ansley Park
                </p>
                <div className="bg-orange-100 p-3 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Our Piedmont Area Services:</h4>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Heart and vascular care support</li>
                    <li>• Neurology and stroke recovery</li>
                    <li>• Cancer treatment companionship</li>
                    <li>• Urban apartment care</li>
                    <li>• High-rise building navigation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-teal-900 mb-4">CDC Campus</h3>
              <div className="space-y-3">
                <p className="text-teal-800 text-sm">
                  <strong>Location:</strong> 1600 Clifton Rd NE, Atlanta, GA 30329
                </p>
                <p className="text-teal-800 text-sm">
                  Home care for CDC employees and families in <Link href="/brookhaven-home-care" className="underline hover:text-teal-900">Brookhaven</Link>, <Link href="/druid-hills-home-care" className="underline hover:text-teal-900">Druid Hills</Link>, Decatur
                </p>
                <div className="bg-teal-100 p-3 rounded-lg">
                  <h4 className="font-semibold text-teal-900 mb-2">CDC Family Services:</h4>
                  <ul className="text-teal-800 text-sm space-y-1">
                    <li>• Federal employee benefits coordination</li>
                    <li>• Security clearance-aware staff</li>
                    <li>• Travel-related emergency coverage</li>
                    <li>• Public health professional understanding</li>
                    <li>• Flexible government work schedules</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping & Entertainment Landmarks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Home Care Near Atlanta Shopping &amp; Entertainment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maintaining social connections and independence with visits to favorite shopping and entertainment destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premier Shopping Destinations</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-blue-700 mb-2">Phipps Plaza (<Link href="/buckhead-home-care" className="underline">Buckhead</Link>)</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Address:</strong> 3500 Peachtree Rd NE, Atlanta, GA 30326
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Luxury shopping with accessible parking</li>
                    <li>• Upscale dining and social experiences</li>
                    <li>• Personal shopping assistance</li>
                    <li>• Valet parking coordination</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-green-700 mb-2">Lenox Square (<Link href="/buckhead-home-care" className="underline">Buckhead</Link>)</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Address:</strong> 3393 Peachtree Rd NE, Atlanta, GA 30326
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Familiar shopping environment</li>
                    <li>• Multiple dining options</li>
                    <li>• Easy navigation assistance</li>
                    <li>• Package carrying and support</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-purple-700 mb-2">Perimeter Mall (<Link href="/sandy-springs-home-care" className="underline">Sandy Springs</Link>)</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Address:</strong> 4400 Ashford Dunwoody Rd NE, Atlanta, GA 30346
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Convenient for North Fulton residents</li>
                    <li>• Medical services and pharmacy access</li>
                    <li>• Senior-friendly environment</li>
                    <li>• Restaurant and café options</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-orange-700 mb-2">Town Brookhaven (<Link href="/brookhaven-home-care" className="underline">Brookhaven</Link>)</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Address:</strong> 4045 Peachtree Rd NE, Brookhaven, GA 30319
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Mixed-use walkable environment</li>
                    <li>• Outdoor dining and events</li>
                    <li>• Community gathering place</li>
                    <li>• Easy parking and accessibility</li>
                  </ul>
                </div>

                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-bold text-teal-700 mb-2">Avalon (<Link href="/alpharetta-home-care" className="underline">Alpharetta</Link>)</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Address:</strong> 9000 Avalon Blvd, Alpharetta, GA 30009
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Modern shopping and dining</li>
                    <li>• Entertainment and events</li>
                    <li>• Corporate family destination</li>
                    <li>• Premium experience with assistance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural &amp; Recreation Landmarks</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-bold text-pink-700 mb-2">Atlanta Botanical Garden</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Address:</strong> 1345 Piedmont Ave NE, Atlanta, GA 30309
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Wheelchair and mobility-accessible paths</li>
                    <li>• Seasonal exhibitions and events</li>
                    <li>• Peaceful environment for seniors</li>
                    <li>• Photography and nature appreciation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-indigo-700 mb-2">Fernbank Museum (<Link href="/druid-hills-home-care" className="underline">Druid Hills</Link>)</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Address:</strong> 767 Clifton Rd NE, Atlanta, GA 30307
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Educational and engaging exhibitions</li>
                    <li>• IMAX theater experiences</li>
                    <li>• Senior group programs</li>
                    <li>• Intellectual stimulation and learning</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold text-yellow-700 mb-2">High Museum of Art</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Address:</strong> 1280 Peachtree St NE, Atlanta, GA 30309
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• World-class art collections</li>
                    <li>• Senior discount programs</li>
                    <li>• Accessible facilities and tours</li>
                    <li>• Cultural enrichment activities</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-red-700 mb-2">Piedmont Park</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Address:</strong> 1320 Monroe Dr NE, Atlanta, GA 30306
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Gentle walking paths and benches</li>
                    <li>• Farmers market and festivals</li>
                    <li>• Dog park and people watching</li>
                    <li>• Exercise classes and activities</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-bold text-gray-700 mb-2">Fox Theatre</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Address:</strong> 660 Peachtree St NE, Atlanta, GA 30308
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Broadway shows and performances</li>
                    <li>• Accessible seating and assistance</li>
                    <li>• Transportation and accompaniment</li>
                    <li>• Cultural event coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation and Navigation Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Expert Navigation &amp; Transportation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our caregivers know Atlanta inside and out - from the best parking spots to avoiding traffic delays
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="bg-blue-200 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Traffic-Aware Scheduling</h3>
              <p className="text-blue-800 text-sm">We plan appointments around Atlanta traffic patterns, construction zones, and peak hours to ensure timely arrivals.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl text-center">
              <div className="bg-green-200 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2">Parking Expertise</h3>
              <p className="text-green-800 text-sm">Knowledge of accessible parking, valet services, and drop-off locations at every major Atlanta destination.</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <div className="bg-purple-200 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-purple-900 mb-2">Route Planning</h3>
              <p className="text-purple-800 text-sm">Efficient multi-stop trips combining medical appointments, shopping, and social visits in one convenient outing.</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="bg-orange-200 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-orange-900 mb-2">Safety &amp; Security</h3>
              <p className="text-orange-800 text-sm">Experienced drivers with clean records, insured vehicles, and training in senior transportation safety.</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sample Transportation Times from Different Areas</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">From <Link href="/buckhead-home-care" className="text-blue-600 hover:underline">Buckhead</Link>:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• To Phipps Plaza: 3-8 minutes</li>
                  <li>• To Lenox Square: 5-12 minutes</li>
                  <li>• To Northside Hospital: 8-15 minutes</li>
                  <li>• To Piedmont Hospital: 10-18 minutes</li>
                  <li>• To Atlanta Botanical Garden: 12-20 minutes</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">From <Link href="/sandy-springs-home-care" className="text-blue-600 hover:underline">Sandy Springs</Link>:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• To Perimeter Mall: 2-8 minutes</li>
                  <li>• To Northside Hospital: 5-12 minutes</li>
                  <li>• To Lenox Square: 8-15 minutes</li>
                  <li>• To Emory Hospital: 15-25 minutes</li>
                  <li>• To Fernbank Museum: 18-28 minutes</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3">From <Link href="/brookhaven-home-care" className="text-blue-600 hover:underline">Brookhaven</Link>:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• To Town Brookhaven: 3-8 minutes</li>
                  <li>• To Emory Hospital: 5-10 minutes</li>
                  <li>• To CDC Campus: 8-12 minutes</li>
                  <li>• To Fernbank Museum: 5-10 minutes</li>
                  <li>• To Lenox Square: 10-18 minutes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Home Care Near Your Favorite Places
            </h2>
            <p className="text-xl text-gray-600">
              Call to discuss care near the landmarks and locations that matter most to you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <div className="bg-green-600 text-white p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold mb-2">Local Atlanta Home Care Experts</h3>
                  <a href="tel:470-696-3850" className="text-2xl font-bold hover:underline">
                    (470) 696-3850
                  </a>
                  <p className="text-green-100 mt-2">Free Consultation • Local Knowledge</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Our Local Expertise Includes:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Transportation to all major Atlanta hospitals and medical centers</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Shopping assistance at Phipps Plaza, Lenox Square, Perimeter Mall</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Cultural activities at museums, botanical gardens, and entertainment venues</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Navigation expertise for traffic patterns and parking throughout metro Atlanta</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-green-900 mb-2">Service Areas Near Major Landmarks:</h4>
                <div className="grid grid-cols-2 gap-2 text-green-700 text-sm">
                  <Link href="/buckhead-home-care" className="hover:underline">• Buckhead</Link>
                  <Link href="/sandy-springs-home-care" className="hover:underline">• Sandy Springs</Link>
                  <Link href="/brookhaven-home-care" className="hover:underline">• Brookhaven</Link>
                  <Link href="/druid-hills-home-care" className="hover:underline">• Druid Hills</Link>
                  <Link href="/alpharetta-home-care" className="hover:underline">• Alpharetta</Link>
                  <span>• Roswell</span>
                  <span>• Dunwoody</span>
                  <span>• Decatur</span>
                  <span>• Vinings</span>
                  <span>• Johns Creek</span>
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
              <p className="text-gray-300 mb-4">Local Atlanta home care experts serving families near all major landmarks and destinations.</p>
              <div className="space-y-2">
                <a href="tel:470-696-3850" className="text-yellow-400 font-semibold hover:underline">
                  (470) 696-3850
                </a>
                <div className="text-gray-300">Local Knowledge • Professional Care</div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Major Hospitals</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Emory University Hospital</li>
                <li>Northside Hospital</li>
                <li>Piedmont Atlanta</li>
                <li>Children&apos;s Healthcare</li>
                <li>Northside Forsyth</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Shopping Centers</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Phipps Plaza</li>
                <li>Lenox Square</li>
                <li>Perimeter Mall</li>
                <li>Town Brookhaven</li>
                <li>Avalon</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/buckhead-home-care" className="hover:text-white">Buckhead</Link></li>
                <li><Link href="/sandy-springs-home-care" className="hover:text-white">Sandy Springs</Link></li>
                <li><Link href="/brookhaven-home-care" className="hover:text-white">Brookhaven</Link></li>
                <li><Link href="/alpharetta-home-care" className="hover:text-white">Alpharetta</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Elite Care Companion. All rights reserved. Professional home care services near all major Atlanta landmarks and destinations.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}