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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  ),
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    title,
    description,
    siteName: title,
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
