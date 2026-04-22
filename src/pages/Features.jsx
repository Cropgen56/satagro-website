import { Helmet } from "react-helmet-async";
import Layout from "@components/layout/Layout";
import FeaturesSection from "@components/sections/Features";
import HowItWorks from "@components/sections/HowItWorks";
import SatelliteIndices from "@components/sections/SatelliteIndices";
import CTA from "@components/sections/CTA";
import ScrollReveal from "@components/ui/ScrollReveal";

export default function Features() {
  return (
    <Layout>
      <Helmet>
        <title>Features | SatAgro.AI</title>
        <meta name="description" content="Explore SatAgro.AI features — 30+ satellite indices, AI crop advisory, disease detection, yield prediction, and hyper-local weather intelligence." />
      </Helmet>

      {/* Page hero */}
      <section className="bg-hero-gradient py-24 text-center">
        <div className="container-wrap">
          <ScrollReveal>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-brand-primary">
              Platform Features
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-tight text-ember-text md:text-6xl">
              Built for the Modern Farmer
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-500">
              Everything you need to monitor, analyse, and optimise your fields — powered by satellite data and AI.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <FeaturesSection />
      <HowItWorks />
      <SatelliteIndices />
      <CTA />
    </Layout>
  );
}