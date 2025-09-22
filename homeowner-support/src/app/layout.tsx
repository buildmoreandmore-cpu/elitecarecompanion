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
  title: "Emergency Foreclosure Help Atlanta Orlando Birmingham - Stop Foreclosure Today (770) 752-2509",
  description: "URGENT: Stop foreclosure today! Emergency help in Atlanta, Orlando, Miami, Birmingham, Knoxville, Tampa. Licensed professionals 24/7. Foreclosure notice received? Call (770) 752-2509 now for immediate assistance.",
  keywords: [
    "stop foreclosure today Atlanta",
    "emergency foreclosure help Orlando",
    "foreclosure notice received Miami",
    "stop foreclosure Birmingham Alabama",
    "foreclosure help Knoxville Tennessee",
    "emergency mortgage help Tampa Bay",
    "foreclosure attorney Jacksonville",
    "stop sheriff sale Buckhead",
    "foreclosure prevention Sandy Springs",
    "can't pay mortgage Alpharetta",
    "avoid foreclosure fast Macon",
    "emergency foreclosure Savannah",
    "stop foreclosure Gainesville",
    "foreclosure help Sarasota",
    "mortgage assistance Tallahassee",
    "cash house buyers Orlando",
    "sell house before foreclosure Miami",
    "foreclosure attorney Birmingham",
    "emergency mortgage help Knoxville",
    "stop foreclosure Hendersonville",
    "foreclosure help Johnson City",
    "mortgage assistance Crossville",
    "emergency foreclosure McMinnville",
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
