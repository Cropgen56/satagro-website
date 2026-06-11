import {useEffect, useRef} from "react";
import {motion} from "framer-motion";
import gsap from "gsap";
import {MessageCircleHeart, Quote, Star} from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patil",
    state: "Maharashtra",
    crop: "Tomato",
    quote:
      "SatAgro detected leaf blight early and saved major losses. I couldn't believe the satellite caught it 12 days before I could even see it.",
    initials: "RP",
    rating: 5,
  },
  {
    name: "Gurpreet Singh",
    state: "Punjab",
    crop: "Wheat",
    quote:
      "NDWI drought alerts reduced my water usage by 30% this season. The app knows my field better than I do!",
    initials: "GS",
    rating: 5,
  },
  {
    name: "Sunil Yadav",
    state: "Madhya Pradesh",
    crop: "Soybean",
    quote:
      "The Hindi advisory improved my yield by 18%. Easy to understand and very precise. I recommend it to every farmer.",
    initials: "SY",
    rating: 5,
  },
  {
    name: "Kavitha Reddy",
    state: "Karnataka",
    crop: "Cotton",
    quote:
      "The weekly farm report PDF is excellent — I share it with my bank too for crop loan documentation.",
    initials: "KR",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    state: "Uttar Pradesh",
    crop: "Rice",
    quote:
      "Pest risk alerts have been game-changing. Reduced pesticide spending by 40% without any increase in crop damage.",
    initials: "AS",
    rating: 5,
  },
  {
    name: "Bhavna Patel",
    state: "Gujarat",
    crop: "Groundnut",
    quote:
      "I run 3 farms and the multi-field dashboard makes managing all of them so much easier. The yield forecast is remarkably accurate.",
    initials: "BP",
    rating: 5,
  },
];

const positions = [
  "lg:translate-y-6",
  "lg:-translate-y-4",
  "lg:translate-y-10",
  "lg:-translate-y-2",
  "lg:translate-y-8",
  "lg:-translate-y-6",
];

function StarRating({count = 5}) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({length: 5}).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < count ? "fill-[#F59E0B] text-[#F59E0B]" : "text-white/20"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".testimonial-float-card");

      cards.forEach((card, i) => {
        gsap.to(card, {
          y: i % 2 === 0 ? -14 : 14,
          x: i % 3 === 0 ? 8 : -8,
          duration: 3.2 + i * 0.25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.15,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pauseFloating = () => {
    gsap.to(".testimonial-float-card", {
      timeScale: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const resumeFloating = () => {
    gsap.to(".testimonial-float-card", {
      timeScale: 1,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative overflow-hidden border-y border-app-border bg-[#07130A] py-14 text-white sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,143,24,0.35),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.22),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="container-wrap relative">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
          <div>
            <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-[#BDEFA4] backdrop-blur lg:mx-0">
              <MessageCircleHeart className="h-4 w-4" />
              Farmer Stories
            </div>

            <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
              Farmers speak for themselves.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
            Real stories from farmers who transformed crop monitoring, water
            usage, pest control and farm reporting with SatAgro.AI.
          </p>
        </div>

        <div
          onMouseEnter={pauseFloating}
          onMouseLeave={resumeFloating}
          className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-4"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.article
                key={t.name}
                initial={{opacity: 0, y: 22}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: (i % 3) * 0.08, duration: 0.55}}
                whileHover={{y: -8, scale: 1.015}}
                className={`testimonial-float-card group relative flex min-h-[230px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur transition-all duration-300 hover:border-[#9FE870]/50 hover:bg-white/[0.12] ${positions[i]}`}
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#9FE870]/10 blur-2xl transition-all duration-300 group-hover:bg-[#9FE870]/25" />

                <div className="relative mb-4 flex items-center justify-between">
                  <StarRating count={t.rating} />

                  <Quote className="h-5 w-5 text-white/25 transition-colors duration-300 group-hover:text-[#BDEFA4]" />
                </div>

                <blockquote className="relative flex-1 text-sm italic leading-relaxed text-white/70">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="relative mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#9FE870]/12 text-sm font-bold text-[#BDEFA4] transition-all duration-300 group-hover:bg-[#9FE870] group-hover:text-[#07130A]">
                    {t.initials}
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-white/45">
                      {t.state} · {t.crop}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#9FE870] to-[#F59E0B] transition-transform duration-500 group-hover:scale-x-100" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}