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
  metadataBase: new URL('https://elitecarecompanion.com'),
  title: "Elite Care Companion - Home Care Services in Atlanta, GA | Call (470) 696-3850",
  description: "Professional home care services in Buckhead, Sandy Springs, Brookhaven, Druid Hills & Alpharetta. Personal care, companionship, medication reminders, transportation. Licensed, bonded & available 24/7. Call Lenny at (470) 696-3850 for immediate assistance.",
  keywords: "home care Atlanta, personal care services Georgia, elderly care Buckhead, senior companion Sandy Springs, home health aide Brookhaven, medication reminders Druid Hills, transportation services Alpharetta, private caregiver Atlanta, emergency home care Georgia, 24 hour care Atlanta, live-in caregiver Buckhead, respite care Sandy Springs, elder care Brookhaven, senior sitting services Atlanta, home care near me, private duty nursing Atlanta, companion care services Georgia, senior home care Alpharetta, elderly assistance Druid Hills, disabled care Atlanta, convalescent care Georgia, recovery care services Atlanta, post-surgery care Buckhead, rehabilitation support Sandy Springs, chronic illness care Brookhaven, dementia care Alpharetta, Alzheimer's care Druid Hills, stroke recovery care Atlanta, hospice support Georgia, palliative care Atlanta, wheelchair assistance Sandy Springs, mobility help Buckhead, daily living assistance Brookhaven, personal hygiene help Druid Hills, meal preparation Alpharetta, grocery shopping services Atlanta, house cleaning elderly Georgia, prescription pickup Sandy Springs, doctor appointment transport Buckhead, medical transportation Brookhaven, reliable caregiver Atlanta, trusted home care Georgia, compassionate care Alpharetta, professional caregivers Sandy Springs, certified home health aide Buckhead, bonded caregivers Brookhaven, licensed home care Druid Hills, affordable home care Atlanta, quality senior care Georgia, immediate care services Atlanta, same day caregiver Sandy Springs, emergency elderly care Buckhead, urgent home care Brookhaven, weekend caregiver Druid Hills, holiday care services Alpharetta, overnight caregiver Atlanta, part-time home care Georgia, full-time caregiver Sandy Springs, temporary care services Buckhead, short-term care Brookhaven, long-term care Druid Hills",
  authors: [{ name: "Lenny Monsanto", url: "mailto:lennylmonsanto@gmail.com" }],
  creator: "Elite Care Companion",
  publisher: "Elite Care Companion",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://elite-care-companion.com"
  },
  openGraph: {
    title: "Elite Care Companion - Premier Home Care Services in Atlanta, GA",
    description: "Professional, compassionate home care services for seniors and individuals with disabilities in Atlanta metro area. Available 24/7. Call (470) 696-3850.",
    url: "https://elite-care-companion.com",
    siteName: "Elite Care Companion",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Care Companion - Home Care Services Atlanta"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Care Companion - Home Care Services Atlanta, GA",
    description: "Professional home care services in Buckhead, Sandy Springs, Brookhaven. Call (470) 696-3850 for immediate assistance.",
    images: ["/twitter-image.jpg"]
  },
  verification: {
    google: "your-google-site-verification-code"
  },
  other: {
    "geo.region": "US-GA",
    "geo.placename": "Atlanta",
    "geo.position": "33.7490;-84.3880",
    "ICBM": "33.7490, -84.3880",
    "business:contact_data:locality": "Atlanta",
    "business:contact_data:region": "Georgia",
    "business:contact_data:postal_code": "30309",
    "business:contact_data:country_name": "United States",
    "business:contact_data:phone_number": "+14706963850",
    "business:contact_data:email": "lennylmonsanto@gmail.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
