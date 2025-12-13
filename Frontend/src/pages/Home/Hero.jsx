import Heroimg from "../../assets/images/Heroimg.webp";
import { motion, easeIn } from "framer-motion";
import { lazy, Suspense, useState } from "react";
import Button from "../../components/Button";
import StalwartsGallery from "../../components/Stalwarts of Aesthetic Medicine Section";

const AppointmentModel = lazy(() =>
  import("../../components/AppointmentModel")
);

export default function Hero() {
  const [isClick, setIsClick] = useState(false);

  return (
    <section className="w-full relative overflow-hidden hero">
      {/* HERO CONTENT */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: easeIn }}
        className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-10 px-1 lg:py-12"
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-2">
          <h4 className="text-primary text-xl font-medium">
            Best Cosmetology, Skin, Hair & Laser Clinic in Cuttack, Odisha
          </h4>

          <h1 className="text-4xl md:text-5xl lg:text-[58px] font-semibold text-black">
            Advanced Cosmetology, Hair Care &
            <br className="hidden lg:block" />
            Aesthetic Treatments
          </h1>

          <p className="text-tertiary max-w-[96%] mt-2">
            Dermalife Cuttack is a trusted cosmetology and aesthetic clinic
            offering laser treatments, hydrafacial, fillers facelift, fat loss
            injections, acne care, pigmentation correction, PRP hair treatment,
            anti-aging solutions and advanced skin & hair treatments using safe
            and modern aesthetic technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex justify-between md:justify-start items-center gap-3 lg:gap-5 mt-6 lg:mt-10">
            {/* Call Button */}
            <Button
              type="call"
              text="Call: 9776636330"
              bgcolor="secondary"
              textcol="#ffffff"
              link="9776636330"
            />

            {/* Appointment Button */}
            <Button
              type="appointment"
              text="Book Appointment"
              bgcolor="primary"
              textcol="light"
              onClick={() => setIsClick(true)}
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <motion.img
            src={Heroimg}
            alt="Dermalife Cuttack Cosmetology and Aesthetic Clinic"
            className="rounded-xl object-cover w-full max-h-[400px] lg:max-h-[600px]"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* APPOINTMENT MODAL */}
      {isClick && (
        <Suspense>
          <AppointmentModel
            isClick={isClick}
            setIsClick={setIsClick}
          />
        </Suspense>
      )}
    
    </section>
  );
}
