import { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site';

export const metadata: Metadata = {
  title: '24-Hour & Overnight Care for Older Men in Atlanta | Elite Care Companion | Round-the-Clock Care',
  description: 'Professional 24-hour live-in home care in Atlanta. Round-the-clock care for seniors, post-surgery recovery, and dementia patients. Experienced caregivers, overnight coverage. Call (470) 840-0575.',
  keywords: '24 hour home care Atlanta, live-in caregiver Atlanta, round the clock care, overnight care Atlanta, 24/7 home care, night shift caregiver, live-in companion Atlanta, 24 hour elderly care, full time home care Atlanta, residential care Atlanta',
  openGraph: {
    title: '24-Hour & Overnight Care for Older Men in Atlanta | Elite Care Companion',
    description: 'Professional 24-hour live-in home care throughout Atlanta metro. Experienced caregivers provide round-the-clock support, safety, and companionship.',
    url: 'https://elitecarecompanion.com/24-hour-care',
    type: 'website',
    locale: 'en_US',
    siteName: 'Elite Care Companion',
  },
  twitter: {
    card: 'summary_large_image',
    title: '24-Hour & Overnight Care for Older Men in Atlanta | Elite Care Companion',
    description: 'Professional 24-hour live-in home care in Atlanta. Round-the-clock coverage available. Call (470) 840-0575.',
  }
};

export default function TwentyFourHourCare() {
  return (
    <div className="site">
      <SiteHeader />
      <Reveal />

      <header className="page-hero">
        <div className="inner">
          <div className="k">24-Hour & Overnight · Metro Atlanta</div>
          <h1>24-Hour &amp; Overnight Care for Men</h1>
          <p>
            Round-the-clock professional care in the comfort of home. Experienced live-in caregivers
            providing continuous support, safety, and companionship throughout Atlanta.
          </p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Request a free call</a>
            <a className="btn btn-wire" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </header>

      {/* When 24-Hour Care is Needed */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">When It&apos;s Needed</div>
            <h2>When Is 24-Hour Care Necessary?</h2>
            <p>
              Round-the-clock care becomes essential when safety, medical needs, or comfort require
              continuous professional supervision.
            </p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Advanced Dementia or Alzheimer&apos;s</h3>
              <p>Severe memory loss, wandering risks, sundowning behaviors, and confusion requiring constant supervision for safety.</p>
            </div>

            <div className="care-card rv">
              <h3>Post-Surgery Recovery</h3>
              <p>Major operations, hip/knee replacements, and cardiac procedures requiring intensive recovery support and monitoring.</p>
            </div>

            <div className="care-card rv">
              <h3>High Fall Risk</h3>
              <p>Multiple recent falls, mobility issues, balance problems, or medications causing dizziness requiring constant supervision.</p>
            </div>

            <div className="care-card rv">
              <h3>Complex Medical Conditions</h3>
              <p>Multiple chronic conditions, complex medication schedules, medical equipment monitoring, or frequent health crises.</p>
            </div>

            <div className="care-card rv">
              <h3>Family Caregiver Burnout</h3>
              <p>Adult children or spouses who can no longer provide 24/7 care due to their own health, work, or family obligations.</p>
            </div>

            <div className="care-card rv">
              <h3>End-of-Life Care</h3>
              <p>Comfort care, dignity preservation, and family support during final stages requiring compassionate 24-hour presence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 24-Hour Care Services Details */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Around The Clock</div>
            <h2>Comprehensive 24-Hour Care Services</h2>
            <p>Experienced live-in caregivers providing complete care solutions around the clock.</p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Day Shift Care (6 AM – 6 PM)</h3>
              <ul>
                <li><strong>Morning care routine</strong> — wake-up assistance, personal hygiene, bathing, dressing, grooming, and morning medications</li>
                <li><strong>Meal preparation &amp; nutrition</strong> — nutritious meal planning, cooking, feeding assistance, dietary restrictions, and hydration monitoring</li>
                <li><strong>Health support</strong> — medication reminders, appointment coordination, health monitoring, and communication with healthcare providers</li>
                <li><strong>Activities &amp; engagement</strong> — physical therapy exercises, cognitive activities, social interaction, and outdoor time</li>
                <li><strong>Light housekeeping</strong> — client&apos;s laundry, bedroom/bathroom cleaning, kitchen maintenance, and organizing</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Night Shift Care (6 PM – 6 AM)</h3>
              <ul>
                <li><strong>Evening care transition</strong> — dinner assistance, evening medications, relaxation activities, and bedtime preparation</li>
                <li><strong>Sleep safety monitoring</strong> — overnight supervision, bed alarm response, fall prevention, and positioning changes</li>
                <li><strong>Bathroom assistance</strong> — nighttime toileting help, incontinence care, and hygiene assistance with dignity</li>
                <li><strong>Overnight response</strong> — round-the-clock availability for urgent needs, family notifications, and provider contact</li>
                <li><strong>Comfort &amp; reassurance</strong> — anxiety management, confusion support, and companionship during difficult nights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Live-In vs Shift Care */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Care Models</div>
            <h2>Live-In Care vs. 24-Hour Shift Care</h2>
            <p>Choose the right 24-hour care model for your family&apos;s specific needs and preferences.</p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Live-In Care</h3>
              <p><strong>One consistent caregiver.</strong></p>
              <ul>
                <li>Consistent relationship and routine</li>
                <li>More cost-effective for full-time care</li>
                <li>Deep understanding of client preferences</li>
                <li>Requires a private bedroom and board</li>
              </ul>
              <p><strong>Best for:</strong> long-term care needs (months to years), dementia patients who benefit from consistency, families wanting one trusted caregiver, and homes with an extra bedroom and bathroom.</p>
            </div>

            <div className="care-card rv">
              <h3>24-Hour Shift Care</h3>
              <p><strong>Multiple specialized caregivers.</strong></p>
              <ul>
                <li>Fresh, rested caregivers each shift</li>
                <li>Specialized day vs. night care skills</li>
                <li>No accommodation requirements</li>
                <li>Built-in coverage for sick days/vacation</li>
              </ul>
              <p><strong>Best for:</strong> high medical complexity requiring fresh attention, temporary needs (post-surgery, rehabilitation), clients who prefer family privacy at night, and homes without extra living space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Simple Pricing</div>
            <h2>24-Hour Care Costs</h2>
            <p>Understanding the investment in 24-hour care. All rates are simple, private pay with clear, honest pricing and no hidden fees.</p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Live-In Care Rates</h3>
              <ul>
                <li>Standard live-in: <strong>from $250/day</strong></li>
                <li>Dementia specialist: <strong>from $300/day</strong></li>
                <li>Post-surgery care: <strong>from $350/day</strong></li>
              </ul>
              <p>Includes room, board, all care services, and backup coverage.</p>
            </div>

            <div className="care-card rv">
              <h3>24-Hour Shift Care</h3>
              <ul>
                <li>12-hour day shift: <strong>from $180/shift</strong></li>
                <li>12-hour night shift: <strong>from $200/shift</strong></li>
                <li>Total daily cost: <strong>from $380/day</strong></li>
              </ul>
              <p>Includes professional caregivers, supervision, and coordination.</p>
            </div>

            <div className="care-card rv">
              <h3>Honest, Private Pay</h3>
              <p>Care is billed as straightforward private pay. We&apos;ll walk you through exact costs during your free assessment — no surprises, no fine print.</p>
            </div>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Compared to Nursing Homes</h3>
              <ul>
                <li>Often comparable or less expensive</li>
                <li>Maintain home, independence, and family proximity</li>
                <li>One-on-one attention vs. shared staff</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Family Peace of Mind</h3>
              <ul>
                <li>24/7 professional supervision and safety</li>
                <li>Helps prevent costly emergency room visits</li>
                <li>Family can focus on work and relationships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links to Related Services */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Related Services</div>
            <h2>Related Care Services</h2>
            <p>Comprehensive care solutions for every stage and situation.</p>
          </div>

          <div className="card-grid">
            <a href="/dementia-care" className="care-card rv">
              <h3>Dementia &amp; Memory Care</h3>
              <p>Specialized 24-hour care for Alzheimer&apos;s and dementia patients requiring constant supervision.</p>
            </a>

            <a href="/buckhead-home-care" className="care-card rv">
              <h3>Luxury Home Care</h3>
              <p>Premium 24-hour care services for families in Buckhead and upscale neighborhoods.</p>
            </a>

            <a href="/sandy-springs-home-care" className="care-card rv">
              <h3>Medical District Care</h3>
              <p>24-hour care coordination with Northside Hospital and Perimeter medical facilities.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="sec alt" id="contact">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Get Started</div>
            <h2>Start 24-Hour Care Today</h2>
            <p>Call now or schedule your assessment. Your 24-hour care assessment includes a home safety evaluation, a medical and personal care needs analysis, a live-in vs. shift care recommendation, caregiver matching, and a clear cost plan.</p>
          </div>
          <div className="wrap" style={{ maxWidth: '640px' }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bigcta">
        <div className="wrap">
          <h2>Let&apos;s talk about the care he needs</h2>
          <p>A friendly, no-pressure conversation.</p>
          <a className="num" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          <div className="hrs">Open 8am – 8pm, 7 days</div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
