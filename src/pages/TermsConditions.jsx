import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@components/layout/Layout";
import ScrollReveal from "@components/ui/ScrollReveal";
import { FileText, ArrowRight } from "lucide-react";

const sections = [
  {
    id: 1,
    title: "Acceptance of Terms",
    content: (
      <p>
        By using SatAgro.AI's platform, you confirm that you have read, understood, and agreed to
        these Terms. If you do not accept these Terms, please discontinue use of our services.
      </p>
    ),
  },
  {
    id: 2,
    title: "Our Services",
    content: (
      <>
        <p className="mb-3">SatAgro.AI provides digital agriculture solutions, including:</p>
        <ul>
          <li>AI-powered crop advisory (AgGPT)</li>
          <li>Satellite-based crop health monitoring (NDVI, EVI, NDWI, LAI and 30+ indices)</li>
          <li>Yield prediction &amp; analysis</li>
          <li>Soil, weather &amp; moisture insights</li>
          <li>Remote farm management via web &amp; mobile app</li>
          <li>Early disease &amp; pest detection alerts</li>
          <li>SaaS-based dashboards &amp; automated farm reports</li>
        </ul>
        <p className="mt-3">SatAgro.AI may update or add new features from time to time.</p>
      </>
    ),
  },
  {
    id: 3,
    title: "User Obligations",
    content: (
      <>
        <p className="mb-3">Users agree to:</p>
        <ul>
          <li>Provide accurate farm and personal information.</li>
          <li>Use the platform responsibly and legally.</li>
          <li>Not misuse, copy, or manipulate SatAgro.AI's insights or systems.</li>
          <li>Keep login credentials secure and confidential.</li>
        </ul>
        <p className="mt-3">Users are responsible for any activity performed under their account.</p>
      </>
    ),
  },
  {
    id: 4,
    title: "Subscription, Billing & Refunds",
    content: (
      <ul>
        <li>SatAgro.AI offers monthly and annual subscription plans.</li>
        <li>Plans are based on acreage (hectares) and selected modules.</li>
        <li>All subscriptions auto-renew unless cancelled.</li>
        <li>Users can cancel anytime from the app or by emailing us at <a href="mailto:support@satagro.ai" className="text-brand-primary hover:underline underline-offset-2">support@satagro.ai</a>.</li>
        <li>Mistaken charges or activation errors are refundable within 30 days.</li>
        <li>Refunds (where applicable) are processed within 7–10 business days.</li>
      </ul>
    ),
  },
  {
    id: 5,
    title: "Data Collection & Privacy",
    content: (
      <>
        <p className="mb-3">SatAgro.AI may collect:</p>
        <ul>
          <li>Farm location &amp; boundaries</li>
          <li>Satellite data related to your crops</li>
          <li>Device information for security purposes</li>
          <li>User contact details</li>
          <li>Field photos uploaded by the user</li>
        </ul>
        <p className="mt-3 mb-2">Data is used to:</p>
        <ul>
          <li>Improve AI predictions and crop advisory accuracy</li>
          <li>Provide personalised, multilingual advisory</li>
          <li>Develop improved crop analytics</li>
          <li>Enhance overall user experience</li>
        </ul>
        <p className="mt-3">
          SatAgro.AI does not sell user data to third parties. Data is shared only when legally
          required or with explicit user permission. For full details, please review our{" "}
          <Link to="/privacy-policy" className="text-brand-primary hover:underline underline-offset-2">
            Privacy Policy
          </Link>.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Intellectual Property",
    content: (
      <>
        <p className="mb-3">
          All AI models, algorithms, dashboards, satellite insights, content, and designs are the
          exclusive property of SatAgro.AI / Biodrops Technologies Pvt. Ltd.
        </p>
        <p className="mb-2">Users may not:</p>
        <ul>
          <li>Copy, reproduce, or redistribute any part of the platform</li>
          <li>Modify or create derivative works from the platform</li>
          <li>Reverse-engineer any feature or algorithm</li>
        </ul>
        <p className="mt-3">Any such use requires explicit written consent from SatAgro.AI.</p>
      </>
    ),
  },
  {
    id: 7,
    title: "Satellite & AI Disclaimer",
    content: (
      <>
        <p className="mb-3">
          SatAgro.AI insights are based on satellite data (Sentinel-2, Landsat-8/9), weather inputs,
          and AI predictions. Due to natural conditions — including cloud cover, atmospheric
          interference, and third-party data delays — SatAgro.AI does not guarantee 100% accuracy.
        </p>
        <ul>
          <li>AI advisory is predictive and should be used responsibly.</li>
          <li>Final agricultural decisions remain the sole responsibility of the user.</li>
          <li>SatAgro.AI strongly recommends combining satellite insights with on-ground observation.</li>
        </ul>
      </>
    ),
  },
  {
    id: 8,
    title: "Service Availability",
    content: (
      <>
        <p className="mb-3">SatAgro.AI services may face downtime due to:</p>
        <ul>
          <li>Scheduled maintenance windows</li>
          <li>Satellite data provider delays</li>
          <li>Third-party infrastructure outages</li>
          <li>System upgrades and improvements</li>
        </ul>
        <p className="mt-3">SatAgro.AI is not liable for temporary unavailability of the service.</p>
      </>
    ),
  },
  {
    id: 9,
    title: "Limitation of Liability",
    content: (
      <>
        <p className="mb-3">SatAgro.AI is not responsible for:</p>
        <ul>
          <li>Losses resulting from reliance on AI insights</li>
          <li>Crop damage due to weather, pests, or incorrect input use</li>
          <li>Financial losses or operational mistakes</li>
          <li>Third-party service interruptions</li>
        </ul>
        <p className="mt-3">Users agree to use the service at their own risk.</p>
      </>
    ),
  },
  {
    id: 10,
    title: "Indemnification",
    content: (
      <p>
        Users agree to indemnify and hold harmless SatAgro.AI and Biodrops Technologies Pvt. Ltd.
        from claims, damages, liabilities, or losses arising from misuse of the platform, incorrect
        interpretation of insights, or violation of these Terms &amp; Conditions.
      </p>
    ),
  },
  {
    id: 11,
    title: "Modifications",
    content: (
      <p>
        SatAgro.AI may update these Terms at any time. Continued use of the platform indicates
        acceptance of the updated Terms. Users will be notified of material changes through email or
        in-app notifications.
      </p>
    ),
  },
  {
    id: 12,
    title: "Governing Law",
    content: (
      <p>
        These Terms shall be governed by the laws of India, with disputes subject to the exclusive
        jurisdiction of the courts in Kannur, Kerala, India.
      </p>
    ),
  },
];

export default function TermsConditions() {
  return (
    <Layout>
      <Helmet>
        <title>Terms &amp; Conditions | SatAgro.AI</title>
        <meta
          name="description"
          content="Read SatAgro.AI's Terms & Conditions — covering subscriptions, data usage, intellectual property, AI disclaimer, and more."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Page Hero */}
      <section className="bg-hero-gradient py-16">
        <div className="container-wrap max-w-4xl">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                <FileText className="h-6 w-6" />
              </div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-primary">
                Legal
              </p>
            </div>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ember-text md:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-zinc-500">
              Last updated:{" "}
              <time dateTime="2026-04-22" className="font-semibold text-ember-text">
                April 22, 2026
              </time>
            </p>
            <p className="mt-3 max-w-2xl text-zinc-500">
              Please read these Terms carefully before using the SatAgro.AI platform. By accessing
              or using our services, you agree to be bound by these Terms.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-wrap max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr]">

            {/* Table of Contents — sticky sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-app-border bg-white p-5 shadow-sm">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
                  On this page
                </p>
                <nav className="space-y-1.5">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#section-${s.id}`}
                      className="block rounded-lg px-3 py-1.5 text-sm text-zinc-600 hover:bg-app-panel hover:text-brand-primary transition-colors"
                    >
                      {s.id}. {s.title}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    className="block rounded-lg px-3 py-1.5 text-sm text-zinc-600 hover:bg-app-panel hover:text-brand-primary transition-colors"
                  >
                    Contact Us
                  </a>
                </nav>
              </div>
            </aside>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((s, i) => (
                <ScrollReveal key={s.id} delay={i < 4 ? i * 0.05 : 0}>
                  <div
                    id={`section-${s.id}`}
                    className="scroll-mt-24 rounded-2xl border border-app-border bg-white p-7 shadow-sm"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
                        {s.id}
                      </span>
                      <h2 className="font-display text-xl font-bold text-ember-text">{s.title}</h2>
                    </div>
                    <div className="prose-legal text-sm leading-relaxed text-zinc-600 [&_ul]:mt-2 [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul>li]:list-disc [&_ul>li]:marker:text-brand-primary">
                      {s.content}
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Contact */}
              <ScrollReveal>
                <div
                  id="contact"
                  className="scroll-mt-24 rounded-2xl border border-brand-primary/20 bg-brand-primary/5 p-7"
                >
                  <h2 className="font-display text-xl font-bold text-ember-text">Contact &amp; Legal Inquiries</h2>
                  <p className="mt-3 text-sm text-zinc-600">
                    For questions, support, or legal inquiries related to these Terms:
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <span className="font-semibold text-ember-text">Email: </span>
                      <a href="mailto:support@satagro.ai" className="text-brand-primary hover:underline underline-offset-2">
                        support@satagro.ai
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-ember-text">Phone: </span>
                      <a href="tel:+917012804255" className="text-brand-primary hover:underline underline-offset-2">
                        +91 70128 04255
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-ember-text">Address: </span>
                      Thavakkara Complex, Near Sunitha Furniture, Thavakkara, Kannur, Kerala — 670002, India
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to="/contact" className="btn-primary">
                      Contact Our Team <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link to="/privacy-policy" className="btn-secondary">
                      View Privacy Policy
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
