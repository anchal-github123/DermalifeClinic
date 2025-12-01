import Heroimg from "../../assets/images/Heroimg.webp";
import { motion, easeIn } from "framer-motion";
import { lazy, Suspense, useState } from "react";
import Button from "../../components/Button";

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
        className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-10 px-2 lg:py-12"
      >
        {/* LEFT CONTENT */}
        <div>
          <h4 className="text-primary text-xl font-medium mb-3">
            Trusted Skin, Hair & Aesthetic Clinic
          </h4>

          <h1 className="text-4xl md:text-5xl lg:text-[58px] font-semibold leading-tight text-black">
            Advanced Dermatology, Hair Care &  
            <br className="hidden lg:block" />
            Aesthetic Treatments
          </h1>

          <p className="text-tertiary mt-5 lg:mt-7 max-w-[95%]">
            Safe, result-driven skin, hair and laser solutions performed by 
            experienced clinicians using advanced medical technology. 
            Personalized care, visible transformation, and long-lasting confidence.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-3 lg:gap-5 mt-6 lg:mt-10">
            {/* Call Button */}
            <Button
              type="call"
              text="Call:9776636330"
              bgcolor="secondary"
              textcol="#ffffff"
              hover="primary"
              link="9776636330"
            />

            {/* Appointment Button */}
            <Button
              type="appointment"
              text="Appointment"
              bgcolor="primary"
              textcol="light"
              hover="scondary"
              onClick={() => setIsClick(true)}
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <motion.img
            src={Heroimg}
            alt="Dermalife clinic"
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
