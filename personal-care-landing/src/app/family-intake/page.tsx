import { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import FamilyIntakeForm from '@/components/FamilyIntakeForm';

export const metadata: Metadata = {
  title: 'Family Care Intake Form | Elite Care Companion',
  description: 'Tell us about him — his care needs, his routines, and the things that make him who he is. Private-pay in-home care for men in metro Atlanta.',
  robots: { index: false, follow: false },
};

export default function FamilyIntakePage() {
  return (
    <div className="site">
      <SiteHeader />
      <Reveal />

      <header className="page-hero">
        <div className="inner">
          <div className="k">Family Intake · Confidential</div>
          <h1>Tell Us About Him</h1>
          <p>
            A few minutes now saves a lot of back-and-forth later. Everything you share stays
            between your family and our care team.
          </p>
        </div>
      </header>

      <section className="sec">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <FamilyIntakeForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
