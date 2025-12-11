import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Packages & Pricing",
  description:
    "Affordable web design packages for businesses. From $2,499 for service business and e-commerce websites. View our pricing for contractors, clinics, online stores, and local businesses.",
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

