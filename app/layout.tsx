import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.paintwalla.com'),
  title: "Paintwalla — Premium Home Painting Services | Interior & Exterior Painters",
  description: "Explore Paintwalla's interior paint, exterior paint, wood polish, texture, waterproofing, and POP services.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Paintwalla — Premium Home Painting Services | Interior & Exterior Painters",
    description: "Explore Paintwalla's interior paint, exterior paint, wood polish, texture, waterproofing, and POP services.",
    url: 'https://www.paintwalla.com',
    siteName: 'Paintwalla',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Paintwalla Premium Home Painting Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: [
      { url: "/i16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Paintwalla",
    "description": "Premium Home Painting Services including interior, exterior, wood polish, texture, waterproofing, and POP services.",
    "url": "https://www.paintwalla.com",
    "telephone": "+91-18033566",
    "image": "https://www.paintwalla.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Your City", 
      "addressRegion": "Your State",
      "addressCountry": "IN"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Painting Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Painting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Painting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wood Polish" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Texture Painting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Waterproofing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "POP Services" } }
      ]
    }
  };

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
