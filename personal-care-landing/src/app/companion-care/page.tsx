import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Companion Care Services Atlanta | Elite Care Companion | Senior Companionship',
  description: 'Professional companion care services in Atlanta. Social interaction, light housekeeping, transportation, and emotional support for seniors. Reduce isolation, maintain independence. Call (470) 696-3850.',
  keywords: 'companion care Atlanta, senior companion Atlanta, elderly companionship, senior social support Atlanta, companion caregiver, social isolation seniors, senior friendship, companion services Atlanta, elderly companion care, senior companion services',
  openGraph: {
    title: 'Companion Care Services Atlanta | Elite Care Companion',
    description: 'Professional companion care throughout Atlanta metro. Reduce isolation, maintain independence, and enhance quality of life for seniors with caring companionship.',
    url: 'https://elitecarecompanion.com/companion-care',
    type: 'website',
    locale: 'en_US',
    siteName: 'Elite Care Companion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Companion Care Services Atlanta | Elite Care Companion',
    description: 'Professional companion care in Atlanta. Social support and friendship for seniors. Call (470) 696-3850.',
  }
};

export default function CompanionCare() {
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
      <section className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="text-yellow-300">Companion Care</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Meaningful friendship, social engagement, and emotional support to enhance quality of life and reduce isolation for Atlanta seniors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:470-696-3850" className="bg-yellow-500 text-orange-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition-colors">
                Start Companion Care: (470) 696-3850
              </a>
              <a href="#contact" className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Meet & Greet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Companion Care */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Is Companion Care?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional companionship focused on social interaction, emotional support, and light assistance to help seniors maintain independence and joy in daily life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Companion Care Includes:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Meaningful Conversation &amp; Friendship</h4>
                    <p className="text-gray-600 text-sm">Regular social interaction, active listening, sharing stories, and genuine companionship</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transportation &amp; Outings</h4>
                    <p className="text-gray-600 text-sm">Safe transportation to appointments, shopping, social events, and recreational activities</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Light Housekeeping Support</h4>
                    <p className="text-gray-600 text-sm">Meal preparation, light cleaning, organizing, laundry assistance, and home maintenance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Recreational Activities</h4>
                    <p className="text-gray-600 text-sm">Games, puzzles, crafts, reading, music, gardening, and other engaging activities</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Medication Reminders</h4>
                    <p className="text-gray-600 text-sm">Gentle reminders for medications, appointments, and important daily routines</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Companion Care vs. Personal Care</h3>

              <div className="mb-6">
                <h4 className="font-semibold text-orange-600 mb-2">Companion Care Focus:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Social interaction and emotional support</li>
                  <li>• Light assistance with daily activities</li>
                  <li>• Transportation and accompaniment</li>
                  <li>• Meal preparation and light housekeeping</li>
                  <li>• Medication reminders (not administration)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-blue-600 mb-2">Personal Care Adds:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Bathing, dressing, and grooming assistance</li>
                  <li>• Toileting and incontinence care</li>
                  <li>• Mobility and transfer assistance</li>
                  <li>• Medication administration</li>
                  <li>• Medical appointment coordination</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg">
                <p className="text-orange-800 text-sm font-semibold">
                  Many families start with companion care and add personal care services as needs increase over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signs Companion Care Is Needed */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Signs Your Loved One Could Benefit from Companion Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognizing when companionship and light assistance can make a significant difference in quality of life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Isolation &amp; Loneliness</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Decreased social contact with friends and family</li>
                <li>• Reluctance to leave the house</li>
                <li>• Loss of interest in hobbies or activities</li>
                <li>• Signs of depression or sadness</li>
                <li>• Talking about feeling lonely or forgotten</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety &amp; Independence Concerns</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Difficulty driving safely or giving up driving</li>
                <li>• Concerns about being alone for long periods</li>
                <li>• Missing appointments or forgetting medications</li>
                <li>• Home maintenance becoming overwhelming</li>
                <li>• Family worry about daily safety and wellbeing</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Life Transitions</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Recent loss of spouse or close friend</li>
                <li>• Moving to a new home or community</li>
                <li>• Recovering from illness or hospitalization</li>
                <li>• Adult children moving away or getting busy</li>
                <li>• Retirement adjustment and routine changes</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mild Cognitive Changes</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Occasional forgetfulness with appointments</li>
                <li>• Mild confusion with complex tasks</li>
                <li>• Need for gentle reminders and encouragement</li>
                <li>• Beginning to avoid complex social situations</li>
                <li>• Benefits from routine and familiar companionship</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Caregiver Stress</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Adult children feeling overwhelmed with caregiving</li>
                <li>• Long-distance family members worried about wellbeing</li>
                <li>• Spouse needing respite and support</li>
                <li>• Family conflicts about care decisions</li>
                <li>• Need for professional, objective care assessment</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality of Life Enhancement</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Desire to remain active and engaged</li>
                <li>• Interest in trying new activities or hobbies</li>
                <li>• Want to maintain social connections</li>
                <li>• Benefit from having a regular routine</li>
                <li>• Enjoy having someone to share experiences with</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Companion Care Schedule Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Companion Care Scheduling
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect companion care schedule that fits your lifestyle and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-700 mb-2">A Few Hours Weekly</h3>
                <div className="text-blue-600 font-semibold">Perfect for independent seniors</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">$25-35/hr</div>
                  <div className="text-blue-600">2-8 hours per week</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Weekly grocery shopping trips</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Social outings and activities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Light housekeeping assistance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Companionship and conversation</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Ideal For:</h4>
                <ul className="text-blue-800 text-xs space-y-1">
                  <li>• Maintaining social connections</li>
                  <li>• Light assistance with errands</li>
                  <li>• Trying companion care for the first time</li>
                  <li>• Budget-conscious families</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
              <div className="text-center mb-6">
                <div className="bg-green-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h-8zM8 7v10a2 2 0 002 2h4a2 2 0 002-2V7M8 7H6a2 2 0 00-2 2v6a2 2 0 002 2h2M18 7h-2M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7M5 7V3a2 2 0 012-2h10a2 2 0 012 2v4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">Daily Companion Care</h3>
                <div className="text-green-600 font-semibold">Most popular option</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">$140-200/day</div>
                  <div className="text-green-600">4-8 hours daily</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Daily meal preparation and companionship</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Transportation to appointments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Medication reminders and organization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Engaging activities and exercise</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Light housekeeping and organization</span>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Ideal For:</h4>
                <ul className="text-green-800 text-xs space-y-1">
                  <li>• Seniors living alone</li>
                  <li>• Those needing daily routine and structure</li>
                  <li>• Family peace of mind with regular check-ins</li>
                  <li>• Preventing isolation and maintaining independence</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-500">
              <div className="text-center mb-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-orange-700 mb-2">Live-In Companion</h3>
                <div className="text-orange-600 font-semibold">Maximum support &amp; friendship</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-700">$200-280/day</div>
                  <div className="text-orange-600">24/7 companionship available</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Constant companionship and safety</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">All meals and household management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">24/7 emergency response capability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Deep friendship and consistent routine</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Travel companionship available</span>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">Ideal For:</h4>
                <ul className="text-orange-800 text-xs space-y-1">
                  <li>• Seniors who should not be alone</li>
                  <li>• Those who value deep, consistent relationships</li>
                  <li>• Families wanting maximum peace of mind</li>
                  <li>• Homes with space for live-in companion</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">All Companion Care Includes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Licensed &amp; Insured</h4>
                <p className="text-gray-600 text-sm">Background-checked, bonded companions</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Personalized Matching</h4>
                <p className="text-gray-600 text-sm">Compatible personalities and interests</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Flexible &amp; Reliable</h4>
                <p className="text-gray-600 text-sm">Backup coverage and schedule adjustments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities and Engagement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Engaging Activities &amp; Adventures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our companions specialize in creating meaningful experiences that bring joy, stimulation, and social connection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="bg-blue-200 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">Mental Stimulation</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Reading together and book discussions</li>
                <li>• Crossword puzzles and brain games</li>
                <li>• Memory sharing and storytelling</li>
                <li>• Learning new skills or languages</li>
                <li>• Current events discussions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="bg-green-200 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-3">Creative &amp; Artistic</h3>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Arts and crafts projects</li>
                <li>• Music appreciation and singing</li>
                <li>• Painting and drawing activities</li>
                <li>• Photography and scrapbooking</li>
                <li>• Gardening and plant care</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="bg-purple-200 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-purple-900 mb-3">Social &amp; Community</h3>
              <ul className="text-purple-800 text-sm space-y-1">
                <li>• Senior center activities and events</li>
                <li>• Religious services and fellowship</li>
                <li>• Family gatherings and celebrations</li>
                <li>• Community volunteering opportunities</li>
                <li>• Social clubs and interest groups</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <div className="bg-orange-200 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-orange-900 mb-3">Outdoor &amp; Active</h3>
              <ul className="text-orange-800 text-sm space-y-1">
                <li>• Nature walks and park visits</li>
                <li>• Light exercise and stretching</li>
                <li>• Shopping trips and errands</li>
                <li>• Restaurant meals and café visits</li>
                <li>• Museum and cultural outings</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-100 to-orange-200 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-orange-900 mb-4 text-center">Atlanta-Specific Adventures</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">Cultural Attractions:</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• High Museum of Art visits</li>
                  <li>• Atlanta Botanical Garden walks</li>
                  <li>• Fox Theatre performances</li>
                  <li>• Historic home tours</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">Shopping &amp; Dining:</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Phipps Plaza and Lenox Square</li>
                  <li>• Local farmers markets</li>
                  <li>• Favorite neighborhood restaurants</li>
                  <li>• Antique shopping and browsing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">Natural Beauty:</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Piedmont Park strolls</li>
                  <li>• Atlanta BeltLine walking</li>
                  <li>• Local park and garden visits</li>
                  <li>• Scenic drive adventures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links to Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              When You Need More Than Companion Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive care solutions that can grow with changing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/24-hour-care" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-2">24-Hour Live-In Care</h3>
              <p className="text-gray-600 text-sm">When constant supervision and support become necessary for safety and wellbeing</p>
            </Link>

            <Link href="/dementia-care" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">Memory Care Specialists</h3>
              <p className="text-gray-600 text-sm">Specialized companion care for early-stage dementia and Alzheimer&apos;s patients</p>
            </Link>

            <Link href="/buckhead-home-care" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-2">Personal Care Services</h3>
              <p className="text-gray-600 text-sm">Bathing, dressing, and personal hygiene assistance combined with companionship</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start Companion Care Today
            </h2>
            <p className="text-xl text-gray-600">
              Call for a free meet-and-greet with potential companions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <div className="bg-orange-600 text-white p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold mb-2">Companion Care Available Now</h3>
                  <a href="tel:470-696-3850" className="text-2xl font-bold hover:underline">
                    (470) 696-3850
                  </a>
                  <p className="text-orange-100 mt-2">Free Consultation • Meet & Greet</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Your Free Companion Assessment Includes:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-orange-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">In-home evaluation of companionship needs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-orange-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Discussion of interests, hobbies, and preferences</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-orange-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Companion matching based on personality and interests</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-orange-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Flexible scheduling options and cost planning</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-orange-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Meet-and-greet with potential companions</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h4 className="font-bold text-orange-900 mb-2">Perfect for These Situations:</h4>
                <ul className="text-orange-800 text-sm space-y-1">
                  <li>• Recent loss of spouse or close friend</li>
                  <li>• Adult children living far away</li>
                  <li>• No longer comfortable driving</li>
                  <li>• Feeling isolated or lonely</li>
                  <li>• Wanting to stay active and engaged</li>
                  <li>• Needing light assistance with daily tasks</li>
                </ul>
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
              <p className="text-gray-300 mb-4">Professional companion care services reducing isolation and enhancing quality of life for Atlanta seniors.</p>
              <div className="space-y-2">
                <a href="tel:470-696-3850" className="text-yellow-400 font-semibold hover:underline">
                  (470) 696-3850
                </a>
                <div className="text-gray-300">Available 7 Days a Week</div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Companion Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Social Companionship</li>
                <li>Transportation Services</li>
                <li>Light Housekeeping</li>
                <li>Meal Preparation</li>
                <li>Recreational Activities</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/buckhead-home-care" className="hover:text-white">Buckhead</Link></li>
                <li><Link href="/sandy-springs-home-care" className="hover:text-white">Sandy Springs</Link></li>
                <li><Link href="/brookhaven-home-care" className="hover:text-white">Brookhaven</Link></li>
                <li><Link href="/druid-hills-home-care" className="hover:text-white">Druid Hills</Link></li>
                <li><Link href="/alpharetta-home-care" className="hover:text-white">Alpharetta</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div>Lenny Monsanto, Owner</div>
                <div>lennylmonsanto@gmail.com</div>
                <div>Licensed &amp; Insured</div>
                <div>Companion Care Specialists</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Elite Care Companion. All rights reserved. Professional companion care services throughout Atlanta, Georgia and surrounding communities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}