'use client';

import Link from "next/link";
import AddressInput from "../../components/AddressInput";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function QuickSalePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    propertyType: '',
    condition: '',
    timeframe: '',
    reason: '',
    estimatedValue: '',
    owedAmount: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service: 'Quick Sale',
          helpType: 'Fast cash offer for home',
          ...formData
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          propertyAddress: '',
          propertyType: '',
          condition: '',
          timeframe: '',
          reason: '',
          estimatedValue: '',
          owedAmount: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800">
                  Get free consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Get a Cash Offer in 24 Hours</h1>
          <p className="text-xl text-blue-200 mb-6">
            No repairs needed, fast closing guaranteed. Get a fair cash offer for your home in any condition.
          </p>
          <div className="flex justify-center items-center space-x-6 text-blue-200">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
              <span>As-is Purchase</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
              <span>24-48hr Closing</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
              <span>No Fees or Commissions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
              Get Your Cash Offer
            </h2>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-center">
                  <strong>Thank you!</strong> Your request has been submitted. We&apos;ll provide a cash offer within 24 hours.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-center">
                  There was an error submitting your request. Please try again or call us directly at (770) 752-2509.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Address *
                </label>
                <AddressInput
                  placeholder="Enter your property address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onAddressSelect={(address) => {
                    setFormData({ ...formData, propertyAddress: address });
                  }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type *
                  </label>
                  <select
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select property type</option>
                    <option value="Single Family Home">Single Family Home</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Condo">Condo</option>
                    <option value="Multi-family">Multi-family</option>
                    <option value="Mobile Home">Mobile Home</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Condition *
                  </label>
                  <select
                    name="condition"
                    required
                    value={formData.condition}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select condition</option>
                    <option value="Excellent - Move-in ready">Excellent - Move-in ready</option>
                    <option value="Good - Minor repairs needed">Good - Minor repairs needed</option>
                    <option value="Fair - Some repairs needed">Fair - Some repairs needed</option>
                    <option value="Poor - Major repairs needed">Poor - Major repairs needed</option>
                    <option value="Needs complete renovation">Needs complete renovation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Desired Timeframe *
                  </label>
                  <select
                    name="timeframe"
                    required
                    value={formData.timeframe}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeframe</option>
                    <option value="ASAP - Within 1 week">ASAP - Within 1 week</option>
                    <option value="Within 30 days">Within 30 days</option>
                    <option value="Within 60 days">Within 60 days</option>
                    <option value="Within 90 days">Within 90 days</option>
                    <option value="Flexible timeline">Flexible timeline</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for Selling
                  </label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select reason</option>
                    <option value="Foreclosure avoidance">Foreclosure avoidance</option>
                    <option value="Job relocation">Job relocation</option>
                    <option value="Financial hardship">Financial hardship</option>
                    <option value="Inherited property">Inherited property</option>
                    <option value="Divorce">Divorce</option>
                    <option value="Downsizing">Downsizing</option>
                    <option value="Property too expensive to repair">Property too expensive to repair</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Property Value
                  </label>
                  <select
                    name="estimatedValue"
                    value={formData.estimatedValue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select value range</option>
                    <option value="Under $100k">Under $100k</option>
                    <option value="$100k - $200k">$100k - $200k</option>
                    <option value="$200k - $300k">$200k - $300k</option>
                    <option value="$300k - $500k">$300k - $500k</option>
                    <option value="$500k - $750k">$500k - $750k</option>
                    <option value="Over $750k">Over $750k</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount Owed on Property
                  </label>
                  <select
                    name="owedAmount"
                    value={formData.owedAmount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select amount owed</option>
                    <option value="Paid off">Paid off</option>
                    <option value="Under $50k">Under $50k</option>
                    <option value="$50k - $100k">$50k - $100k</option>
                    <option value="$100k - $200k">$100k - $200k</option>
                    <option value="$200k - $300k">$200k - $300k</option>
                    <option value="Over $300k">Over $300k</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details (Optional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please provide any additional details about your property, situation, or specific requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get My Cash Offer Now'}
              </button>

              <p className="text-sm text-gray-500 text-center">
                Your information is 100% secure and confidential. Cash offer provided within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Quick Sale?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Process</h3>
              <p className="text-blue-200">Cash offer in 24 hours, close in as little as 7 days</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Any Condition</h3>
              <p className="text-blue-200">We buy homes as-is, no repairs or cleaning required</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Fees</h3>
              <p className="text-blue-200">No commissions, no closing costs, no hidden fees</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="tel:7707522509"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100"
            >
              <span className="mr-2">📞</span>
              Call Now: (770) 752-2509
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}