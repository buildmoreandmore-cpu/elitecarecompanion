import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Home Care FAQ Atlanta | Elite Care Companion | Common Questions & Answers',
  description: 'Frequently asked questions about home care in Atlanta. Cost, insurance, safety, caregiver qualifications, and more. Get expert answers from Elite Care Companion. Call (470) 696-3850.',
  keywords: 'home care FAQ Atlanta, home care questions, home care cost Atlanta, home care insurance coverage, caregiver background check, home care safety, how much does home care cost, Medicare home care, private home care Atlanta',
  openGraph: {
    title: 'Home Care FAQ Atlanta | Elite Care Companion',
    description: 'Get answers to common home care questions. Cost, insurance, safety, and caregiver qualifications in Atlanta metro area.',
    url: 'https://elitecarecompanion.com/home-care-faq',
    type: 'website',
    locale: 'en_US',
    siteName: 'Elite Care Companion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Care FAQ Atlanta | Elite Care Companion',
    description: 'Frequently asked questions about home care services in Atlanta. Expert answers from Elite Care Companion.',
  }
};

export default function HomeCareFAQ() {
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
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Home Care <span className="text-yellow-300">Questions & Answers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Get expert answers to the most common questions about home care services in Atlanta - from costs and insurance to safety and caregiver qualifications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:470-696-3850" className="bg-yellow-500 text-indigo-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition-colors">
                Ask Questions: (470) 696-3850
              </a>
              <a href="#contact" className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <a href="#cost-insurance" className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-indigo-600 font-semibold text-sm">Cost &amp; Insurance</div>
            </a>
            <a href="#getting-started" className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-indigo-600 font-semibold text-sm">Getting Started</div>
            </a>
            <a href="#caregiver-safety" className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-indigo-600 font-semibold text-sm">Safety &amp; Trust</div>
            </a>
            <a href="#services" className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-indigo-600 font-semibold text-sm">Services</div>
            </a>
            <a href="#family-concerns" className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-indigo-600 font-semibold text-sm">Family Issues</div>
            </a>
            <a href="#medical-questions" className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-indigo-600 font-semibold text-sm">Medical Care</div>
            </a>
            <a href="#quality-concerns" className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-indigo-600 font-semibold text-sm">Quality</div>
            </a>
            <a href="#emergency-situations" className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-indigo-600 font-semibold text-sm">Emergencies</div>
            </a>
          </div>
        </div>
      </section>

      {/* Cost & Insurance FAQ */}
      <section id="cost-insurance" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cost &amp; Insurance Questions
            </h2>
            <p className="text-xl text-gray-600">The most common concerns about home care affordability and payment options</p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much does home care cost in Atlanta?</h3>
              <div className="text-gray-700 space-y-3">
                <p>Home care costs in Atlanta vary based on the level of care needed:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Companion Care:</strong> $25-35 per hour</li>
                  <li><strong>Personal Care:</strong> $28-45 per hour</li>
                  <li><strong>Specialized Care (Dementia, Medical):</strong> $35-55 per hour</li>
                  <li><strong>Live-In Care:</strong> $200-350 per day</li>
                  <li><strong>24-Hour Shift Care:</strong> $380-530 per day</li>
                </ul>
                <p>Costs are influenced by care complexity, caregiver qualifications, and geographic location within Atlanta metro.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Does Medicare cover home care?</h3>
              <div className="text-gray-700 space-y-3">
                <p><strong>Medicare coverage is very limited for custodial home care:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Medicare Part A:</strong> Covers skilled nursing care at home only if you&apos;re homebound and need skilled medical services</li>
                  <li><strong>Does NOT cover:</strong> Companion care, personal care, or long-term custodial care</li>
                  <li><strong>Must be ordered by a doctor</strong> and provided by Medicare-certified agencies</li>
                  <li><strong>Temporary coverage only</strong> - typically 2-8 weeks for post-hospital recovery</li>
                </ul>
                <p>Most families pay privately or use long-term care insurance for ongoing home care needs.</p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What insurance options pay for home care?</h3>
              <div className="text-gray-700 space-y-3">
                <p>Several insurance options may help cover home care costs:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Long-Term Care Insurance:</strong> Best option for comprehensive home care coverage</li>
                  <li><strong>Veterans Benefits:</strong> Aid &amp; Attendance benefit can provide $2,000+ monthly</li>
                  <li><strong>Medicaid Waivers:</strong> Limited availability, income restrictions apply</li>
                  <li><strong>Private Health Insurance:</strong> Rarely covers custodial care, check your policy</li>
                  <li><strong>Life Insurance:</strong> Some policies allow early benefits for long-term care</li>
                </ul>
                <p>We provide free insurance verification and help maximize available benefits.</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is home care cheaper than a nursing home?</h3>
              <div className="text-gray-700 space-y-3">
                <p><strong>Home care is often more cost-effective, especially for moderate care needs:</strong></p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Home Care (Atlanta avg.):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 8 hrs/day: $280-360/day</li>
                      <li>• 12 hrs/day: $420-540/day</li>
                      <li>• Live-in: $200-350/day</li>
                      <li>• Stay in your own home</li>
                      <li>• One-on-one attention</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Nursing Home (Atlanta avg.):</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Private room: $300-500/day</li>
                      <li>• Semi-private: $250-400/day</li>
                      <li>• Shared staff attention</li>
                      <li>• Institutional environment</li>
                      <li>• Less personal freedom</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can I afford home care on a fixed income?</h3>
              <div className="text-gray-700 space-y-3">
                <p>Many seniors on fixed incomes successfully manage home care costs through creative planning:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Start small:</strong> Begin with 4-6 hours of companion care 2-3 times per week</li>
                  <li><strong>Family cost-sharing:</strong> Adult children often contribute to keep parents at home</li>
                  <li><strong>Veterans benefits:</strong> Can provide significant monthly assistance</li>
                  <li><strong>Home equity:</strong> Reverse mortgages or home equity loans can fund care</li>
                  <li><strong>Flexible scheduling:</strong> Use care only when most needed to control costs</li>
                  <li><strong>Compare total costs:</strong> Home care vs. assisted living vs. nursing home</li>
                </ul>
                <p>We work with families to create sustainable care plans that fit your budget.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started FAQ */}
      <section id="getting-started" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Getting Started Questions
            </h2>
            <p className="text-xl text-gray-600">Common questions about beginning home care services</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How quickly can home care start?</h3>
              <div className="text-gray-700 space-y-3">
                <p><strong>Elite Care Companion can typically start care within 24-48 hours:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Emergency situations:</strong> Same-day start possible (hospital discharge, family emergency)</li>
                  <li><strong>Standard requests:</strong> 24-48 hours after initial consultation</li>
                  <li><strong>Complex needs:</strong> 2-3 days to find specialized caregivers</li>
                  <li><strong>Live-in care:</strong> 3-5 days for proper matching and preparation</li>
                </ul>
                <p>We maintain a pool of available caregivers specifically for urgent placements.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What happens during the first consultation?</h3>
              <div className="text-gray-700 space-y-3">
                <p>Our comprehensive assessment includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Home safety evaluation:</strong> Identifying fall risks and accessibility needs</li>
                  <li><strong>Care needs assessment:</strong> Personal care, mobility, medical, and social needs</li>
                  <li><strong>Family discussion:</strong> Goals, preferences, concerns, and expectations</li>
                  <li><strong>Caregiver matching:</strong> Finding caregivers with compatible personalities and skills</li>
                  <li><strong>Schedule planning:</strong> Determining optimal care hours and days</li>
                  <li><strong>Cost planning:</strong> Insurance verification and payment options</li>
                </ul>
                <p>The consultation typically takes 60-90 minutes and is always free with no obligation.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do I need a doctor&apos;s order for home care?</h3>
              <div className="text-gray-700 space-y-3">
                <p><strong>No doctor&apos;s order required for private-pay home care:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Private-pay services:</strong> No medical prescription needed</li>
                  <li><strong>Medicare/insurance coverage:</strong> Requires physician order and medical necessity</li>
                  <li><strong>We coordinate with doctors:</strong> Keep physicians informed of care plans</li>
                  <li><strong>Medical input welcome:</strong> Doctor recommendations help us provide better care</li>
                </ul>
                <p>You have the right to hire home care whenever you feel it would be beneficial.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What if my loved one refuses home care?</h3>
              <div className="text-gray-700 space-y-3">
                <p>Resistance to home care is common. Our proven strategies include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Start as &quot;companionship&quot;:</strong> Frame as social visits rather than &quot;care&quot;</li>
                  <li><strong>Gradual introduction:</strong> Begin with short visits 2-3 times per week</li>
                  <li><strong>Activity-focused approach:</strong> Caregiver helps with enjoyable activities first</li>
                  <li><strong>Family member introduction:</strong> Have trusted family member present during first meeting</li>
                  <li><strong>Trial period:</strong> &quot;Just try it for a week to help me worry less&quot;</li>
                  <li><strong>Caregiver personality matching:</strong> Find someone they genuinely like</li>
                </ul>
                <p>Most resistance disappears once seniors experience the benefits of companionship and help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caregiver Safety & Trust FAQ */}
      <section id="caregiver-safety" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Safety &amp; Trust Questions
            </h2>
            <p className="text-xl text-gray-600">Ensuring caregiver quality and home security</p>
          </div>

          <div className="space-y-8">
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do you screen caregivers?</h3>
              <div className="text-gray-700 space-y-3">
                <p><strong>Elite Care Companion uses comprehensive 7-step screening:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Criminal background check:</strong> National and state-level searches</li>
                  <li><strong>Professional references:</strong> Previous employers and clients contacted</li>
                  <li><strong>Personal references:</strong> Character references from non-family sources</li>
                  <li><strong>Social Security verification:</strong> Identity and work authorization confirmed</li>
                  <li><strong>Driving record check:</strong> For caregivers providing transportation</li>
                  <li><strong>Skills assessment:</strong> Practical caregiving skills testing</li>
                  <li><strong>In-person interview:</strong> Personality, communication, and professionalism evaluation</li>
                </ul>
                <p>Only 1 in 20 applicants pass our complete screening process.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Are caregivers bonded and insured?</h3>
              <div className="text-gray-700 space-y-3">
                <p><strong>Yes, all Elite Care Companion caregivers are fully protected:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>General Liability Insurance:</strong> $1,000,000 coverage for accidents and injuries</li>
                  <li><strong>Professional Liability:</strong> Coverage for professional mistakes or negligence</li>
                  <li><strong>Surety Bond:</strong> Financial protection against theft or dishonesty</li>
                  <li><strong>Workers&apos; Compensation:</strong> Coverage if caregiver injured in your home</li>
                  <li><strong>Vehicle Insurance:</strong> For caregivers providing transportation</li>
                </ul>
                <p>You receive certificates of insurance before care begins for your peace of mind.</p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What if I don&apos;t like the caregiver?</h3>
              <div className="text-gray-700 space-y-3">
                <p><strong>We guarantee caregiver compatibility:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>No-question replacement:</strong> We&apos;ll find a new caregiver immediately</li>
                  <li><strong>Multiple options:</strong> Usually have 2-3 backup caregivers available</li>
                  <li><strong>Meet &amp; greet:</strong> Interview potential caregivers before making decisions</li>
                  <li><strong>Trial periods:</strong> Start with short visits to test compatibility</li>
                  <li><strong>Feedback welcome:</strong> Continuous improvement based on your input</li>
                  <li><strong>No extra fees:</strong> Caregiver changes don&apos;t cost additional money</li>
                </ul>
                <p>Your comfort and trust are essential - we work until you&apos;re completely satisfied.</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do I protect my valuables and personal information?</h3>
              <div className="text-gray-700 space-y-3">
                <p>Smart precautions help maintain security:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Secure valuables:</strong> Lock away jewelry, cash, and important documents</li>
                  <li><strong>Limit access:</strong> Provide keys/codes only as needed for care duties</li>
                  <li><strong>Monitor accounts:</strong> Check bank and credit card statements regularly</li>
                  <li><strong>Personal information:</strong> Limit caregiver access to Social Security numbers and financial data</li>
                  <li><strong>Communication:</strong> Establish clear boundaries about privacy and personal space</li>
                  <li><strong>Family involvement:</strong> Keep family members informed about caregivers and routines</li>
                </ul>
                <p>Reputable caregivers respect boundaries and often suggest these precautions themselves.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services FAQ */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Home Care Services Questions
            </h2>
            <p className="text-xl text-gray-600">Understanding what home care includes and doesn&apos;t include</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What&apos;s the difference between companion care and personal care?</h3>
              <div className="text-gray-700 space-y-3">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">
                      <Link href="/companion-care" className="hover:underline">Companion Care Includes:</Link>
                    </h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Social interaction and conversation</li>
                      <li>Light housekeeping and meal prep</li>
                      <li>Transportation to appointments</li>
                      <li>Medication reminders (not administration)</li>
                      <li>Recreational activities and outings</li>
                      <li>Shopping and errands</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-600 mb-2">
                      <Link href="/personal-care" className="hover:underline">Personal Care Adds:</Link>
                    </h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Bathing and shower assistance</li>
                      <li>Dressing and grooming help</li>
                      <li>Toileting and incontinence care</li>
                      <li>Medication administration</li>
                      <li>Mobility and transfer assistance</li>
                      <li>Basic medical care tasks</li>
                    </ul>
                  </div>
                </div>
                <p>Most families start with companion care and add personal care services as needs increase.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can caregivers provide medical care?</h3>
              <div className="text-gray-700 space-y-3">
                <p><strong>Caregivers can provide basic medical support, but not skilled nursing:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Allowed:</strong> Medication reminders and administration, wound care, diabetic care, vitals monitoring</li>
                  <li><strong>Allowed:</strong> Physical therapy exercise assistance, post-surgery recovery support</li>
                  <li><strong>Not allowed:</strong> IV medications, injections (except insulin), complex wound care</li>
                  <li><strong>Coordination:</strong> We work with nurses, doctors, and therapists as needed</li>
                  <li><strong>Training:</strong> Our caregivers receive specific medical task training when required</li>
                </ul>
                <p>For complex medical needs, we coordinate with licensed nurses and medical professionals.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide <Link href="/24-hour-care" className="text-blue-600 hover:underline">24-hour care</Link>?</h3>
              <div className="text-gray-700 space-y-3">
                <p><strong>Yes, we offer comprehensive 24-hour care options:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Live-in care:</strong> One caregiver stays in your home 24/7 with time off for breaks</li>
                  <li><strong>Shift care:</strong> Multiple caregivers work 8-12 hour shifts for continuous coverage</li>
                  <li><strong>Emergency coverage:</strong> Same-day placement for hospital discharge or family emergencies</li>
                  <li><strong>Respite options:</strong> Temporary 24-hour care to give family caregivers breaks</li>
                  <li><strong>Flexible scheduling:</strong> Increase or decrease hours as needs change</li>
                </ul>
                <p>24-hour care is essential for advanced dementia, post-surgery recovery, and high fall-risk situations.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What areas in Atlanta do you serve?</h3>
              <div className="text-gray-700 space-y-3">
                <p><strong>Elite Care Companion serves throughout Atlanta metro area:</strong></p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Primary Service Areas:</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li><Link href="/buckhead-home-care" className="text-blue-600 hover:underline">Buckhead</Link></li>
                      <li><Link href="/sandy-springs-home-care" className="text-blue-600 hover:underline">Sandy Springs</Link></li>
                      <li><Link href="/brookhaven-home-care" className="text-blue-600 hover:underline">Brookhaven</Link></li>
                      <li><Link href="/druid-hills-home-care" className="text-blue-600 hover:underline">Druid Hills</Link></li>
                      <li><Link href="/alpharetta-home-care" className="text-blue-600 hover:underline">Alpharetta</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Extended Coverage:</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Roswell &amp; Johns Creek</li>
                      <li>Vinings &amp; Smyrna</li>
                      <li>Decatur &amp; Avondale Estates</li>
                      <li>Dunwoody &amp; Chamblee</li>
                      <li>Atlanta &amp; surrounding areas</li>
                    </ul>
                  </div>
                </div>
                <p>We may serve additional areas depending on specific needs - call to confirm availability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Concerns FAQ */}
      <section id="family-concerns" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Family Concerns &amp; Communication
            </h2>
            <p className="text-xl text-gray-600">Managing family dynamics and care coordination</p>
          </div>

          <div className="space-y-8">
            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do you keep family members informed?</h3>
              <div className="text-gray-700 space-y-3">
                <p><strong>We provide comprehensive family communication:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Daily reports:</strong> Written summaries of care activities, meals, medications, and observations</li>
                  <li><strong>Regular phone updates:</strong> Weekly or as-needed calls with family members</li>
                  <li><strong>Emergency notifications:</strong> Immediate contact for any safety or health concerns</li>
                  <li><strong>Care plan meetings:</strong> Family conferences to adjust care as needs change</li>
                  <li><strong>Multiple contact options:</strong> Email, phone, text - whatever works best for your family</li>
                  <li><strong>HIPAA compliance:</strong> Secure communication protecting privacy while keeping family informed</li>
                </ul>
                <p>Many adult children say our communication helps them worry less about their parents.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What if family members disagree about care needs?</h3>
              <div className="text-gray-700 space-y-3">
                <p>Family disagreements about care are common. We help by:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Objective assessment:</strong> Professional evaluation helps clarify actual needs</li>
                  <li><strong>Family meetings:</strong> Neutral facilitation of care planning discussions</li>
                  <li><strong>Gradual introduction:</strong> Start with minimal care to demonstrate benefits</li>
                  <li><strong>Education:</strong> Explaining safety risks and care options to all family members</li>
                  <li><strong>Flexible plans:</strong> Trial periods allow families to adjust approaches</li>
                  <li><strong>Documentation:</strong> Clear records help track changes and needs</li>
                </ul>
                <p>Often, seeing positive results from care helps resolve family disagreements.</p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do you handle long-distance family members?</h3>
              <div className="text-gray-700 space-y-3">
                <p><strong>Special support for families living far from Atlanta:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Video calls:</strong> Include distant family in care meetings via video conference</li>
                  <li><strong>Detailed reporting:</strong> Extra communication for family members who can&apos;t visit regularly</li>
                  <li><strong>Emergency protocols:</strong> Clear procedures for contacting distant family in emergencies</li>
                  <li><strong>Photo updates:</strong> Pictures of activities, meals, and general wellbeing</li>
                  <li><strong>Flexible scheduling:</strong> Adjust care during family visits</li>
                  <li><strong>Professional coordination:</strong> We can interface with out-of-state family and professionals</li>
                </ul>
                <p>We understand the stress of caring for parents from a distance and provide extra support.</p>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What about privacy and family secrets?</h3>
              <div className="text-gray-700 space-y-3">
                <p>We maintain strict confidentiality while ensuring safety:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Professional discretion:</strong> Caregivers trained in confidentiality and boundaries</li>
                  <li><strong>Limited sharing:</strong> Information shared only with authorized family members</li>
                  <li><strong>Safety priority:</strong> We must report safety concerns but handle sensitively</li>
                  <li><strong>Family preferences:</strong> Respect wishes about what information to share and with whom</li>
                  <li><strong>Privacy training:</strong> All staff understand HIPAA and privacy requirements</li>
                  <li><strong>Trust building:</strong> Caregivers develop appropriate professional relationships</li>
                </ul>
                <p>Clients often share personal information with trusted caregivers - we handle this with utmost respect.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Answers to Your Home Care Questions
            </h2>
            <p className="text-xl text-gray-600">
              Call for expert guidance or schedule a free consultation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <div className="bg-indigo-600 text-white p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold mb-2">Expert Answers Available Now</h3>
                  <a href="tel:470-696-3850" className="text-2xl font-bold hover:underline">
                    (470) 696-3850
                  </a>
                  <p className="text-indigo-100 mt-2">Free Consultation • No Obligation</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Common Questions We Answer:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-indigo-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">&quot;How do I know if my parent needs home care?&quot;</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-indigo-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">&quot;What&apos;s the difference between agencies and private caregivers?&quot;</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-indigo-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">&quot;How can we afford home care long-term?&quot;</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-indigo-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">&quot;What happens if the caregiver gets sick?&quot;</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-indigo-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">&quot;How do I convince my parent they need help?&quot;</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-indigo-900 mb-2">Our Promise:</h4>
                <ul className="text-indigo-800 text-sm space-y-1">
                  <li>• Honest, expert advice about home care options</li>
                  <li>• No pressure - we want what&apos;s best for your family</li>
                  <li>• Free consultations with experienced professionals</li>
                  <li>• Local knowledge of Atlanta area resources</li>
                  <li>• Support through every step of the care journey</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learn More About Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/companion-care" className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="bg-orange-200 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-orange-700 mb-2">Companion Care</h3>
              <p className="text-orange-600 text-sm">Social support and light assistance</p>
            </Link>

            <Link href="/personal-care" className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="bg-teal-200 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-teal-700 mb-2">Personal Care</h3>
              <p className="text-teal-600 text-sm">Bathing, dressing, and personal hygiene</p>
            </Link>

            <Link href="/24-hour-care" className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="bg-red-200 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-red-700 mb-2">24-Hour Care</h3>
              <p className="text-red-600 text-sm">Round-the-clock live-in care</p>
            </Link>

            <Link href="/dementia-care" className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="bg-blue-200 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-700 mb-2">Dementia Care</h3>
              <p className="text-blue-600 text-sm">Specialized memory care services</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Elite Care Companion</h3>
              <p className="text-gray-300 mb-4">Expert answers to all your home care questions throughout Atlanta metro area.</p>
              <div className="space-y-2">
                <a href="tel:470-696-3850" className="text-yellow-400 font-semibold hover:underline">
                  (470) 696-3850
                </a>
                <div className="text-gray-300">Free Consultation Available</div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Answers</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#cost-insurance" className="hover:text-white">Cost &amp; Insurance</a></li>
                <li><a href="#getting-started" className="hover:text-white">Getting Started</a></li>
                <li><a href="#caregiver-safety" className="hover:text-white">Safety &amp; Trust</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Care Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/companion-care" className="hover:text-white">Companion Care</Link></li>
                <li><Link href="/personal-care" className="hover:text-white">Personal Care</Link></li>
                <li><Link href="/24-hour-care" className="hover:text-white">24-Hour Care</Link></li>
                <li><Link href="/dementia-care" className="hover:text-white">Dementia Care</Link></li>
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
            <p>&copy; 2024 Elite Care Companion. All rights reserved. Professional home care FAQ and expert guidance throughout Atlanta, Georgia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}