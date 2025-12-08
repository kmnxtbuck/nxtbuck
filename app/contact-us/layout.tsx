import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Toronto Web Design Agency",
  description:
    "Get a free quote for your website project. NxtBuck Inc. serves Toronto, the GTA, Ontario, and businesses across Canada. Contact us today for a consultation.",
  keywords: [
    "contact web designer Toronto",
    "Toronto web design quote",
    "Ontario website consultation",
    "GTA web agency contact",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

