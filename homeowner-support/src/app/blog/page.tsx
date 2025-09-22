import Link from "next/link";
import Footer from "../../components/Footer";

export default function BlogPage() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Blog & Resources</h1>
          <p className="text-xl text-blue-200">
            Expert insights and guidance for homeowners facing financial challenges.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="text-6xl mb-6">📰</div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're working on bringing you valuable content including foreclosure prevention tips,
              financial planning guides, and industry insights. Check back soon for helpful articles
              and resources from our team of experts.
            </p>
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold">Upcoming content will include:</p>
              <ul className="list-disc list-inside space-y-2 max-w-2xl mx-auto text-left">
                <li>Understanding Foreclosure Process and Your Rights</li>
                <li>How to Negotiate with Your Mortgage Lender</li>
                <li>Home Equity Loan vs. HELOC: Which is Right for You?</li>
                <li>Preparing Your Home for a Quick Sale</li>
                <li>Financial Recovery After Avoiding Foreclosure</li>
                <li>Understanding Mortgage Modification Options</li>
              </ul>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 inline-block">
                Get Expert Advice Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help Right Now?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Don't wait for our blog - get personalized assistance today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7707522509"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 inline-flex items-center justify-center"
            >
              <span className="mr-2">📞</span>
              Call Now: (770) 752-2509
            </a>
            <Link href="/faq" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 inline-flex items-center justify-center">
              View FAQ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}