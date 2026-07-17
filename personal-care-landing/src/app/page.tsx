import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { PHONE_DISPLAY, PHONE_TEL, HOURS } from "@/lib/site";

const TICKER = [
  "Lifts & transfers",
  "Stand-by assist",
  "Workout spotting",
  "Wheelchair & walker",
  "Fall response",
  "Overnight care",
  "Drives & errands",
  "Daily routines",
];

export default function Home() {
  return (
    <div className="site">
      <a className="skip" href="#form">
        Skip to the contact form
      </a>
      <SiteHeader />
      <Reveal />

      {/* hero */}
      <div className="hero" id="top">
        <div className="wrap">
          <div>
            <div className="label rise">Male caregivers · Built for the job</div>
            <h1 className="rise d1">
              He won&apos;t accept help.
              <span className="line2">He might accept this.</span>
            </h1>
            <p className="sub rise d2">
              Strong, experienced male caregivers for men in metro Atlanta.
              Lifting, transfers, workout support, daily routines — and company
              that doesn&apos;t feel like babysitting.
            </p>
            <div className="cta-row rise d3">
              <a className="btn" href="#form">
                Request a call back <span className="arr">→</span>
              </a>
              <a className="btn ghost" href="#how">
                See how it works
              </a>
            </div>
            <p className="phone-note rise d3">
              Prefer to talk? <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a> — a
              real person answers.
            </p>
          </div>

          <div className="rise d2">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* capability ticker */}
      <div className="ticker" aria-label="What our caregivers handle">
        <div className="ticker-track">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* he says he's fine */}
      <section className="fine-section">
        <div className="wrap fine-grid">
          <div className="photo tall has-img rev">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/caregiver-steps.png"
              alt="A male caregiver steadying an older man down his front steps toward the car, mid-conversation and at ease"
            />
          </div>
          <div className="fine-copy rev">
            <blockquote>
              &ldquo;He keeps saying he&apos;s fine. He&apos;s not fine. But he
              won&apos;t let anyone help him.&rdquo;
              <footer>— Every daughter and wife who calls us</footer>
            </blockquote>
            <p>
              <strong>He&apos;s not being stubborn — he&apos;s protecting his
              dignity.</strong>{" "}
              He doesn&apos;t want a stranger in his house. He doesn&apos;t want to
              be handled. And he definitely doesn&apos;t want to feel like
              someone&apos;s patient.
            </p>
            <p>
              That&apos;s why our caregivers for men are men — matched to his pace
              and his interests. Someone who can talk shop, spot his workout, drive
              him where he needs to go, and handle the physical work without making
              a thing of it.
            </p>
            <p>
              Most men who said &ldquo;absolutely not&rdquo; to care say yes to
              this. Because it doesn&apos;t feel like care. It feels like having a
              capable guy around.
            </p>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="services">
        <div className="wrap">
          <div className="label rev">What we do</div>
          <h2 className="rev">Three ways we show up.</h2>
          <div className="cards">
            <div className="card rev">
              <div className="num">01 / THE HEAVY WORK</div>
              <h3>Lifting &amp; mobility</h3>
              <p>
                The physical help most agencies can&apos;t safely provide. Our
                caregivers are selected for strength and trained to use it
                carefully.
              </p>
              <ul>
                <li>Transfers: bed, chair, car, toilet</li>
                <li>Shower and stair support</li>
                <li>Spotting workouts, on his therapist&apos;s plan</li>
                <li>Help up after a fall</li>
              </ul>
            </div>
            <div className="card rev">
              <div className="num">02 / THE DAILY ROUTINE</div>
              <h3>Personal care</h3>
              <p>
                Bathing, dressing, meals, medication reminders — handled
                man-to-man, matter-of-factly, with his privacy respected.
              </p>
              <ul>
                <li>Morning and evening routines</li>
                <li>Meals he&apos;ll actually eat</li>
                <li>Medication reminders</li>
              </ul>
            </div>
            <div className="card rev">
              <div className="num">03 / THE GOOD PART</div>
              <h3>Company &amp; errands</h3>
              <p>
                Not babysitting. A capable guy to ride shotgun — appointments, the
                club, the game on Saturday.
              </p>
              <ul>
                <li>The club, the course, his barbershop</li>
                <li>Drives, errands, and appointments</li>
                <li>Conversation worth having</li>
              </ul>
            </div>
          </div>
          <div className="photo wide has-img rev">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/caregiver-gym.png"
              alt="A male caregiver spotting an older man through a seated cable row in a bright home gym"
            />
          </div>
        </div>
      </section>

      {/* who this is for */}
      <section className="who">
        <div className="wrap">
          <div className="label rev">Who this is for</div>
          <h2 className="rev">Not one kind of man. One kind of respect.</h2>
          <p className="lede rev">
            Some of the men we serve are in their nineties. Some are younger than
            their caregivers. What they share is simple: they need real physical
            help, and they refuse to be treated like patients.
          </p>
          <div className="vignettes">
            <div className="vig rev">
              <div className="tag">The Athlete</div>
              <p>
                He competed at a high level and trained every day of his life.
                Paralysis changed what he needs — not who he is. His caregiver is a
                workout partner: hands-on help where it&apos;s needed, a spotter
                through the exercise plan his therapy team sets, and the energy of
                someone who trains, not someone who hovers.
              </p>
            </div>
            <div className="vig rev">
              <div className="tag">The Craftsman</div>
              <p>
                Decades of building things with his hands, and standards that never
                dropped even when his steadiness did. His caregiver keeps shop days
                going — moving the heavy stock, steadying the fine work, and staying
                out of the way of a man who knows exactly what he&apos;s doing.
              </p>
            </div>
            <div className="vig rev">
              <div className="tag">The Executive</div>
              <p>
                He ran companies. He&apos;s not about to be managed. His caregiver
                keeps the calendar on track, drives him to the club and his standing
                appointments, and handles transfers discreetly — help that operates
                like trusted staff, never like supervision.
              </p>
            </div>
          </div>
          <p className="composite rev">
            Profiles are composites drawn from the men we serve, with details
            changed to protect their privacy.
          </p>
        </div>
      </section>

      {/* matching */}
      <section className="match">
        <div className="wrap match-grid">
          <div className="rev">
            <div className="label">The match matters</div>
            <h2>We don&apos;t send a caregiver. We send the right one.</h2>
            <p className="lede">
              The reason this works isn&apos;t the service list — it&apos;s the man
              who shows up.
            </p>
          </div>
          <div className="rev">
            <div className="match-item">
              <div className="k">Matched to him</div>
              <p>
                Athlete? Veteran? Worked with his hands his whole life? We match
                caregivers by personality and interests, not just availability.
              </p>
            </div>
            <div className="match-item">
              <div className="k">Same face, every time</div>
              <p>
                One consistent caregiver — not a rotation of strangers. Trust is
                built by showing up.
              </p>
            </div>
            <div className="match-item">
              <div className="k">Fully vetted</div>
              <p>
                Background-checked, insured, and personally interviewed by our team
                before they ever meet your family. Discreet, professional, and at
                ease in fine homes.
              </p>
            </div>
            <div className="match-item">
              <div className="k">Private pay, no contracts</div>
              <p>
                Clear pricing before anything begins. Start, adjust, or stop on your
                schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* steps */}
      <section className="steps" id="how">
        <div className="wrap">
          <div className="label rev">Getting started</div>
          <h2 className="rev">Three steps. No paperwork maze.</h2>
          <div className="step-grid">
            <div className="step rev">
              <div className="n">01</div>
              <h3>You call us</h3>
              <p>
                Or fill the form. You&apos;ll talk to a real person who&apos;s had
                this exact conversation many times.
              </p>
            </div>
            <div className="step rev">
              <div className="n">02</div>
              <h3>We meet him</h3>
              <p>
                A low-key visit — no clipboard interrogation. We learn what he needs
                and what he&apos;ll actually accept.
              </p>
            </div>
            <div className="step rev">
              <div className="n">03</div>
              <h3>The right guy shows up</h3>
              <p>
                Care starts on a schedule that works, with a caregiver picked for
                him specifically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* areas + cta */}
      <section className="cta" id="contact">
        <div className="wrap">
          <div className="rev">
            <div className="label">Metro Atlanta</div>
            <h2>Start with one conversation.</h2>
            <p className="lede">
              Tell us what&apos;s going on. We&apos;ll tell you honestly whether we
              can help.
            </p>
            <p className="areas">
              Serving{" "}
              <b>
                Buckhead · Sandy Springs · Brookhaven · Druid Hills · Alpharetta
              </b>{" "}
              and surrounding communities.
            </p>
          </div>
          <div className="cta-box rev">
            <a className="phone-big" href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
            <p className="hours">Open {HOURS}</p>
            <a className="btn" href="#form">
              Or request a call online <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
