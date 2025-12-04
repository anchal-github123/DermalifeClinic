import { Suspense, lazy } from "react";
import before from "../../assets/images/Before.webp"
import after from "../../assets/images/After.webp"
// Lazy import components
import Hero from "../Home/Hero"
import BeforeAfterSlider from "../../components/BeforeAfterSlider";
const Middleblock = lazy(() => import("../../components/common/Middleblock"));
const Service = lazy(() => import("../Service/Service"));
const Whychoose = lazy(() => import("../../components/Whychoose"));

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <div className="animate-spin w-12 h-12 border-4 border-[#0F1D80] border-t-transparent rounded-full"></div>
        </div>
      }>
        <Middleblock />
        <Service />
        <BeforeAfterSlider  title="Before/After"
        before={before}
        after={after}/>
        <Whychoose />

      </Suspense>
    </>
  );
}
