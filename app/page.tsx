import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | NxtBuck",
};

const line1 = "Engineered For";
const line2 = "What's Next.";

export default function Home() {
  return (
    <main className="flex justify-center px-8 pt-24 md:pt-32 lg:pt-40">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white max-w-4xl leading-tight">
        <span className="block">
          {line1.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block opacity-0 animate-[fadeInLetter_0.1s_ease-out_forwards]"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
        <span className="block">
          {line2.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block opacity-0 animate-[fadeInLetter_0.1s_ease-out_forwards]"
              style={{ animationDelay: `${(line1.length + index) * 50}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </h1>
    </main>
  );
}
