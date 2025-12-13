import { Helmet } from "react-helmet-async";
import CommonHeading from "../../components/CommonHeading";
import { services } from "../../Utils/servicedata";
import Card from "../../components/Card";

export default function Service() {
  return (
    <>
      {/* SEO for Services Section */}
      <Helmet>
        <title>
          Cosmetology & Aesthetic Treatments in Odisha | Dermalife Cuttack
        </title>
        <meta
          name="description"
          content="Explore advanced cosmetology and aesthetic treatments at Dermalife Cuttack including laser treatment, hydrafacial, fillers facelift, fat loss injections, PRP hair treatment, acne care, pigmentation correction and anti-aging solutions serving Cuttack and Odisha."
        />
      </Helmet>

      <section className="py-4 lg:py-12">
        <CommonHeading
          heading="Our Services"
          para="Advanced cosmetology, skin, hair, laser and aesthetic treatments designed to enhance your natural beauty using safe and modern technologies."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((item) => (
            <Card
              key={item.id}
              title={item.serviceName}
              desc={item.subHeading}
              img={item.imageName}
              id={item.id}
            />
          ))}
        </div>
      </section>
    </>
  );
}
