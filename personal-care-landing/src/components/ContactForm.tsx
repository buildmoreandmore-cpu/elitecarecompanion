'use client';

import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  location: string;
  careType: string;
  urgency: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    location: '',
    careType: '',
    urgency: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          location: '',
          careType: '',
          urgency: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to send message');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="bg-green-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-4">Message Sent Successfully!</h3>
        <p className="text-green-700 mb-6">
          Thank you for contacting Elite Care Companion. Lenny will call you back within 1 hour to discuss your care needs.
        </p>
        <div className="bg-white p-4 rounded-lg border border-green-200 mb-6">
          <p className="text-green-800 font-semibold">Need immediate assistance?</p>
          <a
            href="tel:470-696-3850"
            className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-700 inline-block"
          >
            (470) 696-3850
          </a>
          <p className="text-sm text-gray-600 mt-1">Available 24/7 for Emergency Home Care</p>
        </div>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">
            <strong>Error:</strong> {errorMessage}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            Location/Community
          </label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select your area...</option>
            <option value="buckhead">Buckhead</option>
            <option value="sandy-springs">Sandy Springs</option>
            <option value="brookhaven">Brookhaven</option>
            <option value="druid-hills">Druid Hills</option>
            <option value="alpharetta">Alpharetta</option>
            <option value="roswell">Roswell</option>
            <option value="vinings">Vinings</option>
            <option value="smyrna">Smyrna</option>
            <option value="decatur">Decatur</option>
            <option value="other">Other Atlanta area</option>
          </select>
        </div>
        <div>
          <label htmlFor="careType" className="block text-sm font-medium text-gray-700 mb-2">
            Type of Care Needed
          </label>
          <select
            id="careType"
            name="careType"
            value={formData.careType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Please select...</option>
            <option value="companionship">Companion Care</option>
            <option value="personal-care">Personal Care</option>
            <option value="dementia-care">Dementia/Alzheimer&apos;s Care</option>
            <option value="post-surgery">Post-Surgery Recovery</option>
            <option value="transportation">Transportation Services</option>
            <option value="24-hour">24-Hour Care</option>
            <option value="respite">Respite Care</option>
            <option value="multiple">Multiple Services</option>
            <option value="emergency">Emergency/Urgent Care</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
          When do you need care to start?
        </label>
        <select
          id="urgency"
          name="urgency"
          value={formData.urgency}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Please select...</option>
          <option value="immediately">Immediately (Emergency)</option>
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="within-week">Within a week</option>
          <option value="within-month">Within a month</option>
          <option value="planning">Just planning ahead</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Tell us about your care needs
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Please describe your specific care needs, medical conditions, mobility issues, or any other important information that will help us provide the best care..."
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors w-full md:w-auto mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Get Free Consultation - Call Me Back'}
        </button>
        <div className="text-center">
          <p className="text-gray-600 mb-2">
            Or call Lenny directly for immediate assistance:
          </p>
          <a
            href="tel:470-696-3850"
            className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-700 inline-block"
          >
            (470) 696-3850
          </a>
          <p className="text-sm text-gray-500 mt-2">Available 24/7 for Emergency Home Care</p>
        </div>
      </div>
    </form>
  );
}