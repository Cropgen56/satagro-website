const partners = [
  "ISRO", "ESA", "Google Earth Engine", "AWS", "Sentinel Hub",
  "FAO", "NABARD", "ICAR", "Copernicus", "NASA EarthData",
];

export default function TrustBar() {
  return (
    <section className="border-y border-app-border bg-white py-5">
      <div className="container-wrap">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-widest text-zinc-400 md:w-36">
            Trusted &amp; Integrated With
          </p>
          <div className="mask-fade-x w-full overflow-hidden">
            <div className="animate-marquee flex w-max gap-10">
              {[...partners, ...partners].map((name, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap rounded-full border border-app-border bg-app-panel px-4 py-1.5 text-sm font-semibold text-zinc-500 transition-colors duration-200 hover:border-brand-primary/40 hover:text-brand-hover"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}