import SectionLabel from "@components/ui/SectionLabel";
import ScrollReveal from "@components/ui/ScrollReveal";

const testimonials = [
  {
    name: "Rajesh Patil",
    state: "Maharashtra",
    crop: "Tomato",
    quote: "SatAgro detected leaf blight early and saved major losses. I couldn't believe the satellite caught it 12 days before I could even see it.",
    initials: "RP",
    rating: 5,
  },
  {
    name: "Gurpreet Singh",
    state: "Punjab",
    crop: "Wheat",
    quote: "NDWI drought alerts reduced my water usage by 30% this season. The app knows my field better than I do!",
    initials: "GS",
    rating: 5,
  },
  {
    name: "Sunil Yadav",
    state: "Madhya Pradesh",
    crop: "Soybean",
    quote: "The Hindi advisory improved my yield by 18%. Easy to understand and very precise. I recommend it to every farmer.",
    initials: "SY",
    rating: 5,
  },
  {
    name: "Kavitha Reddy",
    state: "Karnataka",
    crop: "Cotton",
    quote: "The weekly farm report PDF is excellent — I share it with my bank too for crop loan documentation.",
    initials: "KR",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    state: "Uttar Pradesh",
    crop: "Rice",
    quote: "Pest risk alerts have been game-changing. Reduced pesticide spending by 40% without any increase in crop damage.",
    initials: "AS",
    rating: 5,
  },
  {
    name: "Bhavna Patel",
    state: "Gujarat",
    crop: "Groundnut",
    quote: "I run 3 farms and the multi-field dashboard makes managing all of them so much easier. The yield forecast is remarkably accurate.",
    initials: "BP",
    rating: 5,
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`h-4 w-4 ${i < count ? "text-status-orange" : "text-zinc-200"}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container-wrap">
        <SectionLabel
          align="center"
          label="Testimonials"
          title="Farmers Speak for Themselves"
          subtitle="Real stories from farmers who transformed their field management with SatAgro.AI."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={(i % 3) * 0.08}>
              <article className="flex h-full flex-col gap-4 rounded-2xl border border-app-border bg-white p-6 shadow-sm card-hover">
                <StarRating count={t.rating} />

                <blockquote className="flex-1 text-sm leading-relaxed text-zinc-600 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 border-t border-app-border pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-ember-sidebar text-sm font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-ember-text">{t.name}</p>
                    <p className="text-xs text-zinc-400">{t.state} · {t.crop}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}