export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} MaplePeak Roofing. All rights reserved.</p>
        <p>Toronto, ON · (416) 555-0199</p>
      </div>
    </footer>
  );
}

