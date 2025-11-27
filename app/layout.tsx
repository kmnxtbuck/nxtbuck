import type { Metadata } from "next";
import "./globals.css";
import NxtBuckHeader from "@/components/NxtBuckHeader";
import NxtBuckFooter from "@/components/NxtBuckFooter";

export const metadata: Metadata = {
  title: {
    default: "NxtBuck",
    template: "%s | NxtBuck",
  },
  description: "NxtBuck",
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
