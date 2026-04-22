import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@components/layout/Layout";
import ScrollReveal from "@components/ui/ScrollReveal";
import { ShieldCheck, ArrowRight } from "lucide-react";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <p>
        Welcome to SatAgro.AI! SatAgro.AI ("we," "our," or "us"), operated by Biodrops
        Technologies Pvt. Ltd., respects your privacy and is committed to protecting it through
        our compliance with this policy. This Privacy Policy describes the types of information
        we collect when you use our SatAgro.AI web and mobile applications ("Platform") and
        outlines our practices for collecting, using, maintaining, protecting, and disclosing
        that information.
      </p>
    ),
  },
  {
    id: "data-collection",
    title: "Data Collection & Usage",
    content: (
      <>
        <p className="mb-3">We collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, phone number, billing
            details, and other contact information.
          </li>
          <li>
            <strong>Location Data:</strong> Geospatial location and farm-specific coordinates
            (field boundaries drawn on our map).
          </li>
          <li>
            <strong>Device Information:</strong> IP address, device type, OS version, and browser
            details (collected for security and performance purposes).
          </li>
          <li>
            <strong>Agricultural Data:</strong> Crop types, farming practices, satellite imagery
            indices (NDVI, EVI, NDWI, etc.), weather data, and other agronomic insights related
            to your registered fields.
          </li>
          <li>
            <strong>Uploaded Media:</strong> Field photos or documents you voluntarily upload to
            the platform.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "subscription-payment",
    title: "Subscription & Payment",
    content: (
      <ul>
        <li>
          SatAgro.AI offers a free trial period, followed by monthly or annual subscription
          plans based on acreage and selected feature modules.
        </li>
        <li>
          If you are charged incorrectly, activate a plan by mistake, or cancel within 30 days
          of a charge, you are entitled to a full refund.
        </li>
        <li>
          Refund requests should be submitted to{" "}
          <a href="mailto:support@satagro.ai" className="text-brand-primary hover:underline underline-offset-2">
            support@satagro.ai
          </a>{" "}
          with your account details.
        </li>
      </ul>
    ),
  },
  {
    id: "purpose",
    title: "Purpose of Data Collection",
    content: (
      <ul>
        <li>User registration, authentication, and account management.</li>
        <li>
          Providing personalised satellite-based agricultural insights and AI advisory.
        </li>
        <li>
          Platform analytics to improve service delivery, performance, and accuracy.
        </li>
        <li>Secure transaction processing and subscription billing management.</li>
        <li>
          Sending relevant notifications including crop alerts, advisory updates, and
          weather warnings.
        </li>
      </ul>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Data",
    content: (
      <ul>
        <li>Provide and continuously improve our AI-based crop monitoring services.</li>
        <li>
          Customise advisory and insights (including multilingual AgGPT responses) based on
          your specific farm data.
        </li>
        <li>Ensure platform security and prevent unauthorised access.</li>
        <li>
          Communicate product updates, important notifications, or technical support
          responses.
        </li>
        <li>
          Conduct internal research to enhance satellite index accuracy and AI model
          performance.
        </li>
      </ul>
    ),
  },
  {
    id: "security",
    title: "Data Security & Protection",
    content: (
      <>
        <p className="mb-3">
          We implement industry-standard security measures to protect your personal and
          farm-related data:
        </p>
        <ul>
          <li>Advanced encryption standards (TLS 1.3 in transit, AES-256 at rest)</li>
          <li>Secure cloud storage on trusted global infrastructure</li>
          <li>Continuous monitoring and proactive threat detection</li>
          <li>Access controls limiting data visibility to authorised personnel only</li>
        </ul>
        <p className="mt-3">
          Despite stringent security measures, no digital platform can guarantee absolute
          security. We encourage users to use strong passwords and report any suspicious
          activity immediately.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing & Third-Party Involvement",
    content: (
      <>
        <p className="mb-3">
          We do not sell your personal data to third parties. However, we may share data with:
        </p>
        <ul>
          <li>Government agencies or regulators when legally required.</li>
          <li>
            Trusted third-party analytics, cloud infrastructure, or payment processing
            partners who are contractually bound to protect your data.
          </li>
          <li>
            Research institutions working on sustainable farming solutions — only with
            anonymised, aggregated data.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party-sdks",
    title: "Third-Party SDKs and Integrations",
    content: (
      <>
        <p className="mb-3">SatAgro.AI uses the following third-party services:</p>
        <ul>
          <li>
            <strong>Google Earth Engine / Sentinel Hub:</strong> Used for satellite imagery
            acquisition and processing.
          </li>
          <li>
            <strong>Firebase:</strong> Used for analytics, crash reporting, and user
            engagement.
          </li>
          <li>
            <strong>Google Maps API:</strong> Used for field boundary mapping and geolocation
            services.
          </li>
          <li>
            <strong>AWS:</strong> Secure cloud infrastructure for data storage and processing.
          </li>
        </ul>
        <p className="mt-3">
          We ensure all third-party services adhere to global data protection standards and
          handle your information responsibly.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your Rights & Control",
    content: (
      <ul>
        <li>
          <strong>Access &amp; Correction:</strong> You can request access to your data and
          update inaccuracies within your account settings at any time.
        </li>
        <li>
          <strong>Data Deletion:</strong> You can request deletion of your personal
          information by contacting{" "}
          <a href="mailto:support@satagro.ai" className="text-brand-primary hover:underline underline-offset-2">
            support@satagro.ai
          </a>
          . We will process deletion requests within 30 days.
        </li>
        <li>
          <strong>Opt-Out:</strong> You can opt out of marketing communications and
          personalised advertising at any time via account settings or by emailing us.
        </li>
        <li>
          <strong>Data Portability:</strong> You may request an export of your farm data in
          a machine-readable format.
        </li>
      </ul>
    ),
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    content: (
      <p>
        SatAgro.AI does not target users under the age of 13. We do not knowingly collect
        personal data from children under this age. If you believe a child has provided us with
        personal information, please contact us immediately at{" "}
        <a href="mailto:support@satagro.ai" className="text-brand-primary hover:underline underline-offset-2">
          support@satagro.ai
        </a>{" "}
        and we will take prompt action to delete it.
      </p>
    ),
  },
  {
    id: "compliance",
    title: "Compliance",
    content: (
      <p>
        Our data handling practices comply with the Information Technology Act 2000 (India),
        Google Play Developer Policy, relevant provisions of the GDPR (for users in the
        European Economic Area), and other applicable global data protection regulations.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy periodically. The "Last updated" date at the top of
        this page will always reflect the most recent revision. Continued use of the platform
        following any changes constitutes your acceptance of the updated policy. We will
        notify users of material changes via email or in-app notification.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | SatAgro.AI</title>
        <meta
          name="description"
          content="SatAgro.AI Privacy Policy — how we collect, use, protect, and share your farm and personal data."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Page Hero */}
      <section className="bg-hero-gradient py-16">
        <div className="container-wrap max-w-4xl">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-primary">
                Legal
              </p>
            </div>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ember-text md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-zinc-500">
              Last updated:{" "}
              <time dateTime="2026-04-22" className="font-semibold text-ember-text">
                April 22, 2026
              </time>
            </p>
            <p className="mt-3 max-w-2xl text-zinc-500">
              This Privacy Policy explains how SatAgro.AI collects, uses, and protects your
              information. We are committed to transparency and your data rights.
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
                      href={`#${s.id}`}
                      className="block rounded-lg px-3 py-1.5 text-sm text-zinc-600 hover:bg-app-panel hover:text-brand-primary transition-colors"
                    >
                      {s.title}
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
            <div className="space-y-6">
              {sections.map((s, i) => (
                <ScrollReveal key={s.id} delay={i < 4 ? i * 0.04 : 0}>
                  <div
                    id={s.id}
                    className="scroll-mt-24 rounded-2xl border border-app-border bg-white p-7 shadow-sm"
                  >
                    <h2 className="mb-4 font-display text-xl font-bold text-ember-text">
                      {s.title}
                    </h2>
                    <div className="text-sm leading-relaxed text-zinc-600 [&_ul]:mt-2 [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul>li]:list-disc [&_ul>li]:marker:text-brand-primary [&_strong]:text-zinc-800">
                      {s.content}
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Contact block */}
              <ScrollReveal>
                <div
                  id="contact"
                  className="scroll-mt-24 rounded-2xl border border-brand-primary/20 bg-brand-primary/5 p-7"
                >
                  <h2 className="font-display text-xl font-bold text-ember-text">Contact Us</h2>
                  <p className="mt-3 text-sm text-zinc-600">
                    For any privacy-related concerns, data requests, or queries about this
                    policy, please reach out to us:
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <span className="font-semibold text-ember-text">Email: </span>
                      <a
                        href="mailto:support@satagro.ai"
                        className="text-brand-primary hover:underline underline-offset-2"
                      >
                        support@satagro.ai
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-ember-text">Phone: </span>
                      <a
                        href="tel:+917012804255"
                        className="text-brand-primary hover:underline underline-offset-2"
                      >
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
                    <Link to="/terms-conditions" className="btn-secondary">
                      View Terms &amp; Conditions
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
