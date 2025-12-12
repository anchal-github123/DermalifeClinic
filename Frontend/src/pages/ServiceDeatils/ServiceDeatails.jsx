import { useParams } from "react-router-dom";
import { services } from "../../Utils/servicedata";
import { Helmet } from "react-helmet-async";

export default function ServiceDetails() {
  const { id } = useParams();
  const selectedService = services.find((ele) => ele.id === Number(id));

  if (!selectedService) {
    return (
      <h2 className="p-10 text-center text-red-500">
        Service Not Found
      </h2>
    );
  }

  return (
    <>
      {/* ---------------- SEO HEAD ---------------- */}
      <Helmet>
        <title>{selectedService.serviceName} - Dermalife Cuttack</title>
        <meta
          name="description"
          content={`${selectedService.subHeading} | Dermalife Cuttack provides expert care and advanced treatments.`}
        />
        <meta name="keywords" content={`${selectedService.serviceName}, Dermalife, Skin Clinic, Hair Treatment, Laser Treatment, Aesthetic Clinic`} />
        <meta property="og:title" content={`${selectedService.serviceName} - Dermalife Cuttack`} />
        <meta property="og:description" content={selectedService.subHeading} />
        <meta property="og:image" content={selectedService.imageName} />
        <meta property="og:url" content={`https://www.dermalifecuttack.in/services/${id}`} />
      </Helmet>

      {/* ---------------- HERO IMAGE ---------------- */}
      <section className="w-full">
        <div className="relative w-full h-[350px] md:h-[450px]">
          <img
            src={selectedService.imageName}
            className="w-full h-full object-cover"
            alt={`${selectedService.serviceName} image`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0F1D80]/60 via-[#0F1D80]/30 to-transparent"></div>
          <div className="absolute left-6 bottom-20 md:left-10 md:bottom-40">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
              {selectedService.serviceName}
            </h1>
            <p className="text-white/90 mt-2 text-sm md:text-lg">
              {selectedService.subHeading}
            </p>
          </div>
        </div>

        {/* ---------------- CONTENT BOX ---------------- */}
        <div className="max-w-6xl mx-auto px-5 pb-16 -mt-16 relative z-10">
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Treatments We Provide
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(selectedService.details).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-gray-50 rounded-2xl p-4 border border-gray-200 hover:shadow-md hover:bg-white transition-all"
                >
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {category.replace(/([A-Z])/g, " $1")}
                  </h3>
                  <ul className="list-disc ml-6 text-tertiary space-y-1">
                    {items.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
