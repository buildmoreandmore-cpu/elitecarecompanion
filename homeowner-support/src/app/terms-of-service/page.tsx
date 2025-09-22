import Link from "next/link";
import Footer from "../../components/Footer";

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-xl text-blue-200">
            Last Updated: December 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing or using Homeowner Support's website and services, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, then you may not access our services.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Services Description</h2>
            <p className="text-gray-700 mb-6">
              Homeowner Support provides foreclosure prevention, mortgage assistance, property purchase, and financial consulting services. Our services are informational and consultative in nature. We are not a law firm and do not provide legal advice.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Eligibility</h2>
            <p className="text-gray-700 mb-6">
              You must be at least 18 years old and have the legal capacity to enter into contracts to use our services. By using our services, you represent and warrant that you meet these eligibility requirements.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">4. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">When using our services, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the confidentiality of your account information</li>
              <li>Promptly update any changes to your information</li>
              <li>Be responsible for all activities under your account</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
              <li>Not violate any laws in your jurisdiction</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Our Services</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation Services</h3>
            <p className="text-gray-700 mb-4">
              We provide free initial consultations to evaluate your situation. Subsequent services may require fees as disclosed during the consultation process.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">No Guarantee of Results</h3>
            <p className="text-gray-700 mb-6">
              While we strive to achieve the best possible outcomes, we cannot guarantee specific results. Each situation is unique, and outcomes depend on various factors including lender cooperation, legal requirements, and your financial circumstances.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">6. Fees and Payment</h2>
            <p className="text-gray-700 mb-6">
              Our fee structure will be clearly disclosed before you commit to any paid services. We do not charge upfront fees for consultations. Any applicable fees will be explained in a separate service agreement.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All content on our website, including text, graphics, logos, and software, is the property of Homeowner Support and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">8. Privacy</h2>
            <p className="text-gray-700 mb-6">
              Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal information.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">9. Disclaimers</h2>
            <p className="text-gray-700 mb-6">
              OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-gray-700 mb-6">
              We are not responsible for any decisions you make based on information provided through our services. You should consult with appropriate professionals for legal, tax, and financial advice specific to your situation.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, HOMEOWNER SUPPORT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">11. Indemnification</h2>
            <p className="text-gray-700 mb-6">
              You agree to indemnify and hold harmless Homeowner Support, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the courts of Fulton County, Georgia.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">14. Severability</h2>
            <p className="text-gray-700 mb-6">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mb-4">15. Contact Information</h2>
            <p className="text-gray-700 mb-4">For questions about these Terms of Service, please contact us at:</p>
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