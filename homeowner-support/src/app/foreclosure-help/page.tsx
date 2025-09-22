'use client';

import Link from "next/link";
import AddressInput from "../../components/AddressInput";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function ForeclosureHelpPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    urgencyLevel: '',
    currentSituation: '',
    timeframe: '',
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
          service: 'Foreclosure Help',
          helpType: 'Stop foreclosure proceedings',
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
          urgencyLevel: '',
          currentSituation: '',
          timeframe: '',
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
          <h1 className="text-4xl font-bold text-white mb-4">Get Foreclosure Help Now</h1>
          <p className="text-xl text-blue-200 mb-6">
            Stop foreclosure proceedings with expert guidance and proven strategies. We can help you keep your home.
          </p>
          <div className="flex justify-center items-center space-x-6 text-blue-200">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
              <span>24/7 Emergency Help</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
              <span>No Upfront Fees</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
              <span>Licensed Professionals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
              Get Immediate Foreclosure Help
            </h2>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-center">
                  <strong>Thank you!</strong> Your request has been submitted. We&apos;ll contact you within 1 hour to discuss your situation.
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
                    Urgency Level *
                  </label>
                  <select
                    name="urgencyLevel"
                    required
                    value={formData.urgencyLevel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select urgency level</option>
                    <option value="Emergency - Foreclosure sale in 30 days">Emergency - Foreclosure sale in 30 days</option>
                    <option value="Urgent - Received foreclosure notice">Urgent - Received foreclosure notice</option>
                    <option value="Planning - Behind on payments">Planning - Behind on payments</option>
                    <option value="Prevention - Current but concerned">Prevention - Current but concerned</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Desired Timeframe
                  </label>
                  <select
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeframe</option>
                    <option value="Immediate - Today">Immediate - Today</option>
                    <option value="Within 24 hours">Within 24 hours</option>
                    <option value="Within 1 week">Within 1 week</option>
                    <option value="Within 30 days">Within 30 days</option>
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
                  <option value="Received foreclosure notice">Received foreclosure notice</option>
                  <option value="Behind on mortgage payments">Behind on mortgage payments</option>
                  <option value="Mortgage company filed lawsuit">Mortgage company filed lawsuit</option>
                  <option value="Foreclosure sale scheduled">Foreclosure sale scheduled</option>
                  <option value="Facing job loss or income reduction">Facing job loss or income reduction</option>
                  <option value="Medical bills affecting payments">Medical bills affecting payments</option>
                  <option value="Divorce affecting finances">Divorce affecting finances</option>
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
                  placeholder="Please provide any additional details about your situation that might help us assist you better..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get Immediate Help Now'}
              </button>

              <p className="text-sm text-gray-500 text-center">
                Your information is 100% secure and confidential. We&apos;ll contact you within 1 hour.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Immediate Help?</h2>
          <p className="text-xl text-blue-200 mb-8">
            If your situation is urgent, don&apos;t wait. Call us now for immediate assistance.
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