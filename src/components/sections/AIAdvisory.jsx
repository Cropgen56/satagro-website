import {useEffect, useMemo, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Leaf,
  Mic,
  Satellite,
  Send,
  ShieldCheck,
  Sparkles,
  User,
  Wifi,
  Zap,
} from "lucide-react";

const appUrl = "https://app.satagro.ai";

const conversation = [
  {
    from: "user",
    text: "What is wrong with my wheat crop?",
  },
  {
    from: "bot",
    text: "NDVI dropped from 0.74 → 0.51 in 14 days. Pattern matches early Yellow Rust infection. Recommend Propiconazole spray within 48 hours.",
  },
  {
    from: "user",
    text: "Which fertiliser should I apply this week?",
  },
  {
    from: "bot",
    text: "Soil moisture is optimal. Low EVI suggests nitrogen deficiency. Apply urea at 30 kg/ha in the morning.",
  },
];

const features = [
  "Analyses satellite + weather + historical field data",
  "Supports regional languages including Hindi & Tamil",
  "Built on agronomy best practices & ICAR guidelines",
  "Available 24/7 via app, SMS, and WhatsApp",
  "Crop-specific advice for 50+ crop varieties",
];

const quickSignals = [
  {label: "NDVI", value: "0.51", Icon: Leaf},
  {label: "Risk", value: "Yellow Rust", Icon: ShieldCheck},
  {label: "Scan", value: "Live", Icon: Satellite},
];

function TypingDots() {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          className="h-1.5 w-1.5 rounded-full bg-brand-primary"
          animate={{y: [0, -5, 0], opacity: [0.35, 1, 0.35]}}
          transition={{
            delay: dot * 0.14,
            repeat: Infinity,
            duration: 0.75,
          }}
        />
      ))}
    </div>
  );
}

function LiveText({text, active}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!active) {
      setDisplayed(text);
      return;
    }

    setDisplayed("");

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [text, active]);

  return (
    <span>
      {displayed}
      {active && displayed.length < text.length ? (
        <motion.span
          animate={{opacity: [0, 1, 0]}}
          transition={{repeat: Infinity, duration: 0.8}}
          className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-current"
        />
      ) : null}
    </span>
  );
}

export default function AIAdvisory() {
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);

  const activeMessage = conversation[visible];

  useEffect(() => {
    setVisible(0);
    setTyping(false);

    let timeoutId;

    const runConversation = (index = 0) => {
      if (index >= conversation.length - 1) return;

      timeoutId = setTimeout(() => {
        setTyping(true);

        timeoutId = setTimeout(() => {
          setTyping(false);
          setVisible(index + 1);
          runConversation(index + 1);
        }, conversation[index + 1].from === "bot" ? 1100 : 700);
      }, conversation[index].from === "bot" ? 1800 : 1200);
    };

    runConversation(0);

    return () => clearTimeout(timeoutId);
  }, []);

  const visibleMessages = useMemo(
    () => conversation.slice(0, visible + 1),
    [visible],
  );

  return (
    <section
      id="advisory"
      className="relative overflow-hidden bg-[#F7FBF5] py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(58,107,15,0.18),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(245,158,11,0.15),transparent_28%),linear-gradient(180deg,#F7FBF5_0%,#FFFFFF_58%,#F1F8EC_100%)]" />

      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-brand-primary/20 blur-[85px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-ember-accent/20 blur-[100px]" />

      <motion.div
        className="pointer-events-none absolute left-[7%] top-[22%] hidden h-3 w-3 rounded-full bg-brand-primary/40 shadow-[0_0_40px_rgba(58,107,15,0.6)] lg:block"
        animate={{y: [0, -16, 0], opacity: [0.35, 1, 0.35]}}
        transition={{duration: 3, repeat: Infinity, ease: "easeInOut"}}
      />

      <motion.div
        className="pointer-events-none absolute bottom-[20%] right-[10%] hidden h-4 w-4 rounded-full bg-ember-accent/50 shadow-[0_0_45px_rgba(245,158,11,0.55)] lg:block"
        animate={{y: [0, 20, 0], opacity: [0.35, 1, 0.35]}}
        transition={{duration: 3.5, repeat: Infinity, ease: "easeInOut"}}
      />

      <div className="container-wrap relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{opacity: 0, y: 24, scale: 0.98}}
          whileInView={{opacity: 1, y: 0, scale: 1}}
          viewport={{once: true}}
          transition={{duration: 0.7}}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-primary/20 via-ember-accent/10 to-transparent blur-2xl" />

          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/90 shadow-[0_30px_90px_rgba(58,107,15,0.18)] backdrop-blur-xl">
            <div className="flex items-center gap-3 border-b border-app-border bg-[#07130A] px-4 py-3.5 sm:px-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#9FE870]/12 text-[#BDEFA4]">
                <Bot className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  AgGPT — AI Agronomist
                </p>
                <p className="text-xs text-white/50">
                  Online · Satellite advisory live
                </p>
              </div>

              <span className="ml-auto flex items-center gap-1.5 rounded-full bg-status-green/15 px-2.5 py-1 text-xs font-semibold text-status-green">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-status-green" />
                Live
              </span>
            </div>

            <div className="border-b border-app-border bg-white/70 px-4 py-3 sm:px-5">
              <div className="grid grid-cols-3 gap-2">
                {quickSignals.map(({label, value, Icon}) => (
                  <motion.div
                    key={label}
                    whileHover={{y: -3}}
                    className="rounded-2xl border border-app-border bg-white/80 p-3 text-center"
                  >
                    <Icon className="mx-auto h-4 w-4 text-brand-primary" />
                    <p className="mt-1 text-[10px] text-zinc-400">{label}</p>
                    <p className="mt-0.5 truncate text-xs font-bold text-ember-text">
                      {value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[330px] flex-col gap-3 overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(58,107,15,0.08),transparent_28%)] p-4 sm:p-5">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(58,107,15,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(58,107,15,0.05)_1px,transparent_1px)] bg-[size:34px_34px]" />

              <AnimatePresence initial={false}>
                {visibleMessages.map((msg, i) => {
                  const isUser = msg.from === "user";
                  const isLatest = i === visible;

                  return (
                    <motion.div
                      key={`${msg.from}-${i}`}
                      initial={{opacity: 0, y: 14, scale: 0.98}}
                      animate={{opacity: 1, y: 0, scale: 1}}
                      exit={{opacity: 0}}
                      transition={{duration: 0.35}}
                      className={`relative flex items-end gap-2 ${
                        isUser ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          isUser
                            ? "bg-brand-primary text-white"
                            : "bg-brand-primary/10 text-brand-primary"
                        }`}
                      >
                        {isUser ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>

                      <div
                        className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                          isUser
                            ? "rounded-br-sm bg-brand-primary text-white"
                            : "rounded-bl-sm border border-app-border bg-white text-zinc-700"
                        }`}
                      >
                        <LiveText text={msg.text} active={isLatest} />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {typing && (
                <motion.div
                  initial={{opacity: 0, y: 8}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: 8}}
                  className="relative flex items-center gap-2 pl-10"
                >
                  <div className="rounded-2xl rounded-bl-sm border border-app-border bg-white px-4 py-3 shadow-sm">
                    <TypingDots />
                  </div>
                  <span className="text-xs text-zinc-400">
                    AgGPT is analysing satellite data…
                  </span>
                </motion.div>
              )}
            </div>

            <div className="flex items-center gap-2 border-t border-app-border bg-white px-4 py-3 sm:px-5">
              <div className="flex flex-1 items-center gap-2 rounded-full border border-app-border bg-app-panel px-4 py-2.5 text-sm text-zinc-400">
                <Mic className="h-4 w-4" />
                Ask about crop health, pests, soil, or weather
              </div>

              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white shadow-glow-sm"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <motion.div
            initial={{opacity: 0, y: 18}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
          >
            <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-brand-primary/15 bg-white/80 px-3 py-1.5 text-xs font-semibold text-brand-primary shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              AI Advisory Engine
            </div>

            <h2 className="bg-gradient-to-r from-[#111827] via-[#3A6B0F] to-[#4F8F18] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
              Your 24/7 expert agronomist, powered by AI.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
              AgGPT combines satellite data, real-time weather and historical
              crop records to give advice that actually fits your field.
            </p>
          </motion.div>

          <div className="mt-8 space-y-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{opacity: 0, x: 18}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{delay: i * 0.07, duration: 0.45}}
                whileHover={{x: 5}}
                className="group flex items-start gap-3 rounded-2xl border border-app-border bg-white/80 p-4 shadow-sm backdrop-blur transition-all duration-300 hover:border-brand-primary/30 hover:bg-white hover:shadow-[0_18px_45px_rgba(58,107,15,0.12)]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <p className="text-sm leading-relaxed text-zinc-600">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href={appUrl}
            initial={{opacity: 0, y: 12}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{delay: 0.35, duration: 0.45}}
            whileHover={{y: -4}}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-primary px-7 py-3.5 text-sm font-bold text-white shadow-glow-md transition-all duration-300 hover:bg-brand-hover"
          >
            Try AgGPT Free
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}