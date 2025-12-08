import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Packages & Pricing | Toronto",
  description:
    "Affordable web design packages for Toronto businesses. From $2,500 for service business websites. View our pricing for contractors, clinics, and local businesses in Ontario.",
  keywords: [
    "web design pricing Toronto",
    "website packages Ontario",
    "affordable web design Canada",
    "small business website cost",
    "Toronto website pricing",
  ],
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

