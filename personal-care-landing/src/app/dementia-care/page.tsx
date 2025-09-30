import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dementia Care & Alzheimer\'s Support in Atlanta GA - Memory Care at Home | Elite Care Companion',
  description: 'Specialized dementia and Alzheimer\'s care in Atlanta. Memory care at home in Buckhead, Sandy Springs, Brookhaven. Trained caregivers, safety protocols, 24/7 support. Call (470) 696-3850.',
  keywords: 'dementia care Atlanta, Alzheimer\'s care Georgia, memory care at home Atlanta, dementia caregiver Atlanta, Alzheimer\'s support Georgia, dementia care Buckhead, memory care Sandy Springs, dementia care Brookhaven, Alzheimer\'s care Alpharetta, dementia care Druid Hills, memory care services Atlanta, dementia home care Georgia, Alzheimer\'s home care Atlanta, dementia care near me, memory care specialist Atlanta, dementia respite care Atlanta, Alzheimer\'s caregiver Georgia, dementia safety Atlanta, memory care support Atlanta, dementia care cost Atlanta, Alzheimer\'s care cost Georgia, dementia day care Atlanta, memory care programs Atlanta, dementia activities Atlanta, Alzheimer\'s activities Georgia, dementia behavior management Atlanta, memory care nutrition Atlanta, dementia wandering prevention Atlanta, Alzheimer\'s sundowning care Georgia, dementia medication management Atlanta'
};

export default function DementiaCare() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Specialized Dementia & Alzheimer&apos;s Care
            </h1>
            <p className="text-xl sm:text-2xl text-purple-200 mb-8">
              Compassionate Memory Care at Home Throughout Atlanta Metro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:470-696-3850"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors"
              >
                Call for Memory Care: (470) 696-3850
              </a>
              <Link
                href="/#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                Free Memory Care Assessment
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Urgency Banner */}
      <section className="bg-red-50 border-b border-red-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-800">
              <strong>Immediate Dementia Care Available:</strong> Same-day placement for memory care emergencies. Available 24/7 throughout Atlanta metro area.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Dementia */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                When Memory Care Becomes Necessary
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                <strong>Dementia and Alzheimer&apos;s affect over 6 million Americans</strong>, and families throughout <strong>Buckhead, Sandy Springs, Brookhaven, Druid Hills, and Alpharetta</strong> are seeking specialized care options that allow their loved ones to remain safely at home.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                <strong>Elite Care Companion&apos;s memory care specialists</strong> understand the unique challenges of dementia care and provide personalized support that adapts to changing needs while maintaining dignity and quality of life.
              </p>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-semibold text-purple-900 mb-3">Signs Your Loved One May Need Memory Care:</h4>
                <ul className="text-purple-800 space-y-2">
                  <li>• Forgetting familiar people, places, or routines</li>
                  <li>• Confusion about time, date, or location</li>
                  <li>• Safety concerns (leaving stove on, wandering)</li>
                  <li>• Difficulty with daily activities (bathing, dressing)</li>
                  <li>• Changes in mood, behavior, or personality</li>
                  <li>• Challenges with communication</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Memory Care Service Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Buckhead:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Phipps Plaza area</li>
                    <li>• Lenox Square vicinity</li>
                    <li>• Garden Hills</li>
                    <li>• Tuxedo Park</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Sandy Springs:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Perimeter Center</li>
                    <li>• City Springs</li>
                    <li>• Dunwoody Village</li>
                    <li>• North Springs</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Brookhaven:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Town Brookhaven</li>
                    <li>• Lynwood Park</li>
                    <li>• Ashford Park</li>
                    <li>• Historic Brookhaven</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Additional Areas:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Alpharetta</li>
                    <li>• Druid Hills</li>
                    <li>• Roswell</li>
                    <li>• Decatur</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-100 rounded-lg">
                <p className="text-purple-900 font-semibold text-center">Available 24/7 for Memory Care Emergencies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Memory Care Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Dementia & Alzheimer&apos;s Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our memory care specialists are trained in evidence-based approaches to dementia care, focusing on safety, dignity, and quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Safety & Wandering Prevention */}
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety & Wandering Prevention</h3>
              <p className="text-gray-600 mb-4">24/7 supervision, home safety modifications, and proven techniques to prevent wandering. Our caregivers are trained in redirection and de-escalation methods.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Door and window monitoring systems</li>
                <li>• Safe environment modifications</li>
                <li>• GPS tracking options</li>
                <li>• Medication safety protocols</li>
              </ul>
            </div>

            {/* Daily Care Assistance */}
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Care & Daily Living</h3>
              <p className="text-gray-600 mb-4">Gentle assistance with bathing, dressing, grooming, and toileting while maintaining dignity and promoting independence where possible.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Patient bathing and hygiene care</li>
                <li>• Assistance with dressing</li>
                <li>• Incontinence care management</li>
                <li>• Maintaining daily routines</li>
              </ul>
            </div>

            {/* Behavior Management */}
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Behavioral & Emotional Support</h3>
              <p className="text-gray-600 mb-4">Managing challenging behaviors, sundowning, agitation, and mood changes with evidence-based techniques and compassionate care.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Sundowning management strategies</li>
                <li>• Calming techniques for agitation</li>
                <li>• Validation therapy approaches</li>
                <li>• Environmental mood enhancement</li>
              </ul>
            </div>

            {/* Memory Stimulation */}
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cognitive Stimulation Activities</h3>
              <p className="text-gray-600 mb-4">Engaging activities designed to stimulate memory, promote cognitive function, and provide meaningful social interaction.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Memory exercises and games</li>
                <li>• Music and art therapy activities</li>
                <li>• Reminiscence therapy sessions</li>
                <li>• Simple craft and puzzle activities</li>
              </ul>
            </div>

            {/* Family Support */}
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Education & Support</h3>
              <p className="text-gray-600 mb-4">Guidance for family members on communication techniques, safety measures, and coping strategies for caring for someone with dementia.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Communication strategy training</li>
                <li>• Family caregiver support</li>
                <li>• Resource connection assistance</li>
                <li>• Respite care coordination</li>
              </ul>
            </div>

            {/* Medical Coordination */}
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Care Coordination</h3>
              <p className="text-gray-600 mb-4">Coordination with neurologists, geriatricians, and memory care specialists throughout Atlanta for comprehensive medical management.</p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Medication management protocols</li>
                <li>• Doctor appointment coordination</li>
                <li>• Medical record maintenance</li>
                <li>• Healthcare team communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stages of Dementia Care */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Care Adapted to Every Stage of Memory Loss
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our approach evolves with your loved one&apos;s changing needs throughout their dementia journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Early Stage Dementia Care</h3>
              <p className="text-gray-600 mb-4">Supporting independence while ensuring safety and social engagement.</p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Medication reminders and organization</li>
                <li>• Transportation to social activities</li>
                <li>• Light housekeeping and meal preparation</li>
                <li>• Cognitive stimulation activities</li>
                <li>• Safety monitoring and fall prevention</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-8 rounded-xl border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Moderate Stage Dementia Care</h3>
              <p className="text-gray-600 mb-4">Increased assistance with daily activities and behavioral support.</p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Personal care and hygiene assistance</li>
                <li>• Wandering prevention and supervision</li>
                <li>• Behavioral redirection techniques</li>
                <li>• Structured daily routine maintenance</li>
                <li>• Family communication and updates</li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Stage Dementia Care</h3>
              <p className="text-gray-600 mb-4">Comprehensive care focusing on comfort, dignity, and quality of life.</p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 24/7 supervision and assistance</li>
                <li>• Complete personal care support</li>
                <li>• Comfort-focused care approaches</li>
                <li>• Medical coordination and monitoring</li>
                <li>• Hospice care coordination if needed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Memory Care Specialists */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Atlanta&apos;s Memory Care Specialists
            </h2>
            <p className="text-xl text-gray-600">
              Partnering with leading dementia care resources throughout Georgia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Emory Brain Health Center</h3>
              <p className="text-gray-600 text-sm mb-2">1841 Clifton Rd NE, Atlanta</p>
              <p className="text-gray-600">Leading research and treatment for Alzheimer&apos;s and dementia in Georgia</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Atlanta Memory & Neurology</h3>
              <p className="text-gray-600 text-sm mb-2">Multiple Atlanta locations</p>
              <p className="text-gray-600">Specialized neurological care for memory disorders</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Alzheimer&apos;s Association Georgia</h3>
              <p className="text-gray-600 text-sm mb-2">41 Perimeter Center East</p>
              <p className="text-gray-600">Support groups, education, and resources for families</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Piedmont Healthcare Memory Care</h3>
              <p className="text-gray-600 text-sm mb-2">Multiple locations</p>
              <p className="text-gray-600">Comprehensive memory care and diagnostic services</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Wesley Woods Center</h3>
              <p className="text-gray-600 text-sm mb-2">1821 Clifton Rd NE</p>
              <p className="text-gray-600">Geriatric care and memory support services</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Atlanta VA Memory Clinic</h3>
              <p className="text-gray-600 text-sm mb-2">1670 Clairmont Rd, Decatur</p>
              <p className="text-gray-600">Veterans&apos; memory care and support services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost and Insurance */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Memory Care Costs & Payment Options in Atlanta
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Average Memory Care Costs</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-600">Part-time memory care (4 hours)</span>
                  <span className="font-semibold">$120-180/day</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-600">Full-time memory care (12 hours)</span>
                  <span className="font-semibold">$300-450/day</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-600">24-hour memory care</span>
                  <span className="font-semibold">$400-600/day</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Live-in memory care specialist</span>
                  <span className="font-semibold">$250-400/day</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">*Costs vary based on level of care needed and caregiver qualifications</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment & Insurance Options</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Veterans Benefits</h4>
                  <p className="text-gray-600 text-sm">Aid & Attendance benefits may cover memory care costs</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Long-Term Care Insurance</h4>
                  <p className="text-gray-600 text-sm">Many policies cover in-home dementia care services</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Private Pay Plans</h4>
                  <p className="text-gray-600 text-sm">Flexible payment options and family care plans</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Medicaid Waiver Programs</h4>
                  <p className="text-gray-600 text-sm">Georgia waivers may assist with qualified care costs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Memory Care */}
      <section className="py-16 bg-red-50 border-t-4 border-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-red-900 mb-4">
            Emergency Memory Care Situations
          </h2>
          <p className="text-xl text-red-800 mb-8">
            Immediate dementia care support available 24/7 throughout Atlanta metro
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-red-900 mb-3">When to Call for Emergency Care:</h3>
              <ul className="text-red-800 text-left space-y-2">
                <li>• Sudden behavioral changes or agitation</li>
                <li>• Wandering incidents or getting lost</li>
                <li>• Family caregiver emergency or illness</li>
                <li>• Hospital discharge with new diagnosis</li>
                <li>• Safety incidents or fall-related injuries</li>
                <li>• Medication errors or confusion</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-red-900 mb-3">Our Emergency Response:</h3>
              <ul className="text-red-800 text-left space-y-2">
                <li>• Same-day caregiver placement</li>
                <li>• 24/7 availability throughout Atlanta</li>
                <li>• Immediate safety assessment</li>
                <li>• Crisis intervention specialists</li>
                <li>• Hospital and facility coordination</li>
                <li>• Family support and communication</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-600 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Memory Care Emergency Line</h3>
            <a
              href="tel:470-696-3850"
              className="text-4xl font-bold hover:text-red-200 transition-colors"
            >
              (470) 696-3850
            </a>
            <p className="mt-2">Available 24/7 for Dementia Care Emergencies</p>
          </div>
        </div>
      </section>

      {/* Location Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dementia Care Throughout Atlanta Metro
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Link href="/buckhead-home-care" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <h4 className="font-semibold text-gray-900">Buckhead</h4>
              <p className="text-gray-600 text-sm">Memory Care</p>
            </Link>
            <Link href="/sandy-springs-home-care" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <h4 className="font-semibold text-gray-900">Sandy Springs</h4>
              <p className="text-gray-600 text-sm">Memory Care</p>
            </Link>
            <Link href="/brookhaven-home-care" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <h4 className="font-semibold text-gray-900">Brookhaven</h4>
              <p className="text-gray-600 text-sm">Memory Care</p>
            </Link>
            <Link href="/alpharetta-home-care" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <h4 className="font-semibold text-gray-900">Alpharetta</h4>
              <p className="text-gray-600 text-sm">Memory Care</p>
            </Link>
            <Link href="/druid-hills-home-care" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <h4 className="font-semibold text-gray-900">Druid Hills</h4>
              <p className="text-gray-600 text-sm">Memory Care</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Specialized Memory Care When You Need It Most
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let Elite Care Companion provide the specialized dementia care your loved one deserves
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:470-696-3850"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors"
            >
              Call for Memory Care: (470) 696-3850
            </a>
            <Link
              href="/#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Free Memory Care Assessment
            </Link>
          </div>
          <p className="text-purple-200 mt-4">Same-Day Memory Care Placement Available</p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-purple-600">Home</Link>
            <span>›</span>
            <span className="text-gray-900">Dementia & Alzheimer&apos;s Care Services</span>
          </div>
        </div>
      </nav>
    </div>
  );
}