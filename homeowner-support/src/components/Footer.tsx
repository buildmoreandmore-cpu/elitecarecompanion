import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Homeowner Support</h3>
            <p className="text-blue-200 mb-4">
              Your trusted partner in homeowner solutions. We provide expert guidance, financial assistance, and peace of mind when you need it most.
            </p>
            <div className="space-y-2 text-blue-200">
              <p className="flex items-center">
                <span className="mr-2">📞</span> (770) 752-2509
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span> help@homeownersupport.com
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span> Financial Plaza, Suite 200,<br />
                <span className="ml-6">Atlanta, GA 30309</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">🌎</span> Available Nationwide
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <Link href="/foreclosure-help" className="hover:text-white transition-colors">
                  Foreclosure Help
                </Link>
              </li>
              <li>
                <Link href="/mortgage-assistance" className="hover:text-white transition-colors">
                  Mortgage Assistance
                </Link>
              </li>
              <li>
                <Link href="/equity-loans" className="hover:text-white transition-colors">
                  Equity Loans
                </Link>
              </li>
              <li>
                <Link href="/quick-sale" className="hover:text-white transition-colors">
                  Quick Sale
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Owner Financing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Transitional Funding
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#success" className="hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/licensing" className="hover:text-white transition-colors">
                  Licensing
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-white transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
            <div className="mt-6 space-y-1 text-sm text-blue-200">
              <p>Licensed Real Estate & Financial</p>
              <p>Professionals</p>
              <p>BBB Accredited A+ Rating</p>
              <p>Equal Housing Opportunity</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p className="text-blue-200">
            © 2024 Homeowner Support. All rights reserved. | Licensed Real Estate & Financial Professionals
          </p>
        </div>
      </div>
    </footer>
  );
}