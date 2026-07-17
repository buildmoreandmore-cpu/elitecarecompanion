import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'In-Home Care for Older Men in Sandy Springs, GA | Elite Care Companion',
  description: 'Professional home care in Sandy Springs, Georgia. Serving Perimeter Mall, City Springs, Dunwoody, Abernathy Square. 24/7 care, transportation, companionship. Call (470) 507-8812 today.',
  keywords: 'home care Sandy Springs, senior care Perimeter Mall, elderly care City Springs, Sandy Springs Georgia home care, Dunwoody home care, Abernathy Square senior care, private caregiver Sandy Springs, 24 hour care Sandy Springs, dementia care Sandy Springs GA, companion care Sandy Springs, weekend caregiver Sandy Springs, live-in care Sandy Springs, respite care Sandy Springs, Sandy Springs senior services, home health aide Sandy Springs, personal care Sandy Springs Georgia, medication reminders Sandy Springs, transportation Sandy Springs, meal preparation Sandy Springs'
};

export default function SandySpringsHomeCare() {
  return (
    <div className="site">
      <SiteHeader />
      <Reveal />

      <header className="page-hero">
        <div className="inner">
          <div className="k">Home Care · Sandy Springs</div>
          <h1>In-Home Care for Older Men in Sandy Springs</h1>
          <p>Serving Perimeter Mall, City Springs, Dunwoody &amp; the North Fulton area with comprehensive care that keeps you connected to community and routine.</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Request a free call</a>
            <a className="btn btn-wire" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </header>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Trusted in Sandy Springs</div>
            <h2>Care for an active community</h2>
          </div>
          <div className="prose-care rv">
            <p><strong>Sandy Springs is a thriving city</strong> in North Fulton County, known for <strong>Perimeter Mall, the City Springs mixed-use development</strong>, and excellent healthcare facilities. Our home care services support Sandy Springs residents who want to age in place in this vibrant, family-friendly community.</p>
            <p>Whether you live near <strong>Perimeter Center, Abernathy Square, Dunwoody Village, or the Chattahoochee River</strong>, Elite Care Companion provides comprehensive care that keeps you connected to Sandy Springs&apos; active lifestyle and community resources.</p>
            <ul>
              <li>Immediate care available</li>
              <li>Northside Hospital partnership</li>
              <li>Transportation to Perimeter Mall</li>
              <li>Familiar with Sandy Springs services</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Coverage</div>
            <h2>Sandy Springs coverage areas</h2>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Business Districts</h3>
              <ul>
                <li>Perimeter Center</li>
                <li>City Springs</li>
                <li>Abernathy Square</li>
                <li>Concourse Corporate Center</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Neighborhoods</h3>
              <ul>
                <li>North Springs</li>
                <li>Riverside</li>
                <li>Dunwoody Village</li>
                <li>Perimeter Woods</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Major Roads</h3>
              <ul>
                <li>GA-400 corridor</li>
                <li>Roswell Road</li>
                <li>Abernathy Road</li>
                <li>Johnson Ferry Road</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Near</h3>
              <ul>
                <li>Chattahoochee River</li>
                <li>Sandy Springs Library</li>
                <li>Heritage Sandy Springs</li>
                <li>MARTA North Springs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Services</div>
            <h2>Comprehensive home care in Sandy Springs</h2>
            <p>Supporting active seniors and families throughout Sandy Springs and North Fulton County.</p>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Sandy Springs Transportation</h3>
              <p>Safe transportation to Northside Hospital, Perimeter Mall shopping, City Springs events, medical appointments, and the MARTA North Springs station.</p>
              <p><Link href="/transportation-services">Learn more about transportation →</Link></p>
            </div>
            <div className="care-card rv">
              <h3>Active Senior Companionship</h3>
              <p>Companions for Sandy Springs activities: Heritage Sandy Springs Museum visits, Chattahoochee River walks, City Springs entertainment, and community events.</p>
              <p><Link href="/companion-care">Learn more about companion care →</Link></p>
            </div>
            <div className="care-card rv">
              <h3>Northside Hospital Recovery</h3>
              <p>Post-surgery and post-hospitalization care for Northside Hospital patients. We coordinate with your Sandy Springs medical team for seamless recovery support.</p>
              <p><Link href="/post-surgery-care">Learn more about recovery care →</Link></p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Local Partners</div>
            <h2>Sandy Springs healthcare partners</h2>
            <p>Coordinating with North Fulton&apos;s leading medical facilities.</p>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Northside Hospital</h3>
              <p>1000 Johnson Ferry Rd, Sandy Springs. Premier partner for post-surgical and rehabilitation care coordination.</p>
            </div>
            <div className="care-card rv">
              <h3>Children&apos;s Healthcare - Scottish Rite</h3>
              <p>1001 Johnson Ferry Rd. Pediatric home care coordination and family support services.</p>
            </div>
            <div className="care-card rv">
              <h3>WellStar North Fulton Hospital</h3>
              <p>3000 Hospital Blvd, Roswell (nearby). Care coordination and discharge planning support.</p>
            </div>
            <div className="care-card rv">
              <h3>Perimeter Medical Associates</h3>
              <p>Multiple Perimeter Center locations. Primary care coordination and chronic disease management.</p>
            </div>
            <div className="care-card rv">
              <h3>Sandy Springs Urgent Care</h3>
              <p>6065 Roswell Rd. Urgent medical needs and care coordination.</p>
            </div>
            <div className="care-card rv">
              <h3>CVS Health &amp; Walgreens</h3>
              <p>Multiple Sandy Springs locations. Prescription management and pharmacy coordination services.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Daily Life</div>
            <h2>Supporting your Sandy Springs lifestyle</h2>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Shopping &amp; Errands</h3>
              <ul>
                <li>Perimeter Mall shopping assistance and transportation</li>
                <li>City Springs entertainment and dining accompaniment</li>
                <li>Grocery shopping at Whole Foods, Publix, and local markets</li>
                <li>Banking and errands in Perimeter Center</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Community Activities</h3>
              <ul>
                <li>Heritage Sandy Springs Museum and cultural events</li>
                <li>Chattahoochee River National Recreation Area walks</li>
                <li>Sandy Springs Library programs and book clubs</li>
                <li>Community Center fitness classes and social activities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">FAQ</div>
            <h2>Sandy Springs home care questions</h2>
          </div>
          <div className="prose-care rv">
            <h3>How do you handle transportation to Northside Hospital from Sandy Springs?</h3>
            <p>Our caregivers are very familiar with the route to Northside Hospital and can provide door-to-door transportation. We coordinate with hospital staff for appointments, handle paperwork assistance, and ensure comfortable transport during recovery periods.</p>
            <h3>Can you help with shopping at Perimeter Mall and City Springs?</h3>
            <p>Absolutely. Our companions assist with shopping trips to Perimeter Mall, City Springs, and local Sandy Springs businesses. We help with mobility, carrying packages, and can accompany you to restaurants and entertainment venues in these areas.</p>
            <h3>Do you serve all neighborhoods in Sandy Springs?</h3>
            <p>Yes, we provide care throughout Sandy Springs including Perimeter Center, North Springs, Riverside, Dunwoody Village, and all residential areas. We&apos;re familiar with Sandy Springs&apos; unique traffic patterns and can navigate efficiently throughout the city.</p>
            <h3>What&apos;s your experience with Sandy Springs senior housing communities?</h3>
            <p>We work with residents of various Sandy Springs senior living communities and are familiar with visitor protocols, health requirements, and community resources. We can coordinate with community staff to ensure comprehensive care.</p>
          </div>
        </div>
      </section>

      <section className="bigcta" id="contact">
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
