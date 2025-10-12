'use client'

import Script from 'next/script'
import { useEffect } from 'react'

export default function ConsultationPage() {
  const WORKFLOW_ID = 'wf_68e9da1035b88190983d0565c0ae53f70e4a83fa51a7fa7b'

  useEffect(() => {
    // Initialize ChatKit after script loads
    const initChatKit = () => {
      if (typeof window !== 'undefined' && (window as unknown as { ChatKit?: unknown }).ChatKit) {
        const chatKit = (window as unknown as { ChatKit: { init: (config: unknown) => void } }).ChatKit
        chatKit.init({
          workflowId: WORKFLOW_ID,
          version: '2',
          containerId: 'chatkit-widget',
          config: {
            theme: {
              colorScheme: 'light',
              radius: 'xl',
              density: 'normal',
              typography: {
                baseSize: 16,
              },
            },
            composer: {
              placeholder: 'Type your tax question here...',
              attachments: {
                enabled: false,
              },
            },
            startScreen: {
              greeting: 'Welcome! I\'m your AI tax strategist. Tell me about your situation: income, filing status, and tax goals.',
              prompts: [
                {
                  label: 'Freelancer tax tips',
                  prompt: 'I\'m a freelancer making $120k. How can I reduce my taxes?',
                },
                {
                  label: 'Business entity setup',
                  prompt: 'Should I set up an S-Corp or LLC for my business?',
                },
                {
                  label: 'Deduction strategies',
                  prompt: 'What deductions am I missing as a small business owner?',
                },
              ],
            },
          },
        })
      }
    }

    // Delay to ensure script is loaded
    const timer = setTimeout(initChatKit, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Load ChatKit Script */}
      <Script
        src="https://cdn.openai.com/chatkit/v1/chatkit.js"
        strategy="afterInteractive"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Your AI Tax Strategy Consultation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chat with our AI tax strategist to discover personalized tax-saving opportunities.
            Get instant insights and a comprehensive strategy tailored to your situation.
          </p>
        </div>

        {/* ChatKit Widget Container */}
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-100 overflow-hidden">
          <div
            id="chatkit-widget"
            className="min-h-[600px]"
          />
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Free Initial Insights
            </h3>
            <p className="text-gray-600 text-sm">
              Get 1-2 actionable tax-saving opportunities based on your situation at no cost.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Comprehensive Strategy
            </h3>
            <p className="text-gray-600 text-sm">
              Unlock your complete personalized tax strategy with entity analysis, deductions, and action plan.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Average Savings
            </h3>
            <p className="text-gray-600 text-sm">
              Most clients discover opportunities to save $5K-$50K+ annually on their taxes.
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-100">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              How This Works
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Share Your Situation</h4>
                  <p className="text-gray-600 text-sm">
                    Tell our AI about your income, employment type, and tax goals
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Get Free Insights</h4>
                  <p className="text-gray-600 text-sm">
                    Receive 1-2 specific tax-saving opportunities you can implement
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Unlock Full Strategy</h4>
                  <p className="text-gray-600 text-sm">
                    Get your complete tax optimization plan for a one-time investment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Implement & Save</h4>
                  <p className="text-gray-600 text-sm">
                    Follow the action plan to reduce your tax burden legally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            This service provides educational insights and strategies. Always consult with a
            licensed tax professional for your specific situation.
          </p>
        </div>
      </div>
    </div>
  )
}
