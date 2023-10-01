import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Proyecto Piranha",
  description: "Proyecto Piranha es una editorial y productora cultural.",
  authors: [{ name: "Guido La Rosa", url: "https://blob.studio" }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyecto Piranha",
    description: "Proyecto Piranha es una editorial y productora cultural.",
    images: ["https://i.ibb.co/99F3wgr/pianhapiranha.png"],
  },
  openGraph: {
    title: "Proyecto Piranha",
    url: "https://proyectopiranha.com",
    type: "website",
    description: "Proyecto Piranha es una editorial y productora cultural.",
    images: [
      {
        url: "https://i.ibb.co/99F3wgr/pianhapiranha.png",
        width: 800,
        height: 600,
      },
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
      <body className={ibmPlexMono.className}>{children}</body>
    </html>
  );
}
