import type { Metadata } from "next";
import { Encode_Sans_Condensed } from "next/font/google";
import localFont from "next/font/local";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const encodeSansCondensed = Encode_Sans_Condensed({
  subsets: ["latin"],
  variable: "--font-encode-sans-condensed",
  weight: ["300", "400", "700"],
});

const hussarBold = localFont({
  src: "./fonts/HussarBoldWeb.otf",
  variable: "--font-hussar-bold",
  weight: "700",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bitclubvt.org"),
  title: {
    default: "BIT Club @ VT",
    template: "%s | BIT Club @ VT",
  },
  description:
    "Welcome to the BIT Club Website! You can find out more about our club, view our executive board members, and check our calendar for upcoming events!",
  icons: {
    icon: "/bitclub_icon_transparent.ico",
  },
  openGraph: {
    title: "BIT Club @ VT",
    description:
      "Welcome to the BIT Club Website! Learn more about our club, meet our executive board, and see upcoming events!",
    url: "https://bitclubvt.org",
    siteName: "BIT Club @ VT",
    images: [
      {
        url: "/main_logos_and_assets/logos/club_logos/bit_logo_transparent.png",
        width: 862,
        height: 777,
        alt: "BIT Club @ VT Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIT Club @ VT",
    description:
      "Welcome to the BIT Club Website! Learn more about our club, meet our executive board, and see upcoming events!",
    images: [
      "/main_logos_and_assets/logos/club_logos/bit_logo_transparent.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${encodeSansCondensed.variable} ${hussarBold.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-V7EQQETPDH" />
      </body>
    </html>
  );
}
