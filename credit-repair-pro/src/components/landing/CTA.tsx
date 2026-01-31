"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-4 gradient-hero text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Take Control of Your Credit?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Don&apos;t let a low credit score hold you back. Get started today and
          take the first step toward financial freedom.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/resources"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
          >
            Get Your Credit Reports
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center text-blue-100">
          <a
            href="tel:+1234567890"
            className="flex items-center justify-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="h-5 w-5" />
            (123) 456-7890
          </a>
          <a
            href="mailto:credit@example.com"
            className="flex items-center justify-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="h-5 w-5" />
            credit@example.com
          </a>
        </div>
      </div>
    </section>
  );
}
