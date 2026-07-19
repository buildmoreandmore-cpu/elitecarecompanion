import { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'In-Home Care for Older Men in Alpharetta | Elite Care Companion | North Fulton Senior Care',
  description: 'Professional home care services in Alpharetta, GA. Serving Avalon, North Point, and gated communities. Corporate family specialists, modern home care solutions. Call (470) 840-0575.',
  keywords: 'Alpharetta home care, Avalon home care, North Point senior care, Alpharetta elder care, North Fulton home care, Alpharetta caregiver, elderly care Alpharetta GA, Alpharetta companion care, senior care Alpharetta, Alpharetta dementia care',
  openGraph: {
    title: 'In-Home Care for Older Men in Alpharetta | Elite Care Companion',
    description: 'Trusted home care in Alpharetta, GA. Serving corporate families and retirees in North Fulton with professional, compassionate care solutions.',
    url: 'https://elitecarecompanion.com/alpharetta-home-care',
    type: 'website',
    locale: 'en_US',
    siteName: 'Elite Care Companion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'In-Home Care for Older Men in Alpharetta | Elite Care Companion',
    description: 'Professional home care in Alpharetta, GA. Compassionate, private-pay care for North Fulton families. Call (470) 840-0575.',
  }
};

export default function AlpharettaHomeCare() {
  return (
    <div className="site">
      <SiteHeader />
      <Reveal />

      <header className="page-hero">
        <div className="inner">
          <div className="k">Home Care · Alpharetta</div>
          <h1>In-Home Care for Older Men in Alpharetta</h1>
          <p>
            Specialized care for North Fulton&apos;s corporate professionals and retirees &mdash; from
            Avalon to gated communities, we understand the modern family&apos;s care needs.
          </p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Request a free call</a>
            <a className="btn btn-wire" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </header>

      {/* Alpharetta-Specific Features */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Corporate Family Care</div>
            <h2>Corporate Family Care Specialists</h2>
            <p>
              Understanding the unique needs of technology professionals, executives, and affluent
              retirees in North Fulton County.
            </p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Corporate Schedule Flexibility</h3>
              <p>
                Understanding demanding travel schedules, late-night conference calls, and executive
                responsibilities that require adaptable care solutions.
              </p>
            </div>

            <div className="care-card rv">
              <h3>Modern Suburban Home Expertise</h3>
              <p>
                Familiar with contemporary home layouts, smart home technology integration, and the
                accessibility needs of modern suburban properties.
              </p>
            </div>

            <div className="care-card rv">
              <h3>Avalon &amp; North Point Access</h3>
              <p>
                Transportation and accompaniment to premier shopping, dining, and entertainment venues
                that maintain social connections and quality of life.
              </p>
            </div>

            <div className="care-card rv">
              <h3>Gated Community Navigation</h3>
              <p>
                Experience with security protocols, guest registration, and community-specific procedures
                for seamless care delivery in gated neighborhoods.
              </p>
            </div>

            <div className="care-card rv">
              <h3>Northside Hospital Network</h3>
              <p>
                Strong partnerships with Northside Hospital Forsyth and the extensive North Fulton medical
                community for coordinated healthcare.
              </p>
            </div>

            <div className="care-card rv">
              <h3>Technology Integration</h3>
              <p>
                Comfortable working with smart home systems, health monitoring apps, and digital
                communication tools preferred by tech-savvy families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Areas & Transportation */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Local Knowledge</div>
            <h2>North Fulton Area Expertise</h2>
            <p>
              From Avalon&apos;s luxury amenities to quiet gated communities, we navigate all of Alpharetta
              with professional expertise.
            </p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Key Alpharetta Destinations</h3>
              <ul>
                <li><strong>Avalon Mixed-Use Development</strong> &mdash; transportation to upscale shopping, fine dining, and entertainment venues that maintain social connections.</li>
                <li><strong>North Point Mall &amp; Shopping</strong> &mdash; assistance with shopping trips, prescription pickup, and maintaining familiar retail connections.</li>
                <li><strong>Northside Hospital Forsyth</strong> &mdash; familiar with hospital navigation, parking, and appointment coordination at this premier medical facility.</li>
                <li><strong>Technology Corridor Offices</strong> &mdash; supporting care during family visits to corporate offices and business parks throughout North Fulton.</li>
                <li><strong>Premium Gated Communities</strong> &mdash; experience with country club communities, luxury subdivisions, and their specific security and access protocols.</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Transportation Times from Alpharetta</h3>
              <ul>
                <li>To Northside Hospital Forsyth: 8-15 minutes</li>
                <li>To Avalon Shopping: 3-10 minutes</li>
                <li>To North Point Mall: 5-12 minutes</li>
                <li>To Northside Cherokee: 15-25 minutes</li>
                <li>To Downtown Roswell: 10-18 minutes</li>
              </ul>
              <p>
                <strong>Corporate Schedule Coordination:</strong> flexible scheduling around business
                travel, late meetings, and corporate event calendars common in the technology sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Family Challenges */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Challenges &amp; Solutions</div>
            <h2>Corporate Family Care Challenges</h2>
            <p>
              Understanding the unique care challenges faced by technology professionals, executives, and
              affluent retirees.
            </p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Unpredictable Corporate Travel</h3>
              <p>
                Technology and corporate professionals often face last-minute travel, extended business
                trips, and irregular schedules.
              </p>
              <ul>
                <li>24-hour coverage activation when needed</li>
                <li>Flexible live-in arrangements during travel</li>
                <li>Remote family coordination and updates</li>
                <li>Multi-week care continuity planning</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>High-Stress Corporate Lifestyle</h3>
              <p>
                Executive families often face high stress, long work hours, and difficulty balancing career
                demands with care responsibilities.
              </p>
              <ul>
                <li>Complete care management and coordination</li>
                <li>Detailed reporting and communication systems</li>
                <li>Stress reduction through reliable care presence</li>
                <li>Professional boundary management</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Geographic Family Dispersal</h3>
              <p>
                Corporate careers often result in adult children living across the country, making local
                care coordination challenging.
              </p>
              <ul>
                <li>Video call facilitation and tech support</li>
                <li>Detailed written and photo updates</li>
                <li>Multi-state family communication coordination</li>
                <li>Emergency contact protocol management</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Technology Integration Expectations</h3>
              <p>
                Tech-savvy families expect modern solutions including smart home integration, health apps,
                and digital monitoring.
              </p>
              <ul>
                <li>Smart home system compatibility training</li>
                <li>Health monitoring app integration</li>
                <li>Digital medication management systems</li>
                <li>Remote monitoring and alert systems</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Suburban Isolation Concerns</h3>
              <p>
                Large suburban homes in gated communities can lead to social isolation when driving becomes
                difficult.
              </p>
              <ul>
                <li>Transportation to social venues and activities</li>
                <li>Community center and club participation</li>
                <li>Shopping and dining outings for social connection</li>
                <li>Technology-assisted family communication</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Premium Healthcare Expectations</h3>
              <p>
                Affluent families expect premium healthcare coordination and access to top specialists
                throughout the region.
              </p>
              <ul>
                <li>Concierge-level healthcare coordination</li>
                <li>Specialist appointment management</li>
                <li>Discreet, private-pay care arrangements</li>
                <li>Multi-location medical facility coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Executive-Level Care</div>
            <h2>Executive-Level Care Services</h2>
            <p>
              Premium care solutions designed for the sophisticated needs of Alpharetta&apos;s corporate and
              retiree community.
            </p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Corporate Executive Support</h3>
              <p>
                Specialized care coordination for senior executives and technology leaders who understand
                the demands of high-performance careers.
              </p>
              <ul>
                <li>Concierge-level service coordination</li>
                <li>Business travel coordination and coverage</li>
                <li>Executive assistant coordination interface</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Technology Professional Families</h3>
              <p>
                Understanding the unique culture and expectations of families in the technology sector,
                with emphasis on innovation and efficiency.
              </p>
              <ul>
                <li>Smart home and IoT integration support</li>
                <li>Digital health monitoring and reporting</li>
                <li>Flexible remote work environment support</li>
              </ul>
            </div>
          </div>

          <div className="sec-head rv" style={{ marginTop: '50px', marginBottom: '30px' }}>
            <h2>Connect with Our Specialized Care Network</h2>
          </div>
          <div className="card-grid">
            <Link href="/dementia-care" className="care-card rv">
              <h3>Memory Care Specialists</h3>
              <p>Advanced dementia and Alzheimer&apos;s care.</p>
            </Link>
            <Link href="/sandy-springs-home-care" className="care-card rv">
              <h3>Sandy Springs Services</h3>
              <p>Adjacent premium care area.</p>
            </Link>
            <Link href="/buckhead-home-care" className="care-card rv">
              <h3>Buckhead Luxury Care</h3>
              <p>High-end residential care services.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Families We Serve</div>
            <h2>Alpharetta Corporate Families Choose Elite Care</h2>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <p>
                &quot;As a technology executive, I travel constantly and work unpredictable hours. Elite
                Care Companion has been a lifesaver for our family. They understand the demands of corporate
                life and provide seamless care for my mother whether I&apos;m in town or traveling
                internationally. Their technology integration and professional communication have been
                outstanding.&quot;
              </p>
              <h3>David L.</h3>
              <p>VP of Engineering, Fortune 500 Tech Company</p>
            </div>

            <div className="care-card rv">
              <p>
                &quot;We moved to Alpharetta for my husband&apos;s corporate role, and finding quality care
                for his aging parents was a major concern. Elite Care understands the expectations of
                professional families. They coordinate with our busy schedules, provide detailed updates,
                and have helped maintain the quality of life our parents expect. The care team even helped
                set up video calls so the grandchildren could stay connected during the pandemic.&quot;
              </p>
              <h3>Jennifer M.</h3>
              <p>Corporate Spouse, North Fulton Resident</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="sec alt" id="contact">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Get Started</div>
            <h2>Begin Executive-Level Care in Alpharetta</h2>
            <p>Call us or schedule a professional, no-pressure consultation.</p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <ContactForm />
            </div>

            <div className="care-card rv">
              <h3>Alpharetta Corporate Care Features</h3>
              <ul>
                <li>Flexible scheduling around corporate travel and demands</li>
                <li>Smart home technology integration and support</li>
                <li>Gated community and premium neighborhood expertise</li>
                <li>Concierge-level service coordination and communication</li>
              </ul>
              <h3>North Fulton Service Network</h3>
              <div className="area-list">
                <span className="area">Alpharetta</span>
                <span className="area">Milton</span>
                <span className="area">Johns Creek</span>
                <span className="area">Roswell</span>
                <Link href="/sandy-springs-home-care" className="area">Sandy Springs</Link>
                <span className="area">Cumming</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bigcta">
        <div className="wrap">
          <h2>Let&apos;s talk about the care he needs</h2>
          <p>A friendly, no-pressure conversation.</p>
          <a className="num" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          <div className="hrs">Open 8am &ndash; 8pm, 7 days</div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
