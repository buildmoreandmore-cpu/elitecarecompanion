import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Homeowner Support - Stop Foreclosure in 24 Hours | Expert Help Available",
  description: "Expert foreclosure prevention and homeowner assistance. Stop foreclosure in 24 hours, get mortgage help, quick cash offers, and equity loans. Licensed professionals. Call (555) 123-4567 for free consultation.",
  keywords: [
    "stop foreclosure",
    "foreclosure help",
    "foreclosure prevention",
    "mortgage assistance",
    "homeowner support",
    "quick home sale",
    "cash offer house",
    "equity loans",
    "owner financing",
    "mortgage modification",
    "home loan help",
    "foreclosure attorney",
    "financial hardship",
    "debt relief",
    "real estate solutions"
  ],
  authors: [{ name: "Homeowner Support Team" }],
  creator: "Homeowner Support",
  publisher: "Homeowner Support",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://homeowner-support-1tobgm2yy-francis-projects-cc692baf.vercel.app',
    title: 'Homeowner Support - Stop Foreclosure in 24 Hours',
    description: 'Expert foreclosure prevention and homeowner assistance. Stop foreclosure in 24 hours, get mortgage help, quick cash offers, and equity loans.',
    siteName: 'Homeowner Support',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Homeowner Support - Professional foreclosure prevention services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homeowner Support - Stop Foreclosure in 24 Hours',
    description: 'Expert foreclosure prevention and homeowner assistance. Get help today.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://homeowner-support-1tobgm2yy-francis-projects-cc692baf.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}&libraries=places`}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
