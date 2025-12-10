import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import NxtBuckHeader from "@/components/NxtBuckHeader";
import NxtBuckFooter from "@/components/NxtBuckFooter";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

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
      <head>
        {GTM_ID && (
          <Script
            id="gtm-base"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
      </head>
      <body className="bg-[#673AB7] min-h-screen flex flex-col">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <NxtBuckHeader />
        {children}
        <NxtBuckFooter />
      </body>
    </html>
  );
}
