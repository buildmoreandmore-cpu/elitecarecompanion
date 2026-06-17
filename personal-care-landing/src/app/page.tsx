import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { PHONE_DISPLAY, PHONE_TEL, HOURS, SERVICE_AREAS } from "@/lib/site";

export default function Home() {
  return (
    <div className="site">
      <a className="skip" href="#form">
        Skip to the contact form
      </a>
      <SiteHeader />
      <Reveal />

      {/* hero */}
      <header className="hero" id="top">
        <div className="wrap">
          <div>
            <span className="eyebrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6C19 16.4 12 21 12 21Z" />
              </svg>
              Trusted care for someone you love
            </span>
            <h1>
              Gentle, dependable care for your loved one — <em>right at home.</em>
            </h1>
            <p className="sub">
              When the person who always cared for you needs care themselves,
              we&apos;re here to help — with kindness, patience, and people you can
              trust.
            </p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="#form">
                Request a free call
              </a>
              <a className="btn btn-wire" href="#services">
                See how we help
              </a>
            </div>
            <div className="hero-call">
              <a className="num" href={`tel:${PHONE_TEL}`}>
                {PHONE_DISPLAY}
              </a>
              <span className="small">
                Prefer to talk?
                <br />
                Call us — we answer.
              </span>
            </div>
          </div>

          <ContactForm />
        </div>
      </header>

      {/* trust strip */}
      <div className="trust">
        <div className="row">
          <div className="item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6C19 16.4 12 21 12 21Z" />
            </svg>{" "}
            Locally owned in metro Atlanta
          </div>
          <div className="item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="9" />
            </svg>{" "}
            Simple private pay — no contracts
          </div>
          <div className="item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
            </svg>{" "}
            Caring, experienced caregivers
          </div>
        </div>
      </div>

      {/* services */}
      <section className="sec" id="services">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">How we help</div>
            <h2>Care that fits your family&apos;s life</h2>
            <p>
              Whatever your loved one needs, we make it simple — and we treat them
              like our own.
            </p>
          </div>
          <div className="svc-grid">
            <div className="svc rv">
              <div className="ic">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M3 12a9 9 0 0 0 9 9 7 7 0 0 1-2-13.5A9 9 0 0 0 3 12Z" />
                </svg>
              </div>
              <h3>Overnight Care</h3>
              <p>
                Restful nights for everyone. A caregiver stays through the night so
                your loved one is safe and you can sleep.
              </p>
            </div>
            <div className="svc rv">
              <div className="ic">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                  <circle cx="4" cy="12" r="1.6" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <h3>Travel Companion</h3>
              <p>
                Going to see family or a doctor out of town? We travel alongside your
                loved one, handling the details with care.
              </p>
            </div>
            <div className="svc rv">
              <div className="ic">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <circle cx="12" cy="7" r="3.4" />
                  <path d="M5 21c1.4-4.4 4.6-6.5 7-6.5s5.6 2.1 7 6.5" />
                </svg>
              </div>
              <h3>Daily Personal Care</h3>
              <p>
                Bathing, dressing, meals, medication reminders, and gentle
                companionship — help with the everyday, done with dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* why */}
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Why families choose us</div>
            <h2>Care you can feel good about</h2>
          </div>
          <div className="why-grid">
            {[
              {
                h: "Real people, not a call center",
                p: "When you call, you reach a caring person who listens — not a machine or a menu.",
              },
              {
                h: "Simple, private pay",
                p: "No red tape. Clear, honest pricing you'll understand before anything begins.",
              },
              {
                h: "Carefully chosen caregivers",
                p: "Experienced, background-checked, and matched to your loved one's personality and needs.",
              },
              {
                h: "Right here in your community",
                p: "Locally owned and serving metro Atlanta — we know the area because it's home for us too.",
              },
            ].map((w) => (
              <div className="why rv" key={w.h}>
                <div className="ck">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                </div>
                <div>
                  <h3>{w.h}</h3>
                  <p>{w.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head rv">
            <div className="k">Getting started is easy</div>
            <h2>Three simple steps</h2>
          </div>
          <div className="steps">
            <div className="stp rv">
              <div className="n">1</div>
              <h3>Call or fill the form</h3>
              <p>Reach out however is easiest for you. There&apos;s no cost to ask.</p>
            </div>
            <div className="stp rv">
              <div className="n">2</div>
              <h3>We listen</h3>
              <p>
                We learn about your loved one and answer all of your questions,
                gently and clearly.
              </p>
            </div>
            <div className="stp rv">
              <div className="n">3</div>
              <h3>Care begins</h3>
              <p>
                We match a caregiver and start on a schedule that works for your
                family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* areas */}
      <section className="sec alt areas">
        <div className="wrap">
          <div className="sec-head rv" style={{ marginBottom: 10 }}>
            <div className="k">Where we serve</div>
            <h2>Proudly caring for families across metro Atlanta</h2>
          </div>
          <div className="area-list rv">
            {SERVICE_AREAS.map((a) => (
              <Link className="area" href={`/${a.slug}`} key={a.slug}>
                {a.name}
              </Link>
            ))}
          </div>
          <p className="more rv">
            …and the surrounding communities. Not sure if we cover your area? Just
            give us a call — we&apos;re happy to help.
          </p>
        </div>
      </section>

      {/* big CTA */}
      <section className="bigcta" id="contact">
        <div className="wrap">
          <h2>Let&apos;s talk about your loved one&apos;s care</h2>
          <p>
            A friendly, no-pressure conversation. We&apos;re here to help you find the
            right path forward.
          </p>
          <a className="num" href={`tel:${PHONE_TEL}`}>
            {PHONE_DISPLAY}
          </a>
          <div className="hrs">Open {HOURS}</div>
          <div>
            <a className="btn btn-gold" href="#form">
              Or request a call online
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
