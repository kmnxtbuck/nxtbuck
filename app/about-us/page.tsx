import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUs() {
  return (
    <main className="px-8 py-12">
      <h1 className="text-4xl font-bold text-white">About Us</h1>
    </main>
  );
}
