import monalishaimg from "../../assets/images/Monalishasahu.webp";
import Whychoose from "../../components/Whychoose";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>
          About Dermalife – Best Cosmetology & Aesthetic Clinic in Cuttack, Odisha
        </title>
        <meta
          name="description"
          content="Dermalife is a leading cosmetology, skin, hair, laser & aesthetic clinic in Cuttack, Odisha. We offer laser treatment, hydrafacial, fillers facelift, semi permanent makeup, permanent eyebrows, fat-loss injections & anti-aging solutions."
        />
        <link rel="canonical" href="https://www.dermalifecuttack.in/about" />
      </Helmet>

      {/* ABOUT SECTION */}
      <section
        className="w-full"
        role="region"
        aria-label="About Dermalife Cosmetology Clinic in Cuttack Odisha"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-2">

          {/* LEFT — TEXT CONTENT */}
          <article>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-snug mb-5">
              Welcome to <span className="text-secondary">Dermalife</span>
              <br />
              Advanced Cosmetology & Aesthetic Clinic
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              <b>Dermalife</b> is one of the most trusted{" "}
              <b>cosmetology, skin, hair, laser & aesthetic clinics in Cuttack, Odisha</b>.
              We provide advanced, safe, and result-oriented cosmetic treatments
              for clients from <b>Cuttack, Bhubaneswar, Jagatsinghpur, Kendrapara,
              Jajpur, Angul, Dhenkanal</b> and nearby regions.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our clinic specializes in{" "}
              <b>
                laser treatments, Hydrafacial, fillers facelift, anti-aging
                procedures, semi permanent makeup, permanent eyebrows, acne &
                pigmentation treatments, PRP hair therapy, and fat-loss injections
              </b>{" "}
              using modern FDA-approved technologies and international protocols.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <b>Dr. Monika Sahu</b>, a highly experienced <b>Medical Cosmetologist
              & Aesthetic Practitioner</b>, has been practicing since <b>2014</b>.
              She holds fellowships in <b>Medical Cosmetology</b> and{" "}
              <b>Medical Micropigmentation</b> with advanced expertise in{" "}
              <b>facial injectables, fillers, non-surgical facelift, semi-permanent
              makeup, and laser aesthetics</b>.
            </p>

            <p className="text-gray-600 leading-relaxed">
              At Dermalife, every treatment is customized with a{" "}
              <b>patient-first, safety-driven approach</b>. Our mission is to
              deliver <b>natural-looking, long-lasting results</b> that enhance
              confidence, beauty, and overall well-being.
            </p>
          </article>

          {/* RIGHT — DOCTOR IMAGE */}
          <figure className="flex justify-center">
            <div className="w-[350px] h-[420px] md:w-[380px] md:h-[550px] rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src={monalishaimg}
                alt="Dr. Monika Sahu - Medical Cosmetologist & Aesthetic Expert in Cuttack Odisha"
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
