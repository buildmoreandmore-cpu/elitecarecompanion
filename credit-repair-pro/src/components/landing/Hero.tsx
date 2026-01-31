"use client";

import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="gradient-hero text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Credit Score Is a Reflection of Your Credit Report...
              <span className="text-yellow-300"> Let&apos;s Fix That.</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Professional credit repair services to help you dispute errors,
              remove negative items, and build the credit score you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Improve Your Score</h3>
                    <p className="text-blue-200">Average 50-100+ point increase</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500 rounded-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Professional Disputes</h3>
                    <p className="text-blue-200">Expert letter writing & strategy</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-500 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Personalized Service</h3>
                    <p className="text-blue-200">One-on-one support throughout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
