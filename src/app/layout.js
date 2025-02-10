import "./globals.css";
import { Toaster } from "sonner";
import { description, title } from "./lib/constants";

export const metadata = {
  title,
  description,
  keywords: [
    "Website Hungary",
    "Website development Hungary, Kecskemét",
    "Hungary web design",
    "Website maker Kecskemét",
    "Custom website Kecskemét",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: title,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
