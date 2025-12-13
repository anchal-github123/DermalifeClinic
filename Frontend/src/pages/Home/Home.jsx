import { Helmet } from "react-helmet-async";
import { Suspense, lazy } from "react";
// Non-lazy component (LCP section)
import Hero from "../Home/Hero";
// Lazy load components
const Middleblock = lazy(() => import("../../components/common/Middleblock"));
const Service = lazy(() => import("../Service/Service"));
const Whychoose = lazy(() => import("../../components/Whychoose"));
const Slider = lazy(() => import("../../components/Slider"));

// Loader Component
const Loader = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full"></div>
  </div>
);

export default function Home() {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Dermalife Cuttack – Best Cosmetology & Aesthetic Clinic in Odisha
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Dermalife Cuttack is a leading cosmetology and aesthetic clinic serving Cuttack and Odisha, offering laser treatments, hydrafacial, fillers facelift, fat loss injections, PRP hair treatment, acne care, pigmentation correction, anti-aging and advanced skin & hair treatments."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.dermalifecuttack.in/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Dermalife Cuttack – Cosmetology & Aesthetic Clinic in Odisha"
        />
        <meta
          property="og:description"
          content="Advanced cosmetology & aesthetic clinic in Cuttack offering laser treatment, hydrafacial, fillers facelift, semi-permanent makeup, fat loss injections and skin & hair care."
        />
        <meta property="og:url" content="https://www.dermalifecuttack.in/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main role="main" aria-label="Dermalife Cuttack Homepage">
        {/* HERO SECTION – always render immediately */}
        <Hero />

        {/* Lazy Loaded Sections */}
        <Suspense fallback={<Loader />}>
          <Middleblock />
          <Service />
          <Slider />
          <Whychoose />
        </Suspense>
      </main>
    </>
  );
}
