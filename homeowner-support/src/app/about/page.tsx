import Link from "next/link";
import Footer from "../../components/Footer";

export default function AboutPage() {
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
                <Link href="/about" className="text-blue-900 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/#success" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Success Stories</Link>
                <Link href="/#contact" className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                <span className="text-blue-900 font-semibold">(770) 752-2509</span>
                <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800">
                  Get free consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About Homeowner Support</h1>
          <p className="text-xl text-blue-200">
            Your trusted partner in navigating financial hardship and foreclosure prevention since 2015.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2015, Homeowner Support was created with a single mission: to help homeowners facing foreclosure
              keep their homes and regain financial stability. Our founders, experienced real estate and financial professionals,
              witnessed firsthand the devastating impact of foreclosure on families and communities.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Since our inception, we&apos;ve helped over 10,000 homeowners navigate financial difficulties, stop foreclosure
              proceedings, and find sustainable solutions. Our comprehensive approach combines legal expertise, financial
              counseling, and direct intervention to provide the best possible outcomes for our clients.
            </p>
            <p className="text-lg text-gray-600">
              Today, we&apos;re proud to be one of the most trusted homeowner assistance companies in the nation, with a 98%
              success rate and BBB A+ rating. Our team continues to grow, but our commitment remains the same: providing
              compassionate, professional service when families need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Licensed Housing Counselors</h3>
              <p className="text-gray-600">HUD-certified counselors with expertise in foreclosure prevention and mortgage assistance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Legal Professionals</h3>
              <p className="text-gray-600">Experienced attorneys specializing in real estate law and foreclosure defense.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Real Estate Experts</h3>
              <p className="text-gray-600">Licensed real estate professionals with deep market knowledge and negotiation skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Assessment</h3>
              <p className="text-gray-600 mb-6">
                Every case begins with a thorough review of your financial situation, mortgage terms, and available options.
                We take the time to understand your unique circumstances and goals.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Customized Solutions</h3>
              <p className="text-gray-600 mb-6">
                Based on our assessment, we develop a tailored strategy that may include loan modification, refinancing,
                legal intervention, or alternative solutions like quick sale options.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ongoing Support</h3>
              <p className="text-gray-600">
                We don&apos;t just provide a solution and walk away. Our team provides ongoing support throughout the process
                and beyond to ensure long-term success.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-blue-900 mb-4">Why Choose Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">10,000+ successful cases</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">98% success rate</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">BBB A+ rating</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">24/7 emergency support</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">No upfront fees</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Licensed professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Don&apos;t wait until it&apos;s too late. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center">
              <span className="mr-2">📞</span>
              Call Now: (770) 752-2509
            </button>
            <Link href="/#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 flex items-center justify-center">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}