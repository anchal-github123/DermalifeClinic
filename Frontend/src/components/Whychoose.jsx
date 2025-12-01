import { memo } from "react";
import {
  CheckCircle,
  UserCheck,
  Star,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Syringe,
} from "lucide-react";

import { leftPoints, rightPoints } from "../Utils/whyshouldchoosedata";

const iconMap = {
  CheckCircle,
  UserCheck,
  Star,
  ShieldCheck,
  Sparkles,
  HeartHands: HeartHandshake,
};

function Whychoose() {
  return (
    <section className="w-full py-16 md:py-20 bg-lightblue mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-dark mb-12 md:mb-16">
          Why We Are The Best <span className="text-secondary">– Dermalife</span>
        </h2>

        <div className="grid gap-10 md:gap-14 lg:grid-cols-3 items-center">

          {/* LEFT POINT GROUP */}
          <PointList data={leftPoints} />

          {/* CENTER CIRCLE */}
          <CenterCircle />

          {/* RIGHT POINT GROUP */}
          <PointList data={rightPoints} />

        </div>
      </div>
    </section>
  );
}

/* ----------------------------- POINT LIST COMPONENT ----------------------------- */
function PointList({ data }) {
  return (
    <div className="space-y-10 sm:space-y-12">
      {data.map((points, ind) => {
        const Icon = iconMap[points.icon];
        return (
          <div key={ind} className="flex gap-4">
            <Icon className="w-7 h-7 text-secondary shrink-0" />
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-dark">
                {points.title}
              </h3>
              <p className="text-tertiary mt-2 text-sm sm:text-base">
                {points.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ----------------------------- CENTER CIRCLE COMPONENT ----------------------------- */
function CenterCircle() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-80 lg:w-[380px] lg:h-[380px]
      rounded-full border-6 border-[#d7dffe] flex items-center justify-center">

        <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[280px] lg:h-[280px]
        rounded-full border-18 border-[#b0c2ff] flex items-center justify-center">

          <div className="w-[130px] h-[130px] sm:w-40 sm:h-40 lg:w-[180px] lg:h-[180px]
          rounded-full border-[6px] border-[#7b97ff] bg-white shadow-lg flex items-center justify-center">
            <Syringe className="h-20 w-20 text-[#7b97ff] animate-pulse" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default memo(Whychoose);
