import { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Care for Men FAQ Atlanta | Elite Care Companion | Common Questions & Answers',
  description: 'Frequently asked questions about home care in Atlanta. Cost, safety, caregiver qualifications, and more. Get expert answers from Elite Care Companion. Call (470) 840-0575.',
  keywords: 'home care FAQ Atlanta, home care questions, home care cost Atlanta, caregiver background check, home care safety, how much does home care cost, private home care Atlanta',
  openGraph: {
    title: 'Care for Men FAQ Atlanta | Elite Care Companion',
    description: 'Get answers to common home care questions. Cost, safety, and caregiver qualifications in Atlanta metro area.',
    url: 'https://elitecarecompanion.com/home-care-faq',
    type: 'website',
    locale: 'en_US',
    siteName: 'Elite Care Companion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Care for Men FAQ Atlanta | Elite Care Companion',
    description: 'Frequently asked questions about home care services in Atlanta. Expert answers from Elite Care Companion.',
  }
};

export default function HomeCareFAQ() {
  return (
    <div className="site">
      <SiteHeader />
      <Reveal />

      <header className="page-hero">
        <div className="inner">
          <div className="k">Questions &amp; Answers</div>
          <h1>Care for Men — Questions &amp; Answers</h1>
          <p>Expert answers to the most common questions about home care services in Atlanta &mdash; from cost and getting started to safety and caregiver qualifications.</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#contact">Request a free call</a>
            <a className="btn btn-wire" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </header>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Cost &amp; Payment</div>
            <h2>Cost &amp; Payment Questions</h2>
            <p>The most common concerns about home care affordability and private-pay options.</p>
          </div>
          <div className="faq-list">
            <div className="faq-item rv">
              <h3>How much does care for men cost in Atlanta?</h3>
              <p>Companion visits start at $25/hr, hands-on personal and mobility care starts a bit higher, and live-in or 24-hour coverage is quoted per day. Your exact rate depends on the level of care, how many hours, and where he lives in metro Atlanta &mdash; so we give you one clear, all-in number during a free consultation. Private pay, no contracts, no hidden fees.</p>
            </div>
            <div className="faq-item rv">
              <h3>How does private-pay home care work?</h3>
              <p>Our services are private pay, which keeps things simple and flexible. There&apos;s no medical prescription, approval process, or paperwork to wait on &mdash; you decide the hours and schedule that fit your family, and you can adjust them anytime as needs change. We&apos;ll walk you through transparent pricing during your free consultation so there are no surprises.</p>
            </div>
            <div className="faq-item rv">
              <h3>Is home care cheaper than a nursing home?</h3>
              <p>For many families, yes &mdash; especially for moderate care needs. Home care keeps him in his own home with one-on-one attention, and you only pay for the hours he actually needs, so it often compares well to the flat daily rate of a facility with shared staff. We&apos;ll lay out the numbers plainly in your free consultation so you can compare with confidence.</p>
            </div>
            <div className="faq-item rv">
              <h3>Can I afford home care on a fixed income?</h3>
              <p>Many seniors on fixed incomes successfully manage home care costs through creative planning. Start small with 4&ndash;6 hours of companion care 2&ndash;3 times per week, use family cost-sharing where adult children contribute, draw on home equity, and schedule care flexibly so it&apos;s used only when most needed. We work with families to create sustainable, private-pay care plans that fit your budget.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Getting Started</div>
            <h2>Getting Started Questions</h2>
            <p>Common questions about beginning home care services.</p>
          </div>
          <div className="faq-list">
            <div className="faq-item rv">
              <h3>How quickly can home care start?</h3>
              <p>Elite Care Companion can typically start care within 24&ndash;48 hours. Same-day starts are possible for urgent situations like hospital discharge or a family emergency, standard requests take 24&ndash;48 hours after the initial consultation, complex needs take 2&ndash;3 days to find specialized caregivers, and live-in care takes 3&ndash;5 days for proper matching. We maintain a pool of available caregivers specifically for urgent placements.</p>
            </div>
            <div className="faq-item rv">
              <h3>What happens during the first consultation?</h3>
              <p>Our comprehensive assessment includes a home safety evaluation, a care needs assessment (personal care, mobility, medical, and social needs), a family discussion of goals and preferences, caregiver matching, schedule planning, and a clear walkthrough of private-pay options. The consultation typically takes 60&ndash;90 minutes and is always free with no obligation.</p>
            </div>
            <div className="faq-item rv">
              <h3>Do I need a doctor&apos;s order for home care?</h3>
              <p>No doctor&apos;s order is required for private-pay home care &mdash; no medical prescription is needed. We&apos;re happy to coordinate with your doctors and keep physicians informed of care plans, and medical input is always welcome because it helps us provide better care. You have the right to hire home care whenever you feel it would be beneficial.</p>
            </div>
            <div className="faq-item rv">
              <h3>What if my loved one refuses home care?</h3>
              <p>Resistance to home care is common. Our proven strategies include framing care as &quot;companionship,&quot; introducing visits gradually, focusing on enjoyable activities first, having a trusted family member present at the first meeting, offering a short trial period, and carefully matching caregiver personalities. Most resistance disappears once seniors experience the benefits of companionship and help.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Safety &amp; Trust</div>
            <h2>Safety &amp; Trust Questions</h2>
            <p>Ensuring caregiver quality and home security.</p>
          </div>
          <div className="faq-list">
            <div className="faq-item rv">
              <h3>How do you screen caregivers?</h3>
              <p>Elite Care Companion uses a comprehensive 7-step screening: criminal background checks (national and state-level), professional references, personal references, Social Security and work-authorization verification, driving record checks for caregivers who transport, a practical skills assessment, and an in-person interview evaluating personality, communication, and professionalism. Only about 1 in 20 applicants pass our complete screening process.</p>
            </div>
            <div className="faq-item rv">
              <h3>Are caregivers bonded?</h3>
              <p>Yes, all Elite Care Companion caregivers are fully vetted and backed by a surety bond for financial protection against theft or dishonesty, plus liability protection for accidents and professional mistakes. You receive documentation before care begins for your peace of mind.</p>
            </div>
            <div className="faq-item rv">
              <h3>What if I don&apos;t like the caregiver?</h3>
              <p>We guarantee caregiver compatibility. We offer no-question replacements, usually keep 2&ndash;3 backup caregivers available, let you meet potential caregivers before deciding, start with short trial visits to test compatibility, and welcome ongoing feedback &mdash; with no extra fees for caregiver changes. Your comfort and trust are essential, and we work until you&apos;re completely satisfied.</p>
            </div>
            <div className="faq-item rv">
              <h3>How do I protect my valuables and personal information?</h3>
              <p>Smart precautions help maintain security: lock away jewelry, cash, and important documents; provide keys or codes only as needed for care duties; monitor bank and credit card statements; limit caregiver access to sensitive personal data; establish clear boundaries about privacy; and keep family members informed about caregivers and routines. Reputable caregivers respect boundaries and often suggest these precautions themselves.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Services</div>
            <h2>Home Care Services Questions</h2>
            <p>Understanding what home care includes and doesn&apos;t include.</p>
          </div>
          <div className="faq-list">
            <div className="faq-item rv">
              <h3>What&apos;s the difference between companion care and personal care?</h3>
              <p>Companion care includes social interaction and conversation, light housekeeping and meal prep, transportation to appointments, medication reminders (not administration), recreational activities, and shopping and errands. Personal care adds bathing and shower assistance, dressing and grooming help, toileting and incontinence care, medication administration, mobility and transfer assistance, and basic medical care tasks. Most families start with companion care and add personal care as needs increase.</p>
            </div>
            <div className="faq-item rv">
              <h3>Can caregivers provide medical care?</h3>
              <p>Caregivers can provide basic medical support but not skilled nursing. Allowed tasks include medication reminders and administration, basic wound care, diabetic care, vitals monitoring, physical therapy exercise assistance, and post-surgery recovery support. Not allowed are IV medications, injections (except insulin), and complex wound care. For complex medical needs, we coordinate with licensed nurses, doctors, and therapists, and our caregivers receive specific medical-task training when required.</p>
            </div>
            <div className="faq-item rv">
              <h3>Do you provide 24-hour care?</h3>
              <p>Yes, we offer comprehensive 24-hour care options: live-in care with one caregiver staying in your home around the clock with time off for breaks, shift care with multiple caregivers working 8&ndash;12 hour shifts, same-day emergency coverage for hospital discharge or family emergencies, respite options to give family caregivers breaks, and flexible scheduling that adjusts as needs change. 24-hour care is essential for advanced dementia, post-surgery recovery, and high fall-risk situations.</p>
            </div>
            <div className="faq-item rv">
              <h3>What areas in Atlanta do you serve?</h3>
              <p>Elite Care Companion serves throughout the Atlanta metro area, with primary service in Buckhead, Sandy Springs, Brookhaven, Druid Hills, and Alpharetta, plus extended coverage in Roswell, Johns Creek, Vinings, Smyrna, Decatur, Avondale Estates, Dunwoody, and Chamblee. We may serve additional areas depending on specific needs &mdash; call to confirm availability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Family &amp; Communication</div>
            <h2>Family Concerns &amp; Communication</h2>
            <p>Managing family dynamics and care coordination.</p>
          </div>
          <div className="faq-list">
            <div className="faq-item rv">
              <h3>How do you keep family members informed?</h3>
              <p>We provide comprehensive family communication: daily written reports of care activities, meals, medications, and observations; regular phone updates; immediate emergency notifications for any safety or health concerns; care plan meetings to adjust care as needs change; and multiple contact options via email, phone, or text. We maintain HIPAA-compliant, secure communication that keeps family informed. Many adult children say our communication helps them worry less about their parents.</p>
            </div>
            <div className="faq-item rv">
              <h3>What if family members disagree about care needs?</h3>
              <p>Family disagreements about care are common. We help with an objective professional assessment that clarifies actual needs, neutrally facilitated family meetings, a gradual introduction of care to demonstrate benefits, education about safety risks and options, flexible trial periods, and clear documentation that tracks changes. Often, seeing positive results from care helps resolve family disagreements.</p>
            </div>
            <div className="faq-item rv">
              <h3>How do you handle long-distance family members?</h3>
              <p>We offer special support for families living far from Atlanta: video calls that include distant family in care meetings, extra detailed reporting, clear emergency protocols, photo updates of activities and general wellbeing, flexible scheduling during family visits, and professional coordination with out-of-state family and professionals. We understand the stress of caring for parents from a distance and provide extra support.</p>
            </div>
            <div className="faq-item rv">
              <h3>What about privacy and family matters?</h3>
              <p>We maintain strict confidentiality while ensuring safety. Caregivers are trained in confidentiality and boundaries, information is shared only with authorized family members, we handle safety concerns sensitively, we respect family preferences about what to share and with whom, and all staff understand HIPAA and privacy requirements. Clients often share personal information with trusted caregivers, and we handle it with the utmost respect.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt" id="contact">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Get In Touch</div>
            <h2>Get Answers to Your Home Care Questions</h2>
            <p>Call for expert guidance or schedule a free consultation.</p>
          </div>
          <div className="rv">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bigcta">
        <div className="wrap">
          <h2>Let&apos;s talk about the care he needs</h2>
          <p>A friendly, no-pressure conversation about your home care questions.</p>
          <a className="num" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          <div className="hrs">Open 8am &ndash; 8pm, 7 days</div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
