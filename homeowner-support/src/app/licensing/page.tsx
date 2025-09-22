import Link from "next/link";
import Footer from "../../components/Footer";

export default function LicensingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-900">Homeowner Support</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/#services" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/#success" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Success Stories</Link>
                <span className="text-blue-900 font-semibold">(770) 752-2509</span>
                <Link href="/contact" className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800">
                  Get free consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Licensing & Certifications</h1>
          <p className="text-xl text-blue-200">
            Our commitment to professional excellence and regulatory compliance.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Professional Licensing</h2>
            <p className="text-gray-700 mb-8">
              Homeowner Support operates with a team of licensed professionals committed to maintaining the highest standards of service and ethical conduct in the real estate and financial services industries.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Real Estate Licensing</h3>
                <p className="text-gray-700 mb-4">
                  Our real estate professionals are licensed in accordance with state requirements. We maintain active licenses and complete all required continuing education to stay current with industry regulations and best practices.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Georgia Real Estate Commission</strong><br />
                    Licensed Real Estate Professionals<br />
                    Continuing Education Compliant
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Financial Services</h3>
                <p className="text-gray-700 mb-4">
                  Our financial advisors and mortgage specialists maintain appropriate certifications and comply with all federal and state regulations governing financial services.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Financial Professional Standards</strong><br />
                    Certified Financial Counselors<br />
                    HUD-Approved Housing Counseling Agency Affiliated
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Industry Memberships</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>National Association of Realtors (NAR)</li>
                  <li>Georgia Association of Realtors</li>
                  <li>Better Business Bureau (A+ Rating)</li>
                  <li>National Association of Mortgage Brokers</li>
                  <li>American Financial Services Association</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Compliance & Ethics</h3>
                <p className="text-gray-700 mb-4">
                  We adhere to strict ethical guidelines and comply with all applicable laws and regulations including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Fair Housing Act</li>
                  <li>Equal Credit Opportunity Act</li>
                  <li>Real Estate Settlement Procedures Act (RESPA)</li>
                  <li>Truth in Lending Act (TILA)</li>
                  <li>Gramm-Leach-Bliley Act (GLBA)</li>
                  <li>Fair Credit Reporting Act (FCRA)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Continuing Education</h3>
                <p className="text-gray-700 mb-4">
                  Our team regularly participates in continuing education programs to stay informed about:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Changes in foreclosure laws and regulations</li>
                  <li>New mortgage assistance programs</li>
                  <li>Fair lending practices</li>
                  <li>Consumer protection requirements</li>
                  <li>Ethics and professional standards</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Verification</h3>
                <p className="text-gray-700 mb-4">
                  For verification of our professional licenses and certifications, please contact:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Homeowner Support Compliance Department</strong><br />
                    Financial Plaza, Suite 200<br />
                    Atlanta, GA 30309<br />
                    Phone: (770) 752-2509<br />
                    Email: compliance@homeownersupport.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-100 rounded-lg">
              <p className="text-sm text-gray-700 text-center">
                <strong>Equal Housing Opportunity</strong><br />
                We are committed to fair housing practices and do not discriminate based on race, color, religion, sex, handicap, familial status, or national origin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}