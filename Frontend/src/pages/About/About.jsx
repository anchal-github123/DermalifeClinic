import monalishaimg from "../../assets/images/Monalishasahu.webp";
import Whychoose from "../../components/Whychoose";

export default function About() {
  return (
    <>
      {/* ABOUT SECTION */}
      <section
        className="w-full"
        role="region"
        aria-label="About Dermalife Cuttack and Dr. Monika Sahu"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-2">

          {/* LEFT — TEXT CONTENT */}
          <article>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-snug mb-5">
              Welcome to <span className="text-secondary">Dermalife</span>  
              <br />
              Your Journey to Aesthetic Excellence in Cuttack
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Dermalife is one of the most trusted{" "}
              <b>skin, hair and aesthetic clinics in Cuttack</b>, providing
              world-class laser treatments and advanced cosmetic procedures.
              Our goal is to enhance your natural beauty with complete
              safety, precision, and expert care.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <b>Dr. Monika Sahu</b>, a highly experienced aesthetic practitioner,
              began her professional journey in <b>2014</b>. She has completed
              Fellowship in <b>Medical Cosmetology</b> and <b>Medical Micropigmentation</b>,
              with specialized training in <b>facial injections</b>, <b>anti-aging treatments</b>,
              and <b>semi-permanent makeup</b> from renowned national and international institutes.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With a patient-first approach, Dr. Monika combines modern technology
              with personalized treatment plans to deliver{" "}
              <b>safe, effective and results-driven skin & hair solutions</b>.
              Her mission is to help clients achieve healthy, glowing skin and
              confidence through expert aesthetic care.
            </p>
          </article>

          {/* RIGHT — DOCTOR IMAGE */}
          <figure className="flex justify-center">
            <div className="w-[350px] h-[420px] md:w-[380px] md:h-[550px] rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src={monalishaimg}
                alt="Dr. Monika Sahu - Aesthetic Practitioner at Dermalife Cuttack"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </figure>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <Whychoose />
    </>
  );
}
