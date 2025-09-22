'use client';

import Link from "next/link";
import AddressInput from "../../components/AddressInput";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function MortgageAssistancePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    assistanceType: '',
    currentSituation: '',
    monthlyIncome: '',
    currentPayment: '',
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
          service: 'Mortgage Assistance',
          helpType: formData.assistanceType,
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
          assistanceType: '',
          currentSituation: '',
          monthlyIncome: '',
          currentPayment: '',
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
          <h1 className="text-4xl font-bold text-white mb-4">Get Mortgage Assistance</h1>
          <p className="text-xl text-blue-200 mb-6">
            Struggling with payments? We offer modification, refinancing, and relief options to help you stay in your home.
          </p>
          <div className="flex justify-center items-center space-x-6 text-blue-200">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
              <span>Payment Reduction</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
              <span>Interest Rate Relief</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
              <span>Term Extensions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
              Request Mortgage Assistance
            </h2>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-center">
                  <strong>Thank you!</strong> Your request has been submitted. We&apos;ll contact you within 24 hours to discuss your options.
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Assistance Needed *
                </label>
                <select
                  name="assistanceType"
                  required
                  value={formData.assistanceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select assistance type</option>
                  <option value="Loan Modification">Loan Modification</option>
                  <option value="Refinancing">Refinancing</option>
                  <option value="Payment Reduction">Payment Reduction</option>
                  <option value="Interest Rate Reduction">Interest Rate Reduction</option>
                  <option value="Term Extension">Term Extension</option>
                  <option value="Forbearance">Forbearance</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Monthly Income
                  </label>
                  <select
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select income range</option>
                    <option value="Under $3,000">Under $3,000</option>
                    <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                    <option value="$5,000 - $8,000">$5,000 - $8,000</option>
                    <option value="$8,000 - $12,000">$8,000 - $12,000</option>
                    <option value="Over $12,000">Over $12,000</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Monthly Mortgage Payment
                  </label>
                  <select
                    name="currentPayment"
                    value={formData.currentPayment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select payment range</option>
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000 - $2,000">$1,000 - $2,000</option>
                    <option value="$2,000 - $3,000">$2,000 - $3,000</option>
                    <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                    <option value="Over $5,000">Over $5,000</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Situation
                </label>
                <select
                  name="currentSituation"
                  value={formData.currentSituation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your current situation</option>
                  <option value="Current on payments but struggling">Current on payments but struggling</option>
                  <option value="1-2 months behind">1-2 months behind</option>
                  <option value="3-6 months behind">3-6 months behind</option>
                  <option value="More than 6 months behind">More than 6 months behind</option>
                  <option value="Interest rate increased">Interest rate increased</option>
                  <option value="Job loss or income reduction">Job loss or income reduction</option>
                  <option value="Medical expenses">Medical expenses</option>
                  <option value="Divorce or separation">Divorce or separation</option>
                  <option value="Other financial hardship">Other financial hardship</option>
                </select>
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
                  placeholder="Please provide any additional details about your mortgage situation, goals, or questions..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Request Assistance Now'}
              </button>

              <p className="text-sm text-gray-500 text-center">
                Your information is 100% secure and confidential. We&apos;ll contact you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions? Call Us Now</h2>
          <p className="text-xl text-blue-200 mb-8">
            Speak directly with a mortgage specialist about your options.
          </p>
          <a
            href="tel:7707522509"
            className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100"
          >
            <span className="mr-2">📞</span>
            Call Now: (770) 752-2509
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}