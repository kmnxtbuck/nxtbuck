import type { Metadata } from "next";
import "./globals.css";
import NxtBuckHeader from "@/components/NxtBuckHeader";
import NxtBuckFooter from "@/components/NxtBuckFooter";
import { GoogleTagManager } from "@next/third-parties/google";
import RouteChangeTracker from "./components/RouteChangeTracker";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  title: {
    default: "NxtBuck Inc. | Web Design | Websites for Service Businesses",
    template: "%s | NxtBuck Inc. Toronto",
  },
  description:
    "Leading web design agency for service businesses. We build high-converting websites for contractors, clinics, and local businesses across USA & Canada. Get your site in 14 days.",
  keywords: [
    "web design Toronto",
    "website design Ontario",
    "web development Canada",
    "Toronto web agency",
    "small business website Toronto",
    "contractor website design",
    "service business website",
    "lead generation website",
  ],
  openGraph: {
    title: "NxtBuck Inc. | Web Design",
    description:
      "Leading web design agency for service businesses. High-converting websites delivered in 14 days.",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#673AB7] min-h-screen flex flex-col">
        <RouteChangeTracker />
        <NxtBuckHeader />
        {children}
        <NxtBuckFooter />
      </body>
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
    </html>
  );
}
