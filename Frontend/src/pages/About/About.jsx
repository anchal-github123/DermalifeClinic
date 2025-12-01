import monalishaimg from "../../assets/images/Monalishasahu.webp";
import Whychoose from "../../components/Whychoose";

export default function About() {
  return (
    <>
      {/* ABOUT SECTION */}
      <section className="w-full py-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">

          {/* LEFT — TEXT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-snug mb-5">
              Welcome to <span className="text-secondary">Dermalife</span>  
              <br />Your Journey to Aesthetic Excellence
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Dermalife specializes in world-class laser treatments and
              advanced aesthetic procedures designed to enhance your natural
              beauty with safety, precision, and care.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <b>Dr. Monika Sahu</b>, a dedicated and highly skilled aesthetic
              practitioner, began her journey in <b>2014</b>. She has completed
              Fellowship in <b>Medical Cosmetology</b> and <b>Medical Micropigmentation</b>,
              along with specialized training in <b>facial injections</b> and
              <b> semi-permanent makeup</b> from reputed national and international
              institutes.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With a patient-first mindset, Dr. Monika brings together
              advanced technology and personalized treatment planning to deliver
              <b> safe, effective, and result-oriented skincare & hair solutions</b>.
              Her mission is to help clients achieve their aesthetic goals with
              confidence and comfort.
            </p>
          </div>

          {/* RIGHT — DOCTOR IMAGE */}
          <div className="flex justify-center">
            <div className="w-[350px] h-[420px] md:w-[380px] md:h-[550px] rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src={monalishaimg}
                alt="Dr. Monika Sahu - Dermalife Clinic"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <Whychoose />
    </>
  );
}
