import {useEffect, useRef} from "react";
import gsap from "gsap";
import {
  Satellite,
  Globe2,
  Cloud,
  Database,
  Sprout,
  Landmark,
  Microscope,
  Orbit,
  Rocket,
  Network,
  ShieldCheck,
} from "lucide-react";

const partners = [
  {name: "ISRO", Icon: Rocket},
  {name: "ESA", Icon: Orbit},
  {name: "Google Earth Engine", Icon: Globe2},
  {name: "AWS", Icon: Cloud},
  {name: "Sentinel Hub", Icon: Satellite},
  {name: "FAO", Icon: Sprout},
  {name: "NABARD", Icon: Landmark},
  {name: "ICAR", Icon: Microscope},
  {name: "Copernicus", Icon: Network},
  {name: "NASA EarthData", Icon: Database},
];

export default function TrustBar() {
  const railRef = useRef(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const animation = gsap.to(rail, {
      xPercent: -50,
      duration: 24,
      repeat: -1,
      ease: "none",
    });

    return () => animation.kill();
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-app-border bg-[#07130A] py-6 text-white sm:py-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,143,24,0.35),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.22),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="container-wrap relative">
        <div className="mb-5 flex flex-col items-center justify-between gap-3 text-center lg:flex-row lg:text-left">
          <div>
            <div className="mx-auto mb-2 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-[#BDEFA4] backdrop-blur lg:mx-0">
              <ShieldCheck className="h-4 w-4" />
              Trusted Integrations
            </div>

            <h2 className="max-w-2xl text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl">
              Built on a global satellite, cloud & agriculture ecosystem.
            </h2>
          </div>

          <p className="max-w-md text-xs leading-relaxed text-white/60 sm:text-sm">
            SatAgro.AI connects with leading satellite, climate, cloud and agri
            intelligence systems to deliver reliable crop insights.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#07130A] to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#07130A] to-transparent sm:w-20" />

          <div ref={railRef} className="flex w-max gap-3">
            {[...partners, ...partners].map(({name, Icon}, i) => (
              <div
                key={`${name}-${i}`}
                className="group relative flex h-24 w-44 shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08] p-3 backdrop-blur transition-all duration-300 hover:border-[#9FE870]/50 hover:bg-white/[0.12]"
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#9FE870]/10 blur-2xl transition-all duration-300 group-hover:bg-[#9FE870]/25" />

                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#9FE870]/12 text-[#BDEFA4] transition-all duration-300 group-hover:bg-[#9FE870] group-hover:text-[#07130A]">
                    <Icon className="h-4 w-4" />
                  </span>

                  <span className="text-[10px] font-semibold text-white/35">
                    0{(i % partners.length) + 1}
                  </span>
                </div>

                <div>
                  <p className="text-sm font-bold text-white">{name}</p>
                  <p className="mt-0.5 text-[11px] text-white/45">
                    Connected ecosystem
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}