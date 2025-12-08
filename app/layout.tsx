import type { Metadata } from "next";
import "./globals.css";
import NxtBuckHeader from "@/components/NxtBuckHeader";
import NxtBuckFooter from "@/components/NxtBuckFooter";

export const metadata: Metadata = {
  title: {
    default: "NxtBuck Inc. | Web Design Toronto | Websites for Service Businesses",
    template: "%s | NxtBuck Inc. Toronto",
  },
  description:
    "Toronto's leading web design agency for service businesses. We build high-converting websites for contractors, clinics, and local businesses across Ontario and Canada. Get your site in 14 days.",
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
    title: "NxtBuck Inc. | Web Design Toronto",
    description:
      "Toronto's leading web design agency for service businesses. High-converting websites delivered in 14 days.",
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
      <body className="bg-[#673AB7] min-h-screen flex flex-col">
        <NxtBuckHeader />
        {children}
        <NxtBuckFooter />
      </body>
    </html>
  );
}
