import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'In-Home Care for Older Men in Buckhead, Atlanta | Elite Care Companion',
  description: 'Professional home care services in Buckhead, Atlanta. Serving Phipps Plaza, Lenox Square, Buckhead Village. Personal care, companionship, 24/7 care. Call (470) 507-8812 for same-day service.',
  keywords: 'home care Buckhead, senior care Phipps Plaza, elderly care Lenox Square, Buckhead Village home care, private caregiver Buckhead Atlanta, live-in care Buckhead, 24 hour care Buckhead, dementia care Buckhead, post surgery care Buckhead, companion care Buckhead, weekend caregiver Buckhead, overnight care Buckhead, respite care Buckhead, Buckhead senior services, home health aide Buckhead, personal care Buckhead Atlanta, medication reminders Buckhead, transportation services Buckhead, meal preparation Buckhead',
};

export default function BuckheadHomeCare() {
  return (
    <div className="site">
      <SiteHeader />
      <Reveal />

      <header className="page-hero">
        <div className="inner">
          <div className="k">Home Care · Buckhead</div>
          <h1>In-Home Care for Older Men in Buckhead</h1>
          <p>Serving Phipps Plaza, Lenox Square, Buckhead Village &amp; surrounding areas with discreet, compassionate care that protects independence and dignity.</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Request a free call</a>
            <a className="btn btn-wire" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </header>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Why Buckhead Families Choose Us</div>
            <h2>Premium care, tailored to Buckhead</h2>
          </div>
          <div className="prose-care rv">
            <p><strong>Buckhead is Atlanta&apos;s premier neighborhood</strong>, home to luxury shopping at Phipps Plaza and Lenox Square, upscale dining, and beautiful residential areas. Our clients in Buckhead deserve the highest quality of care, which is why Elite Care Companion provides <strong>premium home care services</strong> tailored to the sophisticated needs of this distinguished community.</p>
            <p>Whether you live in <strong>Buckhead Village, Tuxedo Park, Garden Hills, or near the Buckhead Triangle</strong>, our compassionate caregivers understand the unique lifestyle and expectations of Buckhead residents. We provide discreet, professional care that maintains your independence and dignity.</p>
            <ul>
              <li>Same-day service available</li>
              <li>Licensed &amp; bonded caregivers</li>
              <li>24/7 support, any day of the week</li>
              <li>Serving Buckhead since 2020</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Coverage</div>
            <h2>Buckhead service areas</h2>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Shopping Districts</h3>
              <ul>
                <li>Phipps Plaza area</li>
                <li>Lenox Square vicinity</li>
                <li>Buckhead Village</li>
                <li>Buckhead Triangle</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Neighborhoods</h3>
              <ul>
                <li>Tuxedo Park</li>
                <li>Garden Hills</li>
                <li>Haynes Manor</li>
                <li>Peachtree Hills</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Major Streets</h3>
              <ul>
                <li>Peachtree Road</li>
                <li>Roswell Road</li>
                <li>West Paces Ferry</li>
                <li>Piedmont Road</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Near</h3>
              <ul>
                <li>Atlanta Financial Center</li>
                <li>Buckhead Library</li>
                <li>Charlie Loudermilk Park</li>
                <li>Governor&apos;s Mansion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Services</div>
            <h2>Premium home care in Buckhead</h2>
            <p>Tailored care solutions for the discerning residents of Atlanta&apos;s most prestigious neighborhood.</p>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>24-Hour Live-In Care</h3>
              <p>Round-the-clock professional care for Buckhead residents who want to age in place in their homes. Perfect for those near Phipps Plaza and Lenox Square who need consistent support.</p>
              <p><Link href="/24-hour-care">Learn more about 24-hour care →</Link></p>
            </div>
            <div className="care-card rv">
              <h3>Companion Care Services</h3>
              <p>Social companionship for Buckhead seniors, including shopping trips to Lenox Square, cultural activities, and maintaining active lifestyles in Atlanta&apos;s premier neighborhood.</p>
              <p><Link href="/companion-care">Learn more about companion care →</Link></p>
            </div>
            <div className="care-card rv">
              <h3>Transportation</h3>
              <p>Safe, reliable transportation to Emory Healthcare, Piedmont Hospital, and appointments throughout Buckhead and the Atlanta metro area.</p>
              <p><Link href="/transportation-services">Learn more about transportation →</Link></p>
            </div>
            <div className="care-card rv">
              <h3>Post-Surgery Recovery Care</h3>
              <p>Specialized recovery support in your Buckhead home after procedures at Emory, Piedmont, or area hospitals, including rehabilitation assistance.</p>
              <p><Link href="/post-surgery-care">Learn more about recovery care →</Link></p>
            </div>
            <div className="care-card rv">
              <h3>Memory Care &amp; Dementia Support</h3>
              <p>Specialized Alzheimer&apos;s and dementia care for Buckhead families, with trained caregivers who understand memory care best practices and safety protocols.</p>
              <p><Link href="/dementia-care">Learn more about dementia care →</Link></p>
            </div>
            <div className="care-card rv">
              <h3>Same-Day Care</h3>
              <p>Prompt home care placement for Buckhead residents. Hospital discharge support, sudden illness, or family changes. Available 24/7.</p>
              <p><Link href="/emergency-care">Learn more about urgent care →</Link></p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Local Partners</div>
            <h2>Coordinating with Buckhead&apos;s healthcare facilities</h2>
            <p>We coordinate seamlessly with top medical providers serving the Buckhead community.</p>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Emory Healthcare</h3>
              <p>1365 Clifton Rd NE (nearby). Post-discharge care coordination and ongoing medical support.</p>
            </div>
            <div className="care-card rv">
              <h3>Piedmont Atlanta Hospital</h3>
              <p>1968 Peachtree Rd NW. Comprehensive recovery care and rehabilitation support.</p>
            </div>
            <div className="care-card rv">
              <h3>Atlanta Medical Center</h3>
              <p>315 Boulevard NE (nearby). Care coordination and hospital-to-home transitions.</p>
            </div>
            <div className="care-card rv">
              <h3>Northside Hospital</h3>
              <p>1000 Johnson Ferry Rd (Sandy Springs). Surgical recovery support and specialized care coordination.</p>
            </div>
            <div className="care-card rv">
              <h3>Buckhead Family Medicine</h3>
              <p>Multiple Buckhead locations. Primary care coordination and medication management.</p>
            </div>
            <div className="care-card rv">
              <h3>Buckhead Pharmacies</h3>
              <p>CVS, Walgreens, and local pharmacies. Prescription pickup and medication coordination.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">FAQ</div>
            <h2>Buckhead home care questions</h2>
          </div>
          <div className="prose-care rv">
            <h3>Do you provide home care services throughout all of Buckhead?</h3>
            <p>Yes, we serve all areas of Buckhead including Phipps Plaza area, Lenox Square vicinity, Buckhead Village, Tuxedo Park, Garden Hills, Haynes Manor, and Peachtree Hills. We&apos;re familiar with the parking, access, and security requirements of Buckhead&apos;s luxury residential buildings and gated communities.</p>
            <h3>Can your caregivers help with shopping at Phipps Plaza and Lenox Square?</h3>
            <p>Absolutely. Our companion caregivers are experienced with Buckhead&apos;s premier shopping destinations. We can assist with shopping trips to Phipps Plaza, Lenox Square, and Buckhead Village, including luxury retail assistance and personal shopping support.</p>
            <h3>How quickly can you start care for a Buckhead resident?</h3>
            <p>We offer same-day care placement for Buckhead residents, understanding that many of our clients have urgent needs following hospital stays at Emory or Piedmont. Our caregivers are familiar with Buckhead&apos;s traffic patterns and can navigate efficiently to provide prompt service.</p>
            <h3>Do you work with Buckhead&apos;s high-end residential buildings?</h3>
            <p>Yes, our caregivers are experienced working in Buckhead&apos;s luxury high-rise buildings, condominiums, and gated communities. We understand concierge protocols, security procedures, and parking requirements for buildings throughout the area.</p>
            <h3>What makes your Buckhead home care different?</h3>
            <p>We understand Buckhead&apos;s sophisticated clientele and provide premium, discreet care that maintains your lifestyle and social connections. Our caregivers are trained to work in luxury environments and understand the expectations of discerning Buckhead residents.</p>
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
