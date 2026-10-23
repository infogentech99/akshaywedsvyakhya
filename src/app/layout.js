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

export const metadata = {
  metadataBase: new URL("https://akshaywedsvyakhya.invitearc.com/"),

  openGraph: {
    title: "Akshay & Vyakhya",
    description: "Join as they begin their forever. 22, 23 & 24 November, 2026",
    url: "https://akshaywedsvyakhya.invitearc.com/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Akshay & Vyakhya",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Akshay & Vyakhya",
    description: "Join as they begin their forever. 22, 23 & 24 November, 2026",
    images: ["/og.jpg"],
  },

  other: {
    "og:image:secure_url": "https://akshaywedsvyakhya.invitearc.com/og.jpg",
    "og:image:type": "image/jpg",
  },
};

export default function RootLayout({ children }) {
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
