import { Helmet } from "react-helmet-async";
import { Suspense, lazy } from "react";
// Non-lazy component (LCP section)
import Hero from "../Home/Hero";
// Lazy load components
const Middleblock = lazy(() => import("../../components/common/Middleblock"));
const Service = lazy(() => import("../Service/Service"));
const Whychoose = lazy(() => import("../../components/Whychoose"));
const Slider = lazy(() => import("../../components/Slider")); // make Slider lazy too

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
        <title>Dermalife Cuttack – Skin, Hair, Laser & Aesthetic Clinic</title>
        <meta name="description" content="Dermalife Cuttack — Expert dermatologists offering acne & pigmentation treatments, PRP hair regrowth, laser hair removal, and anti-aging procedures." />
        <link rel="canonical" href="https://www.dermalifecuttack.in/" />
        {/* Open Graph */}
        <meta property="og:title" content="Dermalife Cuttack – Skin, Hair, Laser & Aesthetic Clinic" />
        <meta property="og:description" content="Trusted dermatology and aesthetic clinic in Cuttack offering skin, hair, laser, and anti-aging treatments." />
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
