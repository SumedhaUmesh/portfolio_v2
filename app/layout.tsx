import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { profile } from "@/content/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = new URL(profile.portfolioUrl);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
  title: {
    default: `${profile.shortName} — Software Engineer`,
    template: `%s · ${profile.shortName}`,
  },
  description: profile.aboutBio,
  openGraph: {
    title: `${profile.shortName} — Software Engineer`,
    description: profile.aboutBio,
    url: siteUrl,
    siteName: profile.shortName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.shortName} — Software Engineer`,
    description: profile.aboutBio,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-dvh bg-canvas antialiased`}
      >
        <Nav />
        <main className="relative isolate">
          <div
            className="pointer-events-none fixed inset-0 -z-10 pattern-dots opacity-[0.85]"
            aria-hidden
          />
          {children}
        </main>
      </body>
    </html>
  );
}
