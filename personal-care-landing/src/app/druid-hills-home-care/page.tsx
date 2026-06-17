import { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Druid Hills Home Care Services | Elite Care Companion | Historic Garden District',
  description: 'Professional home care in historic Druid Hills, GA. Serving Fernbank area, Emory University neighborhoods, Lullwater Park vicinity. Expert care for historic homes and established families. Call (470) 696-3850.',
  keywords: 'Druid Hills home care, Fernbank home care, Emory Druid Hills senior care, historic Druid Hills eldercare, Lullwater Park area care, Druid Hills caregiver, elderly care Druid Hills GA, Druid Hills companion care, senior home care Druid Hills, Druid Hills dementia care',
  openGraph: {
    title: 'Druid Hills Home Care Services | Elite Care Companion',
    description: 'Trusted home care in historic Druid Hills garden district. Serving families near Fernbank, Emory, and Lullwater Park with compassionate, professional care.',
    url: 'https://elitecarecompanion.com/druid-hills-home-care',
    type: 'website',
    locale: 'en_US',
    siteName: 'Elite Care Companion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Druid Hills Home Care Services | Elite Care Companion',
    description: 'Professional home care in historic Druid Hills, GA. Compassionate, private-pay care for established families. Call (470) 696-3850.',
  }
};

export default function DruidHillsHomeCare() {
  return (
    <div className="site">
      <SiteHeader />
      <Reveal />

      <header className="page-hero">
        <div className="inner">
          <div className="k">Home Care · Druid Hills</div>
          <h1>Druid Hills Historic Garden District Home Care</h1>
          <p>
            Specialized care for families in Atlanta&apos;s most historic neighborhood &mdash; from Fernbank
            to Lullwater Park, serving established families with dignity and respect.
          </p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Request a free call</a>
            <a className="btn btn-wire" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </header>

      {/* Heritage & Expertise */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Heritage Specialists</div>
            <h2>Heritage Home Care Specialists</h2>
            <p>
              Understanding the unique needs of families in Atlanta&apos;s garden district, where history
              meets modern care.
            </p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Historic Home Specialists</h3>
              <p>
                Expert experience with 1920s-1940s architecture, multi-level homes, original hardwood
                floors, and period-appropriate accessibility solutions.
              </p>
            </div>

            <div className="care-card rv">
              <h3>Cultural &amp; Educational Connections</h3>
              <p>
                Transportation and accompaniment to Fernbank Museum, Emory events, Atlanta Botanical
                Garden, and other cultural activities important to educated families.
              </p>
            </div>

            <div className="care-card rv">
              <h3>Garden District Lifestyle</h3>
              <p>
                Support for maintaining beautiful gardens, outdoor spaces, and the active lifestyle that
                defines this historic neighborhood&apos;s character.
              </p>
            </div>

            <div className="care-card rv">
              <h3>Emory Healthcare Network</h3>
              <p>
                Seamless coordination with Emory University Hospital, specialty clinics, and the broader
                Emory healthcare ecosystem serving this community.
              </p>
            </div>

            <div className="care-card rv">
              <h3>Lullwater Park Access</h3>
              <p>
                Safe accompaniment to Lullwater Park for nature walks, bird watching, and outdoor
                activities that maintain physical and mental wellness.
              </p>
            </div>

            <div className="care-card rv">
              <h3>Multi-Generational Family Support</h3>
              <p>
                Understanding the complex needs of established families with multiple generations,
                coordinating care across family members and properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Landmarks & Navigation */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Local Knowledge</div>
            <h2>Historic Druid Hills Landmarks</h2>
            <p>
              From Olmsted Brothers&apos; original landscape design to modern cultural attractions &mdash;
              we know every corner of this special neighborhood.
            </p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Key Druid Hills Destinations</h3>
              <ul>
                <li><strong>Fernbank Museum of Natural History</strong> &mdash; transportation to exhibitions, IMAX theater, and educational programs that keep minds active and engaged.</li>
                <li><strong>Lullwater Park &amp; Conservation Garden</strong> &mdash; safe walking assistance on trails, lake viewing, and nature photography for outdoor wellness.</li>
                <li><strong>Emory University Campus</strong> &mdash; navigation assistance for healthcare appointments, library visits, and cultural events on campus.</li>
                <li><strong>Druid Hills Golf Club Area</strong> &mdash; familiar with the exclusive neighborhood around the golf club and its unique access considerations.</li>
                <li><strong>Historic Olmsted Linear Parks</strong> &mdash; appreciation for the original landscape architecture and safe navigation of the historic parkway system.</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Transportation Times from Druid Hills</h3>
              <ul>
                <li>To Emory University Hospital: 3-8 minutes</li>
                <li>To Fernbank Museum: 2-5 minutes</li>
                <li>To Virginia-Highland: 5-10 minutes</li>
                <li>To CDC Clifton Campus: 8-12 minutes</li>
                <li>To Little Five Points: 6-10 minutes</li>
              </ul>
              <p>
                <strong>Historic District Navigation:</strong> understanding narrow historic streets,
                limited parking, and preservation district guidelines for respectful home modifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Home Challenges */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Challenges &amp; Solutions</div>
            <h2>Historic Home Care Challenges &amp; Solutions</h2>
            <p>
              Specialized expertise for the unique considerations of caring for seniors in Atlanta&apos;s
              most historic neighborhood.
            </p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Multi-Level Historic Homes</h3>
              <p>
                Original 1920s-1940s homes often have stairs, split levels, and challenging layouts that
                weren&apos;t designed for aging in place.
              </p>
              <ul>
                <li>Stair safety assessments and navigation assistance</li>
                <li>Coordination with preservation-approved modifications</li>
                <li>Strategic bedroom/bathroom arrangement planning</li>
                <li>Fall prevention in period-appropriate layouts</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Historic Preservation Restrictions</h3>
              <p>
                Historic district guidelines limit home modifications, requiring creative solutions for
                accessibility needs.
              </p>
              <ul>
                <li>Knowledge of approved modification contractors</li>
                <li>Temporary accessibility solutions</li>
                <li>Period-appropriate safety equipment</li>
                <li>Coordination with historic preservation requirements</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Garden &amp; Landscape Maintenance</h3>
              <p>
                Established families often have extensive gardens and landscapes that become difficult to
                maintain with age.
              </p>
              <ul>
                <li>Light gardening assistance and supervision</li>
                <li>Coordination with landscape professionals</li>
                <li>Safe outdoor mobility assistance</li>
                <li>Seasonal garden enjoyment activities</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Cultural &amp; Educational Isolation</h3>
              <p>
                Highly educated families may feel isolated when they can no longer drive to museums,
                lectures, and cultural events.
              </p>
              <ul>
                <li>Transportation to Fernbank and cultural venues</li>
                <li>Accompaniment to Emory lectures and events</li>
                <li>Virtual cultural experience facilitation</li>
                <li>Intellectual stimulation and conversation</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Complex Family Dynamics</h3>
              <p>
                Multi-generational families with properties, trusts, and complex care needs require
                sophisticated coordination.
              </p>
              <ul>
                <li>Professional family communication protocols</li>
                <li>Estate and property care coordination</li>
                <li>Multiple physician and specialist management</li>
                <li>Discrete, professional service approach</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Neighborhood Privacy Expectations</h3>
              <p>
                Established neighborhood with privacy expectations and professional reputation
                considerations for families.
              </p>
              <ul>
                <li>Discrete, professional caregiver presentation</li>
                <li>Respectful neighborhood integration</li>
                <li>Confidential service approach</li>
                <li>Understanding of community social dynamics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Integration */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Community-Centered</div>
            <h2>Community-Centered Care</h2>
            <p>Maintaining connections to the rich cultural and social fabric of Druid Hills.</p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Cultural &amp; Educational Engagement</h3>
              <p>
                Keeping intellectually curious seniors connected to the educational and cultural
                opportunities that define this community.
              </p>
              <ul>
                <li>Fernbank Museum programs and exhibitions</li>
                <li>Emory University public lectures and events</li>
                <li>Atlanta Botanical Garden seasonal activities</li>
                <li>Local book clubs and discussion groups</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Historic Neighborhood Lifestyle</h3>
              <p>
                Preserving the active, engaged lifestyle that residents have enjoyed for decades in this
                special community.
              </p>
              <ul>
                <li>Daily walks through historic neighborhoods</li>
                <li>Lullwater Park nature experiences</li>
                <li>Garden appreciation and light maintenance</li>
                <li>Social connections with longtime neighbors</li>
              </ul>
            </div>
          </div>

          <div className="sec-head rv" style={{ marginTop: '50px', marginBottom: '30px' }}>
            <h2>Related Care Services</h2>
          </div>
          <div className="card-grid">
            <Link href="/dementia-care" className="care-card rv">
              <h3>Memory Care</h3>
              <p>Specialized dementia and Alzheimer&apos;s care.</p>
            </Link>
            <Link href="/brookhaven-home-care" className="care-card rv">
              <h3>Brookhaven Care</h3>
              <p>CDC and Emory community services.</p>
            </Link>
            <Link href="/buckhead-home-care" className="care-card rv">
              <h3>Buckhead Care</h3>
              <p>Luxury home care services.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Families We Serve</div>
            <h2>Historic Druid Hills Families Trust Elite Care</h2>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <p>
                &quot;Our family has lived in this 1925 home for three generations. When mother needed care,
                we were worried about finding someone who would understand and respect both the house and
                our family&apos;s history here. Elite Care Companion has been perfect &mdash; they know how to
                navigate our stairs safely, respect our antiques, and they even drive mother to her favorite
                events at Fernbank.&quot;
              </p>
              <h3>Margaret H.</h3>
              <p>Third-Generation Druid Hills Resident</p>
            </div>

            <div className="care-card rv">
              <p>
                &quot;Dad is a retired professor and very particular about his routines and intellectual
                stimulation. Lenny found a caregiver who actually enjoys discussing literature and current
                events with him. They take walks through Lullwater Park and visit the Botanical Garden
                regularly. It&apos;s kept dad mentally sharp and socially engaged in a way we couldn&apos;t have
                managed from a distance.&quot;
              </p>
              <h3>James K.</h3>
              <p>Son of Retired Emory Professor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="sec alt" id="contact">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Get Started</div>
            <h2>Begin Professional Care in Historic Druid Hills</h2>
            <p>Call us or schedule a discrete, no-pressure consultation.</p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <ContactForm />
            </div>

            <div className="care-card rv">
              <h3>Druid Hills Specializations</h3>
              <ul>
                <li>Historic home navigation and safety expertise</li>
                <li>Cultural and educational activity coordination</li>
                <li>Multi-generational family coordination</li>
                <li>Discrete, professional service approach</li>
              </ul>
              <h3>Adjacent Service Areas</h3>
              <div className="area-list">
                <Link href="/brookhaven-home-care" className="area">Brookhaven</Link>
                <span className="area">Virginia-Highland</span>
                <span className="area">Candler Park</span>
                <span className="area">Little Five Points</span>
                <span className="area">Inman Park</span>
                <Link href="/buckhead-home-care" className="area">Buckhead</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bigcta">
        <div className="wrap">
          <h2>Let&apos;s talk about your loved one&apos;s care</h2>
          <p>A friendly, no-pressure conversation.</p>
          <a className="num" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          <div className="hrs">Open 8am &ndash; 8pm, 7 days</div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
