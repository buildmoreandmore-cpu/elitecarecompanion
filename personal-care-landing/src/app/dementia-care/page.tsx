import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Dementia Care & Alzheimer\'s Support in Atlanta GA - Memory Care at Home | Elite Care Companion',
  description: 'Specialized dementia and Alzheimer\'s care in Atlanta. Memory care at home in Buckhead, Sandy Springs, Brookhaven. Trained caregivers, safety protocols, 24/7 support. Call (470) 696-3850.',
  keywords: 'dementia care Atlanta, Alzheimer\'s care Georgia, memory care at home Atlanta, dementia caregiver Atlanta, Alzheimer\'s support Georgia, dementia care Buckhead, memory care Sandy Springs, dementia care Brookhaven, Alzheimer\'s care Alpharetta, dementia care Druid Hills, memory care services Atlanta, dementia home care Georgia, Alzheimer\'s home care Atlanta, dementia care near me, memory care specialist Atlanta, dementia respite care Atlanta, Alzheimer\'s caregiver Georgia, dementia safety Atlanta, memory care support Atlanta, dementia care cost Atlanta, Alzheimer\'s care cost Georgia, dementia day care Atlanta, memory care programs Atlanta, dementia activities Atlanta, Alzheimer\'s activities Georgia, dementia behavior management Atlanta, memory care nutrition Atlanta, dementia wandering prevention Atlanta, Alzheimer\'s sundowning care Georgia, dementia medication management Atlanta'
};

export default function DementiaCare() {
  return (
    <div className="site">
      <SiteHeader />
      <Reveal />

      <header className="page-hero">
        <div className="inner">
          <div className="k">Memory Care at Home</div>
          <h1>Specialized Dementia &amp; Alzheimer&apos;s Care</h1>
          <p>Compassionate memory care at home throughout the Atlanta metro &mdash; Buckhead, Sandy Springs, Brookhaven, Druid Hills, and Alpharetta.</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Request a free call</a>
            <a className="btn btn-wire" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </header>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Understanding Dementia</div>
            <h2>When Memory Care Becomes Necessary</h2>
          </div>
          <div className="prose-care rv">
            <p><strong>Dementia and Alzheimer&apos;s affect over 6 million Americans</strong>, and families throughout <strong>Buckhead, Sandy Springs, Brookhaven, Druid Hills, and Alpharetta</strong> are seeking specialized care options that allow their loved ones to remain safely at home.</p>
            <p><strong>Elite Care Companion&apos;s memory care specialists</strong> understand the unique challenges of dementia care and provide personalized support that adapts to changing needs while maintaining dignity and quality of life.</p>
            <h3>Signs Your Loved One May Need Memory Care</h3>
            <ul>
              <li>Forgetting familiar people, places, or routines</li>
              <li>Confusion about time, date, or location</li>
              <li>Safety concerns (leaving stove on, wandering)</li>
              <li>Difficulty with daily activities (bathing, dressing)</li>
              <li>Changes in mood, behavior, or personality</li>
              <li>Challenges with communication</li>
            </ul>
            <h3>Memory Care Service Areas</h3>
            <p><strong>Buckhead:</strong> Phipps Plaza area, Lenox Square vicinity, Garden Hills, Tuxedo Park. <strong>Sandy Springs:</strong> Perimeter Center, City Springs, Dunwoody Village, North Springs. <strong>Brookhaven:</strong> Town Brookhaven, Lynwood Park, Ashford Park, Historic Brookhaven. <strong>Additional areas:</strong> Alpharetta, Druid Hills, Roswell, and Decatur.</p>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Our Services</div>
            <h2>Comprehensive Dementia &amp; Alzheimer&apos;s Care</h2>
            <p>Our memory care specialists are trained in evidence-based approaches focused on safety, dignity, and quality of life.</p>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Safety &amp; Wandering Prevention</h3>
              <p>24/7 supervision, home safety modifications, and proven techniques to prevent wandering, with caregivers trained in redirection and de-escalation.</p>
              <ul>
                <li>Door and window monitoring systems</li>
                <li>Safe environment modifications</li>
                <li>GPS tracking options</li>
                <li>Medication safety protocols</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Personal Care &amp; Daily Living</h3>
              <p>Gentle assistance with bathing, dressing, grooming, and toileting while maintaining dignity and promoting independence where possible.</p>
              <ul>
                <li>Patient bathing and hygiene care</li>
                <li>Assistance with dressing</li>
                <li>Incontinence care management</li>
                <li>Maintaining daily routines</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Behavioral &amp; Emotional Support</h3>
              <p>Managing challenging behaviors, sundowning, agitation, and mood changes with evidence-based techniques and compassionate care.</p>
              <ul>
                <li>Sundowning management strategies</li>
                <li>Calming techniques for agitation</li>
                <li>Validation therapy approaches</li>
                <li>Environmental mood enhancement</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Cognitive Stimulation Activities</h3>
              <p>Engaging activities designed to stimulate memory, promote cognitive function, and provide meaningful social interaction.</p>
              <ul>
                <li>Memory exercises and games</li>
                <li>Music and art therapy activities</li>
                <li>Reminiscence therapy sessions</li>
                <li>Simple craft and puzzle activities</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Family Education &amp; Support</h3>
              <p>Guidance for family members on communication techniques, safety measures, and coping strategies for caring for someone with dementia.</p>
              <ul>
                <li>Communication strategy training</li>
                <li>Family caregiver support</li>
                <li>Resource connection assistance</li>
                <li>Respite care coordination</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Medical Care Coordination</h3>
              <p>Coordination with neurologists, geriatricians, and memory care specialists throughout Atlanta for comprehensive medical management.</p>
              <ul>
                <li>Medication management protocols</li>
                <li>Doctor appointment coordination</li>
                <li>Medical record maintenance</li>
                <li>Healthcare team communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Every Stage</div>
            <h2>Care Adapted to Every Stage of Memory Loss</h2>
            <p>Our approach evolves with your loved one&apos;s changing needs throughout their dementia journey.</p>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Early Stage Dementia Care</h3>
              <p>Supporting independence while ensuring safety and social engagement.</p>
              <ul>
                <li>Medication reminders and organization</li>
                <li>Transportation to social activities</li>
                <li>Light housekeeping and meal preparation</li>
                <li>Cognitive stimulation activities</li>
                <li>Safety monitoring and fall prevention</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Moderate Stage Dementia Care</h3>
              <p>Increased assistance with daily activities and behavioral support.</p>
              <ul>
                <li>Personal care and hygiene assistance</li>
                <li>Wandering prevention and supervision</li>
                <li>Behavioral redirection techniques</li>
                <li>Structured daily routine maintenance</li>
                <li>Family communication and updates</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>Advanced Stage Dementia Care</h3>
              <p>Comprehensive care focusing on comfort, dignity, and quality of life.</p>
              <ul>
                <li>24/7 supervision and assistance</li>
                <li>Complete personal care support</li>
                <li>Comfort-focused care approaches</li>
                <li>Medical coordination and monitoring</li>
                <li>Hospice care coordination if needed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Local Resources</div>
            <h2>Atlanta&apos;s Memory Care Specialists</h2>
            <p>Partnering with leading dementia care resources throughout Georgia.</p>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>Emory Brain Health Center</h3>
              <p>1841 Clifton Rd NE, Atlanta. Leading research and treatment for Alzheimer&apos;s and dementia in Georgia.</p>
            </div>
            <div className="care-card rv">
              <h3>Atlanta Memory &amp; Neurology</h3>
              <p>Multiple Atlanta locations. Specialized neurological care for memory disorders.</p>
            </div>
            <div className="care-card rv">
              <h3>Alzheimer&apos;s Association Georgia</h3>
              <p>41 Perimeter Center East. Support groups, education, and resources for families.</p>
            </div>
            <div className="care-card rv">
              <h3>Piedmont Healthcare Memory Care</h3>
              <p>Multiple locations. Comprehensive memory care and diagnostic services.</p>
            </div>
            <div className="care-card rv">
              <h3>Wesley Woods Center</h3>
              <p>1821 Clifton Rd NE. Geriatric care and memory support services.</p>
            </div>
            <div className="care-card rv">
              <h3>Atlanta Memory Clinic</h3>
              <p>1670 Clairmont Rd, Decatur. Specialized memory care and support services.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Private Pay</div>
            <h2>Memory Care Costs in Atlanta</h2>
            <p>Simple, transparent private-pay pricing with flexible plans built around your family.</p>
          </div>
          <div className="prose-care rv">
            <h3>Average Memory Care Costs</h3>
            <ul>
              <li><strong>Part-time memory care (4 hours):</strong> $120&ndash;180/day</li>
              <li><strong>Full-time memory care (12 hours):</strong> $300&ndash;450/day</li>
              <li><strong>24-hour memory care:</strong> $400&ndash;600/day</li>
              <li><strong>Live-in memory care specialist:</strong> $250&ndash;400/day</li>
            </ul>
            <p>Costs vary based on the level of care needed and caregiver qualifications. We offer flexible private-pay plans and family care arrangements, and we&apos;re happy to build a plan that fits your budget.</p>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Same-Day Support</div>
            <h2>When You Need Memory Care Right Away</h2>
            <p>Immediate dementia care support available throughout the Atlanta metro.</p>
          </div>
          <div className="card-grid">
            <div className="care-card rv">
              <h3>When to Reach Out Quickly</h3>
              <ul>
                <li>Sudden behavioral changes or agitation</li>
                <li>Wandering incidents or getting lost</li>
                <li>Family caregiver emergency or illness</li>
                <li>Hospital discharge with new diagnosis</li>
                <li>Safety incidents or fall-related injuries</li>
                <li>Medication errors or confusion</li>
              </ul>
            </div>
            <div className="care-card rv">
              <h3>How We Respond</h3>
              <ul>
                <li>Same-day caregiver placement</li>
                <li>Availability throughout Atlanta</li>
                <li>Immediate safety assessment</li>
                <li>Experienced care specialists</li>
                <li>Hospital and facility coordination</li>
                <li>Family support and communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Service Areas</div>
            <h2>Dementia Care Throughout Atlanta Metro</h2>
          </div>
          <div className="card-grid">
            <Link href="/buckhead-home-care" className="care-card rv"><h3>Buckhead</h3><p>Memory Care</p></Link>
            <Link href="/sandy-springs-home-care" className="care-card rv"><h3>Sandy Springs</h3><p>Memory Care</p></Link>
            <Link href="/brookhaven-home-care" className="care-card rv"><h3>Brookhaven</h3><p>Memory Care</p></Link>
            <Link href="/alpharetta-home-care" className="care-card rv"><h3>Alpharetta</h3><p>Memory Care</p></Link>
            <Link href="/druid-hills-home-care" className="care-card rv"><h3>Druid Hills</h3><p>Memory Care</p></Link>
          </div>
        </div>
      </section>

      <section className="bigcta" id="contact">
        <div className="wrap">
          <h2>Let&apos;s talk about your loved one&apos;s care</h2>
          <p>A friendly, no-pressure conversation about specialized memory care.</p>
          <a className="num" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          <div className="hrs">Open 8am &ndash; 8pm, 7 days</div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
