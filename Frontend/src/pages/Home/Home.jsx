import { Suspense, lazy } from "react";

// Non-lazy component (LCP section)
import Hero from "../Home/Hero";
import Slider from "../../components/Slider";

// Lazy load components
const Middleblock = lazy(() => import("../../components/common/Middleblock"));
const Service = lazy(() => import("../Service/Service"));
const Whychoose = lazy(() => import("../../components/Whychoose"));

// Loader Component
const Loader = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full"></div>
  </div>
);

export default function Home() {
  return (
    <main role="main" aria-label="Dermalife Cuttack Homepage">
      {/* HERO SECTION – always render immediately */}
      <Hero />

      {/* Lazy Loaded Sections */}
      
     <Suspense fallback={<Loader />}>
  <Middleblock />
  <Service />
  <Whychoose />
</Suspense>
    </main>
  );
}
