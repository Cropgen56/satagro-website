import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@components/layout/Layout";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <Helmet>
        <title>404 — Page Not Found | SatAgro.AI</title>
      </Helmet>
      <section className="flex min-h-[70vh] items-center justify-center bg-hero-gradient py-20 text-center">
        <div className="container-wrap max-w-lg">
          <p className="font-mono text-8xl font-black text-brand-primary/20">404</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-ember-text">
            Field Not Found
          </h1>
          <p className="mt-4 text-zinc-500">
            Looks like this page was lost in the satellite imagery. Let's get you back to solid ground.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-primary">
              <Home className="h-4 w-4" /> Go Home
            </Link>
            <button onClick={() => window.history.back()} className="btn-secondary">
              <ArrowLeft className="h-4 w-4" /> Go Back
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}