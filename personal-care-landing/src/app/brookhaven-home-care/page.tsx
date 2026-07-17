import { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'In-Home Care for Older Men in Brookhaven | Elite Care Companion | Near Emory & CDC',
  description: 'Professional home care services in Brookhaven, GA. Serving Town Brookhaven, Emory University area, CDC neighborhoods. 24/7 care, dementia specialists, companion care. Call (470) 507-8812.',
  keywords: 'Brookhaven home care, Emory University home care, CDC area eldercare, Town Brookhaven senior care, Brookhaven personal care, home health aide Brookhaven, elderly care Brookhaven GA, Brookhaven caregiver services, senior companion Brookhaven, Brookhaven dementia care',
  openGraph: {
    title: 'In-Home Care for Older Men in Brookhaven | Elite Care Companion',
    description: 'Trusted home care services in Brookhaven, GA. Serving families near Emory University, CDC, and Town Brookhaven with compassionate, professional care.',
    url: 'https://elitecarecompanion.com/brookhaven-home-care',
    type: 'website',
    locale: 'en_US',
    siteName: 'Elite Care Companion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'In-Home Care for Older Men in Brookhaven | Elite Care Companion',
    description: 'Professional home care in Brookhaven, GA. Care available 24/7. Call (470) 507-8812.',
  }
};

export default function BrookhavenHomeCare() {
  return (
    <div className="site">
      <SiteHeader />
      <Reveal />

      <header className="page-hero">
        <div className="inner">
          <div className="k">Home Care · Brookhaven</div>
          <h1>In-Home Care for Older Men in Brookhaven</h1>
          <p>Serving families near Emory University, the CDC, Town Brookhaven, and historic neighborhoods with compassionate, personalized care.</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Request a free call</a>
            <a className="btn btn-wire" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </header>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Why Brookhaven Families Choose Us</div>
            <h2>Rooted in the Brookhaven community</h2>
            <p>Deep understanding of Brookhaven&apos;s unique neighborhoods, from the academic atmosphere near Emory to the professional community around the CDC.</p>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Emory University Area Expertise</h3>
              <p>Familiar with the academic community, the Emory Healthcare network, and transportation needs around the university campus and Druid Hills area.</p>
            </div>
            <div className="care-card rv">
              <h3>CDC Professional Community</h3>
              <p>Understanding of health-conscious families and professionals working at the CDC, NIH, and other research institutions in the Clifton Road corridor.</p>
            </div>
            <div className="care-card rv">
              <h3>Town Brookhaven Access</h3>
              <p>Easy access to Town Brookhaven shopping, dining, and medical facilities. We coordinate transportation and accompany clients to local appointments and activities.</p>
            </div>
            <div className="care-card rv">
              <h3>24/7 Responsive Support</h3>
              <p>Rapid response throughout Brookhaven neighborhoods. Our caregivers know the quickest routes to Emory University Hospital and other local medical facilities.</p>
            </div>
            <div className="care-card rv">
              <h3>Historic Neighborhood Familiarity</h3>
              <p>Experience with older homes in historic Brookhaven, understanding accessibility challenges and safety considerations unique to established neighborhoods.</p>
            </div>
            <div className="care-card rv">
              <h3>Healthcare Coordination</h3>
              <p>Strong relationships with Emory Healthcare providers, CDC occupational health services, and local medical practices throughout the Brookhaven area.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Local Knowledge</div>
            <h2>Brookhaven landmarks &amp; accessibility</h2>
            <p>We know Brookhaven inside and out — from navigating busy Clifton Road to finding the best parking at Town Brookhaven.</p>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Town Brookhaven</h3>
              <p>Transportation to shopping, dining, and medical appointments at this popular mixed-use development.</p>
            </div>
            <div className="care-card rv">
              <h3>Emory University Hospital</h3>
              <p>Familiar with campus navigation, parking procedures, and accompanying clients to specialist appointments.</p>
            </div>
            <div className="care-card rv">
              <h3>CDC Clifton Road Campus</h3>
              <p>Supporting families of CDC employees with flexible scheduling around government work requirements.</p>
            </div>
            <div className="care-card rv">
              <h3>Historic Brookhaven Neighborhoods</h3>
              <p>Experience with older homes, narrow driveways, and unique accessibility needs in established residential areas.</p>
            </div>
            <div className="care-card rv">
              <h3>Buford Highway Medical District</h3>
              <p>Easy access to specialty medical practices and pharmacies along the Buford Highway corridor.</p>
            </div>
            <div className="care-card rv">
              <h3>Traffic-Aware Scheduling</h3>
              <p>We plan appointments around Clifton Road rush hours and Emory University event traffic to ensure timely arrivals. Most landmarks are 5–15 minutes away.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Common Challenges</div>
            <h2>Solutions for Brookhaven seniors</h2>
            <p>We understand the unique challenges seniors face in Brookhaven and provide targeted solutions.</p>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Historic Home Accessibility</h3>
              <p>Many Brookhaven homes were built before ADA guidelines, creating challenges with stairs, narrow doorways, and bathroom access.</p>
              <ul>
                <li>Home safety assessments and modifications</li>
                <li>Mobility assistance and fall prevention</li>
                <li>Coordination with home modification contractors</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Clifton Road Traffic Navigation</h3>
              <p>Heavy traffic on Clifton Road and around Emory can be stressful and dangerous for senior drivers.</p>
              <ul>
                <li>Professional transportation services</li>
                <li>Medical appointment coordination</li>
                <li>Shopping and errand assistance</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Social Isolation</h3>
              <p>Professional families in Brookhaven often travel, leaving elderly parents without regular social interaction.</p>
              <ul>
                <li>Companion care and conversation</li>
                <li>Outings to Town Brookhaven events</li>
                <li>Connection to local senior activities</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Complex Medical Coordination</h3>
              <p>Multiple specialists at Emory, CDC occupational health, and private practices can be overwhelming to coordinate.</p>
              <ul>
                <li>Appointment scheduling and management</li>
                <li>Medical record organization</li>
                <li>Communication with healthcare teams</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Medication Management</h3>
              <p>Multiple prescriptions from different Emory specialists require careful coordination and monitoring.</p>
              <ul>
                <li>Medication reminders and administration</li>
                <li>Pharmacy coordination and pickup</li>
                <li>Drug interaction monitoring</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Response Planning</h3>
              <p>Distance from family members working demanding professional jobs requires robust planning.</p>
              <ul>
                <li>24/7 response system</li>
                <li>Family communication protocols</li>
                <li>Medical preparedness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Specialized Services</div>
            <h2>Tailored care for Brookhaven residents</h2>
            <p>Care solutions that address the specific needs of the Brookhaven community.</p>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Academic Family Support</h3>
              <p>Specialized care for families connected to Emory University, understanding academic schedules, conference travel, and research demands.</p>
              <ul>
                <li>Flexible scheduling around academic calendars</li>
                <li>Extended coverage during conference travel</li>
                <li>Coordination with Emory Employee Health services</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>CDC Professional Family Care</h3>
              <p>Understanding the unique needs of government employees and public health professionals working at CDC and NIH facilities.</p>
              <ul>
                <li>Discreet, dependable staff selection</li>
                <li>Responsive coverage during government travel</li>
                <li>Coordination around demanding federal schedules</li>
              </ul>
            </div>
          </div>
          <div className="prose-care rv" style={{ marginTop: 28, textAlign: 'center' }}>
            <h3>Quick links to our specialized services</h3>
            <p>
              <Link href="/dementia-care">Dementia Care</Link> · <Link href="/sandy-springs-home-care">Sandy Springs Care</Link> · <Link href="/buckhead-home-care">Buckhead Care</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Testimonials</div>
            <h2>What Brookhaven families say</h2>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <p>&quot;As an Emory professor, I needed someone who understood my irregular schedule and could provide reliable care for my mother. Elite Care Companion has been absolutely wonderful — they know how to navigate campus traffic and always get her to appointments on time.&quot;</p>
              <h3>Dr. Sarah M.</h3>
              <p>Emory University Faculty, Brookhaven Resident</p>
            </div>
            <div className="care-card rv">
              <p>&quot;Working at CDC means I sometimes have to travel on short notice for public health emergencies. Lenny and his team have been incredible — they can step in immediately and my father feels completely comfortable with them. They even know which pharmacy near Town Brookhaven has his specialty medications.&quot;</p>
              <h3>Michael R.</h3>
              <p>CDC Epidemiologist, Brookhaven Resident</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt" id="contact">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Get Started</div>
            <h2>Start care today in Brookhaven</h2>
            <p>Call now for a friendly conversation or send us a note and we&apos;ll get right back to you.</p>
          </div>
          <ContactForm />
          <div className="prose-care rv" style={{ marginTop: 36 }}>
            <h3>Why choose Elite Care Companion?</h3>
            <ul>
              <li>Deep knowledge of Brookhaven neighborhoods and landmarks</li>
              <li>Experience with Emory Healthcare and CDC community needs</li>
              <li>Licensed, bonded caregivers you can trust</li>
              <li>Flexible scheduling around professional work demands</li>
            </ul>
            <p>
              <strong>Service areas near Brookhaven:</strong>{' '}
              <Link href="/buckhead-home-care">Buckhead</Link> · <Link href="/sandy-springs-home-care">Sandy Springs</Link> · Druid Hills · Alpharetta · Decatur · Vinings
            </p>
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
