import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Zarkode Digital Solutions | Web Development & IT Solutions in Nigeria',
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    'Zarkode Digital Solutions Ltd. is a Nigerian technology company providing web development, software, branding, hosting, IT consulting and digital solutions for businesses.',
  openGraph: {
    title:
      'Zarkode Digital Solutions — We Build Digital Solutions That Move Businesses Forward.',
    description:
      'Zarkode Digital Solutions Ltd. is a Nigerian technology company providing web development, software, branding, hosting, IT consulting and digital solutions for businesses.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zarkode Digital Solutions — We Build Digital Solutions That Move Businesses Forward.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Zarkode Digital Solutions — We Build Digital Solutions That Move Businesses Forward.',
    description:
      'Zarkode Digital Solutions Ltd. is a Nigerian technology company providing web development, software, branding, hosting, IT consulting and digital solutions for businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/ZDS.png',
    apple: '/images/ZDS.png',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zarkode Digital Solutions Ltd',
  description: siteConfig.description,
  url: siteConfig.url,
  areaServed: 'Nigeria',
  email: siteConfig.contact.email,
  telephone: [siteConfig.contact.phone1, siteConfig.contact.phone2],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Abuja',
    addressCountry: 'NG',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
