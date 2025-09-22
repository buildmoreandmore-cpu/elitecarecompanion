import Link from "next/link";
import Footer from "../../components/Footer";

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-200">
            Last Updated: December 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              Homeowner Support ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">We may collect personal information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Name, email address, phone number</li>
              <li>Property address and details</li>
              <li>Financial information relevant to your mortgage or property</li>
              <li>Credit information (with your consent)</li>
              <li>Employment and income information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-6">
              When you visit our website, we may automatically collect certain information about your device, including your IP address, browser type, operating system, and browsing behavior.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Provide and improve our services</li>
              <li>Evaluate your eligibility for our programs</li>
              <li>Communicate with you about your inquiry or application</li>
              <li>Send you important updates and information</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and unauthorized activities</li>
              <li>Analyze and improve our website and services</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">4. How We Share Your Information</h2>
            <p className="text-gray-700 mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Service Providers:</strong> Third parties who perform services on our behalf</li>
              <li><strong>Lenders and Financial Institutions:</strong> To facilitate mortgage assistance and loan modifications</li>
              <li><strong>Real Estate Professionals:</strong> When necessary to provide our services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale, or transfer of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly agree to the sharing</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct or update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict certain processing</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings and other tools.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not directed to individuals under 18 years of age, and we do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">If you have questions about this Privacy Policy, please contact us at:</p>
            <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
              <p className="font-semibold">Homeowner Support</p>
              <p>Financial Plaza, Suite 200</p>
              <p>Atlanta, GA 30309</p>
              <p>Phone: (770) 752-2509</p>
              <p>Email: help@homeownersupport.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}