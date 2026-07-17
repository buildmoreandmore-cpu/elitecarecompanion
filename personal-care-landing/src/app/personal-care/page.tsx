import { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Personal Care for Older Men in Atlanta | Elite Care Companion | Bathing & Personal Hygiene',
  description: 'Professional personal care services in Atlanta. Bathing, dressing, toileting, medication management, mobility assistance. Dignified, compassionate care preserving independence. Call (470) 507-8812.',
  keywords: 'personal care Atlanta, bathing assistance Atlanta, elderly personal care, senior bathing services, personal hygiene care, mobility assistance Atlanta, medication management, toileting assistance, dressing help seniors, personal care aide Atlanta',
  openGraph: {
    title: 'Personal Care for Older Men in Atlanta | Elite Care Companion',
    description: 'Professional personal care throughout Atlanta metro. Bathing, dressing, and personal hygiene assistance with dignity and compassion.',
    url: 'https://elitecarecompanion.com/personal-care',
    type: 'website',
    locale: 'en_US',
    siteName: 'Elite Care Companion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Care for Older Men in Atlanta | Elite Care Companion',
    description: 'Professional personal care in Atlanta. Bathing, dressing, and mobility assistance. Call (470) 507-8812.',
  }
};

export default function PersonalCare() {
  return (
    <div className="site">
      <SiteHeader />
      <Reveal />

      <header className="page-hero">
        <div className="inner">
          <div className="k">Personal Care for Men · Metro Atlanta</div>
          <h1>Personal Care for Older Men</h1>
          <p>
            Dignified assistance with bathing, dressing, toileting, and personal hygiene —
            preserving independence while ensuring safety and comfort.
          </p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Request a free call</a>
            <a className="btn btn-wire" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </header>

      {/* Understanding Personal Care */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">What It Is</div>
            <h2>What Is Personal Care?</h2>
            <p>
              Professional assistance with activities of daily living (ADLs) that preserve dignity
              while ensuring safety, comfort, and hygiene.
            </p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Bathing &amp; Hygiene</h3>
              <ul>
                <li>Safe shower and tub assistance</li>
                <li>Body washing and hair care</li>
                <li>Oral hygiene and denture care</li>
                <li>Nail trimming and foot care</li>
                <li>Skin care and moisturizing</li>
                <li>Shaving assistance</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Dressing &amp; Grooming</h3>
              <ul>
                <li>Assistance selecting appropriate clothing</li>
                <li>Help with buttons, zippers, and fasteners</li>
                <li>Putting on and removing garments</li>
                <li>Hair styling and makeup application</li>
                <li>Jewelry and accessory assistance</li>
                <li>Seasonal clothing transitions</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Toileting &amp; Incontinence</h3>
              <ul>
                <li>Bathroom transfer assistance</li>
                <li>Toileting safety and positioning</li>
                <li>Incontinence care and cleanup</li>
                <li>Adult diaper changes</li>
                <li>Catheter and ostomy care</li>
                <li>Bathroom safety monitoring</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Mobility &amp; Transfers</h3>
              <ul>
                <li>Safe transfers from bed to wheelchair</li>
                <li>Walking assistance and stability support</li>
                <li>Positioning and turning in bed</li>
                <li>Fall prevention and safety measures</li>
                <li>Assistive device support</li>
                <li>Range of motion exercises</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Medication Management</h3>
              <ul>
                <li>Medication administration and monitoring</li>
                <li>Pill organization and reminders</li>
                <li>Prescription pickup and management</li>
                <li>Side effect observation and reporting</li>
                <li>Communication with healthcare providers</li>
                <li>Emergency medication protocols</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Specialized Medical Care</h3>
              <ul>
                <li>Wound care and dressing changes</li>
                <li>Vital sign monitoring</li>
                <li>Diabetic care and blood sugar monitoring</li>
                <li>Physical therapy exercise assistance</li>
                <li>Post-surgery care and recovery support</li>
                <li>Chronic condition management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When Personal Care Is Needed */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">When To Consider It</div>
            <h2>Signs Personal Care Services Are Needed</h2>
            <p>
              Recognizing when professional assistance becomes necessary for safety, dignity, and
              quality of life.
            </p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Physical Signs &amp; Safety Concerns</h3>
              <ul>
                <li><strong>Bathing safety issues</strong> — difficulty getting in/out of the tub, fear of falling, skipping baths, or poor personal hygiene</li>
                <li><strong>Mobility challenges</strong> — difficulty standing, walking, or moving around safely; recent falls or near-falls</li>
                <li><strong>Dressing difficulties</strong> — struggling with buttons, zippers, or shoelaces; wearing the same clothes repeatedly</li>
                <li><strong>Toileting accidents</strong> — incontinence issues, difficulty reaching the bathroom in time, or safety concerns</li>
                <li><strong>Medication errors</strong> — missing doses, taking wrong amounts, or confusion about multiple medications</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Health Conditions Requiring Personal Care</h3>
              <ul>
                <li><strong>Post-surgery recovery</strong> — hip/knee replacements, cardiac procedures, or other surgeries requiring temporary intensive assistance</li>
                <li><strong>Stroke recovery</strong> — weakness on one side, speech difficulties, or cognitive changes affecting daily activities</li>
                <li><strong>Arthritis &amp; joint problems</strong> — severe pain, stiffness, or limited range of motion affecting basic care tasks</li>
                <li><strong>Parkinson&apos;s disease</strong> — tremors, balance issues, or difficulty with fine motor skills</li>
                <li><strong>Early-stage dementia</strong> — memory issues affecting personal care routines, safety awareness, or medication management</li>
                <li><strong>Chronic conditions</strong> — diabetes, COPD, heart conditions, or other illnesses requiring daily care management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dignity and Respect in Personal Care */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Dignity First</div>
            <h2>Preserving Dignity in Personal Care</h2>
            <p>
              Our approach prioritizes respect, privacy, and individual preferences while ensuring
              safety and professional care.
            </p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Our Dignity-First Approach</h3>
              <ul>
                <li><strong>Privacy protection</strong> — maintaining modesty during personal care, using appropriate draping, and respecting boundaries</li>
                <li><strong>Choice &amp; control</strong> — involving clients in decisions about their care and encouraging independence where possible</li>
                <li><strong>Respectful communication</strong> — using appropriate language, explaining procedures, and treating each person as a valued individual</li>
                <li><strong>Skill &amp; competence</strong> — trained, experienced caregivers who perform tasks efficiently and safely</li>
                <li><strong>Cultural sensitivity</strong> — respecting cultural preferences, religious considerations, and individual traditions</li>
              </ul>
            </div>

            <div className="care-card rv">
              <h3>Common Concerns &amp; Our Solutions</h3>
              <p><strong>&ldquo;I&apos;m embarrassed about needing help.&rdquo;</strong> Our caregivers are professionals who understand that needing help is normal. We approach personal care with the same professionalism as medical staff, helping you maintain dignity while staying safe.</p>
              <p><strong>&ldquo;I want to maintain my independence.&rdquo;</strong> We encourage you to do what you can independently and assist only where needed. Our goal is to help you stay in your home safely, not to take over.</p>
              <p><strong>&ldquo;I&apos;m worried about having strangers in my home.&rdquo;</strong> All caregivers are thoroughly background-checked, bonded, and experienced. We provide meet-and-greet opportunities to ensure compatibility before starting care.</p>
              <p><strong>&ldquo;What if my needs change?&rdquo;</strong> We regularly reassess care needs and adjust services accordingly. Our flexible approach means we can increase or decrease care as your situation changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Care Levels and Pricing */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Service Levels</div>
            <h2>Personal Care Service Levels</h2>
            <p>Flexible care options that match your specific needs and budget. All rates are simple, private pay with no hidden fees.</p>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Light Personal Care</h3>
              <p><strong>Starting at $28/hr · 2–6 hours as needed</strong> — perfect for early needs.</p>
              <ul>
                <li>Medication reminders and organization</li>
                <li>Dressing assistance and clothing selection</li>
                <li>Grooming and basic hygiene support</li>
                <li>Light mobility assistance</li>
                <li>Companionship during personal care</li>
              </ul>
              <p><strong>Ideal for:</strong> mild arthritis or joint stiffness, early mobility challenges, medication support, and transitioning to needing more help.</p>
            </div>

            <div className="care-card rv">
              <h3>Full Personal Care</h3>
              <p><strong>Starting at $32/hr · 4–12 hours daily</strong> — our most comprehensive option.</p>
              <ul>
                <li>Complete bathing and shower assistance</li>
                <li>Toileting and incontinence care</li>
                <li>Mobility and transfer assistance</li>
                <li>Medication administration</li>
                <li>Wound care and basic medical tasks</li>
                <li>Exercise and physical therapy support</li>
              </ul>
              <p><strong>Ideal for:</strong> post-surgery recovery, stroke or chronic illness, significant mobility limitations, and complex medication schedules.</p>
            </div>

            <div className="care-card rv">
              <h3>Specialized Medical Care</h3>
              <p><strong>Starting at $38/hr · Certified nursing assistants</strong> — for complex medical needs.</p>
              <ul>
                <li>Advanced wound care and dressing changes</li>
                <li>Catheter and ostomy care</li>
                <li>Blood sugar monitoring and insulin</li>
                <li>Vital sign monitoring and charting</li>
                <li>Communication with medical teams</li>
                <li>End-of-life comfort care</li>
              </ul>
              <p><strong>Ideal for:</strong> complex chronic conditions, post-hospitalization care, advanced diabetes or heart conditions, and hospice and palliative care.</p>
            </div>
          </div>

          <div className="card-grid">
            <div className="care-card rv">
              <h3>Trained &amp; Certified</h3>
              <p>Certified caregivers with dedicated personal care training.</p>
            </div>
            <div className="care-card rv">
              <h3>Privacy &amp; Dignity</h3>
              <p>A respectful, professional personal care approach in every visit.</p>
            </div>
            <div className="care-card rv">
              <h3>Flexible Scheduling</h3>
              <p>Adaptable to changing needs and preferences.</p>
            </div>
            <div className="care-card rv">
              <h3>Family Communication</h3>
              <p>Regular updates and care coordination with your family.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Links */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Related Services</div>
            <h2>Complete Care Solutions</h2>
            <p>Personal care can be combined with other services for comprehensive support.</p>
          </div>

          <div className="card-grid">
            <a href="/24-hour-care" className="care-card rv">
              <h3>24-Hour Personal Care</h3>
              <p>Round-the-clock personal care for those who need constant assistance with daily activities.</p>
            </a>

            <a href="/companion-care" className="care-card rv">
              <h3>Personal Care + Companionship</h3>
              <p>Combine personal care assistance with social interaction and emotional support.</p>
            </a>

            <a href="/dementia-care" className="care-card rv">
              <h3>Dementia Personal Care</h3>
              <p>Specialized personal care techniques for clients with memory loss and cognitive challenges.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="sec alt" id="contact">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Get Started</div>
            <h2>Start Personal Care Services Today</h2>
            <p>Call for a free, confidential assessment of personal care needs. Your assessment includes a safety evaluation, bathing assessment, medication review, caregiver matching, and a care plan tailored to your loved one.</p>
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
