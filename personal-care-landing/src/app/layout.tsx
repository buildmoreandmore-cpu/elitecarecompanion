import type { Metadata } from "next";
import { Archivo, Figtree, Lora, Mulish } from "next/font/google";
import "./globals.css";

// Marketing brand fonts (Elite Care · For Men)
// Archivo loaded as a variable font incl. the width axis so we can use the
// condensed display styling (font-stretch) from the design.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Retained for the staff portal design system
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://elitecarecompanion.com'),
  title: "Elite Care for Men — In-Home Care for Men | Metro Atlanta",
  description: "Strong, experienced male caregivers for men in metro Atlanta. Lifting, transfers, workout support, daily routines — and company that doesn't feel like babysitting. Call (470) 840-0575.",
  keywords: "male caregiver Atlanta, in-home care for men, caregiver for older men Atlanta, male home health aide Buckhead, men's personal care Sandy Springs, lifting and transfer care Brookhaven, male companion caregiver Druid Hills, senior care for men Alpharetta, private caregiver for men Atlanta, male caregiver for elderly father, overnight male caregiver Atlanta, fall recovery care Atlanta, mobility assistance for men Buckhead, dignified personal care for men, veteran caregiver Atlanta, dementia care for men Atlanta, 24 hour male caregiver Atlanta, private pay home care Georgia, strong caregiver for transfers, wheelchair and walker assistance Atlanta",
  authors: [{ name: "Elite Care Companion", url: "mailto:elitecarecompanionllc@gmail.com" }],
  creator: "Elite Care Companion",
  publisher: "Elite Care Companion",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://elitecarecompanion.com"
  },
  openGraph: {
    title: "Elite Care for Men — In-Home Care for Older Men | Metro Atlanta",
    description: "Strong, experienced male caregivers for older men in metro Atlanta. Lifting, transfers, daily routines, and company that doesn't feel like babysitting. Call (470) 840-0575.",
    url: "https://elitecarecompanion.com",
    siteName: "Elite Care · For Men",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/caregiver-steps.png",
        width: 1200,
        height: 630,
        alt: "A male caregiver steadying an older man down his front steps toward the car in metro Atlanta"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Care for Men — In-Home Care for Men | Metro Atlanta",
    description: "Strong, experienced male caregivers for men in metro Atlanta. Call (470) 840-0575.",
    images: ["/caregiver-steps.png"]
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
    "business:contact_data:phone_number": "+14708400575",
    "business:contact_data:email": "elitecarecompanionllc@gmail.com"
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
        className={`${archivo.variable} ${figtree.variable} ${lora.variable} ${mulish.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
