"use client";

import { ClipboardCheck, Search, Send, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Get Your Credit Reports",
    description:
      "Obtain your credit reports from all three bureaus. I'll provide resources and guidance on how to get them.",
  },
  {
    number: "02",
    icon: Search,
    title: "We Analyze Together",
    description:
      "Upload your reports to your client portal. I'll review them thoroughly and identify all disputable items.",
  },
  {
    number: "03",
    icon: Send,
    title: "Dispute & Negotiate",
    description:
      "I'll craft professional dispute letters and handle all communication with bureaus and creditors.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Watch Your Score Improve",
    description:
      "As disputes are resolved and negative items removed, you'll see your credit score climb.",
  },
];

export function Process() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Credit Repair Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, transparent process to improve your credit
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-blue-100 mb-4">
                {step.number}
              </div>
              <div className="p-3 bg-blue-600 rounded-lg w-fit mb-4">
                <step.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 right-0 w-full h-0.5 bg-blue-100 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
