import { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site';

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
    <div className="site">
      <SiteHeader />
      <Reveal />

      <header className="page-hero">
        <div className="inner">
          <div className="k">Companion Care in Atlanta</div>
          <h1>Professional Companion Care</h1>
          <p>
            Meaningful friendship, social engagement, and emotional support to enhance quality of
            life and reduce isolation for Atlanta seniors.
          </p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Request a free call</a>
            <a className="btn btn-wire" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </header>

      {/* Understanding Companion Care */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">What It Is</div>
            <h2>What Is Companion Care?</h2>
            <p>
              Professional companionship focused on social interaction, emotional support, and light
              assistance to help seniors maintain independence and joy in daily life.
            </p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Companion Care Includes</h3>
              <ul>
                <li><strong>Meaningful conversation &amp; friendship</strong> — regular social interaction, active listening, sharing stories, and genuine companionship</li>
                <li><strong>Transportation &amp; outings</strong> — safe rides to appointments, shopping, social events, and recreational activities</li>
                <li><strong>Light housekeeping support</strong> — meal preparation, light cleaning, organizing, and laundry assistance</li>
                <li><strong>Recreational activities</strong> — games, puzzles, crafts, reading, music, and gardening</li>
                <li><strong>Medication reminders</strong> — gentle prompts for medications, appointments, and daily routines</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Companion Care vs. Personal Care</h3>
              <p><strong>Companion care focus:</strong></p>
              <ul>
                <li>Social interaction and emotional support</li>
                <li>Light assistance with daily activities</li>
                <li>Transportation and accompaniment</li>
                <li>Meal preparation and light housekeeping</li>
                <li>Medication reminders (not administration)</li>
              </ul>
              <p><strong>Personal care adds:</strong></p>
              <ul>
                <li>Bathing, dressing, and grooming assistance</li>
                <li>Toileting and incontinence care</li>
                <li>Mobility and transfer assistance</li>
                <li>Medication administration</li>
                <li>Medical appointment coordination</li>
              </ul>
              <p>
                Many families start with companion care and add personal care services as needs
                increase over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signs Companion Care Is Needed */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">When To Consider It</div>
            <h2>Signs Your Loved One Could Benefit from Companion Care</h2>
            <p>
              Recognizing when companionship and light assistance can make a significant difference
              in quality of life.
            </p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Social Isolation &amp; Loneliness</h3>
              <ul>
                <li>Decreased social contact with friends and family</li>
                <li>Reluctance to leave the house</li>
                <li>Loss of interest in hobbies or activities</li>
                <li>Signs of depression or sadness</li>
                <li>Talking about feeling lonely or forgotten</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Safety &amp; Independence Concerns</h3>
              <ul>
                <li>Difficulty driving safely or giving up driving</li>
                <li>Concerns about being alone for long periods</li>
                <li>Missing appointments or forgetting medications</li>
                <li>Home maintenance becoming overwhelming</li>
                <li>Family worry about daily safety and wellbeing</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Life Transitions</h3>
              <ul>
                <li>Recent loss of spouse or close friend</li>
                <li>Moving to a new home or community</li>
                <li>Recovering from illness or hospitalization</li>
                <li>Adult children moving away or getting busy</li>
                <li>Retirement adjustment and routine changes</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Mild Cognitive Changes</h3>
              <ul>
                <li>Occasional forgetfulness with appointments</li>
                <li>Mild confusion with complex tasks</li>
                <li>Need for gentle reminders and encouragement</li>
                <li>Beginning to avoid complex social situations</li>
                <li>Benefits from routine and familiar companionship</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Family Caregiver Stress</h3>
              <ul>
                <li>Adult children feeling overwhelmed with caregiving</li>
                <li>Long-distance family members worried about wellbeing</li>
                <li>Spouse needing respite and support</li>
                <li>Family conflicts about care decisions</li>
                <li>Need for professional, objective care assessment</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Quality of Life Enhancement</h3>
              <ul>
                <li>Desire to remain active and engaged</li>
                <li>Interest in trying new activities or hobbies</li>
                <li>Want to maintain social connections</li>
                <li>Benefit from having a regular routine</li>
                <li>Enjoy having someone to share experiences with</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Companion Care Schedule Options */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Flexible Scheduling</div>
            <h2>Flexible Companion Care Scheduling</h2>
            <p>Choose the companion care schedule that fits your loved one&apos;s lifestyle and budget. All rates are simple, private pay with no hidden fees.</p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>A Few Hours Weekly</h3>
              <p><strong>$25–35/hr · 2–8 hours per week</strong> — perfect for independent seniors.</p>
              <ul>
                <li>Weekly grocery shopping trips</li>
                <li>Social outings and activities</li>
                <li>Light housekeeping assistance</li>
                <li>Companionship and conversation</li>
              </ul>
              <p><strong>Ideal for:</strong> maintaining social connections, light help with errands, trying companion care for the first time, and budget-conscious families.</p>
            </div>

            <div className="care-card rv">
              <h3>Daily Companion Care</h3>
              <p><strong>$140–200/day · 4–8 hours daily</strong> — our most popular option.</p>
              <ul>
                <li>Daily meal preparation and companionship</li>
                <li>Transportation to appointments</li>
                <li>Medication reminders and organization</li>
                <li>Engaging activities and exercise</li>
                <li>Light housekeeping and organization</li>
              </ul>
              <p><strong>Ideal for:</strong> seniors living alone, those needing daily routine and structure, family peace of mind with regular check-ins, and preventing isolation.</p>
            </div>

            <div className="care-card rv">
              <h3>Live-In Companion</h3>
              <p><strong>$200–280/day · 24/7 companionship available</strong> — maximum support &amp; friendship.</p>
              <ul>
                <li>Constant companionship and safety</li>
                <li>All meals and household management</li>
                <li>24/7 emergency response capability</li>
                <li>Deep friendship and consistent routine</li>
                <li>Travel companionship available</li>
              </ul>
              <p><strong>Ideal for:</strong> seniors who should not be alone, those who value deep, consistent relationships, families wanting maximum peace of mind, and homes with space for a live-in companion.</p>
            </div>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Background-Checked &amp; Bonded</h3>
              <p>Every companion is thoroughly vetted, bonded, and experienced.</p>
            </div>
            <div className="care-card rv">
              <h3>Personalized Matching</h3>
              <p>We pair seniors with companions who share compatible personalities and interests.</p>
            </div>
            <div className="care-card rv">
              <h3>Flexible &amp; Reliable</h3>
              <p>Backup coverage and schedule adjustments whenever life changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities and Engagement */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Activities &amp; Adventures</div>
            <h2>Engaging Activities &amp; Adventures</h2>
            <p>
              Our companions specialize in creating meaningful experiences that bring joy,
              stimulation, and social connection.
            </p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Mental Stimulation</h3>
              <ul>
                <li>Reading together and book discussions</li>
                <li>Crossword puzzles and brain games</li>
                <li>Memory sharing and storytelling</li>
                <li>Learning new skills or languages</li>
                <li>Current events discussions</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Creative &amp; Artistic</h3>
              <ul>
                <li>Arts and crafts projects</li>
                <li>Music appreciation and singing</li>
                <li>Painting and drawing activities</li>
                <li>Photography and scrapbooking</li>
                <li>Gardening and plant care</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Social &amp; Community</h3>
              <ul>
                <li>Senior center activities and events</li>
                <li>Religious services and fellowship</li>
                <li>Family gatherings and celebrations</li>
                <li>Community volunteering opportunities</li>
                <li>Social clubs and interest groups</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Outdoor &amp; Active</h3>
              <ul>
                <li>Nature walks and park visits</li>
                <li>Light exercise and stretching</li>
                <li>Shopping trips and errands</li>
                <li>Restaurant meals and caf&eacute; visits</li>
                <li>Museum and cultural outings</li>
              </ul>
            </div>
          </div>

          <div className="prose-care rv" style={{ marginTop: '2rem' }}>
            <h3>Atlanta-Specific Adventures</h3>
            <p><strong>Cultural attractions:</strong> High Museum of Art visits, Atlanta Botanical Garden walks, Fox Theatre performances, and historic home tours.</p>
            <p><strong>Shopping &amp; dining:</strong> Phipps Plaza and Lenox Square, local farmers markets, favorite neighborhood restaurants, and antique browsing.</p>
            <p><strong>Natural beauty:</strong> Piedmont Park strolls, Atlanta BeltLine walking, local park and garden visits, and scenic drive adventures.</p>
          </div>
        </div>
      </section>

      {/* Quick Links to Related Services */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Related Services</div>
            <h2>When You Need More Than Companion Care</h2>
            <p>We provide comprehensive care solutions that can grow with changing needs.</p>
          </div>

          <div className="card-grid">
            <a href="/24-hour-care" className="care-card rv">
              <h3>24-Hour Live-In Care</h3>
              <p>When constant supervision and support become necessary for safety and wellbeing.</p>
            </a>

            <a href="/dementia-care" className="care-card rv">
              <h3>Memory Care Specialists</h3>
              <p>Specialized companion care for early-stage dementia and Alzheimer&apos;s patients.</p>
            </a>

            <a href="/buckhead-home-care" className="care-card rv">
              <h3>Personal Care Services</h3>
              <p>Bathing, dressing, and personal hygiene assistance combined with companionship.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="sec alt" id="contact">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Get Started</div>
            <h2>Start Companion Care Today</h2>
            <p>Call for a free meet-and-greet with potential companions. Your free companion assessment includes an in-home evaluation, a discussion of interests and preferences, companion matching, flexible scheduling, and a meet-and-greet.</p>
          </div>
          <div className="wrap" style={{ maxWidth: '640px' }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bigcta">
        <div className="wrap">
          <h2>Let&apos;s talk about your loved one&apos;s care</h2>
          <p>A friendly, no-pressure conversation.</p>
          <a className="num" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          <div className="hrs">Open 8am – 8pm, 7 days</div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
