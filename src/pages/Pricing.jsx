import { Helmet } from "react-helmet-async";
import Layout from "@components/layout/Layout";
import PricingSection from "@components/sections/Pricing";
import FAQ from "@components/sections/FAQ";
import CTA from "@components/sections/CTA";

export default function Pricing() {
  return (
    <Layout>
      <Helmet>
        <title>Pricing | SatAgro.AI</title>
        <meta name="description" content="Affordable satellite crop monitoring plans starting at ₹399/ha/month. Try SatAgro.AI free for 14 days." />
      </Helmet>
      <PricingSection />
      <FAQ />
      <CTA />
    </Layout>
  );
}