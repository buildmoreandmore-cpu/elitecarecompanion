import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { PHONE_DISPLAY, PHONE_TEL, HOURS } from "@/lib/site";

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
              Strong, experienced male caregivers for older men in metro Atlanta.
              Lifting, transfers, daily routines — and company that doesn&apos;t
              feel like babysitting.
            </p>
            <div className="cta-row rise d3">
              <a className="btn" href="#form">
                Request a call back
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

      {/* capability plate — straddles the hero seam */}
      <div className="plate-section">
        <div className="wrap">
          <div className="plate">
            <span className="rivet-b" />
            <div className="plate-head">
              What our caregivers are equipped to handle
            </div>
            <div className="plate-grid">
              <div className="plate-item">
                <h3>Lifts &amp; transfers</h3>
                <p>
                  Bed to chair, chair to car — done safely by caregivers strong
                  enough to do it right.
                </p>
              </div>
              <div className="plate-item">
                <h3>Stand-by assist</h3>
                <p>
                  Steady support in the shower, on stairs, and anywhere balance
                  gets uncertain.
                </p>
              </div>
              <div className="plate-item">
                <h3>Wheelchair &amp; walker</h3>
                <p>
                  Confident help with mobility equipment, at home and out in the
                  world.
                </p>
              </div>
              <div className="plate-item">
                <h3>Fall response</h3>
                <p>
                  If he goes down, his caregiver can help him up — safely, without
                  making it an emergency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* he says he's fine */}
      <section className="fine-section">
        <div className="wrap fine-grid">
          <div className="photo tall has-img rv">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/caregiver-porch.png"
              alt="A male caregiver walking an older man down his porch steps to the truck, mid-conversation and at ease"
            />
          </div>
          <div className="fine-copy rv">
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
              and his interests. Someone who can talk shop, watch the game, drive
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
          <div className="label">What we do</div>
          <h2>Three ways we show up.</h2>
          <div className="cards">
            <div className="card rv">
              <div className="tag">The heavy work</div>
              <h3>Lifting &amp; mobility</h3>
              <p>
                The physical help most agencies can&apos;t safely provide. Our
                caregivers are selected for strength and trained to use it
                carefully.
              </p>
              <ul>
                <li>Transfers: bed, chair, car, toilet</li>
                <li>Shower and stair support</li>
                <li>Help up after a fall</li>
              </ul>
            </div>
            <div className="card rv">
              <div className="tag">The daily routine</div>
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
            <div className="card rv">
              <div className="tag">The good part</div>
              <h3>Company &amp; errands</h3>
              <p>
                Not babysitting. A capable guy to ride shotgun — errands,
                appointments, the barbershop, the game on Saturday.
              </p>
              <ul>
                <li>Drives and appointments</li>
                <li>Errands and the hardware store</li>
                <li>Conversation worth having</li>
              </ul>
            </div>
          </div>
          <div className="photo wide rv">
            <span>
              Photo: caregiver and client in the garage or workshop, working on
              something together — or side by side at a diner counter. Candid over
              posed.
            </span>
          </div>
        </div>
      </section>

      {/* matching */}
      <section className="match">
        <div className="wrap match-grid">
          <div>
            <div className="label">The match matters</div>
            <h2>We don&apos;t send a caregiver. We send the right one.</h2>
            <p className="lede">
              The reason this works isn&apos;t the service list — it&apos;s the man
              who shows up.
            </p>
          </div>
          <div>
            <div className="match-item rv">
              <div className="k">Matched to him</div>
              <p>
                Veteran? Ball fan? Worked with his hands his whole life? We match
                caregivers by personality and interests, not just availability.
              </p>
            </div>
            <div className="match-item rv">
              <div className="k">Same face, every time</div>
              <p>
                One consistent caregiver — not a rotation of strangers. Trust is
                built by showing up.
              </p>
            </div>
            <div className="match-item rv">
              <div className="k">Fully vetted</div>
              <p>
                Background-checked, experienced, and personally interviewed by our
                team before they ever meet your family.
              </p>
            </div>
            <div className="match-item rv">
              <div className="k">Private pay, no contracts</div>
              <p>
                Clear pricing before anything begins. Start, adjust, or stop on
                your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* steps */}
      <section className="steps" id="how">
        <div className="wrap">
          <div className="label">Getting started</div>
          <h2>Three steps. No paperwork maze.</h2>
          <div className="step-grid">
            <div className="step rv">
              <div className="n">STEP 1</div>
              <h3>You call us</h3>
              <p>
                Or fill the form. You&apos;ll talk to a real person who&apos;s had
                this exact conversation many times.
              </p>
            </div>
            <div className="step rv">
              <div className="n">STEP 2</div>
              <h3>We meet him</h3>
              <p>
                A low-key visit — no clipboard interrogation. We learn what he
                needs and what he&apos;ll actually accept.
              </p>
            </div>
            <div className="step rv">
              <div className="n">STEP 3</div>
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
          <div>
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
          <div className="cta-box">
            <a className="phone-big" href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
            <p className="hours">Open {HOURS}</p>
            <a className="btn dark" href="#form">
              Or request a call online
            </a>
          </div>
        </div>
      </section>

      <div className="brass-rule" />
      <SiteFooter />
    </div>
  );
}
