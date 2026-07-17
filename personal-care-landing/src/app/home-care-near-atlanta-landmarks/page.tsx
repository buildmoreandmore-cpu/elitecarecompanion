import { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Care for Older Men Near Atlanta Landmarks | Elite Care Companion | Phipps Plaza, Emory, Lenox',
  description: 'Home care services near major Atlanta landmarks. Phipps Plaza, Emory Hospital, Lenox Square, Perimeter Mall, Atlanta Botanical Garden. Local home care experts. Call (470) 507-8812.',
  keywords: 'home care near Phipps Plaza, home care near Emory Hospital, home care near Lenox Square, home care near Perimeter Mall, home care near Northside Hospital, home care near Atlanta Botanical Garden, home care near Fernbank Museum, home care near Town Brookhaven',
  openGraph: {
    title: 'Care for Older Men Near Atlanta Landmarks | Elite Care Companion',
    description: 'Professional home care services throughout Atlanta near major landmarks, hospitals, shopping centers, and attractions.',
    url: 'https://elitecarecompanion.com/home-care-near-atlanta-landmarks',
    type: 'website',
    locale: 'en_US',
    siteName: 'Elite Care Companion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Care for Older Men Near Atlanta Landmarks | Elite Care Companion',
    description: 'Home care services near Phipps Plaza, Emory Hospital, Lenox Square, and other Atlanta landmarks.',
  }
};

export default function HomeCareLandmarks() {
  return (
    <div className="site">
      <SiteHeader />
      <Reveal />

      <header className="page-hero">
        <div className="inner">
          <div className="k">Local Atlanta Experts</div>
          <h1>Care for Older Men Near Atlanta Landmarks</h1>
          <p>Professional home care services throughout Atlanta near the major landmarks, hospitals, shopping centers, and cultural attractions you know and love.</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Request a free call</a>
            <a className="btn btn-wire" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </header>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Why It Matters</div>
            <h2>Why Location Matters for Home Care</h2>
            <p>Knowing Atlanta&apos;s landmarks, traffic patterns, and local resources helps us provide better, more convenient care.</p>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Easy Transportation</h3>
              <p>Our caregivers know the best routes to your favorite shopping centers, restaurants, and medical facilities, avoiding traffic and finding convenient parking.</p>
            </div>
            <div className="care-card rv">
              <h3>Healthcare Coordination</h3>
              <p>We have established relationships with major hospitals and medical facilities, making appointment coordination and emergency response more efficient.</p>
            </div>
            <div className="care-card rv">
              <h3>Community Connections</h3>
              <p>Local knowledge helps us connect you with community resources, social activities, and services that enhance quality of life and social engagement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Hospitals</div>
            <h2>Home Care Near Major Atlanta Hospitals</h2>
            <p>We specialize in coordinating care with Atlanta&apos;s premier medical facilities.</p>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Emory University Hospital</h3>
              <p><strong>Location:</strong> 1364 Clifton Rd NE, Atlanta, GA 30322. Home care in surrounding areas: <Link href="/brookhaven-home-care">Brookhaven</Link>, <Link href="/druid-hills-home-care">Druid Hills</Link>, Decatur, Virginia-Highland.</p>
              <ul>
                <li>Post-surgery recovery care</li>
                <li>Transportation to follow-up appointments</li>
                <li>Coordination with Emory specialists</li>
                <li>Cancer care support and companionship</li>
                <li>Rehabilitation exercise assistance</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Northside Hospital</h3>
              <p><strong>Location:</strong> 1000 Johnson Ferry Rd NE, Atlanta, GA 30342. Home care in surrounding areas: <Link href="/sandy-springs-home-care">Sandy Springs</Link>, <Link href="/buckhead-home-care">Buckhead</Link>, Dunwoody, Roswell.</p>
              <ul>
                <li>Cardiac recovery care</li>
                <li>Maternity support and newborn care</li>
                <li>Orthopedic rehabilitation</li>
                <li>Hospital discharge planning</li>
                <li>Emergency backup care</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Northside Hospital Forsyth</h3>
              <p><strong>Location:</strong> 1200 Northside Forsyth Dr, Cumming, GA 30041. Home care in surrounding areas: <Link href="/alpharetta-home-care">Alpharetta</Link>, Cumming, Johns Creek, Milton.</p>
              <ul>
                <li>Executive health support</li>
                <li>Preventive care coordination</li>
                <li>Specialty care transportation</li>
                <li>Health monitoring and wellness</li>
                <li>Concierge-level care coordination</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Children&apos;s Healthcare of Atlanta</h3>
              <p><strong>Locations:</strong> Egleston, Scottish Rite, Hughes Spalding. Supporting families throughout the Atlanta metro during pediatric care needs.</p>
              <ul>
                <li>Grandparent respite care</li>
                <li>Sibling care during hospitalizations</li>
                <li>Transportation for family visits</li>
                <li>Emotional support for families</li>
                <li>Household management during crisis</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Piedmont Atlanta Hospital</h3>
              <p><strong>Location:</strong> 1968 Peachtree Rd NW, Atlanta, GA 30309. Home care in surrounding areas: Midtown, <Link href="/buckhead-home-care">Buckhead</Link>, Virginia-Highland, Ansley Park.</p>
              <ul>
                <li>Heart and vascular care support</li>
                <li>Neurology and stroke recovery</li>
                <li>Cancer treatment companionship</li>
                <li>Urban apartment care</li>
                <li>High-rise building navigation</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>CDC Campus</h3>
              <p><strong>Location:</strong> 1600 Clifton Rd NE, Atlanta, GA 30329. Home care for families in <Link href="/brookhaven-home-care">Brookhaven</Link>, <Link href="/druid-hills-home-care">Druid Hills</Link>, and Decatur.</p>
              <ul>
                <li>Travel-related backup coverage</li>
                <li>Flexible professional schedules</li>
                <li>Reliable, vetted caregivers</li>
                <li>Discreet, professional staff</li>
                <li>Coordination with busy families</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Shopping &amp; Entertainment</div>
            <h2>Home Care Near Atlanta Shopping &amp; Entertainment</h2>
            <p>Maintaining social connections and independence with visits to favorite shopping and entertainment destinations.</p>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Phipps Plaza (<Link href="/buckhead-home-care">Buckhead</Link>)</h3>
              <p>3500 Peachtree Rd NE, Atlanta, GA 30326.</p>
              <ul>
                <li>Luxury shopping with accessible parking</li>
                <li>Upscale dining and social experiences</li>
                <li>Personal shopping assistance</li>
                <li>Valet parking coordination</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Lenox Square (<Link href="/buckhead-home-care">Buckhead</Link>)</h3>
              <p>3393 Peachtree Rd NE, Atlanta, GA 30326.</p>
              <ul>
                <li>Familiar shopping environment</li>
                <li>Multiple dining options</li>
                <li>Easy navigation assistance</li>
                <li>Package carrying and support</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Perimeter Mall (<Link href="/sandy-springs-home-care">Sandy Springs</Link>)</h3>
              <p>4400 Ashford Dunwoody Rd NE, Atlanta, GA 30346.</p>
              <ul>
                <li>Convenient for North Fulton residents</li>
                <li>Medical services and pharmacy access</li>
                <li>Senior-friendly environment</li>
                <li>Restaurant and caf&eacute; options</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Town Brookhaven (<Link href="/brookhaven-home-care">Brookhaven</Link>)</h3>
              <p>4045 Peachtree Rd NE, Brookhaven, GA 30319.</p>
              <ul>
                <li>Mixed-use walkable environment</li>
                <li>Outdoor dining and events</li>
                <li>Community gathering place</li>
                <li>Easy parking and accessibility</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Avalon (<Link href="/alpharetta-home-care">Alpharetta</Link>)</h3>
              <p>9000 Avalon Blvd, Alpharetta, GA 30009.</p>
              <ul>
                <li>Modern shopping and dining</li>
                <li>Entertainment and events</li>
                <li>Family destination</li>
                <li>Premium experience with assistance</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Atlanta Botanical Garden</h3>
              <p>1345 Piedmont Ave NE, Atlanta, GA 30309.</p>
              <ul>
                <li>Wheelchair and mobility-accessible paths</li>
                <li>Seasonal exhibitions and events</li>
                <li>Peaceful environment for seniors</li>
                <li>Photography and nature appreciation</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Fernbank Museum (<Link href="/druid-hills-home-care">Druid Hills</Link>)</h3>
              <p>767 Clifton Rd NE, Atlanta, GA 30307.</p>
              <ul>
                <li>Educational and engaging exhibitions</li>
                <li>IMAX theater experiences</li>
                <li>Senior group programs</li>
                <li>Intellectual stimulation and learning</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>High Museum of Art</h3>
              <p>1280 Peachtree St NE, Atlanta, GA 30309.</p>
              <ul>
                <li>World-class art collections</li>
                <li>Senior discount programs</li>
                <li>Accessible facilities and tours</li>
                <li>Cultural enrichment activities</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Piedmont Park</h3>
              <p>1320 Monroe Dr NE, Atlanta, GA 30306.</p>
              <ul>
                <li>Gentle walking paths and benches</li>
                <li>Farmers market and festivals</li>
                <li>Dog park and people watching</li>
                <li>Exercise classes and activities</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Fox Theatre</h3>
              <p>660 Peachtree St NE, Atlanta, GA 30308.</p>
              <ul>
                <li>Broadway shows and performances</li>
                <li>Accessible seating and assistance</li>
                <li>Transportation and accompaniment</li>
                <li>Cultural event coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Navigation</div>
            <h2>Expert Navigation &amp; Transportation</h2>
            <p>Our caregivers know Atlanta inside and out &mdash; from the best parking spots to avoiding traffic delays.</p>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Traffic-Aware Scheduling</h3>
              <p>We plan appointments around Atlanta traffic patterns, construction zones, and peak hours to ensure timely arrivals.</p>
            </div>
            <div className="care-card rv">
              <h3>Parking Expertise</h3>
              <p>Knowledge of accessible parking, valet services, and drop-off locations at every major Atlanta destination.</p>
            </div>
            <div className="care-card rv">
              <h3>Route Planning</h3>
              <p>Efficient multi-stop trips combining medical appointments, shopping, and social visits in one convenient outing.</p>
            </div>
            <div className="care-card rv">
              <h3>Safety &amp; Security</h3>
              <p>Experienced drivers with clean records, insured vehicles, and training in senior transportation safety.</p>
            </div>
          </div>
          <div className="prose-care rv">
            <h3>Sample Transportation Times from Different Areas</h3>
            <p><strong>From <Link href="/buckhead-home-care">Buckhead</Link>:</strong> To Phipps Plaza 3&ndash;8 min, Lenox Square 5&ndash;12 min, Northside Hospital 8&ndash;15 min, Piedmont Hospital 10&ndash;18 min, Atlanta Botanical Garden 12&ndash;20 min.</p>
            <p><strong>From <Link href="/sandy-springs-home-care">Sandy Springs</Link>:</strong> To Perimeter Mall 2&ndash;8 min, Northside Hospital 5&ndash;12 min, Lenox Square 8&ndash;15 min, Emory Hospital 15&ndash;25 min, Fernbank Museum 18&ndash;28 min.</p>
            <p><strong>From <Link href="/brookhaven-home-care">Brookhaven</Link>:</strong> To Town Brookhaven 3&ndash;8 min, Emory Hospital 5&ndash;10 min, CDC Campus 8&ndash;12 min, Fernbank Museum 5&ndash;10 min, Lenox Square 10&ndash;18 min.</p>
          </div>
        </div>
      </section>

      <section className="sec" id="contact">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Get In Touch</div>
            <h2>Find Home Care Near Your Favorite Places</h2>
            <p>Call to discuss care near the landmarks and locations that matter most to you.</p>
          </div>
          <div className="rv">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bigcta">
        <div className="wrap">
          <h2>Let&apos;s talk about the care he needs</h2>
          <p>A friendly, no-pressure conversation with a local Atlanta home care expert.</p>
          <a className="num" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          <div className="hrs">Open 8am &ndash; 8pm, 7 days</div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
