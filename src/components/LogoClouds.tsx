export default function LogoClouds() {
  const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];
  
  return (
    <section className="py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2 grayscale transition-all hover:grayscale-0 cursor-pointer opacity-50 hover:opacity-100">
              <div className="w-6 h-6 rounded-md bg-slate-200" />
              <span className="font-display font-bold text-lg text-slate-900 tracking-tight">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
