import Link from "next/link";
import Footer from "../../components/Footer";

export default function CompliancePage() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Compliance & Regulations</h1>
          <p className="text-xl text-blue-200">
            Our commitment to regulatory compliance and consumer protection.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Regulatory Compliance Framework</h2>
            <p className="text-gray-700 mb-8">
              Homeowner Support operates under strict compliance protocols to ensure all services meet or exceed federal and state regulatory requirements. Our comprehensive compliance program protects consumers and maintains the integrity of our operations.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Federal Compliance</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Fair Housing Act (FHA)</h4>
                    <p className="text-gray-700">Ensures equal housing opportunities regardless of race, color, religion, sex, familial status, national origin, or disability.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Real Estate Settlement Procedures Act (RESPA)</h4>
                    <p className="text-gray-700">Provides consumers with improved disclosures of settlement costs and eliminates kickbacks and referral fees.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Truth in Lending Act (TILA)</h4>
                    <p className="text-gray-700">Requires disclosure of credit terms and promotes informed use of consumer credit.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Fair Credit Reporting Act (FCRA)</h4>
                    <p className="text-gray-700">Regulates the collection, dissemination, and use of consumer information.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">State Regulations</h3>
                <p className="text-gray-700 mb-4">
                  We comply with all applicable state laws and regulations in jurisdictions where we operate, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>State real estate licensing requirements</li>
                  <li>Mortgage broker and lender regulations</li>
                  <li>Consumer protection statutes</li>
                  <li>Foreclosure and mortgage assistance laws</li>
                  <li>Financial services regulations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Consumer Protection Measures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Transparent Disclosure</h4>
                    <p className="text-gray-700 text-sm">All fees, terms, and conditions are clearly disclosed before any agreement.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">No Advance Fees</h4>
                    <p className="text-gray-700 text-sm">We do not charge upfront fees for consultations or most services.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Right to Cancel</h4>
                    <p className="text-gray-700 text-sm">Appropriate cancellation periods are provided per applicable regulations.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Privacy Protection</h4>
                    <p className="text-gray-700 text-sm">Strict data security measures protect your personal information.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Quality Assurance</h3>
                <p className="text-gray-700 mb-4">Our quality assurance program includes:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Regular compliance audits and reviews</li>
                  <li>Staff training on regulatory requirements</li>
                  <li>Document and process standardization</li>
                  <li>Client feedback and complaint resolution systems</li>
                  <li>Continuous monitoring of regulatory changes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Ethical Standards</h3>
                <p className="text-gray-700 mb-4">We maintain the highest ethical standards through:</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-900 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Honest and transparent communication</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-900 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Confidentiality of client information</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-900 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Conflicts of interest management</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-900 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Professional competence and diligence</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-900 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Fair dealing with all parties</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Reporting and Complaints</h3>
                <p className="text-gray-700 mb-4">
                  If you have concerns about our compliance with applicable laws or regulations, please contact our compliance department:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Compliance Department</strong><br />
                    Homeowner Support<br />
                    Financial Plaza, Suite 200<br />
                    Atlanta, GA 30309<br />
                    Phone: (770) 752-2509<br />
                    Email: compliance@homeownersupport.com
                  </p>
                </div>
                <p className="text-gray-700 mt-4 text-sm">
                  All complaints are investigated promptly and confidentially. We are committed to resolving any issues in accordance with applicable regulations and our ethical standards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Regulatory Resources</h3>
                <p className="text-gray-700 mb-4">For more information about consumer rights and protections:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Consumer Financial Protection Bureau (CFPB): consumerfinance.gov</li>
                  <li>Federal Trade Commission (FTC): ftc.gov</li>
                  <li>HUD Office of Fair Housing: hud.gov/fairhousing</li>
                  <li>Georgia Department of Banking and Finance: dbf.georgia.gov</li>
                  <li>Georgia Real Estate Commission: grec.state.ga.us</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-100 rounded-lg">
              <p className="text-sm text-gray-700 text-center">
                <strong>This information is current as of December 2024.</strong><br />
                Regulatory requirements may change. We continuously monitor and update our compliance practices to reflect current law.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}