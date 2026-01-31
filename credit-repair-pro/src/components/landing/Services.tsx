"use client";

import { FileSearch, Mail, TrendingUp, Shield, Users, Clock } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Credit Report Analysis",
    description:
      "Comprehensive review of your credit reports from all three bureaus to identify errors, inaccuracies, and items that can be disputed.",
  },
  {
    icon: Mail,
    title: "Dispute Letter Writing",
    description:
      "Professional dispute letters crafted specifically for your situation, sent to credit bureaus and creditors on your behalf.",
  },
  {
    icon: TrendingUp,
    title: "Score Improvement Strategy",
    description:
      "Personalized action plan to improve your credit score, including credit-building recommendations and best practices.",
  },
  {
    icon: Shield,
    title: "Debt Validation",
    description:
      "Challenge questionable debts and request proper validation from collectors to ensure accuracy and legality.",
  },
  {
    icon: Users,
    title: "Creditor Negotiations",
    description:
      "Negotiate with creditors for pay-for-delete agreements, goodwill adjustments, and settlement options.",
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    description:
      "Continuous monitoring and follow-up on disputes until resolved, with regular updates on your progress.",
  },
];

export function Services() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How I Can Help You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive credit repair services tailored to your unique situation
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
